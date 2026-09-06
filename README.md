# Dayline Card

The Lovelace card half of [Dayline](https://github.com/bitmux/Dayline) — a Home
Assistant dashboard card that renders **today as one vertical spine**: calendar
events, sun times, scheduled automations and actionable to-dos merged into one
chronological list with a live "now" marker.

It answers two questions at a glance, without interaction: *what is left of
today?* and *what will the house do without me?*

## Two cards in one bundle

**Dayline** is the spine — the full day, for a dashboard read at arm's length.

**Dayline Glance** is the same feed reduced to what survives being read from
across a room: the time in large type, the one event that is running or next,
and up to two live alerts with their buttons. It is meant for a wall tablet, and
because a panel cannot scroll it gives content up in a deliberate order rather
than letting the bottom of itself be cut off.

Both are in this one file. Installing the repository gives you both, and both
appear in the card picker.

Disclaimer: Yep, this is all Claude, you've been appropriately informed.
## Two repositories, on purpose

Home Assistant and HACS treat a backend integration and a frontend card as
separate things, and installing them is two separate steps. So Dayline is two
repositories:

| | Repository | HACS category |
|---|---|---|
| The feed — decides what to show | [bitmux/Dayline](https://github.com/bitmux/Dayline) | **Integration** |
| The card — draws it | this one | **Dashboard** |

You need both. The card renders whatever the feed puts on a sensor's
attributes; on its own it has nothing to draw.

HACS installs this bundle and registers it as a Lovelace resource itself. That
registration belongs to HACS, which is the point of the split — an integration
that tries to register a frontend resource on your behalf is writing into
Lovelace's storage from outside, with no public API and no contract.

## Installing

1. **HACS → ⋮ → Custom repositories**, add `https://github.com/bitmux/Dayline-card`
   with category **Dashboard**. Download it.
2. Install the feed too, if you have not already: add
   `https://github.com/bitmux/Dayline` with category **Integration**, download,
   restart, then **Settings → Devices & services → Add integration → Dayline**.
3. Hard-refresh the browser (Ctrl/Cmd-Shift-R), then **Add card → search
   "Dayline"**.

```yaml
type: custom:day-spine-card
entity: sensor.dayline
```

or, for a panel:

```yaml
type: custom:dayline-glance-card
entity: sensor.dayline
```

> **Check that entity id.** The sensor is named after the config entry's title,
> so an integration you named "Dayline" gives you `sensor.dayline`, not
> `sensor.day_spine`. Whatever appears under **Settings → Devices & services →
> Dayline → 1 entity** is the right answer. The card picker fills this in for
> you by looking for a sensor carrying an `entries` list.

Every card option is documented in
[INSTALL.md](https://github.com/bitmux/Dayline/blob/main/INSTALL.md).

## Source

This repository holds the built bundle only — it is a publish target, so HACS
has something with a single file at its root to install. The TypeScript source,
the tests, the design reference and the dev harness all live in
[bitmux/Dayline](https://github.com/bitmux/Dayline) under `src/`, and the bundle
here is regenerated from it with `npm run build && npm run stage-card`.

Issues and pull requests belong on
[the main repository](https://github.com/bitmux/Dayline/issues).
