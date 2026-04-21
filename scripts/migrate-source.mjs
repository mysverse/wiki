#!/usr/bin/env node
// Migrate a source game wiki into docs/{game}/.
//
// Usage:
//   node scripts/migrate-source.mjs <game> [--dry-run]
//   node scripts/migrate-source.mjs bandaraya --dry-run
//   node scripts/migrate-source.mjs sumaya
//
// For each source .md file in the slug map:
//   1. Read the file.
//   2. Strip the leading "# Heading" line (VitePress renders the H1 from frontmatter title).
//   3. Rewrite every [text](relative.md[#anchor]) to [text](/game/slug[#anchor]) using the map.
//      - Non-mapped .md links get a warning printed.
//      - Anchor-only links (#foo) stay as-is.
//   4. Derive a title (from the stripped H1) and description (first paragraph, or DESCRIPTIONS[slug]).
//   5. Prepend YAML frontmatter with title + description.
//   6. Write to docs/{game}/{slug}.md.
//
// Multiple source files that map to the same output (e.g., welcome.md + getting-started.md
// both map to /bandaraya/get-started) are concatenated in order — later files win the
// title, earlier files contribute their bodies prepended.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { BANDARAYA, LEBUHRAYA, SUMAYA, DESCRIPTIONS } from './slug-maps.mjs';

const MAPS = { bandaraya: BANDARAYA, lebuhraya: LEBUHRAYA, sumaya: SUMAYA };
const SOURCE_ROOTS = {
  bandaraya: 'C:/Users/yan3321/rblx/bandaraya/wiki',
  lebuhraya: 'C:/Users/yan3321/rblx/lebuhraya/wiki',
  sumaya:    'C:/Users/yan3321/rblx/sumaya/wiki',
};
const OUTPUT_ROOT = 'C:/Users/yan3321/rblx/wiki/docs';

const [, , game, ...flags] = process.argv;
const dryRun = flags.includes('--dry-run');
const onlyFlag = flags.find(f => f.startsWith('--only='));
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null;

if (!game || !MAPS[game]) {
  console.error(`Usage: node scripts/migrate-source.mjs <bandaraya|lebuhraya|sumaya> [--dry-run]`);
  process.exit(1);
}

const slugMap = MAPS[game];
const sourceRoot = SOURCE_ROOTS[game];

// Group source files by target route (to support many-to-one).
const grouped = {};
for (const [sourceRel, route] of Object.entries(slugMap)) {
  if (route === null) continue;
  (grouped[route] ??= []).push(sourceRel);
}

function rewriteLinks(body, sourceFileRel) {
  // Match [text](path[#anchor]) where path is a relative .md or an anchor-only link
  // or a path ending in .md. Do NOT touch http(s) links or image references.
  return body.replace(
    /(!?)\[([^\]]*)\]\(([^)#\s]+?)?(#[^)\s]*)?\)/g,
    (full, bang, text, path, anchor) => {
      if (bang === '!') return full; // images preserved
      if (!path && anchor) return full; // anchor-only link, preserve
      if (!path) return full;
      if (/^https?:\/\//i.test(path)) return full; // external
      if (/^mailto:/i.test(path)) return full;
      if (path.startsWith('/')) return full; // already absolute

      // Normalise relative path against the source file's directory.
      // Resolve .. and . segments so sub-dir sources link correctly.
      const fromDir = dirname(sourceFileRel);
      const combined = fromDir === '.' ? path : `${fromDir}/${path}`;
      const parts = combined.replace(/\\/g, '/').split('/');
      const stack = [];
      for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') stack.pop();
        else stack.push(part);
      }
      const cleanRel = stack.join('/');

      const mapped = slugMap[cleanRel];
      if (mapped === undefined) {
        console.warn(`  [warn] ${sourceFileRel}: unmapped link "${path}" (resolved "${cleanRel}")`);
        return full;
      }
      if (mapped === null) {
        console.warn(`  [warn] ${sourceFileRel}: link to discarded file "${path}"`);
        return `[${text}](/)${anchor || ''}`;
      }
      return `[${text}](${mapped}${anchor || ''})`;
    }
  );
}

function firstParagraph(body) {
  const match = body.split(/\n\s*\n/).map(s => s.trim()).find(s => s && !s.startsWith('#') && !s.startsWith('|') && !s.startsWith('::'));
  if (!match) return null;
  return match.replace(/\s+/g, ' ').replace(/\*\*/g, '').trim();
}

function extractTitle(body) {
  const m = body.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : null;
}

function stripLeadingH1(body) {
  return body.replace(/^#\s+.+?\n+/, '');
}

function yaml(frontmatter) {
  return `---\n${Object.entries(frontmatter).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}\n---\n\n`;
}

let wrote = 0, skipped = 0;

for (const [route, sources] of Object.entries(grouped)) {
  const slug = route.split('/').pop();
  if (onlySlugs && !onlySlugs.has(slug)) continue;
  const outPath = join(OUTPUT_ROOT, game, `${slug}.md`);

  const pieces = [];
  let title = null;
  for (const sourceRel of sources) {
    const sourcePath = join(sourceRoot, sourceRel);
    if (!existsSync(sourcePath)) {
      console.warn(`  [skip] source file not found: ${sourcePath}`);
      skipped++;
      continue;
    }
    const raw = readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n');
    const fileTitle = extractTitle(raw);
    if (fileTitle) title = fileTitle; // later file wins
    const stripped = stripLeadingH1(raw);
    const rewritten = rewriteLinks(stripped, sourceRel);
    pieces.push(rewritten.trim());
  }
  if (pieces.length === 0) continue;

  const body = pieces.join('\n\n---\n\n').trim() + '\n';
  const description = DESCRIPTIONS[route] || firstParagraph(body) || '';
  const effectiveTitle = title || slug;

  const frontmatter = yaml({ title: effectiveTitle, description });
  const output = frontmatter + `# ${effectiveTitle}\n\n` + body;

  if (dryRun) {
    console.log(`  [dry] ${outPath} (${output.length} chars, from ${sources.join(', ')})`);
  } else {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, output);
    console.log(`  [write] ${outPath}`);
  }
  wrote++;
}

console.log(`\n${dryRun ? 'Would write' : 'Wrote'} ${wrote} files (${skipped} source files skipped).`);
