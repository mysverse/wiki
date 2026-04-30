#!/usr/bin/env node
// Verify every internal link [text](/path) resolves to an existing markdown file
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";

function walkAll(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e === "public" || e === ".vitepress" || e === "node_modules") continue;
      out.push(...walkAll(p));
    } else if (e.endsWith(".md")) out.push(p.split(/[\/]/).join("/"));
  }
  return out;
}

const files = walkAll("docs");
let issues = 0;

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const linkRegex = /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRegex.exec(raw))) {
    const target = m[2];
    if (!target.startsWith("/")) continue;
    if (target.startsWith("//")) continue;
    const [path] = target.split("#");
    if (path === "/" || path === "") continue;
    if (path.startsWith("/images/") || path.startsWith("/logo")) continue;
    const candidates = [
      `docs${path}.md`,
      `docs${path}/index.md`,
    ];
    if (!candidates.some(existsSync)) {
      const lineNum = raw.slice(0, m.index).split("\n").length;
      console.log(`${file}:${lineNum}  dead link → ${target}`);
      issues++;
    }
  }
}

console.log(`\n${issues} dead links across ${files.length} files`);
process.exit(issues > 0 ? 1 : 0);
