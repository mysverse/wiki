---
title: Phone
description: >-
  The in-game phone in Bandaraya — MyPay, e-hailing, 999, MyCar, MyTow,
  messages, and more apps.
lang: ta
translated_from_hash: 089fa7dc
translated_on: '2026-04-21'
needs_review: true
---

# Phone

Every player in Bandaraya carries an **in-game Phone** — a topbar icon that opens a multi-app device. Different from the **Tablet** (which is a team-only tool); the Phone is universal.

## TL;DR

- Tap the phone icon on your topbar.
- Tap an app to open it.
- Many apps; the most useful ones in Bandaraya are **MyPay**, **e-hailing**, **CAG eWallet**, **999**, **MyCar**, and **MyTow**.

---

## How to open it

The phone lives on your topbar. Tap the icon. On mobile, the topbar icons are at the top of the screen; on desktop, same place. The phone overlay slides in.

## Apps — universal (all MYSverse games)

| App | What it does |
| --- | --- |
| **MYSair** | Airline bookings / travel between experiences. |
| **Elections** | MYSverse elections — vote, view campaigns. |
| **Blog** | Read community blog posts. |
| **NWS** | National Wire Services — official in-game news feed. |
| **Parlimen** | View Parlimen (parliament) proceedings. |
| **Message** | Peer-to-peer chat ("wasap"). |
| **Camera** | Take in-game photos. |
| **Settings** | Phone settings — background image, etc. |
| **Rafahia** | Clothing brand app — browse catalog. |

## Apps — Bandaraya-only

These apps are added when you're in Bandaraya. They don't appear in Lebuhraya or other experiences.

### MyPay — send BR to another player

Peer-to-peer BR transfer. Like Malaysia's real-world MyPay / DuitNow.

1. Open **MyPay**.
2. **Search** for a player by name.
3. Pick them from the list.
4. Enter an amount (fractional BR supported — rounded to 2 decimals), or tap a **quick-amount** preset.
5. Tap **Send**.

The recipient gets a notification on their own phone with **Accept / Deny** buttons. If they accept, the BR moves. If denied or ignored, nothing happens.

**Balance** is shown on the send screen so you know what you have to spend. Transfers require:
- Both players to be **in the same server** (you can't send across servers)
- Neither player to be on the **fraud blocklist** (rare — only if an admin has flagged an account)
- You to actually have the BR — the debit is checked before credit

If MyPay is temporarily disabled (admin toggles `MyPayEnabled`), you'll see a "disabled" screen instead — the app is grey and no transfers go through.

Each completed transfer is logged to the game's Discord (for moderation visibility).

### e-hailing — book a taxi

Book a ride without walking up to a physical taxi company desk.

1. Open **e-hailing**.
2. Enter your **destination** and (optional) **description**.
3. Pick a driver from the available list.
4. Wait for them to accept, then get picked up.

Fare is based on distance × company rate (see [Jobs — Taxi Driver](/bandaraya/jobs#how-the-fare-is-calculated)).

### CAG eWallet

Browse-only view of your Click And Go transit card. Balance, trips, monthly pass, designs, lifetime stats. **Purchase buttons deep-link to the nearest physical kiosk** — you can't buy from the phone directly. See [Getting Around](/bandaraya/getting-around#the-cag-ewallet-phone-app).

### 999 — emergency reporting

Report a crime, fire, medical emergency, or accident.

1. Open **999**.
2. Fill in the **nature** (what's happening) and **description** (details).
3. Submit.

The alert pings the relevant emergency team (PDRM for crime, BOMBA for fire, KKM for medical). Don't abuse this — false calls waste responder time.

Also available in Lebuhraya.

### MyCar — control your spawned vehicle

Remote-control your vehicle without sitting in it — lights, horn, emergency signals, door locks.

### MyTow

Same MyTow as the Tablet app, but on your phone. Report the need for a tow, or track your tow job. Useful if you're a civilian who got clamped and want to contact a tow operator.

## How apps appear / disappear

Apps with a "place" restriction only show in that place. For example, **e-hailing** only appears in Bandaraya; **Rules** only appears in Lebuhraya. When you travel to a different MYSverse experience (via MYSair), your app grid changes.

## Tips & gotchas

- **Mobile text input** was fixed in v3.15.3 — if you find any phone text field unresponsive on mobile, report it as a regression.
- **Phone ≠ Tablet.** The Tablet is a tool you equip from your backpack (team-gated). The Phone is a universal topbar app surface.
- **MyPay requires the recipient to accept** — don't try to force-pay someone. They must be online.
- **999 goes to real players** (officers on duty), not NPCs. Be patient.
- **CAG eWallet on the phone is read-only** — to buy / top up / change pass you must visit a kiosk. The phone just shows you your info.

## See also

- [Tablet](/bandaraya/tablet) — team-gated tool with different apps (MDT, MyEmergency, etc.)
- [Getting Around](/bandaraya/getting-around) — CAG eWallet (on the phone)
- [Jobs](/bandaraya/jobs) — e-hailing books bookings for Taxi Driver roles
- [Economy](/bandaraya/economy) — BR currency (MyPay transfers)
- [Emergency Services](/bandaraya/emergency-services) — 999 calls go to on-duty PDRM/BOMBA/KKM
