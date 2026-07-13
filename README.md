# @murray/brand — Murray Brand System v1.0

The **authoritative** shared design tokens for every Murray product
(Renew · Homeschool · SermonPlus · …). **ONE BRAND, MANY PRODUCT EXPRESSIONS.**

This package is the single **runtime** source of truth for shared brand values.
It **overrides every other design system**: load it as the base, and make any
other system (`@murray/quiet`, shadcn themes, a local stylesheet) derive from /
defer to these tokens. Nothing may redefine a shared token to a different value.

- **Human/spec source of truth:** `~/.claude/docs/BRAND.md` (read before design
  work). This package must stay in lockstep with it — same version.
- **What's shared here (fixed everywhere):** interface orange `#FF4F00`,
  near-black + text tiers, warm borders, status colors, Inter type scale +
  weights, spacing, radii, shadows, motion, focus ring, layout rhythm, icon
  sizes.
- **What each product owns (NOT here):** its four `--product-*` surface colors,
  its mood/density, and its per-feature icon glyph choices.

## Install (public git dependency — installs with no auth, CI-friendly)

The repo is **public** (design tokens aren't secret — they're visible in any
deployed CSS). So this installs anywhere, including CI/CD (Vercel, etc.) with
**zero authentication**. Consume it as a normal `dependency`, not an optional one.

```bash
npm install github:profdavid20/murray-brand
# pin a version/tag for stability (recommended):
# npm install github:profdavid20/murray-brand#v1.0.0
```

> Note: `package.json` keeps `"private": true` — that only prevents accidental
> `npm publish` to the registry; it does not affect public git-dependency
> installs or repo visibility.

## Use

**1. Load the token variables once, high in the cascade** (they override others):

```js
// bundler/JS entry (Next.js, Vite, etc.)
import '@murray/brand/tokens.css';
```
```css
/* or at the very top of a global stylesheet */
@import '@murray/brand/tokens.css';
```

**2a. Tailwind (v3.2+ / v4)** — add the preset (also import the CSS above):

```js
// tailwind.config.{js,ts}
module.exports = {
  presets: [require('@murray/brand/tailwind-preset')],
  // add ONLY this product's surfaces + any app-specific extras:
  theme: { extend: { colors: { /* page/surface/highlight from --product-* */ } } },
};
```
Opacity modifiers work out of the box (`bg-orange/20`, `border-border/70`) — the
preset maps colors to the shipped `*-rgb` channels via `<alpha-value>`.

**2b. Plain CSS / other stacks** — use the variables directly:

```css
.button-primary { background: var(--brand-orange); border-radius: var(--radius-md); }
.card { background: var(--product-surface); border: var(--border-hairline); border-radius: var(--radius-card); }
```

**2c. JS/TS access** — the same values as an object:

```ts
import { brand } from '@murray/brand';
brand.color.orange;   // "#ff4f00"
brand.radius.card;    // "16px"
```

## Each product adds only its surfaces

```css
/* in the product repo, after importing @murray/brand/tokens.css */
:root {
  --product-page:         #fffdfc;  /* Renew example */
  --product-surface:      #f8f4f1;
  --product-surface-soft: #fff0e8;
  --product-highlight:    #fde5da;
}
```
| Product | page | surface | surface-soft | highlight |
| --- | --- | --- | --- | --- |
| Renew | `#FFFDFC` | `#F8F4F1` | `#FFF0E8` | `#FDE5DA` |
| Homeschool | `#FFFDF9` | `#F7F6F4` | `#EEECEA` | `#FFF0E8` |
| SermonPlus | `#FFFDF8` | `#F8F2EC` | `#EEE3D4` | `#FFF0E8` |

## Icons
Shared set: **Lucide** — outline by default, filled only when meaningfully
active, stroke width `1.75`, sizes `--icon-sm/md/lg` (16/20/24). No emoji as
interface icons.

## Changing a shared token
Bump the version here **and** in `~/.claude/docs/BRAND.md` together, then update
each consuming repo's lockfile to the new tag. Never diverge silently.

## Contents
`tokens.css` (CSS variables — hex + `*-rgb` channels) · `tailwind.preset.cjs`
(Tailwind theme) · `tokens.mjs` + `tokens.d.ts` (typed JS object).
