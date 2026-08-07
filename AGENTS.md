# AGENTS.md

Agent-facing instructions for the MYSverse Wiki monorepo. Read this first if you are an autonomous coding agent (Claude Code, Codex, OpenHands, Cursor, Aider, custom harness) being asked to update or maintain this wiki.

This is a **VitePress** monorepo serving wikis for three MYSverse games - **Bandaraya**, **Lebuhraya**, **Sumaya** - in four locales (EN root + `ms`, `zh`, `ta`).

For human-facing translation policy, see [`TRANSLATIONS.md`](./TRANSLATIONS.md). This file is the *operational runbook* - what to run, in what order, how to verify.

---

## Repo layout

```text
docs/
  index.md                       EN root home (layout: home, hero block)
  bandaraya/*.md                 EN pages for Bandaraya
  lebuhraya/*.md                 EN pages for Lebuhraya
  sumaya/*.md                    EN pages for Sumaya
  faq/*.md                       cross-game FAQ
  ms/{bandaraya,lebuhraya,sumaya,faq}/*.md    Bahasa Melayu mirror
  zh/{bandaraya,lebuhraya,sumaya,faq}/*.md    Simplified Chinese mirror
  ta/{bandaraya,lebuhraya,sumaya,faq}/*.md    Tamil mirror
  public/images/{game}/*         static assets (referenced as /images/...)
  .vitepress/
    config.mts                   site config; consumes sidebar.ts
    sidebar.ts                   buildSidebar(localePrefix, Labels)
    theme/{index.ts,Layout.vue,NeedsReviewBanner.vue}
scripts/
  migrate-source.mjs             Pull source-wiki pages into docs/{game}/
  slug-maps.mjs                  source-path → canonical-slug maps
  rebrand-agencies.mjs           Real-life → MYSverse agency rebrand
  refresh-stale.mjs              Body+hash refresh for drifted slugs
  hash-en-pages.mjs              SHA1-8 content hash of EN pages
  check-translations.mjs         Stale/missing translations report (CI gate)
  seed-translations.mjs          Initial locale mirror creation
  meta-translations.mjs          Lookup table of translated frontmatter
  apply-meta-translations.mjs    Apply translated title/description/H1
  lint-style.mjs                 British English/sentence-case/player-facing style lint
  lint-markdown.mjs              Heading/table/container/whitespace lint
  check-links.mjs                Internal link integrity check
  generate-social-images.mjs     Build-time social preview card image generator
  check-social-images.mjs        Social preview cards & HTML metadata validator
TRANSLATIONS.md                  Translation policy (human-facing)
STYLE.md                         Hard player-facing and English style rules
AGENTS.md                        ← you are here
```

## Source wikis (drift origin)

The three source repos live alongside this one and change frequently. Re-sync from these whenever asked to "check for drift" or "update the wikis":

```text
C:/Users/yan3321/rblx/bandaraya/wiki/
C:/Users/yan3321/rblx/lebuhraya/wiki/
C:/Users/yan3321/rblx/sumaya/wiki/
```

Paths are absolute in `scripts/migrate-source.mjs`. Edit the `SOURCE_ROOTS` map there if running on another machine.

---

## Core invariants

1. **EN is the single source of truth.** Locale files mirror EN structure 1:1.
2. **Every page lives at a canonical slug** defined in `scripts/slug-maps.mjs`. Don't invent new slugs - add them to the map.
3. **Translation freshness is hash-tracked.** Each locale page's frontmatter `translated_from_hash` is the SHA1-8 of the EN body that was translated. Mismatch = stale.
4. **Sidebar is generated, not hand-edited.** Modify labels in `docs/.vitepress/sidebar.ts`.
5. **Real-life Malaysian agency names are rebranded** to MYSverse Sim equivalents (PDRM → POLIS, etc.). See `scripts/rebrand-agencies.mjs` for the full replacement table.
6. **All internal links are absolute, locale-aware:** `[label](/bandaraya/teams)` from EN, `[label](/ms/bandaraya/teams)` from MS. Never relative `file.md`.
7. **`needs_review: true`** on a locale page renders a yellow banner. Set `false` only after a native speaker has confirmed.
8. **English docs are player-facing British English with sentence-case headings and no em dashes.** Enforce with `pnpm run lint:style` and follow [`STYLE.md`](./STYLE.md).

---

## Documentation style rules

These are hard rules for English source pages. `scripts/lint-style.mjs` catches the common mechanical regressions, but agents must still use judgement.

- **Use British English:** colour, customisation, customise, catalogue, favourite, behaviour, armour, centre, grey, levelling, towards, offence, defence, analyse, organise, specialisation. Use **number plate**, not "license plate".
- **Use sentence case for EN Markdown headings.** Capitalise the first word and preserve proper nouns, official team/job names, place names, UI names, brands, acronyms, and fixed game terms.
- **Use judgement for names.** If the style script cannot infer a proper name, keep the correct casing and update `scripts/lint-style.mjs`'s allowlist if needed. Do not blindly lowercase names such as Polis Bantuan.
- **Do not use em dashes.** Use a comma, colon, semicolon, parentheses, or a simple hyphen instead.
- **Keep docs player-facing.** Explain what the player sees or does. Remove implementation details such as internal flags, backend/debug wording, Roblox tag names, source-code mechanics, Discord logging, datastore behaviour, and moderation tooling internals.
- **Use player-facing monetisation terms.** Prefer "Robux purchase", "Robux offer", or "gamepass"; avoid "developer product" and "dev product".
- **Do not brute-rebrand Malaysia/Malaysian.** Rebrand real-life agencies and official organisations to MYSverse equivalents, but keep Malaysia/Malaysian for language, culture, holidays, geography inspiration, and contexts where "MYSverse" would confuse players.
- **Do not invent blanket wording like "MYSverse-inspired".** If a place is inspired by Malaysia or Kuala Lumpur, say that naturally. If an in-game agency/team represents an official body, use the MYSverse term.

Run `pnpm run lint:style` after editing EN pages. If it fails, fix the wording rather than suppressing the check.

---

## Standard workflows

### A. "Update the wikis" / "check for drift" (most common request)

Run the full re-sync pipeline. Each step is idempotent.

```bash
# 1. Re-migrate from source. Edit slug-maps.mjs first if source files were added/renamed.
node scripts/migrate-source.mjs bandaraya
node scripts/migrate-source.mjs lebuhraya
node scripts/migrate-source.mjs sumaya

# 2. See what actually changed (vs whitespace/normalization).
git diff --numstat docs/

# 3. Apply agency rebrand to freshly migrated files.
node scripts/rebrand-agencies.mjs

# 4. Edit scripts/refresh-stale.mjs - set DRIFTED to the slugs whose EN
#    BODY substantively changed (not just hash drift from normalization).
#    Slugs not in DRIFTED get a hash-only bump (existing translation preserved).
# Then:
node scripts/refresh-stale.mjs

# 5. Translate the drifted pages. Two ways:
#    (a) Inline (preferred): translate in-conversation, one slug at a time,
#        editing all three locale files (ms/zh/ta) with the EN body replaced
#        by a translation. Frontmatter (title/description) is already
#        translated - leave it untouched. See "Translation rules" below.
#    (b) Parallel agents: dispatch one subagent per drifted slug; each
#        handles all 3 locales. Pattern is in this repo's git history.
# Do NOT build an SDK wrapper script for translation - user preference.

# 6. Fix any H1/frontmatter drift in the locale files.
node scripts/apply-meta-translations.mjs

# 7. Verify.
node scripts/lint-style.mjs         # British English/sentence-case/player-facing style
node scripts/lint-markdown.mjs       # heading/table/container/whitespace
node scripts/check-links.mjs         # internal link integrity
pnpm run check-translations          # freshness - must be Fresh N / Stale 0 / Missing 0
pnpm docs:build                      # full VitePress build - must finish without errors
```

### B. "Add a new page" (single page, EN-first)

1. Add the source file path to the relevant slug map in `scripts/slug-maps.mjs`. Add a description entry in the `DESCRIPTIONS` map if the auto-derived description isn't right.
2. Re-run `node scripts/migrate-source.mjs <game>` (or hand-write `docs/<game>/<slug>.md` with proper frontmatter).
3. Add the page to `docs/.vitepress/sidebar.ts` under the right game's items (and add labels for all 4 locales in `EN_LABELS`/`MS_LABELS`/`ZH_LABELS`/`TA_LABELS`).
4. Update `scripts/meta-translations.mjs` with translated `title`/`description` for ms/zh/ta. Optional but recommended.
5. Run `node scripts/seed-translations.mjs` - creates `docs/{ms,zh,ta}/<game>/<slug>.md` mirrors with EN body + `needs_review: true`.
6. Translate the 3 locale bodies inline.
7. Run `node scripts/apply-meta-translations.mjs` + verification steps from workflow A step 7.

### C. "Edit an existing EN page"

1. Edit `docs/<game>/<slug>.md` directly.
2. `pnpm run check-translations` - it will report 3 stale entries (ms/zh/ta).
3. Either:
   - Translate the locale bodies and update their `translated_from_hash` to the new EN hash, OR
   - Add the slug to `DRIFTED` in `scripts/refresh-stale.mjs` then run it, then translate, then run `apply-meta-translations.mjs`.

### D. "Rename or remove a page"

1. Update `scripts/slug-maps.mjs` (set value to `null` for removal, or to new slug for rename).
2. Update `docs/.vitepress/sidebar.ts`.
3. Re-grep for absolute links and update: `grep -rn "/old-slug" docs/`
4. Delete or move the EN + 3 locale files.
5. Run verification.

---

## Verification gates (must all pass before declaring done)

Format all Markdown before running the gates:

```bash
pnpm format
```

This applies markdownlint's safe fixes across the repository. When formatting
changes an English page body, the formatter also refreshes hash stamps for
translations that were fresh before the change. It leaves already-stale
translations stale.

Run the full gate as a single command:

```bash
pnpm run verify
```

Equivalent expanded sequence:

```bash
pnpm install                               # if dependencies changed
pnpm run lint:style                        # British English/sentence-case/player-facing style
node scripts/lint-markdown.mjs             # exit 0
node scripts/check-links.mjs               # exit 0
pnpm run check-translations                # Fresh N / Stale 0 / Missing 0
pnpm run generate:social                   # generate social preview cards & manifest
pnpm docs:build                            # "build complete in Ns."
pnpm run check:social                      # validate generated cards & HTML meta tags
```

If any of these fail, fix before reporting completion. Do not report "done" with a stale translation count or a failing build.

---

## Translation rules (summary - see `TRANSLATIONS.md` for full)

**Translate:** prose, headings, table cells, list items, frontmatter `title`/`description`, image `alt` text, custom-container titles.

**Preserve verbatim:**

- Link URLs (`[label](/path)` - translate the label, never the path)
- Image paths
- Code blocks and inline code
- VitePress directives (`::: tip`, `::: warning`, `::: danger`, `::: info`, `::: details`)
- Brand/agency names: MYSverse, Bandaraya, Lebuhraya, Sumaya, POLIS, BOMBA, Kesihatan, KKM, MAF, KPTD, MYSverse Police, MYSverse Armed Forces, Pos Nasional, MyTransit, MRT, LRT, KTM, IPD, JIM, JSPT, CID, MDT, KKN, ELS, LFRT, FRT, MPV, TBI, LTAA, SR, BR, CAG, TapNGo
- Roblox terms: Robux, gamepass, server, Premium, place ID, stud, badge
- Numbers, units, prices, percentages, dates, times
- Malay loanwords (keep as-is in all locales): mamak, kampung, Jom, Jelajah, Belum, Semua, Ditemui, Baca Maklumat, Sadaqa, Abang Samseng, Pasaram, Nelayan, Sdn. Bhd., Jalan, Lorong, Daerah, Ringgit, Bomba, Polis, Kesihatan

**Locale conventions:**

- `ms` - natural Malaysian Bahasa Melayu. Reuse: Pasukan (Teams), Kenderaan (Vehicles), Telefon (Phone), Ekonomi (Economy), Kerjaya (Jobs/Careers), Perumahan (Housing), Mula (Get started), Soalan Lazim (FAQ).
- `zh` - Malaysian-style Simplified Mandarin. Reuse: 城市 (Bandaraya context), 高速公路 (Lebuhraya context), 队伍 (Teams), 车辆 (Vehicles), 手机 (Phone), 经济 (Economy), 职业 (Jobs), 房屋 (Housing), 入门 (Get started), 任务 (Quests).
- `ta` - modern Malaysian Tamil. Reuse: நகரம் (Bandaraya context), நெடுஞ்சாலை (Lebuhraya context), அணிகள் (Teams), வாகனங்கள் (Vehicles), தொலைபேசி (Phone), பொருளாதாரம் (Economy), வேலைகள் (Jobs), வீட்டுவசதி (Housing), தொடங்கு (Get started), பணிகள் (Quests). Transliterate brand names where natural.

**Mechanics:**

- One source sentence → one target sentence. No editorial additions, no translator notes.
- The first H1 in the body MUST match the translated `title` in frontmatter.
- Markdown structure (table syntax, blank lines, list markers, fences) stays identical.
- Strict order of frontmatter keys: `title`, `description`, then `lang`, `translated_from_hash`, `translated_on`, `needs_review` for locale files.

---

## When dispatching subagents for translation

If running a harness that supports parallel agents, the efficient pattern is:

- **One agent per slug.** Each agent translates that slug's body across all 3 locale files (ms/zh/ta). The EN reference is loaded once per agent, amortizing the read.
- Pass agents an explicit prompt: EN path, three locale paths, translation rules, locale-specific term reuse lists. Sample template lives in this repo's git history (search for "Translate the body of three Sumaya wiki pages").
- Tell the agent to verify with a `Read` of the first 15 lines of each locale file after editing.
- Tell the agent NOT to touch the EN reference and NOT to touch the YAML frontmatter (already translated).

If running serially, just translate inline in-conversation.

---

## Things NOT to do

- **Don't build a translation wrapper script** around `@anthropic-ai/sdk` or any other LLM SDK. Translation work belongs inline (in-conversation), not in a shipped Node script. The user has explicitly rejected this approach.
- **Don't write into `MEMORY.md`** describing this project state - code is the source of truth; memory entries about "current state" go stale.
- **Don't commit until explicitly asked.** Generate the diff, report it, wait.
- **Don't bypass hooks** (`--no-verify`, `--no-gpg-sign`). If a hook fails, fix the underlying issue.
- **Don't add `## See also` sections that duplicate content already in source-wiki `## Tips` or `## What next?` sections.** Source wikis already have these.
- **Don't auto-fix every lint warning blindly.** The lint script flags Windows CRLF as trailing whitespace only if you didn't normalize first - check `lint-markdown.mjs`'s `\r\n?/g` strip is intact.
- **Don't touch `docs/index.md`'s `layout: home` block** when running the lint - those pages legitimately have no body H1.
- **Don't brute-replace all Malaysia/Malaysian references.** The rebrand requirement is about real-life agencies/organisations and official in-game equivalents, not culture, language, holidays, or geography inspiration.
- **Don't overwrite translated locale bodies for style-only EN changes.** When the EN edit is purely stylistic (British spelling, sentence-case, em-dash removal) and the translated meaning remains valid, refresh the hash only. Translate locale bodies only when the EN meaning substantively changes.

---

## Tech stack pinned facts

- **VitePress** 2.x alpha (`pnpm docs:dev`, `pnpm docs:build`, `pnpm docs:preview`)
- **Package manager:** pnpm (via corepack on Windows: `corepack enable pnpm && corepack prepare pnpm@latest --activate`)
- **Node:** any LTS that supports ES modules and `--input-type=module`
- **YAML parser used by scripts:** `gray-matter`
- **Hash algorithm:** sha1 → first 8 hex chars, body only (frontmatter stripped, CRLF normalized to LF, trailing whitespace trimmed). Source: `scripts/hash-en-pages.mjs`.
- **Theme override:** `docs/.vitepress/theme/Layout.vue` injects `NeedsReviewBanner.vue` via `#doc-before` slot. Banner shows when `frontmatter.needs_review === true`.

---

## When in doubt

1. Run `pnpm run lint:style`, `pnpm run check-translations`, and `node scripts/lint-markdown.mjs` first - current state is often the answer.
2. Re-read `STYLE.md` for player-facing/British English rules and `TRANSLATIONS.md` for translation specifics.
3. Look at the most recent commit affecting `docs/` for the canonical pattern.
4. If introducing new automation, write a new script under `scripts/` rather than inlining shell in this file.
