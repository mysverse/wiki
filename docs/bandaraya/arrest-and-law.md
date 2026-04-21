---
title: "Arrest & Law"
description: "How arrests work in Bandaraya — LTAA, RTAA, summons, jail time, and suspect rights."
---

# Arrest & Law

How arrests work in Bandaraya — from both the officer's and the suspect's perspective.

## TL;DR

- **Who can arrest**: PDRM (any rank), KPTD (any rank), Polis Bantuan (rank 2+). Yang di-Pertuan Persekutuan also has arrest tools.
- **Arrest flow**: detain → drag → cuff → arrest. Suspect goes to Arrested team, 3-minute release timer.
- **LTAA** (leave to avoid arrest): disconnect while detained → auto-arrested for 3 minutes on return.
- **RTAA** (reset to avoid arrest): reset button disabled at 75 HP or below.
- **Summons** (Saman): on-the-spot fines from officers.
- **Appeals**: via Malaysia community server moderators.

---

## Who can arrest

Not everyone can put you in cuffs. Arrest powers are limited to:

| Team | Group | Rank | Notes |
| --- | --- | --- | --- |
| **PDRM** | 1182710 | Any | Standard police |
| **KPTD (Military Police)** | 2817141 | Any | Any-rank — enforces across MAF and civilians |
| **Polis Bantuan** | 6563708 | 2+ | Technically any-scope, but typically roleplayed as transit-scoped |

**Yang di-Pertuan Persekutuan** (MYSverse rank 220+) carries an `Arrest` tool in their loadout for ceremonial roleplay, but the game's arrest code doesn't recognise them as having arrest powers — they can't actually process an arrest. For real arrests, involve PDRM or KPTD.

RELA, BOMBA, KKM, MAF rank-and-file, SJAM, civilians: **no arrest powers**. They can witness, call in, or search with consent, but not arrest.

---

## The arrest flow (officer perspective)

### 1. Detain

- Approach the suspect.
- Use the **Detain** action (via cuffEvents).
- The suspect is held in a detained state — their character plays a surrender animation, movement is restricted.

### 2. Drag (optional)

- You can drag a detained suspect to your vehicle or a holding area.
- Useful when arresting multiple people — keep them in a group.

### 3. Ground (optional, multiple offenders)

- Lay a detained player down on the ground.
- Stack several like this when dealing with multiple suspects at once.

### 4. Cuff

- Use the **Cuff** tool on the detained suspect.
- Handcuff animation plays.
- Suspect is now cuffed — can't draw tools, can't run.

### 5. Arrest

- Use the Arrest action (via cuffEvents or radial menu).
- Suspect's team changes to **Arrested**.
- A **3-minute release timer** starts.
- **Arrest record** is created with:
  - Officer ID
  - Time of arrest
  - Location (X, Y, Z)
  - A **reference number** like `KL-{UserId}-{Index}`
  - Arrest description
  - OCG flag (if suspect was on OCG team)

Discord webhook fires to log the arrest.

### Distance-based arrest

Officers can use `ArrestPlayerByDistance` — arrest someone within a range without cuffing them physically. Used for situations where the suspect is already downed or compliant at range.

---

## What it's like to be arrested (suspect perspective)

- Your team changes to **Arrested** (Bright violet).
- A **BlindedLayer** covers your screen (you're blindfolded).
- An **ArrestedGUI** shows:
  - The arresting officer's info
  - The 3-minute countdown to release
  - Your reference number
- Movement restricted; tools disabled.

After 3 minutes, the game releases you automatically and you can pick a team again.

---

## LTAA — Leave To Avoid Arrest

**Disconnecting while detained** is called LTAA, and it's enforced:

- The game detects that you left while detained or downed.
- Your arrest is **auto-applied** — 3-minute timer starts.
- The arrest record is saved to the game's database.
- When you rejoin — even minutes later, even in a different session — you come back in jail with the remaining time.

Don't rage-quit during an arrest. It'll follow you.

**Also applies if injured and leaving.** If someone took you down and you quit, the LTAA tracker catches it.

---

## RTAA — Reset To Avoid Arrest

**Resetting your character** to escape a detain / arrest was a known exploit. Now:

- The **reset button is automatically disabled** when your HP is at 75 or below.
- You physically can't reset until you regen or get healed.

This removes the RTAA escape hatch entirely.

---

## Summons (Saman)

Police can issue **summons** — on-the-spot fines for traffic or minor offences.

- The officer uses the **Saman** tool.
- You receive a summons notification.
- The fine amount and reason appear in your **SummonsView** GUI.
- You can browse received summons (with pagination for history).

Pay up. Unpaid summons stay on your record.

---

## Searches

Officers can request to search you with the **Search** tool:

- You get a **consent popup** (Searchee GUI) with Yes / No buttons.
- If you consent, the officer sees your backpack / pockets.
- If you decline, the officer can't see inside (unless they had probable cause — roleplay rules).

---

## Fingerprinting

**FingerPrint Scanner** tool — identifies you. Shows up in the officer's UI.

## Getting out of trouble

- **Wait out the 3 minutes.**
- **Appeal** via the Malaysia community server — moderators handle disputes and bans.
- **Stay in character** — pleading with an officer, offering bribes (in roleplay), or just accepting the arrest are all valid.

## What NOT to do

Per [Rules](/bandaraya/rules), the following will get you banned beyond the arrest:

- **LTAA** (leave to avoid arrest) — general violation
- **RTAA** (reset to avoid arrest) — general violation, though the reset button is now anti-RTAA
- **Glitching through walls / escaping restricted areas** — general violation
- **Glitching or abusing tools whilst detained or arrested** — general violation
- **Going rogue as a public service team** — severe violation

---

## Tips & gotchas

- **Cooperate.** You will be released in 3 minutes. Fighting an arrest roleplay-wise will make it worse.
- **Don't LTAA.** The timer persists across sessions. You're not escaping anything.
- **Officers, log your actions.** Arrest records are tracked; keep descriptions short and factual (they go into the record permanently).
- **OCG members get flagged** — arrest records carry an `IsOCG` flag. Officers see this in MDT.
- **Use MDT** — the police tablet app lets you BG-check a suspect, check BOLOs, and issue BOLOs of your own. See [Tablet](/bandaraya/tablet).
- **Appeals exist** — if you think you were wrongly arrested, pursue it in the community server. The game's moderation team handles it.

## See also

- [Emergency Services](/bandaraya/emergency-services) — PDRM tools and flow
- [Tablet](/bandaraya/tablet) — MDT app for officers
- [Rules](/bandaraya/rules) — full rule text, LTAA/RTAA consequences
- [Combat & Health](/bandaraya/combat-and-health) — reset-disabled at low HP
- [Teams](/bandaraya/teams) — which teams get arrest powers
- [Glossary](/bandaraya/glossary) — LTAA, RTAA, MDT, BOLO
