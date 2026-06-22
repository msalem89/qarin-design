# Qarin — Brand Design

**Version:** 0.1.0 · Draft
**Status:** Identity pending — logo is placeholder until Arabic calligraphy mark delivered

---

## Product

Qarin (قرين) — AI companion platform. Not a chatbot. An always-running system of agents that knows, anticipates, and executes. Runs infrastructure, remembers what matters, works alongside users via any surface (Claude, Hermes, phone bridge, web).

**Parent:** Samaana Solutions

## Brand Voice

| Quality | Means |
|---|---|
| Present | Always on. Not demanding. Just there. |
| Capable | Gets things done. No excuses. |
| Discreet | Doesn't overshare. Knows what matters. |
| Warm | Human tone. Not sterile. Not cutesy. |

## Visual Direction

- Clean, restrained, high-trust
- Arabic identity — the name قرين means "companion"
- East meets West: Arabic calligraphy meets Swiss minimalism
- Nothing decorative for decoration's sake

## Logo (Pending)

The mark is Qarin — `قرين` — in Arabic calligraphy. This is not a code-generated asset. It requires a human designer or quality Arabic type tool.

Requirements:
- Connected letterforms — Qaf (ق) → Ra (ر) → Ya (ي) → Noon (ن)
- Works as wordmark + standalone icon
- Sits comfortably next to Latin text
- Clear space: 1× the height of the Qaf on all sides

Placeholder until delivered: none. The fleet dashboard header reads "QARIN" in Plus Jakarta Sans as temporary wordmark.

## Type Hierarchy

| Level | Font | Weight | Size | Use |
|---|---|---|---|---|
| Display | Plus Jakarta Sans | 700 | 40px | Page titles |
| H1 | Plus Jakarta Sans | 600 | 32px | Section headers |
| H2 | Plus Jakarta Sans | 600 | 24px | Card headers |
| Body | Inter | 400 | 15px | Running text |
| Small | Inter | 400 | 12px | Meta, labels |
| Code | JetBrains Mono | 400 | 13px | Paths, commands, data |

## Color

See `identity/palette.md` for full specification.

Primary: Soft gray-lavender (`#8E85A3`). Dark: Charcoal violet (`#2B2738`). Background: Cool off-white (`#F7F6FA`).

## Architectural Rules

1. `identity/tokens.css` is the single source of truth. If a color or value isn't a CSS variable, it shouldn't exist.
2. Components import tokens. Pages import components. Nothing repeats a value.
3. No inline styles. No magic numbers. Everything traced to a token.
4. Arabic-first: all product UI supports RTL without breaking.
