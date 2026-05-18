#!/usr/bin/env node
// Replaces real-life Malaysian agency names with MYSverse Sim equivalents
// across every markdown file under docs/ (EN + all locale mirrors).
//
// Usage:  node scripts/rebrand-agencies.mjs [--dry-run]

import { readFileSync, writeFileSync } from "fs";
import { walkEnPages } from "./hash-en-pages.mjs";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const dryRun = process.argv.includes("--dry-run");

// Order matters: longer, more specific patterns first so they don't get
// shadowed by shorter replacements.
const REPLACEMENTS = [
  // Full agency names
  { from: /Polis Diraja Malaysia/g, to: "Polis MYSverse" },
  { from: /Royal Malaysia Police/g, to: "Polis MYSverse" },
  { from: /Malaysian Armed Forces/g, to: "MYSverse Armed Forces" },
  { from: /Kor Polis Tentera Diraja/g, to: "Kor Polis Tentera MYSverse" },
  { from: /St\. John Ambulans Malaysia/g, to: "St. John Ambulans MYSverse" },
  { from: /St\. John Ambulance Malaysia/g, to: "St. John Ambulance MYSverse" },
  { from: /Kementerian Kesihatan Malaysia/g, to: "Kementerian Kesihatan MYSverse" },
  { from: /Jabatan Bomba dan Penyelamat Malaysia/g, to: "Bomba MYSverse" },
  { from: /Jabatan Bomba dan Penyelamat(?! MYSverse)/g, to: "Bomba MYSverse" },
  { from: /Jabatan Imigresen Malaysia/g, to: "Jabatan Imigresen MYSverse" },
  { from: /Ikatan Relawan Rakyat Malaysia/g, to: "Ikatan Relawan Rakyat MYSverse" },
  { from: /Fire and Rescue Department of Malaysia/g, to: "Bomba MYSverse" },
  { from: /Fire and Rescue Department of MYSverse/g, to: "Bomba MYSverse" },

  // Community and legal references. Keep cultural/geographic Malaysia wording;
  // only rebrand official server/law/agency names.
  { from: /Malaysia community server/g, to: "MYSverse community server" },
  { from: /pelayan komuniti Malaysia/g, to: "pelayan komuniti MYSverse" },
  { from: /server komuniti Malaysia/g, to: "server komuniti MYSverse" },
  { from: /Malaysia 社群服务器/g, to: "MYSverse 社群服务器" },
  { from: /Malaysia 社群 server/g, to: "MYSverse 社群 server" },
  { from: /Malaysia சமூக சர்வர்/g, to: "MYSverse சமூக சர்வர்" },
  { from: /Laws of Malaysia, Penal Code \(Act 574\)/g, to: "MYSverse Penal Code" },
  { from: /real Malaysian criminal law/g, to: "in-world criminal-law guide" },
  { from: /undang-undang jenayah Malaysia sebenar/g, to: "rujukan undang-undang jenayah dalam dunia MYSverse" },
  { from: /真实马来西亚刑事法律参考/g, to: "MYSverse 世界内刑事法律参考" },
  { from: /உண்மையான மலேசிய குற்றவியல் சட்ட reference/g, to: "MYSverse உலகுக்குள் உள்ள குற்றவியல் சட்ட reference" },

  // Real payment/road agencies and internal identifiers.
  { from: /Malaysia's real-world MyPay \/ DuitNow/g, to: "real-world instant bank transfers" },
  { from: /dunia sebenar Malaysia/g, to: "dunia sebenar" },
  { from: /MyPay \/ DuitNow dunia sebenar/g, to: "pemindahan bank segera dunia sebenar" },
  { from: /马来西亚现实中的 MyPay \/ DuitNow/g, to: "MYSverse 世界内的即时转账" },
  { from: /மலேசியாவின் நிஜ உலக MyPay \/ DuitNow/g, to: "MYSverse உலகுக்குள் உள்ள உடனடி பரிமாற்றங்கள்" },
  { from: /PDRMHeliSpawner/g, to: "POLIS helicopter spawner" },
  { from: /\bDBKL\b/g, to: "Bandaraya" },
  { from: /Malaysia's Jabatan Pengangkutan Jalan/g, to: "MYSverse road transport authority" },
  { from: /Jabatan Pengangkutan Jalan Malaysia/g, to: "agensi pengangkutan jalan MYSverse" },

  // Agency descriptions and expansions.
  { from: /real Malaysian organisations/g, to: "Malaysian-style organisations" },
  { from: /real Malaysian organisation/g, to: "Malaysian-style organisation" },
  { from: /real Malaysian institutions/g, to: "Malaysian-style teams" },
  { from: /organisasi Malaysia sebenar/g, to: "organisasi bergaya Malaysia" },
  { from: /institusi Malaysia sebenar/g, to: "institusi bergaya Malaysia" },
  { from: /KKM \(Kementerian Kesihatan\)/g, to: "KKM (Kementerian Kesihatan MYSverse)" },
  { from: /Ministry of Justice/g, to: "Kementerian Keadilan MYSverse" },
  { from: /Angkatan Tentera Malaysia/g, to: "Angkatan Tentera MYSverse" },

  // Military/service plate expansions
  { from: /PAT \(Panglima Angkatan Tentera (?:\u2014|-) Chief of Armed Forces\)/g, to: "PAT (Panglima Angkatan Tentera MYSverse - Chief of Armed Forces)" },
  { from: /TDM \(Tentera Darat Malaysia (?:\u2014|-) Army\)/g, to: "TDM (Tentera Darat MYSverse - Army)" },
  { from: /TLDM \(Tentera Laut Diraja Malaysia (?:\u2014|-) Royal Navy\)/g, to: "TLDM (Tentera Laut MYSverse - Navy)" },
  { from: /TUDM \(Tentera Udara Diraja Malaysia (?:\u2014|-) Royal Air Force\)/g, to: "TUDM (Tentera Udara MYSverse - Air Force)" },
  { from: /KEMHAN \(Kementerian Pertahanan (?:\u2014|-) Ministry of Defence\)/g, to: "KEMHAN (Kementerian Pertahanan MYSverse - Defence Authority)" },

  // Clean up the redundant "PDRM (Polis MYSverse)" pattern → canonical "Polis MYSverse (POLIS)"
  { from: /\*\*PDRM \(Polis MYSverse\)\*\*/g, to: "**Polis MYSverse (POLIS)**" },
  { from: /PDRM \(Polis MYSverse\)/g, to: "Polis MYSverse (POLIS)" },
  { from: /PDRM \(Polis Diraja Malaysia\)/g, to: "Polis MYSverse" },

  // Standalone PDRM acronym → POLIS (word boundary preserves code identifiers like PDRMHeliSpawner)
  { from: /\bPDRM\b/g, to: "POLIS" },

  // JIM glossary entry and similar - JIM already an acronym for Jabatan Imigresen, keep but
  // ensure expansion uses MYSverse - already handled above.

  // "HM Supreme Lord of Malaysia" → "HM Supreme Lord of MYSverse" (the monarch role in-game)
  { from: /HM Supreme Lord of Malaysia/g, to: "HM Supreme Lord of MYSverse" },

  // Anchor link updates (H2 headings change, their slugs change, links pointing at
  // the old slugs need rewriting)
  { from: /#bomba-jabatan-bomba-dan-penyelamat/g, to: "#bomba" },
  { from: /#pdrm-polis-diraja-malaysia-the-police/g, to: "#polis-the-police" },
  { from: /#pdrm-polis-diraja-malaysia/g, to: "#polis" },
  { from: /#kkm-kementerian-kesihatan-malaysia/g, to: "#kkm-kementerian-kesihatan" },
  { from: /#sjam-st-john-ambulans-malaysia/g, to: "#sjam-st-john-ambulans" },
  { from: /#maf-malaysian-armed-forces-military/g, to: "#maf-mysverse-armed-forces-military" },
  { from: /#military-police-kptd-kor-polis-tentera-diraja/g, to: "#military-police-kptd" },
];

const LOCALE_PREFIXES = ["", "ms", "zh", "ta"];
const GAMES = ["bandaraya", "lebuhraya", "sumaya", "faq"];

function walkAll(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      if ([".vitepress", "public"].includes(entry)) continue;
      out.push(...walkAll(full));
    } else if (entry.endsWith(".md")) {
      out.push(full.replace(/\\/g, "/"));
    }
  }
  return out;
}

const files = walkAll("docs");
let modified = 0;
let totalReplacements = 0;

for (const path of files) {
  const before = readFileSync(path, "utf8");
  let after = before;
  let fileReplacements = 0;
  for (const { from, to } of REPLACEMENTS) {
    const matches = after.match(from);
    if (matches) {
      fileReplacements += matches.length;
      after = after.replace(from, to);
    }
  }
  if (after !== before) {
    modified++;
    totalReplacements += fileReplacements;
    if (dryRun) {
      console.log(`  [dry] ${path}  (${fileReplacements} replacements)`);
    } else {
      writeFileSync(path, after);
      console.log(`  [update] ${path}  (${fileReplacements} replacements)`);
    }
  }
}

console.log(
  `\n${dryRun ? "Would update" : "Updated"} ${modified} files, ${totalReplacements} total replacements.`
);
