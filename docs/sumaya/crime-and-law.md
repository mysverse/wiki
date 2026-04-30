---
title: "Crime and Law"
description: "Carjacking, pickpocketing, wanted stars, and jail in Sumaya."
---

# Crime and Law

Sumaya lets you play the criminal side if you want. This page covers the three main crimes available to players, how the offence and wanted-star system works, and what happens if you get caught.

**Heads up:** The game is wired to auto-demote emergency-service players (POLIS, BOMBA, Kesihatan) when they commit crimes, but the listener for that demotion event isn't currently connected in the live build. In practice, a cop or firefighter who carjacks someone stays on their team - the auto-demote doesn't actually fire you. Even so, on-duty officers who hold crime tools drop out of passive mode automatically, and the Polis team still can't use passive at all, so committing crimes while on duty is impractical and roleplay-inappropriate. Switch to Visitors or Malaysians first if you want to be a criminal.

## The offence system

Every crime you commit adds **offence points**. The more points, the more **wanted stars** you get, which affects how police respond to you and how long you'll sit in jail if arrested.

### Wanted star thresholds

| Offence points | Wanted stars |
|----------------|--------------|
| 0-9 | None |
| 10-24 | 1 star |
| 25-49 | 2 stars |
| 50-79 | 3 stars |
| 80-119 | 4 stars |
| 120+ | 5 stars |

### Wanted decay

If you manage to lay low (no new offences) for **5 minutes straight**, your wanted status fully resets. A short decay timer means committing one big crime and hiding can be enough to avoid a chase.

## Crimes you can commit

### Carjacking

Steal someone else's parked vehicle.

**What you need:**
- A **Slim Jim** tool (free from the **Abang Samseng (Carjack)** NPC - find him on the map and hold the proximity prompt). The Slim Jim is **consumed** on use, so you'll need to go back for another one per carjack.
- You can't be on a law-enforcement team.
- You can't be in passive mode, arrested, or detained.

**How it works:**
1. Approach a parked, unoccupied vehicle with the Slim Jim equipped.
2. Hold F (or the mobile equivalent) for **3 seconds** within 15 studs of the driver's seat.
3. The vehicle is now stolen - yours to drive.
4. A **drop-off zone** is assigned to you randomly (shown on the minimap).
5. Drive the stolen vehicle to the drop-off zone to sell it.

**Reward:** **500 to 1,200 Ringgit** (random, paid to your bank account).

**Limits:**
- Stolen vehicles auto-despawn after **5 minutes**. You'll get warnings at 60 seconds and 10 seconds remaining.
- You can only have **one stolen vehicle at a time**.
- After carjacking once, you're on a **5-minute personal cooldown** before you can carjack again.
- The Slim Jim is **consumed** on use - you'll need a new one for the next carjack.
- You can't steal your own vehicle (the system knows who owns it via the plate).

**Offence:** +25 points (will hit 2 stars if you had nothing else going).

### Pickpocketing

Steal Ringgit directly from another player's wallet.

**What you need:**
- A **Pickpocket Knife** tool (free from the **Abang Samseng (Pickpocket)** NPC - hold the proximity prompt to "Take Pickpocket Knife", ~1.5 seconds).

**How it works:**
1. Equip the **Pickpocket Knife** tool.
2. Get within **8 studs** of your target.
3. Hold the action for **2 seconds** without being spotted.
4. A random amount of Ringgit is transferred from their wallet to yours.

**Reward:** **80 to 300 Ringgit** (random amount, from the victim's wallet).

**Limits:**
- Once you pickpocket someone, there's a **30-second cooldown** before you can pickpocket again.
- The victim has a **60-second cooldown** where they can't be pickpocketed again.
- There's a **180-second recovery window** where the victim may be able to report / reclaim.

**Offence:** +20 points.

#### NPC pickpocketing

You can also pickpocket **civilian NPCs** that walk around the map:

- Up to 10 NPCs are out at a time.
- Each carries between 50 and 200 Ringgit.
- NPCs respawn 2 minutes after they're pickpocketed.

NPC pickpocketing also costs offence points, but NPCs can't chase or report you, so it's a lower-risk way to farm.

### Animal trafficking

Smuggle illegal wildlife across Sumaya for a cash payout.

**How it works:**
1. Find the **criminal NPC** standing at the "criminal part" (rotates around the map every 5 minutes - look for the highlighted spawn).
2. Accept the job through the prompt.
3. An illegal animal tool is given to you.
4. You're told the **destination** (a specific drop-off part).
5. Transport the animal to the destination to get paid.

**Animals available:**

| Animal | Payout (to bank) |
|--------|------------------|
| Illegal Turtle Egg | 400 Ringgit |
| Illegal Pangolin | 1,000 Ringgit |
| Illegal Hornbill | 2,000 Ringgit |

The animal you get is random.

**Limits:**
- 5-minute cooldown between jobs.
- You need to get the animal to the destination - can't drop it or get arrested mid-way.

**Offence:** +50 points - that's 1 star in a single action. Keep committing more and you'll ramp fast.

### Other offences

A few other actions add offence points even if they're not really "crime sprees":

| Offence | Points | Passive lock |
|---------|--------|--------------|
| Vehicle crash (hitting another player or parked car) | 5 | 30 seconds |
| Speeding inside a speed trap zone | 10 | 60 seconds |

"Passive lock" means your passive-mode toggle is disabled for a period after the offence - so you can't instantly go invulnerable.

## Exemptions

You **can't be cited** for speeding or crashes if:

- You're in an **emergency vehicle** (Polis, Bomba, Kesihatan) with the **siren active**. This is how on-duty responders avoid penalty on their way to a call.
- You're currently in **passive mode** when you crash. Passive drivers don't accumulate crash offence points. (You'll still take injury damage if the injury system is on, though — passive protects from PvP and offence tickets, not crash physics.)

Outside of that, everyone is fair game.

## Getting arrested

If a POLIS player successfully uses handcuffs on you while you're wanted, you're **arrested** and sent to jail.

### Jail duration

| Wanted stars at arrest | Jail time |
|------------------------|-----------|
| 1 | 30 seconds |
| 2 | 1 minute |
| 3 | 2 minutes |
| 4 | 3 minutes |
| 5 | 5 minutes |

### While in jail

- A jail HUD shows your remaining time.
- You can't switch teams.
- When the timer ends, you're released and your offences reset.

### Surrendering

Instead of running from the cops, you can walk up to a **surrender prompt** (usually near police stations or public locations) and turn yourself in. This cuts your jail time roughly in half:

| Stars | Jail time if surrendered | Passive lock after release |
|-------|---------------------------|----------------------------|
| 1 | 15 seconds | 1 minute |
| 2 | 30 seconds | 2 minutes |
| 3 | 1 minute | 4 minutes |
| 4 | 90 seconds | 6 minutes |
| 5 | 150 seconds | 10 minutes |

Passive lock means you can't toggle passive mode for that duration after release - so the cops still have a window to catch you if you restart.

### Leaving mid-offence

If you log out while wanted, you'll serve **more** jail time on your next session:

| Stars | LTAA jail time |
|-------|----------------|
| 1 | 45 seconds |
| 2 | 90 seconds |
| 3 | 150 seconds |
| 4 | 4 minutes |
| 5 | 6 minutes |

(LTAA = "Leave To Avoid Arrest".) Quitting doesn't save you.

### Combat timer (engagement window)

The moment a POLIS officer **tases** you or **detains** you, you enter a **30-second combat window**. While the timer is ticking:

- A red **"ENGAGED — CANNOT RESET"** banner appears at the top of your screen with the seconds counting down.
- The **Reset** button is locked. Tapping Reset shows a "Cannot Reset" toast and does nothing.
- The **main menu / team-switch** is locked, even if you're below the wanted-star threshold for the regular `Wanted` lock.
- Each new tase/detain **refreshes** the timer (does not stack).

**Dying or leaving during this window** routes you to a **combat-evasion jail** that's *double* the regular LTAA duration — strictly worse than serving out a clean arrest:

| Stars | Combat-evasion jail | (vs. regular LTAA) |
|-------|---------------------|--------------------|
| 1 | 60 seconds | 45 s |
| 2 | 2 minutes | 90 s |
| 3 | 4 minutes | 150 s |
| 4 | 6 minutes | 4 min |
| 5 | 10 minutes | 6 min |

If you were detained at the time of death/leave, an additional **+30 seconds** is tacked on. The engaging officer (if still online when you respawn / rejoin) gets the full star-scaled XP and SR as if they had cleanly arrested you.

**Translation:** if a cop has tased you, the cleanest play is to surrender or take the arrest. Resetting / Alt-F4 will cost you more time, not less.

### Reset cooldown (out of combat)

Even when you're *not* in combat, pressing the Reset button no longer instantly kills you. A 12-second cooldown modal appears with a Cancel button, then your character is reloaded cleanly (no death animation, no dropped tools, no respawn screen). Useful for recovering from a stuck character without losing held items. The cooldown is auto-cancelled if you get tased, arrested, or leave the game mid-countdown.

## Tips

- **Plan your routes.** Before you carjack, check where the drop-off zone is - if it's on the other side of town and you can't get there in 5 minutes, you've lost the car.
- **Don't commit crimes in passive mode.** You can't carjack, pickpocket, or traffic while in passive mode - the system blocks it.
- **Watch offence points vs stars.** At 25 points you're a 2-star target; police reward for arresting you just doubled. Time to lay low and let decay kick in.
- **Pickpocket NPCs for safe grinding.** Lower risk than player pickpocket, similar reward. Good for grinding offence-tracking achievements if any.
- **Animal trafficking is 50 points per run.** One run = 1 star minimum. Two runs without decay = 3 stars. Don't get greedy.
- **Surrender before 5 stars.** If you've already got the Hornbill cash banked, surrendering keeps your offence clear and minimizes downtime.

## What next?

- [Polis](/sumaya/polis) to see the other side.
- [Phone and UI](/sumaya/phone) for the Passive Mode toggle and the MDT app.
- [Vehicles](/sumaya/vehicles) for what you can steal (anyone's parked ride that isn't yours).
