---
title: Polis (Police)
description: 'Playing POLIS in Sumaya — patrols, arrests, ranks, and equipment.'
lang: ta
translated_from_hash: 1640b8f5
translated_on: '2026-04-21'
needs_review: true
---

# Polis (Police)

**Polis** is Sumaya's police force. If you pick POLIS from the main menu, you're a law enforcement officer on duty from the moment you spawn. Your job is to arrest criminals, run speed traps, respond to 999 calls, and keep the peace.

## Getting started

Pick **POLIS** on the main menu. Your starting kit is 5 tools:

| Tool | What it does |
|------|--------------|
| **Taser X26P** | Non-lethal takedown weapon with limited cartridges. Fire at suspects to incapacitate them for arrest. |
| **Radar Gun** | Manual speed capture tool. See [Speed traps and radar](#speed-traps-and-radar). |
| **Whistle** | Crowd / traffic signaling. |
| **Handcuffs** | The actual arrest tool - use on a wanted suspect when you're close enough. |
| **Plate Finder** | Look up any vehicle's license plate to see the registered owner and whether it's flagged as stolen. |

A few outfit and kit pieces unlock as you level up the POLIS sector (Duty Belt + Beret at level 1, Reflective Vest at 10, Reflective Coat at 20). See [Progression](/sumaya/progression) for the full career-item table across all three emergency services.

Head to the police station for vehicles, or patrol the streets and watch for wanted suspects on your MDT (Mobile Data Terminal) app.

## The wanted system

Civilians accumulate **offence points** whenever they commit crimes. Total offence points determine their **wanted star level**:

| Points | Wanted stars |
|--------|--------------|
| 10-24 | 1 star |
| 25-49 | 2 stars |
| 50-79 | 3 stars |
| 80-119 | 4 stars |
| 120+ | 5 stars |

Higher-star suspects are harder to arrest but pay more when you do.

### What gives offence points?

| Crime | Points |
|-------|--------|
| Vehicle crash (hitting someone) | 5 |
| Speeding | 10 |
| Pickpocket | 20 |
| Carjacking | 25 |
| Animal trafficking | 50 |

See [Crime and Law](/sumaya/crime-and-law) for the full breakdown.

### Seeing wanted players

Open the **MDT** app on your phone. The **Wanted** tab shows all currently-wanted players with:

- Name and headshot
- Star level
- Offence count
- Time elapsed since their first offence

You can set a minimap waypoint on a suspect from here to navigate to them.

### Wanted decay

If a suspect avoids committing any more crimes for **5 minutes**, their wanted status fully clears. You have a window to catch them.

## Making arrests

The basic flow:

1. Locate the wanted suspect (MDT helps).
2. Approach them. If they're in passive mode or speeding, they may not realize you're there.
3. Use your **handcuffs** tool within interact range.
4. If successful, they're arrested - sent to jail for a star-based duration.

### Arrest rewards

Rewards scale by the suspect's star level at time of arrest:

| Stars | XP | Ringgit (wallet) |
|-------|-----|------------------|
| 1 | 50 | 150 |
| 2 | 100 | 300 |
| 3 | 175 | 500 |
| 4 | 275 | 800 |
| 5 | 400 | 1,200 |

### Nearby officer bonus

If another POLIS player is within **50 studs** when you make the arrest, they get **50% of your XP and Ringgit** automatically - no action needed. Partner patrols are great for double income.

### Milestone bonus

Every **5 arrests** you make, you get a **+200 Ringgit** bonus on top of the arrest reward.

## Jail

When you arrest someone, they're sent to jail. Jail duration depends on their wanted stars at arrest time:

| Stars | Jail time |
|-------|-----------|
| 1 | 30 seconds |
| 2 | 1 minute |
| 3 | 2 minutes |
| 4 | 3 minutes |
| 5 | 5 minutes |

While jailed:

- The player can't switch teams.
- A jail HUD shows time remaining.
- When the timer runs out, they're released.

### Surrender

Criminals can choose to **surrender** at a designated prompt before getting caught. Surrender halves the jail time, and gets them out cleaner:

| Stars | Surrender jail time | Passive lock after release |
|-------|---------------------|----------------------------|
| 1 | 15 sec | 60 sec |
| 2 | 30 sec | 2 min |
| 3 | 1 min | 4 min |
| 4 | 90 sec | 6 min |
| 5 | 150 sec | 10 min |

Passive lock means they can't re-enable passive mode immediately after release - you can still arrest them if they try to restart a crime spree.

### Leaving to avoid arrest (LTAA)

If a wanted player logs out mid-offence, they're hit with a **worse** jail time on return:

| Stars | LTAA jail time |
|-------|----------------|
| 1 | 45 sec |
| 2 | 90 sec |
| 3 | 150 sec |
| 4 | 4 min |
| 5 | 6 min |

So no, quitting doesn't save you.

## Speed traps and radar

Sumaya has **two separate speeding systems** — automatic zones and your manual radar gun.

### Speed trap zones (auto)

There are **2 speed trap zones** in the world, each with a posted limit of **50 studs/s**. If any vehicle (player or NPC) drives through a zone above the limit, the game auto-tickets the driver: +10 offence points, no officer action needed. You'll see a banner notification on your HUD when a ticket happens near you.

Zones recycle per driver on a 30-second cooldown, so someone speeding through repeatedly will accumulate tickets fast.

Emergency vehicles with their **siren active** are exempt — you won't cite yourself for responding.

### Radar gun (manual, for big speeders)

Your radar gun is the tool for catching **serious** speeders outside zones. Point at a moving vehicle and fire:

- Target must be going **200 studs/s or faster** for the tool to register a hit. Slower than that, the gun reports "Not speeding" and does nothing.
- Each captured license plate gets a **120-second cooldown** - you can't re-capture the same plate within two minutes.
- You must be **on duty** (active POLIS team) for the tool to work.

**Reward per capture:** 30 XP + 50 Ringgit + 10 offence points on the driver.

Because zones only fire below 50 studs/s and the radar requires 200+, there's a wide gap where only a moving officer can catch a speeder. That's the radar's niche.

## Vehicles

Polis vehicles unlock based on a mix of **player level** and **sector level**.

| Vehicle | Player level | Sector level | Price |
|---------|--------------|--------------|-------|
| Protan Wira MPV Polis | 1 | 1 | Free |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

The Wira is your starter patrol car. The Civic is the top-tier - fast, heavy, full-kit.

Polis vehicles have **ELS sirens**. With the siren active, you're exempt from traffic offences (speeding, crashes) while you respond.

See [Vehicles](/sumaya/vehicles) for details.

## Ranks

Polis has **16 ranks**, the most of any emergency service. Titles are based on real Royal Malaysia Police ranks (PDRM).

| Level | Rank |
|-------|------|
| 1 | Police Constable |
| 6 | Lance Corporal (L/Cpl) |
| 11 | Corporal (Cpl) |
| 16 | Sergeant (Sgt) |
| 21 | Sergeant Major (SM) |
| 26 | Sub-Inspector (SI) |
| 31 | Probationary Inspector (P/Insp) |
| 36 | Inspector (Insp) |
| 41 | Chief Inspector (C/Insp) |
| 46 | Assistant Superintendent of Police (ASP) |
| 51 | Deputy Superintendent of Police (DSP) |
| 56 | Superintendent of Police (SUPT) |
| 61 | Assistant Commissioner of Police (ACP) |
| 69 | Senior Assistant Commissioner of Police (SAC) |
| 77 | Deputy Commissioner of Police (DCP) |
| 89 | Commissioner of Police (CP) |

From level 89 onward you're at the top. No rank change as you push to the level 100 cap.

## Exempt while responding

If you have your Polis vehicle's **siren active**, you can't be cited for speeding or crashes while you drive. The system recognizes you're on a call. Turn the siren off when you park - otherwise other players might think you're still responding.

## Tips

- **Use the MDT.** Don't just patrol blindly. The MDT shows every wanted suspect and lets you waypoint them directly.
- **Partner up.** Two POLIS within 50 studs means the non-arresting officer gets 50% of the reward for free. Great for a friend-based grind.
- **Don't miss milestone bonuses.** Every 5 arrests = +200 Ringgit. Plan your shift to hit 5, 10, 15.
- **5-star arrests are huge.** A single 5-star collar = 400 XP + 1200 Ringgit. They're harder to make but worth camping for.
- **Sirens = no tickets.** Turn them on when you're driving to a call - otherwise your own speeding can get you a ticket, embarrassingly.
- **Don't become wanted yourself.** Committing a crime as POLIS auto-demotes you off the team. If you want to steal a car for fun, leave the team first.
- **Help Bomba for cheap XP.** POLIS who stand near an active fire (within 512 studs) get **10 XP per fire block** extinguished, without needing to do anything. Worth hanging around.

## What next?

- [Crime and Law](/sumaya/crime-and-law) for what you're up against.
- [Bomba](/sumaya/bomba) and [Kesihatan](/sumaya/kesihatan) for the other services.
- [Vehicles](/sumaya/vehicles) for the Polis vehicle catalog.
- [Progression](/sumaya/progression) for how XP and ranks work.
