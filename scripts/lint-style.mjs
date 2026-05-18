#!/usr/bin/env node
// Checks English source pages for wiki style rules that are easy to regress:
// British English spelling, title-case headings, and player-facing wording.

import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const DOCS_ROOT = "docs";
const SKIP_DIRS = new Set(["ms", "zh", "ta", ".vitepress", "public"]);

const smallWords = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "from",
  "in",
  "into",
  "nor",
  "of",
  "on",
  "or",
  "per",
  "the",
  "to",
  "vs",
  "via",
  "with",
]);

const preserveWords = new Set([
  "MYSverse",
  "Bandaraya",
  "Lebuhraya",
  "Sumaya",
  "Roblox",
  "Robux",
  "Premium",
  "POLIS",
  "BOMBA",
  "KKM",
  "MAF",
  "KPTD",
  "POS",
  "MRT",
  "LRT",
  "KTM",
  "IPD",
  "JIM",
  "JSPT",
  "CID",
  "MDT",
  "KKN",
  "ELS",
  "LFRT",
  "FRT",
  "MPV",
  "TBI",
  "LTAA",
  "RTAA",
  "TL;DR",
  "FAQ",
  "XP",
  "BR",
  "POI",
  "POIs",
  "NPC",
  "NPCs",
  "OCG",
  "UI",
  "HUD",
  "IC",
  "ATM",
  "ATMs",
  "PETRONAS",
  "PETROMAS",
  "MyPay",
  "MyCar",
  "MyTow",
  "MyPod",
  "MyEmergency",
  "TapNGo",
  "eWallet",
  "KeluargaMart",
  "TopBar",
  "Emergency999",
  "Kesihatan",
  "Sadaqa",
  "Jelajah",
  "Hazbank",
  "Ammulaysia",
  "Tehlife",
  "Matkool",
]);

const britishEnglishRules = [
  [/\bcolors?\b/i, "Use colour/colours."],
  [/\bcolored\b/i, "Use coloured."],
  [/\bcoloring\b/i, "Use colouring."],
  [/\bcustomiz(e|es|ed|ing|able|ation|ations)\b/i, "Use customise/customisation spellings."],
  [/\bcatalogs?\b/i, "Use catalogue/catalogues."],
  [/\bgrayed\b/i, "Use greyed."],
  [/\bgray\b/i, "Use grey."],
  [/\bfavorites?\b/i, "Use favourite/favourites."],
  [/\bbehavior\b/i, "Use behaviour."],
  [/\barmor(ed)?\b/i, "Use armour/armoured."],
  [/\bcenters?\b/i, "Use centre/centres."],
  [/\bcentered\b/i, "Use centred."],
  [/\borganize(s|d|r|rs|ing|ation|ations)?\b/i, "Use organise/organised/organisation."],
  [/\bspecialization(s)?\b/i, "Use specialisation/specialisations."],
  [/\bspecialized\b/i, "Use specialised."],
  [/\bleveling\b/i, "Use levelling."],
  [/\bleveled\b/i, "Use levelled."],
  [/\btraveling\b/i, "Use travelling."],
  [/\btraveled\b/i, "Use travelled."],
  [/\btoward\b/i, "Use towards."],
  [/\boffense(s)?\b/i, "Use offence/offences."],
  [/\bdefense\b/i, "Use defence."],
  [/\banalyz(e|es|ed|ing)\b/i, "Use analyse/analyse variants."],
  [/\bkilometers?\b/i, "Use kilometre/kilometres."],
  [/\bmeters?\b/i, "Use metre/metres unless it is a UI/object name."],
  [/\bliters?\b/i, "Use litre/litres."],
  [/\blicense plates?\b/i, "Use number plate/number plates."],
  [/\blicense\b/i, "Use licence for the noun, unless this is a verb in context."],
];

const playerFacingRules = [
  [/\bdeveloper products?\b/i, "Use player-facing wording such as Robux purchase/offers."],
  [/\bdev products?\b/i, "Use player-facing wording such as Robux purchase/offers."],
  [/\bdeveloper-only\b/i, "Avoid developer-only details in player docs."],
  [/\bDevTools\b/, "Avoid internal tool names in player docs."],
  [/\bserver-authoritatively\b/i, "Avoid implementation details."],
  [/\binternally\b/i, "Avoid implementation details."],
  [/\bbackend\b/i, "Avoid implementation details."],
  [/\bplaceholder(s)?\b/i, "Avoid implementation details."],
  [/\bsimulation\b/i, "Avoid implementation details."],
  [/\bscaffold\b/i, "Avoid implementation details."],
  [/\bdebug(ging)?\b/i, "Avoid implementation details."],
  [/\bcontent-placement\b/i, "Explain the player impact instead of content placement internals."],
  [/\blive build\b/i, "Use player-facing release/update wording."],
  [/\bColor\s*=\s*true\b/, "Avoid internal flags; describe the visible feature."],
  [/\bColor3\b/, "Avoid engine data types in player docs."],
  [/\btagged\b/i, "Avoid Roblox-tag implementation language unless it is truly player-facing."],
  [/\bMYSverse-inspired\b/i, "Do not brute-rebrand cultural/geographic references; use Malaysia/Malaysian where that is clearer."],
];

function walkEnPages(dir = DOCS_ROOT, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      walkEnPages(full, out);
    } else if (entry.endsWith(".md")) {
      out.push(full.replace(/\\/g, "/"));
    }
  }
  return out;
}

function stripInlineCode(line) {
  return line.replace(/`[^`\n]*`/g, "");
}

function capitaliseWord(word) {
  if (!word) return word;
  if (preserveWords.has(word) || /^[A-Z0-9&/+.-]{2,}$/.test(word)) return word;
  if (/^\d+$/.test(word)) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleWord(raw, wordIndex, wordCount) {
  const leading = raw.match(/^[\"'“‘([{]+/)?.[0] || "";
  const trailing = raw.match(/[\"'”’.,:;!?)}\]]+$/)?.[0] || "";
  const core = raw.slice(leading.length, raw.length - trailing.length);

  if (!core || core.includes("`")) return raw;
  if (/^[^A-Za-z0-9]+$/.test(core)) return raw;

  const lower = core.toLowerCase();
  if (wordIndex > 0 && wordIndex < wordCount - 1 && smallWords.has(lower)) {
    return leading + lower + trailing;
  }

  if (core.includes("-")) {
    const converted = core
      .split(/(-)/)
      .map((part) => {
        if (part === "-") return part;
        return capitaliseWord(part);
      })
      .join("");
    return leading + converted + trailing;
  }

  return leading + capitaliseWord(core) + trailing;
}

function titleCaseHeading(text) {
  const anchor = text.match(/\s+\{#[^}]+\}$/)?.[0] || "";
  const coreText = anchor ? text.slice(0, -anchor.length) : text;
  const parts = coreText.split(/(\s+)/);
  const wordIndexes = parts
    .map((part, index) => (/^\S+$/.test(part) && !/^\d+[.)]?$/.test(part) ? index : -1))
    .filter((index) => index >= 0);

  let wordIndex = 0;
  const converted = parts
    .map((part) => {
      if (!/^\S+$/.test(part) || /^\d+[.)]?$/.test(part)) return part;
      const next = titleWord(part, wordIndex, wordIndexes.length);
      wordIndex += 1;
      return next;
    })
    .join("");

  return converted + anchor;
}

const issues = [];

for (const file of walkEnPages()) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  let inFrontmatter = false;
  let inFence = false;

  lines.forEach((line, index) => {
    const lineNo = index + 1;
    if (index === 0 && line === "---") {
      inFrontmatter = true;
    } else if (inFrontmatter && line === "---") {
      inFrontmatter = false;
      return;
    }

    if (!inFrontmatter && /^```/.test(line)) {
      inFence = !inFence;
      return;
    }

    if (inFence) return;

    const visible = stripInlineCode(line);
    for (const [pattern, message] of [...britishEnglishRules, ...playerFacingRules]) {
      if (pattern.test(visible)) {
        issues.push(`${file}:${lineNo}: ${message}\n  ${line}`);
      }
    }

    if (inFrontmatter) return;

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (!heading) return;

    const expected = `${heading[1]} ${titleCaseHeading(heading[2])}`;
    if (expected !== line) {
      issues.push(`${file}:${lineNo}: Heading should use title case.\n  Found:    ${line}\n  Expected: ${expected}`);
    }
  });
}

if (issues.length > 0) {
  console.error(`\n${issues.length} style issue(s) found:\n`);
  console.error(issues.join("\n\n"));
  process.exit(1);
}

console.log(`0 style issues across ${walkEnPages().length} English files`);
