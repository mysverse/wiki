#!/usr/bin/env node
// Compares EN page hashes against each translated page's translated_from_hash
// frontmatter field. Reports missing and stale translations; exits non-zero
// if any are found (suitable for CI).
//
// Usage:  pnpm run check-translations

import { readFileSync, existsSync } from "fs";
import matter from "gray-matter";
import { computeEnHashes } from "./hash-en-pages.mjs";

const LOCALES = ["ms", "zh", "ta"];
const missing = [];
const stale = [];
let fresh = 0;

const hashes = computeEnHashes();

for (const [enPath, enHash] of Object.entries(hashes)) {
  for (const locale of LOCALES) {
    const localePath = enPath.replace(/^docs\//, `docs/${locale}/`);
    if (!existsSync(localePath)) {
      missing.push({ locale, path: localePath, enPath, enHash });
      continue;
    }
    const { data } = matter(readFileSync(localePath, "utf8"));
    const stamped = data.translated_from_hash;
    if (!stamped || stamped !== enHash) {
      stale.push({ locale, path: localePath, enPath, enHash, stamped });
    } else {
      fresh++;
    }
  }
}

const enCount = Object.keys(hashes).length;
console.log(`EN pages:     ${enCount}`);
console.log(`Translations: ${enCount * LOCALES.length} expected`);
console.log("");
console.log(`Fresh:   ${fresh}`);
console.log(`Stale:   ${stale.length}`);
console.log(`Missing: ${missing.length}`);

if (missing.length > 0) {
  console.log("\nMissing translations:");
  for (const m of missing) {
    console.log(`  ${m.locale}: ${m.path}  (EN hash ${m.enHash})`);
  }
}
if (stale.length > 0) {
  console.log("\nStale translations:");
  for (const s of stale) {
    console.log(
      `  ${s.locale}: ${s.path}  (stamped ${s.stamped || "none"}, EN hash ${s.enHash})`
    );
  }
}

if (missing.length > 0 || stale.length > 0) {
  process.exit(1);
}
