---
title: "Vehicles"
description: "All 127 vehicle models in Lebuhraya — spawning, fuel, crashing, and customization."
---

# Vehicles

Lebuhraya ships with **127 vehicle models** — compact cars, SUVs, motorcycles, trucks, buses, and a long list of emergency / service variants. This page covers how to spawn them, keep them fuelled, what to do when you crash, and a sampler of what's in the garage.

## Spawning a vehicle

Open the **MyPod** menu (vehicle spawner).

- **Desktop**: click the MyPod icon on the topbar
- **Mobile**: tap the icon in the top cluster

Browse the list, pick a vehicle, and click **Spawn**. The vehicle appears in front of you, already registered to your name. To drive, walk up and press **F** (keyboard), **X** (gamepad), or tap **Drive** (mobile).

### Ownership

- When you spawn a vehicle, you become its owner. Your name is on the driver seat.
- Other players **cannot enter your driver seat** unless you unlock it.
- Passengers can always enter passenger seats.
- When you leave the server, your vehicle disappears.
- You can despawn your own vehicle from the MyPod menu.

## What can I drive at Level 1?

You have access to **27 vehicles** from the start — enough to find something you like. The cheapest is the **Handai EX5** motorcycle at BR 1050. Premium / supercar starters include the NSN GT-R (BR 3,750), Bagaini Chiron (BR 3,000), and McLari 750 (BR 3,000) — cheaper than they would be in reality, but most are "Special" category (not upgradeable). The more common Level 1 civilian cars sit around BR 1,800–6,000.

## Pricing and unlocks

Vehicle prices scale loosely with level. Rough guide:

| Level | Typical price range |
|---|---|
| L1–10 | BR 1,050 – 8,000 |
| L20–40 | BR 10,000 – 22,400 |
| L50–100 | BR 15,000 – 20,000 |
| L125–150+ | BR 17,000 – 25,000 (Prem/Supercar territory) |

Some team-only vehicles don't have a public price — they unlock as you rank up in the right career branch. About **55 of the 117 spawnable vehicles** are career-locked (you need to be on the right team at the right tier).

About **28 vehicles** are sold through the **Dealership** view in the vehicle spawner — these are the standard civilian choices from Myvi to Mustang.

## Vehicle categories

Most of the fleet is loosely parodied from real Malaysian and global brands. If you know a real car, there's probably a stand-in here.

| Category | Examples |
|---|---|
| Compact cars | Protan Saga, Perosatu Myvi, Perosatu Bezza, Protan Persona, Perosatu Alza Plus |
| Sedans / saloons | Protan Preve, Protan Inspira, Protan S70, Tayoti Camry, Merze C300 |
| SUVs | Protan X50, Protan X70, Tayoti Hilux, Masubi Outlander, MZ CX-5, Rolvo XC40/XC90 |
| Performance / sports | NSN GT-R, NSN R34 Skyline, Tayoti Supra Mk.5, Masubi Lancer Evo X, Felari 458 Italia, Lampugini Hulakan, Bagaini Chiron |
| Motorcycles | Handai EX5, Handai CBR1000RR, Kasaki 1400GTR, BMY R1200RT, Vespi |
| Buses / MPVs | Tayoti Hiace variants, Intero Citie, TKL_K230UB, TKL_Harimau Evo, Tayoti Vellfire |
| Trucks / cargo | Rolvo FM, Rolvo FM Chassis, Rolvo FM RORO Truck, Sanica P310, Sanica P360 |
| Taxis | Perosatu Bezza Taxi, Protan Saga Taxi, Protan Waja Taxi, Protan Preve Taxi |
| Emergency — Bomba | Masubi Triton Emergency/Utility, Merze Atego LFRT, Sanica P310 FRT, Sanica P360 Tanker, Sanica 94D LFRT, Tayoti Hiace MTV EMRS |
| Emergency — Medical | Tayoti Hiace KKN Ambulance, Handai City KKN RRV, Tayoti Hilux KKN RRV |
| Police | Handai Civic Polis/HPV Polis variants, Masubi Lancer HPV Polis, NSN etc. Polis Escort, Kasaki Ninja Polis, BMY M5 CS Polis variants |
| Tow / workshop | iZu Tow Truck KEMRonda, iZu Tow Bed KEMRonda, Renjer Loader 2012 |
| Electric | Besla Y, MYD Atto III, Ionic I, Ionic V, CITO Ami |

Most team-specific vehicles (Bomba, KKN, Police) are unlocked through your career progression or team gamepass.

## Fuel

Every vehicle runs on one of three fuel types.

| Fuel | Price per litre |
|---|---|
| **Electric** | 1 BR |
| **Petrol** | 2 BR |
| **Diesel** | 3 BR |

The default tank is **40 litres**. A JerryCan carries 10 litres.

### Refuelling

Pull up next to a pump, and an on-screen prompt will appear to "Pump" or "Charge." The prompt only appears for the fuel type your vehicle uses — if you pull up to a diesel pump in a petrol car, the game tells you "this is the wrong type of pump, find a Petrol Pump." The same applies to JerryCans — pick the right fuel type before approaching the pump.

> **Fuel is currently free.** The prices above (1/2/3 BR per litre) are defined in the fuel system config but the charge hook isn't active in this version. Refuelling deducts nothing from your BR balance. When the economy goes live these prices will apply.

### Where to refuel

- **PETROMAS Petrol Station** — Northbound and Southbound stations on the highway
- **Radtrol Petrol Station** — In Bandar Seri Putra
- **Kompleks Petroliam dan Gas Radtrol** — Large refuelling complex near Jersik

### Running out

If your tank hits zero, the engine cuts out. Options:

1. Buy a JerryCan at the **Jerrycan Shop**, fill it at a station, and refuel manually.
2. Despawn the vehicle and spawn a fresh one from MyPod.
3. Ask a KEMRonda player for a tow.

## Crashing and repairs

Vehicles take damage from collisions. A heavily-damaged car will start to smoke, lose performance, or stop entirely.

**Vehicle toughness**:
- Standard civilian vehicles start with **100 Max Health**.
- Police / law enforcement variants (Polis Trafik HPV, Polis Escort, KEMRonda Peronda Hilux, APJ Inspira/X70, Undercover) have **200 Max Health** — double the durability.
- Emergency motorcycles (Kasaki Ninja Polis, BMY R1200RT Polis) get **180 Max Health**.
- Every collision must exceed **30 studs/s relative velocity** to deal damage; below that you tap and bounce, above that the difference is multiplied into damage.
- Damage-per-hit defaults to **10 points** (more for very high-speed impacts).

### Your options

- **Drive into a repair zone**. There are **10 repair zones** scattered around the map — look for the green repair indicator. Stopping inside the zone restores your vehicle gradually (roughly 10% health per 5 seconds). A confirm prompt appears on screen when you enter.
- **Call a tow**. KEMRonda players with a tow truck can haul you to a workshop.
- **Despawn and respawn**. From the MyPod menu you can despawn the broken vehicle and spawn a fresh one. Fastest option if you're in a hurry.

If you're new and crashes feel intimidating, you'll see a **Crash Tutorial** the first time it happens — that's your in-game primer. Drive carefully, use your handbrake (**Space**), and take Malaysian highway speeds with a grain of salt.

## Customisation at Gravstone Workshop

**Gravstone Workshop** in Bandar Seri Putra is the game's paint & visual customisation shop — **not** a repair centre. Drive your vehicle into the workshop's interior zone and a workshop GUI appears with paint and body options.

- **Access requires the Workshop gamepass.** If you don't own it, the game prompts you to purchase when you open a paint option.
- **Paint zones** you can recolour include the body, windows, tyres, and rims — each picks up a separate colour.
- **Colour picker**: drag the hue, saturation, and value; the car updates in real-time as you adjust. Click Confirm to apply; Cancel to discard.

Paints saved here are applied to your currently-spawned vehicle for the duration of the session. Unlockable paints (chrome, gradient, matte — see *Passes and Boosts*) are applied through a separate menu.

## Customisation

Vehicle customisation depends on the specific model. Common options include:

- Paint colour (via Gravstone Workshop — see above)
- Body accessories
- Number plates (see below)

Consult the vehicle's menu in-game (some cars have a customise panel, others don't). Team-issue vehicles (Police, Bomba) are typically locked to team livery.

## Number plates

When a vehicle spawns, its registration plate is assigned based on the region of the spawner, following the Malaysian system:

- **Bandar Seri Putra** spawners issue **SL (Selangor)** plates — B% prefix.
- **Kampung Merbang** and **Jersik** spawners issue **NS (Negeri Sembilan)** plates — N% prefix.
- Spawners along the middle of the highway (between regions) randomly pick **50/50 between SL and NS** each time you spawn.

So the car you just spawned on a rest-stop road might be a B plate this time and an N plate the next — a small detail that Malaysian players immediately notice.

## Emergency lights (ELS)

All emergency-team vehicles (Bomba, Polis Trafik, Undercover Police, Kesihatan, KEMRonda) carry a lightbar that uses the game's ELS (Emergency Lighting System). Toggling ELS:

- Plays one of **three flash patterns** — fast alternating, slow alternating, and rapid complex.
- Is replicated to all players in the server so everyone sees your lights.
- Grants an implicit speed-trap **immunity** — if you're over 200 studs/s with ELS active, you don't get a Speeding offence (emergency response in progress). Don't abuse this; the anti-cheat still watches.

Use ELS only when responding to an incident. Cruising with lights on is a community etiquette no-no.

## Advanced vehicle controls

Six specialised vehicles have a **tow/winch panel** — a mobile-friendly landscape HUD that appears when you interact with the control panel inside the cabin:

| Vehicle | Team | Panel |
|---|---|---|
| iZu Tow Truck KEMRonda | KEMRonda | Tow Boom Controls |
| iZu Tow Bed KEMRonda | KEMRonda | Flatbed Controls |
| Tayoti Hilux KKN RRV | Kesihatan | Rescue Winch Controls |
| Merze Atego LFRT Bomba | Bomba | Ladder Winch Controls |
| Sanica P310 FRT Bomba | Bomba | Ladder Winch Controls |
| Sanica 94D LFRT Bomba | Bomba | Ladder Winch Controls |

**Keyboard shortcuts** (once the panel is open):

| Key | Action |
|---|---|
| **1** | Toggle Attach mode for Winch 1 (click a vehicle/part to target it) |
| **2** | Toggle Attach mode for Winch 2 (flatbeds/wreckers with a second winch) |
| **X** | Cancel attach mode |
| **Z** | Weld (fuses the attached vehicle to yours) |
| **V** | Release / unweld |
| **[** | Lower bed / ramp |
| **]** | Raise bed / ramp |

**Access rules**: You can always use a panel if (a) you own the vehicle, (b) you're on the matching team (KEMRonda / Bomba / Kesihatan), or (c) you're an admin. Otherwise a rate-limited "Access Denied" banner appears.

The controls are shared across all six vehicles, so once you learn one you've learnt them all.

## Next steps

- [Economy and XP](/lebuhraya/economy) — Fuel prices in context
- [World and Map](/lebuhraya/map) — Where to find every station
- [Teams and Careers](/lebuhraya/teams) — Vehicles unlocked by team tier
