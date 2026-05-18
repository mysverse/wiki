# STYLE.md

Hard style rules for the MYSverse Wiki. These apply to English source pages first; locale pages should preserve the translated meaning and structure after EN changes.

## Player-Facing Voice

- Write for players, not developers. Explain what the player can see, do, buy, unlock, or avoid.
- Remove internal implementation details unless the player genuinely needs them.
- Avoid terms like `backend`, `internally`, `debug`, `developer-only`, `placeholder`, `scaffold`, `Color3`, `Color = true`, and Roblox tag/system wording in player docs.
- Use "Robux purchase", "Robux offer", or "gamepass" instead of "developer product" or "dev product".
- Keep pages helpful and detailed, but cut details that only explain source code, flags, tags, datastore behaviour, Discord logging, or moderation tooling internals.

## English Style

- Use British English in EN source pages: colour, customisation, customise, catalogue, favourite, behaviour, armour, centre, grey, levelling, towards, offence, defence, analyse, organise, specialisation.
- Use "number plate" instead of "license plate".
- Use sentence case for English Markdown headings. Capitalise the first word and preserve proper nouns, official team/job names, place names, UI names, brands, acronyms, and fixed game terms.
- If a heading contains a name that the script cannot infer, keep the correct name casing and update the lint allowlist if needed. Do not blindly lowercase names to satisfy sentence case.
- Do not use em dashes. Use a comma, colon, semicolon, parentheses, or a simple hyphen instead.
- Preserve game terms, brand names, acronyms, and app names exactly: MYSverse, Bandaraya, Lebuhraya, Sumaya, POLIS, BOMBA, Kesihatan, KKM, MAF, KPTD, MyPay, MyCar, MyTow, MyPod, CAG eWallet, TapNGo, MDT, ELS, LFRT, FRT, TBI, LTAA, RTAA, XP, BR, SR.

## Rebrands and Real-World References

- Rebrand real-life Malaysian agencies and official organisations to their MYSverse equivalents using `scripts/rebrand-agencies.mjs`.
- Do not brute-replace every reference to Malaysia or Malaysian. Malaysia/Malaysian is still correct for language, culture, holidays, geography inspiration, and player context where "MYSverse" would be confusing.
- Do not invent wording like "MYSverse-inspired" as a blanket replacement for "Malaysian-inspired".
- If a reference is about an in-game agency, team, enforcement body, or official institution, use the MYSverse term. If it is about culture, public holidays, language, food, or real-world inspiration, keep the natural real-world wording.

## Required Checks

Run these before declaring a wiki update done:

```bash
pnpm run lint:style
node scripts/lint-markdown.mjs
node scripts/check-links.mjs
pnpm run check-translations
pnpm docs:build
```

`pnpm run verify` runs the same checks in one command.
