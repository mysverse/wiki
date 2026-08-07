#!/usr/bin/env node
// Apply markdownlint's safe fixes across the repository. If formatting changes an
// English page, carry its new body hash to translations that were fresh before
// formatting. Already-stale translations remain stale.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { computeEnHashes, walkEnPages } from "./hash-en-pages.mjs";

const LOCALES = ["ms", "zh", "ta"];
const oldHashes = computeEnHashes();
const freshBeforeFormatting = new Set();

for (const enPath of walkEnPages()) {
  const oldHash = oldHashes[enPath];
  for (const locale of LOCALES) {
    const localePath = enPath.replace(/^docs\//, `docs/${locale}/`);
    if (!existsSync(localePath)) continue;

    const raw = readFileSync(localePath, "utf8");
    const hashMatch =
      /^translated_from_hash:\s*['"]?([0-9a-f]{8})['"]?\s*$/im.exec(raw);
    if (hashMatch?.[1] === oldHash) freshBeforeFormatting.add(localePath);
  }
}

const markdownlintBin = fileURLToPath(
  new URL("../node_modules/markdownlint-cli2/markdownlint-cli2-bin.mjs", import.meta.url),
);
const lintResult = spawnSync(
  process.execPath,
  [markdownlintBin, "--fix", "**/*.md", "#node_modules/**"],
  { stdio: "inherit" },
);

if (lintResult.error) throw lintResult.error;

const newHashes = computeEnHashes();
let refreshedHashes = 0;

for (const enPath of walkEnPages()) {
  const oldHash = oldHashes[enPath];
  const newHash = newHashes[enPath];
  if (oldHash === newHash) continue;

  for (const locale of LOCALES) {
    const localePath = enPath.replace(/^docs\//, `docs/${locale}/`);
    if (!freshBeforeFormatting.has(localePath)) continue;

    const raw = readFileSync(localePath, "utf8");
    const updated = raw.replace(
      /^translated_from_hash:\s*[^\s]+\s*$/m,
      `translated_from_hash: "${newHash}"`,
    );
    writeFileSync(localePath, updated);
    refreshedHashes++;
  }
}

if (refreshedHashes > 0) {
  console.log(`Updated ${refreshedHashes} translation hash stamps after formatting.`);
}

process.exitCode = lintResult.status ?? 1;
