# Plan: Brand Foundation

**Date:** 2026-06-22  
**Status:** Complete  
**Version:** 0.1.0

## Goal

Establish Samaana company brand identity: logo, color system, typography, and a live data dashboard component.

## Decisions

1. **Palette:** Soft gray with lavender undertone (`#8E85A3` primary, `#2B2738` dark, `#F7F6FA` background). Rejected warm earth (clay/gold) — user wanted cooler, softer, "a little blue."

2. **Logo:** Dome arch + listening waves on the right. Represents the name derivation (samaa = listening). Tagline "LISTEN · BUILD · ELEVATE" in tracked-out caps.

3. **Typography:** Plus Jakarta Sans for headings (clean geometric), Inter for body (workhorse readable), JetBrains Mono for code/numbers.

4. **Directory:** `brand/` with subdirs `design/`, `components/`, `pages/`, `plans/`. Clean separation of assets.

5. **Component library:** Design tokens (CSS custom properties) as single source of truth. Table system consumes tokens. Pages consume both.

## Deliverables

| File | Type | Description |
|---|---|---|
| `design/tokens.css` | Design | Full token system |
| `design/logo.svg` | Design | Brand mark + wordmark |
| `components/tables.css` | Component | Data table system |
| `pages/fleet.html` | Page | Live fleet dashboard |
| `README.md` | Doc | Project overview |
| `CHANGELOG.md` | Doc | Change log |
| `plans/brand-foundation-2026-06-22.md` | Plan | This file |

## Next

- More components as needed (cards, forms, nav)
- Additional data pages (memory browser, pipeline status, metrics)
- Logo variations (icon-only, horizontal, dark mode)
