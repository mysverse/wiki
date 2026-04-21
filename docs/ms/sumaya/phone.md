---
title: Phone and UI
description: 'The 12 phone apps, HUD, and minimap in Sumaya.'
lang: ms
translated_from_hash: 08a382c1
translated_on: '2026-04-21'
needs_review: true
---

# Phone and UI

Your phone is your hub for almost everything in Sumaya: jobs, quests, emergency calls, settings, and more. This page covers every app, plus the rest of the in-game HUD (minimap, task card, chat).

## Opening the phone

Tap the phone icon on your screen. The phone slides up and shows a grid of apps. You can have it open while walking and driving.

To close it, tap outside the phone or use the close button.

## Phone apps

Sumaya has **12 player-facing apps** plus a phone-home launcher (called `PhoneUI` internally).

### Settings

Customize your phone's look:

- **Phone color** - the device chassis.
- **Casing color** - inside trim.
- **Wallpaper** - gradient (customizable colors), solid, or custom image.

### Camera

An in-game camera app. Take photos of whatever's on screen. Good for house showcases, scenic moments, or capturing that 5-star arrest.

### Profile

See your player profile:

- Current player level and progress.
- Your sector levels and ranks (one per sector you've worked).
- Achievements / stats.

### Residence

Your housing app:

- Browse and claim plots.
- Buy a house template.
- Enter placement mode for furniture.
- Lock / unlock doors.
- Toggle lights.
- Sell your house.

See [Housing](/sumaya/housing).

### Careers

Civilian career hub:

- See available civilian sectors (Fishing, Service, Agro).
- Check your sector levels and ranks.
- See which sector you're currently on shift with.
- Start or end a job (though you still need to be at the career station to clock in).

See [Careers overview](/sumaya/jobs).

### Passive

Toggle **Passive Mode**:

- **On**: you're invulnerable; you can't damage or be damaged by other players. You also can't commit crimes.
- **Off**: regular PvP / offence rules apply.

Useful for roleplay scenes, or if you just want to drive around without getting randomly attacked.

**Important details:**

- **You start in passive mode** every time you join the game. It's the default state, not something you need to opt into.
- **Law enforcement (POLIS) never passes passive**. Cops are permanently non-passive and can't use this toggle.
- **Equipping a crime tool drops you out of passive automatically**. Pick up a Slim Jim or Pickpocket Knife and you can't be passive until you drop it.
- **Wanted players can't re-enable passive**. Once your wanted stars decay, it re-enables on its own.
- **After certain offences (speeding, crashes, crime)** the passive toggle is locked for a duration (the "passive lock"). See [Crime and Law](/sumaya/crime-and-law) for the per-star lock durations.

### Collision

Toggle vehicle collisions:

- **Enabled**: normal vehicle-vs-vehicle physics.
- **Disabled**: your vehicle phases through other vehicles.

Useful for parking in tight spots or escaping a crash pile-up. See [Vehicles](/sumaya/vehicles).

### Cinematic

A free-roam camera mode. Move your viewpoint around independently of your character for dramatic angles or film-style shots. Great for recording, not much use for gameplay.

### Quest

View your current quest chain progress:

- See the active quest and its steps.
- Read quest descriptions.
- Track how much progress you've made.
- Dismiss the task card or re-show it.

The welcome quest chain auto-starts on first join and runs through 12 quests. See [Quests](/sumaya/quests).

### Emergency999

Any civilian can dial 999 from this app. It:

- Opens a dispatch screen where you pick which service(s) you need, the reason, and (optionally) a custom note up to 140 characters.
- Notifies all on-duty POLIS, BOMBA, or Kesihatan players via their MDT.
- Attaches your location automatically (resolved to the nearest landmark name).
- Has a **10-second cooldown** per caller before you can submit another call - don't spam.

Calls auto-close after **30 minutes** if a dispatcher doesn't handle them, so roleplay scenarios that end up un-responded don't clutter the MDT forever.

Use this for roleplay scenarios (call for a fire, report a crime, need medical).

### MDT (Mobile Data Terminal)

Visible only on **emergency-service teams** (POLIS, BOMBA, Kesihatan). The MDT is your dispatch console:

- **Calls tab** - active 999 calls. See who's calling, where, and why. Set a waypoint or mark a call as responded.
- **Wanted tab** (POLIS only) - list of currently-wanted suspects with star levels and offence counts. Tap to set a waypoint.
- **Plate checker** (POLIS only) - look up a license plate to see the registered owner and whether the vehicle is stolen.

See [Polis](/sumaya/polis) for more on the MDT.

### DevTools

Developer-only debugging app. You won't see it as a regular player. Ignore.

### PhoneUI (home launcher)

The main phone home screen with the app grid. Not a separate app you launch.

## The minimap

In the top-right corner, you'll see a minimap showing the area around you.

### What the minimap shows

- **Your position** (the arrow at the center).
- **Roads and buildings** around you.
- **Points of interest** (POIs): hospital, police station, fire station, vehicle spawners, shops, career stations.
- **Waypoints** you've placed or that have been set by the game (quest markers, MDT calls).
- **Other players** and NPCs may appear as dots depending on context.

### Expanding the minimap

Click the minimap (or press the expand button) to open the **full-screen map**. You can:

- Zoom in and out.
- Pan around to see other parts of Sumaya.
- Hit **F** to **fit all your waypoints** into view at once.

### Custom waypoints

In the full-screen map:

- **Long-press** (about 0.5 seconds) on a location to drop a custom waypoint.
- **Right-click** an existing waypoint for a context menu (rename, change color, delete).
- Your waypoints **persist across sessions**.

Custom waypoints are great for marking your favorite fishing spot, your friend's house, or where you parked your trawler.

### The guidance beam

You'll often see a **colored beam** from your character to an objective - this is the guidance beam, a 3D visual version of whatever waypoint the minimap is actively tracking. Colors are consistent:

- Red (bright): quest markers, important objectives.
- Other colors: custom waypoints in their chosen color.

## The task card

In the top-left corner, you'll often see a **task card** - a small panel that describes your current objective. It might show:

- Your active quest step ("Spawn a vehicle").
- An active fire you're responding to ("Fire at Jalan Triden").
- A patient you're treating.
- A carjacking drop-off zone.

### Collapsing the task card

On mobile especially, the task card can overlap with driving controls. Tap the **chevron (^) button** on the card to collapse it, showing just a minimal icon. Tap again to re-expand.

## Chat

Press **/** (slash) to focus the chat bar at the bottom of the screen. Type a message and hit Enter to send.

Sumaya uses Roblox's `TextChatService`, so standard `/whisper <player>` and public chat all work.

### Public Services channel

If you're on an emergency-service team (POLIS, BOMBA, or Kesihatan), you get access to an extra **Public Services** channel. Messages sent there are visible only to other emergency-service players - a private coordination channel across all three services. Civilian teams can't see or send to it.

Your access auto-updates when you switch teams.

## Banner notifications

You'll see slide-in banner notifications for:

- Job payouts.
- Quest step completions.
- New offence detected (for POLIS on duty).
- Wanted level gained or cleared.
- System messages.

Banners auto-dismiss after a few seconds.

## Wallet / bank display

Your current Ringgit balance is shown in a small HUD near the top of the screen. Open the full wallet details via the phone or the ATM. See [Economy](/sumaya/economy).

## Tips

- **Open the phone as soon as you spawn.** Most of what you need is there.
- **Expanded minimap for planning.** Before a long trip, pop the full map, see the route, drop a waypoint at your destination.
- **Passive mode for roleplay.** Going out for a chill screenshot session? Toggle passive so no one interrupts with carjacks or fights.
- **999 for calls, MDT for responses.** One is for civilians, the other is for responders.
- **Long-press to make waypoints.** This is the single biggest quality-of-life feature - use it to mark places you keep returning to.
- **Collapse the task card when driving mobile.** The extra screen real-estate matters on small screens.
- **Profile app for flex.** Your ranks show here. Screenshot-worthy once you hit high-tier ranks.

## What next?

- [Quests](/sumaya/quests) for the discovery chain you'll see in the Quest app.
- [Polis](/sumaya/polis) for MDT details.
- [Tips and tricks](/sumaya/tips-and-tricks) for more hidden UI features.
