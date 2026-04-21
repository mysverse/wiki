---
title: Tablet
description: >-
  The team-gated tablet tool in Bandaraya — MDT, MyEmergency, MyTow, KKM Logger,
  and other apps.
lang: zh
translated_from_hash: 0b131099
translated_on: '2026-04-21'
needs_review: true
---

# Tablet

The in-game **tablet** is a multi-app device that surfaces extra features to your team. Apps are unlocked based on your team colour — a PDRM officer sees the MDT, a tow operator sees MyTow, and so on.

> **Tablet ≠ Phone.** The [Phone](/bandaraya/phone) is a universal topbar app surface (MyPay, e-hailing, CAG, 999, MyCar, etc.). The Tablet is a team-gated **tool** you equip from your backpack.

## TL;DR

- Equip your **tablet tool** to open the device.
- Apps appear based on your team.
- Tablets also display notifications and alerts.
- The topbar gets an icon for quick toggling.

---

## Using the tablet

1. Open your backpack.
2. Equip the **Tablet** tool (given if your team qualifies).
3. The tablet UI opens.
4. Click an app icon to enter that app.
5. Equip a different tool or press the toggle icon to close.

The topbar gets an icon tied to the tablet — tap it to toggle open/closed without equipping.

---

## Apps

### MDT — Mobile Data Terminal (PDRM)

The police information terminal. Police-authentic UI with Polis branding, horizontal tabs, monospace data fields.

#### BG Check
Look up any player:
- Team and rank
- Active BOLO status
- Last arrest record
- Their current position

Useful for deciding whether to stop someone.

#### BOLO List
See all active BOLOs (Be On the LookOut alerts) in real time. A BOLO is automatically cleared when the suspect is arrested.

#### Add BOLO
Put a player on BOLO with a reason:
- All on-duty officers get notified with a badge, sound, and toast alert.
- Broadcasts across the PDRM team in real time.

PDRM-only; other teams see a greyed-out tab.

### MyEmergency

Emergency services coordination app — for emergency teams (PDRM, BOMBA, KKM, SJAM). Manage incident calls, coordinate multi-team responses.

### Vehicle Management

General-purpose vehicle app — anyone with the tablet can use it for basics. Features include:
- **Plate lookup** — find a vehicle's registration info
- **Registration management** — register vehicles you own
- **Spawn tracking** — see vehicles you've spawned

### MyTow

Tow operator app:
- View active tows
- Request a tow job
- Manage clamps remotely (remove a clamp from the tablet, no need to walk back)

### KKM Logger

Health ministry app:
- Log medical actions
- Track patient treatments
- Incident reporting for medical audits

KKM-only.

### Developer App

Developer tools and diagnostics. Devs only.

---

## Notifications

Tablets receive notifications via two event channels:

- **Tablet notifications** — global alerts (fire callouts, 999 calls, BOLOs, admin announcements).
- **App-specific notifications** — within a given app's context (e.g., new booking for taxi drivers, MDT alerts for PDRM).

When a notification arrives, the tablet icon on the topbar gets a visual indicator, and the relevant app pulses.

---

## Team restrictions

Which apps you see depends on your team's `TeamColor`:

| Team | Apps available |
| --- | --- |
| **PDRM, KPTD, Polis Bantuan** | MDT, MyEmergency, Vehicle Management |
| **BOMBA** | MyEmergency, Vehicle Management |
| **KKM, SJAM** | KKM Logger, MyEmergency, Vehicle Management |
| **Towing Services** | MyTow, Vehicle Management |
| **MyTransit, Bus Services** | Vehicle Management |
| **Developers** | Developer App + all others |
| **Civilians (Visitors, Malaysians)** | Vehicle Management only (basic plate lookup) |

If an app you expect isn't there, check your team.

---

## Tips & gotchas

- **Tablet tool persists across spawns** — you don't lose it when you die.
- **Topbar toggle is faster than equipping** for quick peeks.
- **MDT BG Check updates live** — the target's location is current.
- **BOLO auto-clears on arrest** — no manual cleanup needed.
- **Plate lookup works for anyone** — you don't need PDRM to search a vehicle plate.

## See also

- [Emergency Services](/bandaraya/emergency-services) — PDRM / BOMBA / KKM roles that use the tablet
- [Arrest & Law](/bandaraya/arrest-and-law) — how BOLOs / BG checks fit into arrests
- [Jobs](/bandaraya/jobs) — MyTow for tow operators
- [Vehicles](/bandaraya/vehicles) — registration and plate lookup
