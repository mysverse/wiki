# CLAUDE.md

Claude-facing instructions for the MYSverse Wiki repo.

Read and follow [`AGENTS.md`](./AGENTS.md) first. The same operational rules apply here: EN is the source of truth, locale pages mirror EN, translation freshness is hash-tracked, and all verification gates must pass before reporting completion.

## Hard Documentation Rules

- Follow [`STYLE.md`](./STYLE.md) for player-facing voice, British English, title-case headings, and real-world/MYSverse reference judgement.
- Do not brute-replace Malaysia/Malaysian. Keep those words when they refer to language, culture, holidays, geography inspiration, or player context. Rebrand real-life agencies and official organisations only when they refer to in-game equivalents.
- Keep English source pages player-facing. Remove implementation details, internal flags, backend/debug wording, source-code explanations, and moderation/tooling details that players do not need.
- Use `pnpm run lint:style` after editing English docs. It checks British spelling, title-case headings, and common non-player-facing terms.
- Do not overwrite translated locale bodies for style-only EN changes. Refresh hashes only when the translated meaning remains valid; translate locale bodies when the EN meaning substantively changes.

## Verification

Run the full gate before saying the work is done:

```bash
pnpm run verify
```

Equivalent expanded commands:

```bash
pnpm run lint:style
node scripts/lint-markdown.mjs
node scripts/check-links.mjs
pnpm run check-translations
pnpm docs:build
```
