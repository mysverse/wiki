#!/usr/bin/env node
// Walks docs/*.md (excluding ms/, zh/, ta/, .vitepress/, public/) and computes
// an 8-char sha1 hash of each page's body (frontmatter stripped, line endings
// normalised, trailing whitespace trimmed). Outputs a JSON map to stdout.
//
// Usage:  node scripts/hash-en-pages.mjs
// Output: { "docs/bandaraya/teams.md": "a1b2c3d4", ... }

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";
import matter from "gray-matter";

const DOCS_ROOT = "docs";
const SKIP_DIRS = new Set(["ms", "zh", "ta", ".vitepress", "public"]);

export function hashBody(text) {
  const { content } = matter(text);
  const normalised = content.replace(/\r\n/g, "\n").replace(/\s+$/g, "");
  return createHash("sha1").update(normalised).digest("hex").slice(0, 8);
}

export function walkEnPages(dir = DOCS_ROOT, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      walkEnPages(full, out);
    } else if (entry.endsWith(".md")) {
      out.push(full.replace(/\\/g, "/"));
    }
  }
  return out;
}

export function computeEnHashes() {
  const result = {};
  for (const path of walkEnPages()) {
    result[path] = hashBody(readFileSync(path, "utf8"));
  }
  return result;
}

import { fileURLToPath } from "url";
import { realpathSync } from "fs";

const isDirectRun =
  process.argv[1] &&
  realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));

if (isDirectRun) {
  console.log(JSON.stringify(computeEnHashes(), null, 2));
}
