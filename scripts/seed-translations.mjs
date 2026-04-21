#!/usr/bin/env node
// For every EN page under docs/ (excluding locale + vitepress + public dirs),
// ensure a corresponding locale file exists under docs/{locale}/ with:
//   - frontmatter fields: title, description, lang, translated_from_hash,
//     translated_on, needs_review: true
//   - body: if the locale file already exists, its body is preserved; otherwise
//     the EN body is copied in (with needs_review banner from the theme).
//
// This is a seed tool: it establishes locale-file parity and hash tracking.
// Actual translation content is updated by humans (or a Claude session)
// overwriting the body prose.
//
// Usage:  node scripts/seed-translations.mjs [--dry-run]

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";
import matter from "gray-matter";
import { computeEnHashes, walkEnPages } from "./hash-en-pages.mjs";

const LOCALES = ["ms", "zh", "ta"];
const TODAY = new Date().toISOString().slice(0, 10);
const dryRun = process.argv.includes("--dry-run");

let created = 0;
let updated = 0;
let unchanged = 0;

const hashes = computeEnHashes();

for (const enPath of walkEnPages()) {
  const enRaw = readFileSync(enPath, "utf8");
  const enParsed = matter(enRaw);
  const enBody = enParsed.content;
  const enHash = hashes[enPath];

  for (const locale of LOCALES) {
    const localePath = enPath.replace(/^docs\//, `docs/${locale}/`);
    let localeBody = enBody;
    let existed = false;

    if (existsSync(localePath)) {
      existed = true;
      const existing = matter(readFileSync(localePath, "utf8"));
      // Preserve whatever body is already there (it may be a real translation).
      localeBody = existing.content;

      // If hashes already match, the file is fresh — skip.
      if (existing.data.translated_from_hash === enHash) {
        unchanged++;
        continue;
      }
    }

    const data = {
      ...(enParsed.data.layout && { layout: enParsed.data.layout }),
      title: enParsed.data.title || "",
      description: enParsed.data.description || "",
      lang: locale,
      translated_from_hash: enHash,
      translated_on: TODAY,
      needs_review: true,
      // Preserve hero/features/etc. for layout: home pages
      ...(enParsed.data.hero && { hero: enParsed.data.hero }),
      ...(enParsed.data.features && { features: enParsed.data.features }),
    };

    const output = matter.stringify(localeBody, data);

    if (dryRun) {
      console.log(`  [dry] ${existed ? "update" : "create"} ${localePath}`);
    } else {
      mkdirSync(dirname(localePath), { recursive: true });
      writeFileSync(localePath, output);
      console.log(`  [${existed ? "update" : "create"}] ${localePath}`);
    }

    if (existed) updated++;
    else created++;
  }
}

console.log(
  `\n${dryRun ? "Would create" : "Created"} ${created}, ${dryRun ? "would update" : "updated"} ${updated}, unchanged ${unchanged}.`
);
