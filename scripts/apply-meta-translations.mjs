#!/usr/bin/env node
// Applies translated title + description frontmatter to every locale file
// using the lookup in meta-translations.mjs. Leaves body + other fields intact.
//
// Usage:  node scripts/apply-meta-translations.mjs [--dry-run]

import { readFileSync, writeFileSync, existsSync } from "fs";
import matter from "gray-matter";
import { META } from "./meta-translations.mjs";

const LOCALES = ["ms", "zh", "ta"];
const dryRun = process.argv.includes("--dry-run");

let updated = 0;
let skipped = 0;
let missing = 0;

for (const [relPath, localesMeta] of Object.entries(META)) {
  for (const locale of LOCALES) {
    const localePath = `docs/${locale}/${relPath}`;
    if (!existsSync(localePath)) {
      console.warn(`  [missing] ${localePath}`);
      missing++;
      continue;
    }
    const meta = localesMeta[locale];
    if (!meta) {
      console.warn(`  [no-trans] ${locale}: ${relPath}`);
      skipped++;
      continue;
    }

    const parsed = matter(readFileSync(localePath, "utf8"));

    // Rewrite first H1 heading in body to use translated title.
    const h1Match = parsed.content.match(/^\s*#\s+(.+)$/m);
    const currentH1 = h1Match ? h1Match[1].trim() : null;
    const expectedH1 = meta.title;

    const frontmatterOk =
      parsed.data.title === meta.title &&
      parsed.data.description === meta.description;
    const bodyOk = currentH1 === expectedH1;

    if (frontmatterOk && bodyOk) {
      skipped++;
      continue;
    }

    parsed.data.title = meta.title;
    parsed.data.description = meta.description;

    let newBody = parsed.content;
    if (h1Match) {
      newBody = newBody.replace(/^\s*#\s+.+$/m, `# ${meta.title}`);
    }

    const output = matter.stringify(newBody, parsed.data);

    if (dryRun) {
      console.log(`  [dry] ${localePath}`);
    } else {
      writeFileSync(localePath, output);
      console.log(`  [update] ${localePath}`);
    }
    updated++;
  }
}

console.log(`\n${dryRun ? "Would update" : "Updated"} ${updated}, skipped ${skipped}, missing ${missing}.`);
