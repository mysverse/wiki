#!/usr/bin/env node
// Refresh stale locale files. For each stale file, decide:
//   - If the slug is in DRIFTED_SLUGS: replace body with current EN (full re-translation needed)
//   - Otherwise: update the hash stamp only (existing translation body is still good,
//     probably just rebranded via rebrand-agencies.mjs)
//
// Usage:  node scripts/refresh-stale.mjs [--dry-run]

import { readFileSync, writeFileSync, existsSync } from "fs";
import matter from "gray-matter";
import { computeEnHashes, walkEnPages } from "./hash-en-pages.mjs";

const dryRun = process.argv.includes("--dry-run");

// Slugs whose EN body substantively changed (source-wiki drift). These need
// full body replacement + re-translation.
const DRIFTED = new Set([
  // Bandaraya - version bump + label change
  "bandaraya/faq",
  "bandaraya/get-started",

  // Lebuhraya - significant content rewrites across all pages
  "lebuhraya/controls",
  "lebuhraya/economy",
  "lebuhraya/faq",
  "lebuhraya/get-started",
  "lebuhraya/housing",
  "lebuhraya/jobs",
  "lebuhraya/map",
  "lebuhraya/passes-and-boosts",
  "lebuhraya/shops",
  "lebuhraya/social-features",
  "lebuhraya/teams",
  "lebuhraya/vehicles",

  // Sumaya - substantive content changes
  "sumaya/crime-and-law",   // wanted star thresholds completely changed
  "sumaya/get-started",     // shop tab and open beta notice changed
  "sumaya/phone",           // POI section simplified
  "sumaya/polis",           // speed trap zones and star thresholds changed
  "sumaya/vehicles",        // vehicle packs section rewritten
]);

const LOCALES = ["ms", "zh", "ta"];
const TODAY = new Date().toISOString().slice(0, 10);
const hashes = computeEnHashes();

let hashOnly = 0;
let bodyRefresh = 0;
let unchanged = 0;

for (const enPath of walkEnPages()) {
  const enBody = matter(readFileSync(enPath, "utf8")).content;
  const enHash = hashes[enPath];
  const slug = enPath
    .replace(/^docs\//, "")
    .replace(/\.md$/, "");

  const isDrifted = DRIFTED.has(slug);

  for (const locale of LOCALES) {
    const localePath = enPath.replace(/^docs\//, `docs/${locale}/`);
    if (!existsSync(localePath)) continue;

    const parsed = matter(readFileSync(localePath, "utf8"));
    if (parsed.data.translated_from_hash === enHash) {
      unchanged++;
      continue;
    }

    // Stale - pick strategy
    if (isDrifted) {
      parsed.content = "\n" + enBody;
    }
    parsed.data.translated_from_hash = enHash;
    parsed.data.translated_on = TODAY;
    parsed.data.needs_review = true;

    const out = matter.stringify(parsed.content, parsed.data);

    if (dryRun) {
      console.log(`  [dry] ${isDrifted ? "body+hash" : "hash-only"} ${localePath}`);
    } else {
      writeFileSync(localePath, out);
    }
    if (isDrifted) bodyRefresh++;
    else hashOnly++;
  }
}

console.log(
  `\n${dryRun ? "Would update" : "Updated"} - body+hash: ${bodyRefresh}, hash-only: ${hashOnly}, unchanged: ${unchanged}.`
);
