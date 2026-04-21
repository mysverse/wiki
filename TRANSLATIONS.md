# Translations

The MYSverse wiki is authored in English and translated to:

- **ms** — Bahasa Melayu
- **zh** — 华文 (Simplified Chinese)
- **ta** — தமிழ் (Tamil)

The English root (`docs/*.md`) is the single source of truth. Translated pages mirror the EN structure under `docs/ms/`, `docs/zh/`, and `docs/ta/`.

## How freshness works

Every translated page's frontmatter declares a `translated_from_hash`: the first 8 hex characters of the sha1 of the English source content at the time the translation was made. When the English source changes, the hash changes, and the translation goes "stale" until it's refreshed.

Example frontmatter on a translated page:

```yaml
---
title: "Pasukan di Bandaraya"
description: "Panduan lengkap semua pasukan di Bandaraya..."
lang: ms
translated_from_hash: "9333a74c"
translated_on: "2026-04-22"
needs_review: true
---
```

`needs_review: true` renders a yellow banner at the top of the page telling the reader the translation was machine-assisted and awaits human review. Once a native speaker has confirmed the translation is accurate, set `needs_review: false` and remove the banner.

## Checking translation status

Run this before every release:

```bash
pnpm run check-translations
```

Output reports three counts:

- **Fresh** — translated page's `translated_from_hash` matches the current EN hash.
- **Stale** — hash mismatch: the EN source changed after the translation was made.
- **Missing** — no translated file exists at all.

The command exits non-zero if there are any missing or stale translations, so it's suitable for CI.

## How this wiki seeded translations

The initial translation pass for this monorepo (2026-04-22) was done inline by Claude. The seed tool `scripts/seed-translations.mjs` creates a locale mirror of every EN page with the proper frontmatter stamp. Pages that already had a real translation keep it; pages without one receive the EN body and `needs_review: true`, so readers see the English content with a banner inviting fixes.

## Contributing a fix

1. Run `pnpm run check-translations` to see what's stale or missing.
2. Open the English source at `docs/<game>/<page>.md`.
3. Open the corresponding translated file at `docs/<locale>/<game>/<page>.md`.
4. Translate the body to match the English source. Any tool is fine — manual typing, a dictionary, an LLM of your choice.
5. Update the frontmatter:
   - Set `translated_from_hash` to the current EN hash (get it by running `node scripts/hash-en-pages.mjs`).
   - Set `translated_on` to today (ISO-8601, e.g. `2026-04-22`).
   - Set `needs_review: false` if you're a native speaker confident in the result; otherwise leave `true`.
6. Open a PR.

## Translation rules

These apply whether you're translating by hand or using an LLM:

- **Translate** page prose, headings, table contents, list items, frontmatter `title` and `description`, and image alt text.
- **Preserve verbatim** (do NOT translate):
  - URLs in links — `[label](/path)` translates only the label.
  - Image paths — `![alt](/image.png)` translates only the alt.
  - Code blocks and inline code.
  - VitePress custom containers — `::: tip`, `::: warning`, `::: danger`, `::: info`, `::: details` directives. The label after the directive can be translated.
  - Brand and agency names: MYSverse, Bandaraya, Lebuhraya, Sumaya, PDRM, BOMBA, KKM, SJAM, RELA, MAF, KPTD, OCG, HCC, MyTransit, Fetch, Flaxim, POLIS, Kesihatan, Pos Nasional, MRT, LRT, KTM, IPD, CAG, TapNGo, Vastrix, Ammulaysia, Fermuda, Tompang.
  - Roblox-specific terms: Robux, BR, SR, gamepass, server, Studio, Premium, place ID, stud.
  - Numbers, units, prices, percentages, dates, and times.
- **Language-specific notes**:
  - **ms**: natural Malaysian Bahasa. Don't over-translate cultural terms — mamak, kampung, jom, nasi lemak stay as-is.
  - **zh**: Malaysian Chinese phrasing. Reuse the established sidebar terms — 城市 (Bandaraya), 高速公路 (Lebuhraya), 入门 (Get started), 队伍 (Teams).
  - **ta**: modern Malaysian Tamil. Transliterate brand names; don't force-translate.
- One source sentence → one target sentence. No editorial additions, no translator notes.

## Related

- Source of the `translated_from_hash` algorithm: `scripts/hash-en-pages.mjs`.
- Checker script: `scripts/check-translations.mjs`.
- Banner component: `docs/.vitepress/theme/NeedsReviewBanner.vue` (rendered via `docs/.vitepress/theme/Layout.vue`).
