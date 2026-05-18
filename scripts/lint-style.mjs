#!/usr/bin/env node
// Checks English source pages for wiki style rules that are easy to regress:
// British English spelling, sentence-case headings, no em dashes, and player-facing wording.

import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const DOCS_ROOT = "docs";
const SKIP_DIRS = new Set(["ms", "zh", "ta", ".vitepress", "public"]);

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
  "I",
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
  "KEMRonda",
  "KeluargaMart",
  "Gravstone",
  "TopBar",
  "Emergency999",
  "Kesihatan",
  "Pantai",
  "Timur",
  "Sadaqa",
  "Jelajah",
  "Hazbank",
  "Ammulaysia",
  "Tehlife",
  "Matkool",
]);

const punctuationRules = [
  [/\u2014/, "Do not use em dashes. Use a comma, colon, semicolon, parentheses, or a simple hyphen instead."],
];

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

const canonicalTermRules = [
  [/\bmytransit\b/, "Use MyTransit."],
  [/\bPolis bantuan\b/, "Use Polis Bantuan."],
  [/\bMRT kajang line\b/, "Use MRT Kajang Line."],
  [/\bKL monorail line\b/, "Use KL Monorail Line."],
  [/\bclick and go\b/, "Use Click and Go when expanding CAG."],
  [/\bhealth ministry\b/, "Use Health Ministry when naming the KKM role."],
  [/\bmilitary police\b/, "Use Military Police when naming the KPTD role."],
  [/\bmobile data terminal\b/, "Use Mobile Data Terminal when expanding MDT."],
  [/\bclassic car pack\b/, "Use Classic Car Pack."],
  [/\breal estate office\b/, "Use Real Estate Office."],
  [/\bfire brigade\b/, "Use Fire Brigade when it is part of a page title or role gloss."],
  [/\bmain menu\b/, "Use Main Menu when referring to the named UI."],
  [/\bsentral platform\b/, "Use Sentral platform."],
];

const commonLowercaseWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "has",
  "have",
  "how",
  "if",
  "in",
  "into",
  "is",
  "it",
  "my",
  "of",
  "on",
  "or",
  "the",
  "to",
  "vs",
  "what",
  "when",
  "where",
  "which",
  "who",
  "why",
  "with",
  "you",
  "your",
]);

function walkMarkdown(dir = DOCS_ROOT, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === ".vitepress" || entry === "public") continue;
      walkMarkdown(full, out);
    } else if (entry.endsWith(".md")) {
      out.push(full.replace(/\\/g, "/"));
    }
  }
  return out;
}

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

function sentenceWord(raw, shouldCapitalise) {
  const leading = raw.match(/^[\"'“‘([{]+/)?.[0] || "";
  const trailing = raw.match(/[\"'”’.,:;!?)}\]]+$/)?.[0] || "";
  const core = raw.slice(leading.length, raw.length - trailing.length);

  if (!core || core.includes("`")) return raw;
  if (/^[^A-Za-z0-9]+$/.test(core)) return raw;
  if (/^I['’](m|ve|ll|d)$/i.test(core)) return leading + capitaliseWord(core.toLowerCase()) + trailing;
  if (preserveWords.has(core) || /^[A-Z0-9&/+.-]{2,}$/.test(core)) return raw;

  if (core.includes("-")) {
    const converted = core
      .split(/(-)/)
      .map((part, index) => {
        if (part === "-") return part;
        if (preserveWords.has(part) || /^[A-Z0-9&/+.]{2,}$/.test(part)) return part;
        if (/^\d+$/.test(part)) return part;
        const lower = part.toLowerCase();
        return shouldCapitalise && index === 0 ? capitaliseWord(lower) : lower;
      })
      .join("");
    return leading + converted + trailing;
  }

  const lower = core.toLowerCase();
  return leading + (shouldCapitalise ? capitaliseWord(lower) : lower) + trailing;
}

function sentenceCaseHeading(text) {
  const anchor = text.match(/\s+\{#[^}]+\}$/)?.[0] || "";
  const coreText = anchor ? text.slice(0, -anchor.length) : text;
  const parts = coreText.split(/(\s+)/);
  let hasCapitalisedWord = false;
  const converted = parts
    .map((part) => {
      if (!/^\S+$/.test(part) || /^\d+[.)]?$/.test(part)) return part;
      const shouldCapitalise = !hasCapitalisedWord;
      const next = sentenceWord(part, shouldCapitalise);
      if (/[A-Za-z0-9]/.test(part)) hasCapitalisedWord = true;
      return next;
    })
    .join("");

  return converted + anchor;
}

function headingCaseIssues(text) {
  const found = [];
  const coreText = text.replace(/\s+\{#[^}]+\}$/, "");
  const parts = coreText.split(/(\s+)/);
  let expectsCapital = true;
  let inQuotedText = false;

  for (const part of parts) {
    if (!/^\S+$/.test(part) || /^[^A-Za-z0-9]+$/.test(part)) continue;
    if (/^\d+$/.test(part)) {
      expectsCapital = false;
      continue;
    }
    if (/^\d+[.)]$/.test(part)) continue;
    if (/^[\"“]/.test(part)) inQuotedText = true;

    const leading = part.match(/^[\"'“‘([{]+/)?.[0] || "";
    const trailing = part.match(/[\"'”’.,:;!?)}\]]+$/)?.[0] || "";
    const core = part.slice(leading.length, part.length - trailing.length);
    if (inQuotedText) {
      if (/[\"”][.,:;!?)}\]]*$/.test(part)) inQuotedText = false;
      expectsCapital = /[.!?]$/.test(trailing);
      continue;
    }
    if (!core || core.includes("`") || preserveWords.has(core) || /^[A-Z0-9&/+.-]{2,}$/.test(core)) {
      expectsCapital = /[.!?]$/.test(trailing);
      continue;
    }

    if (expectsCapital && /^[a-z]/.test(core)) {
      found.push(`sentence starts should be capitalised: "${core}"`);
    }
    if (!expectsCapital && commonLowercaseWords.has(core.toLowerCase()) && /^[A-Z]/.test(core)) {
      found.push(`common sentence-case word should be lowercase unless it starts a new sentence: "${core}"`);
    }

    expectsCapital = /[.!?]$/.test(trailing);
  }

  return found;
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

    for (const [pattern, message] of canonicalTermRules) {
      if (pattern.test(heading[2])) {
        issues.push(`${file}:${lineNo}: ${message}\n  ${line}`);
      }
    }
    for (const message of headingCaseIssues(heading[2])) {
      issues.push(`${file}:${lineNo}: Heading should use sentence case while preserving proper names.\n  ${message}\n  ${line}`);
    }
  });
}

for (const file of walkMarkdown()) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    const visible = stripInlineCode(line);
    for (const [pattern, message] of punctuationRules) {
      if (pattern.test(visible)) {
        issues.push(`${file}:${index + 1}: ${message}\n  ${line}`);
      }
    }
  });
}

if (issues.length > 0) {
  console.error(`\n${issues.length} style issue(s) found:\n`);
  console.error(issues.join("\n\n"));
  process.exit(1);
}

console.log(`0 style issues across ${walkEnPages().length} English files and ${walkMarkdown().length} markdown files`);
