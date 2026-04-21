---
title: "Vehicles"
description: "Spawning, driving, fuel, and buying or renting vehicles in Bandaraya."
---

# Vehicles

Bandaraya has 200+ vehicles across 25+ organisations — police MPVs and armoured vehicles, fire trucks, military armour, helicopters, buses, motorcycles, and a civilian fleet of Protons, Peroduas, Toyotas, and more. This page covers how to get into one and keep it running.

## TL;DR

- **Spawn** at a team-appropriate spawner. Civilians use the **Classic Car Dealer** for dealership cars.
- **Drive** with W/A/S/D, Space for handbrake, **F1** toggles mouse steering.
- **Fuel** matters. Fill up at **Radtrol Gas Station @ Jalan Pinang** or charge at **Community Retail**.
- **Crash damage** is real — don't use your civic as a battering ram.
- **Dealership** cars are yours forever once bought.

---

## Spawning a vehicle

Each team has its own set of spawners. You can only use the ones your team is allowed to use.

1. Walk to a vehicle spawner (POLIS spawners outside IPD Dang Wangi, BOMBA spawners at the fire station, MyTransit at the depot, Classic Car Dealer for civilian rentals/purchases, etc.).
2. Press **E** (or the proximity button).
3. A panel with a 3-D preview of each available vehicle opens.
4. Browse with **A / D / arrow keys** or the nav buttons.
5. **Space / Enter** to spawn. **Escape** to close.
6. Your vehicle appears at the spawn pad. Sit in the driver seat to drive.

If the spawner isn't letting you through, you probably don't meet the team requirements. See [Teams](/bandaraya/teams).

## Driving

Bandaraya uses the **A-Chassis** physics engine. Controls:

| Key | Action |
| --- | --- |
| **W / S** | Accelerate / brake |
| **A / D** | Steer |
| **Space** | Handbrake |
| **Shift** | Clutch / boost (varies by vehicle) |
| **F1** | Toggle mouse-based steering |
| **C** / **V** | Camera toggle / cycle (some vehicles) |
| On-screen buttons | Horn, siren, lights, doors, windows — emergency vehicles have many |

### Mouse steering
**F1** is the important one. With mouse-steer on, your mouse position controls wheel angle — much finer than keyboard-only. Most experienced drivers use it.

### Tips for driving

- **Ease off the throttle.** Cars will oversteer at high speeds, especially in the rain.
- **Use handbrake for drifts.** Press Space mid-corner.
- **Indicators matter** for roleplay realism, especially on public services.
- **Don't crash intentionally** — you'll take damage and (if civilian) pay to replace the car.

## Fuel

Vehicles burn fuel as you drive. Check your fuel gauge — it'll warn you before running dry.

| Fuel type | Fill at |
| --- | --- |
| **Petrol / Diesel** | **Radtrol Gas Station @ Jalan Pinang** |
| **Electric** | **2× Charging Stations @ Community Retail** |

To refuel:

1. Drive onto the pump / charger.
2. Exit the vehicle.
3. Interact with the pump. Pay BR.
4. Wait for the fuel bar to fill.

You can also carry a **jerry can** for emergency refuels.

## Vehicle health & crash damage

Every vehicle has a health pool:

| Class | Health |
| --- | --- |
| Superior (armoured, heavy-duty) | 500 |
| Standard civilian cars | 100 |
| Motorcycles | 50 |

When you crash:

- **Into another vehicle** (rear-end, side-swipe, PIT manoeuvre): damage scales with the relative speed.
- **Into walls / static objects**: damage scales with your closing speed. Scraping along a wall doesn't damage you (good for tight corners).

**Anti-cheat trivia:** a previous bug let some vehicles (HCC GTRs, FLAXIM Vellfire) ignore PIT damage. Fixed. Police chases are back to working properly.

## Vehicle registration

Every spawned vehicle gets a plate. You can look up plates in the **Vehicle Management** tablet app (see [Tablet](/bandaraya/tablet)).

Ownership registration is automatic — the plate is tied to the person who spawned the car. POLIS use this for traffic stops.

## Bulletproofing

Some vehicles are armoured. Look for:

- **AV4** — POLIS armoured vehicle (29 armour plates in the cabin). Proper bulletproof.
- **V150** — POLIS armoured vehicle.
- **UTK Hilux variants** — bulletproof around the cabin.

Regular civilian cars are **not** bulletproof. Don't assume your Proton will stop a round.

## Dealership (Classic Car Dealer)

The civilian dealership. Walk up, pick a model, configure, pay.

### Brands

- **Proton**: Saga, Persona, Preve, X70, Inspira
- **Perodua**: Myvi, Bezza, Aruz
- **Toyota**: Vellfire, Hilux
- **Honda**: Civic, City
- **Ford**: Mustang
- **BMW / Mitsubishi** and more

### Options

- **Buy** — permanent. Saved to your account. Auto-saves every 30 seconds.
- **Rent** — temporary session-based use.
- **Paint** — pick from a set of colours per model, glossy or matte.

Example colour set (Perodua Myvi): Granite Grey, Peppermint Green, Lava Red, Glittering Silver, Ivory White, Sunflower Yellow.

### HCC vehicles
If you own the **High Class Citizen gamepass**, luxury vehicles (BMW i7, Volvo XC90, Mercedes C300) are available at the dealership as well.

## Helicopters

POLIS and BOMBA have helicopter spawners at their stations. Team-specific — civilians can't spawn them.

- Spawn via the on-screen **ViewportFrame** picker.
- A spawned helicopter regenerates 8 seconds after destruction.

Don't crash a helicopter into a building.

## Tips & gotchas

- **Your vehicle disappears when you die.** Well, actually, it'll still be on the street — but controls won't work without the driver. Come back and get in.
- **Some vehicles have team-specific body children** (lights, sirens, reverse, hazards, drag racing hud). Not every car has all of them. If a button doesn't do anything, that vehicle doesn't support it.
- **Kickstands work on motorcycles.** Dismount and the bike parks itself properly (that was a long-standing bug, now fixed).
- **Streaming is disabled for vehicles.** That's why they always render at range — but it costs a little extra performance.
- **Abusing vehicles to grief** (glitching another player's car, spawn-ramming civilians) is a banable offence. See [Rules](/bandaraya/rules).

## See also

- [Economy](/bandaraya/economy) — dealership pricing, fuel costs
- [Jobs](/bandaraya/jobs) — Taxi, Tow, Bus driving
- [Emergency Services](/bandaraya/emergency-services) — POLIS / BOMBA / MAF vehicle access
- [Map](/bandaraya/locations) — where to find fuel, charging, the dealership
- [Tablet](/bandaraya/tablet) — Vehicle Management app
