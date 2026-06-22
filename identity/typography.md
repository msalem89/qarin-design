# Qarin — Typography

**Version:** 0.1.0 · 2026-06-22

---

## Font Stack

| Role | Font | Fallback | Weights |
|---|---|---|---|
| Headings | Plus Jakarta Sans | Inter, system-ui, sans-serif | 500, 600, 700 |
| Body | Inter | system-ui, -apple-system, sans-serif | 400, 500, 600 |
| Code | JetBrains Mono | SF Mono, monospace | 400, 500 |

Google Fonts CDN. All three are open source (OFL).

## Scale

| Token | Size | Line Height | Use |
|---|---|---|---|
| `--sa-text-xs` | 12px | 1.5 | Labels, meta, mono |
| `--sa-text-sm` | 13px | 1.5 | Body small, table content |
| `--sa-text-base` | 15px | 1.6 | Running text |
| `--sa-text-lg` | 18px | 1.4 | Card titles |
| `--sa-text-xl` | 24px | 1.3 | Section headers |
| `--sa-text-2xl` | 32px | 1.2 | Page titles |
| `--sa-text-3xl` | 40px | 1.15 | Stats, display |

Scale ratio: minor third (~1.2×). Conservative. Trustworthy.

## Rules

1. Never go below 12px.
2. No all-caps body text. Labels only.
3. Mono only for code, paths, numbers in tables.
4. Plus Jakarta Sans only for headings and display — it's a display face.
5. Arabic text: stack to be defined once calligraphy mark is chosen.

## Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">
```

WOFF2 fallback via `@font-face` in `identity/fonts.css` if offline support is needed.
