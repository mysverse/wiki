#!/usr/bin/env node
// Markdown lint check for VitePress conventions
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

function walkAll(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e === "public" || e === ".vitepress" || e === "node_modules") continue;
      out.push(...walkAll(p));
    } else if (e.endsWith(".md")) {
      out.push(p.split(/[\\/]/).join("/"));
    }
  }
  return out;
}

const files = walkAll("docs");
let issues = 0;

function report(file, line, msg) {
  console.log(`${file}:${line}  ${msg}`);
  issues++;
}

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const parsed = matter(raw);
  const body = parsed.content.replace(/\r\n?/g, "\n");
  const lines = body.split("\n");

  // 1. Heading sequence — H1 should appear once, no jumps >1 level
  const headings = [];
  let inFence = false;
  lines.forEach((line, i) => {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) return;
    const m = /^(#{1,6})\s+(.+)$/.exec(line);
    if (m) headings.push({ level: m[1].length, text: m[2], lineNum: i + 1 });
  });
  // Skip H1 check for VitePress home/special layouts
  const isHome = parsed.data.layout === "home";
  if (!isHome) {
    if (headings.length === 0) {
      report(file, 1, "no headings in body");
    } else {
      const h1s = headings.filter((h) => h.level === 1);
      if (h1s.length === 0) report(file, 1, "missing H1");
      if (h1s.length > 1) report(file, h1s[1].lineNum, `multiple H1s (count=${h1s.length})`);
      let prev = 0;
      for (const h of headings) {
        if (prev > 0 && h.level > prev + 1) report(file, h.lineNum, `heading jump from h${prev} to h${h.level}: "${h.text}"`);
        prev = h.level;
      }
    }
  }

  // 2. Table column consistency
  inFence = false;
  let tableStart = -1;
  let tableCols = -1;
  lines.forEach((line, i) => {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) {
      tableStart = -1;
      return;
    }
    if (/^\s*\|.*\|\s*$/.test(line)) {
      const cols = (line.match(/\|/g) || []).length - 1;
      if (tableStart === -1) {
        tableStart = i + 1;
        tableCols = cols;
      } else if (cols !== tableCols) {
        report(file, i + 1, `table col mismatch (expected ${tableCols}, got ${cols})`);
      }
    } else if (line.trim() === "" || !line.includes("|")) {
      tableStart = -1;
    }
  });

  // 3. Unclosed code fences
  let fenceCount = 0;
  for (const line of lines) if (/^```/.test(line)) fenceCount++;
  if (fenceCount % 2 !== 0) report(file, 1, `odd code fence count: ${fenceCount}`);

  // 4. VitePress containers properly closed
  const opens = lines.filter((l) => /^:::\s*(tip|warning|danger|info|details)/.test(l)).length;
  const closes = lines.filter((l) => /^:::\s*$/.test(l)).length;
  if (opens !== closes) report(file, 1, `container mismatch: ${opens} opens vs ${closes} closes`);

  // 5. Trailing whitespace on non-empty lines (allow markdown-significant double-space)
  lines.forEach((line, i) => {
    if (line.length > 0 && line !== line.trimEnd() && !line.endsWith("  ")) {
      report(file, i + 1, "trailing whitespace");
    }
  });

  // 6. Frontmatter required fields
  if (!parsed.data.title) report(file, 1, "frontmatter missing title");
  if (file.includes("/ms/") || file.includes("/zh/") || file.includes("/ta/")) {
    if (!parsed.data.lang) report(file, 1, "locale file missing lang");
    if (!parsed.data.translated_from_hash) report(file, 1, "locale file missing translated_from_hash");
  }
}

console.log(`\n${issues} issues across ${files.length} files`);
process.exit(issues > 0 ? 1 : 0);
