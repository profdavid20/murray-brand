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

## Install (public — installs with no auth, CI-friendly)

The repo is **public** (design tokens aren't secret — they're visible in any
deployed CSS). Install it as a normal `dependency` (never `optional`).

**Use the HTTPS tag tarball** — it installs over plain HTTPS with no git and no
auth, so it works everywhere including CI/CD (Vercel):

```bash
npm install https://github.com/profdavid20/murray-brand/archive/refs/tags/v1.0.0.tar.gz
```

> ⚠️ **Do NOT use the `github:profdavid20/murray-brand#v1.0.0` shorthand for CI.**
> npm normalizes it to `git+ssh://`, which build servers (Vercel) can't
> authenticate — it fails even though the repo is public. The tarball avoids git
> entirely. (A `git+https://github.com/profdavid20/murray-brand.git#v1.0.0`
> URL also works if you prefer git over the tarball.)
>
> `package.json` keeps `"private": true` — that only prevents accidental
> `npm publish`; it does not affect installs or repo visibility.

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

**2a-v4. Tailwind v4 (CSS-first, no config file)** — the v3 preset can't plug in;
use the `@theme` bridge instead (import order matters):

```css
@import "tailwindcss";
@import "@murray/brand/tokens.css";  /* AFTER tailwind — see gotcha (a) */
@import "@murray/brand/theme.css";   /* maps utilities to --brand-* / --product-* */
```
Then each product defines only its four surfaces + font in `:root`:
```css
:root {
  --product-page: #…; --product-surface: #…;
  --product-surface-soft: #…; --product-highlight: #…;
  --font-sans: var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif;
}
```
**v4 gotchas (why it's wired this way):**
(a) Scale tokens (`--radius-*`, `--text-*`) collide with Tailwind's namespace —
do NOT redefine them in `@theme`. The imported `tokens.css` `:root` (unlayered)
overrides TW's `@layer theme` defaults, so `rounded-sm/md` and `text-xl…4xl`
carry brand values automatically. (b) Use `@theme inline` for colours (mapped by
reference) to avoid emitting redundant vars. (c) Shared names TW has no default
for (`rounded-card/feature/pill`, `shadow-card/feature`, `max-w-narrow/standard/
wide`) are shipped as `@utility` rules in `theme.css`. (d) With `next/font`,
expose a non-`--font-sans` var (e.g. `--font-inter`) and reference it, or you get
a self-referencing `--font-sans`.

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
Bump the version here **and** in `~/.claude/docs/BRAND.md` together, tag it
(`vX.Y.Z`), then update each consuming repo to the new tarball URL. Products that
generate CSS from the package (e.g. self-contained HTML) must regenerate it **in
CI** so prod always reflects the installed version — never hand-maintain the
output. Never diverge silently.

## Contents
`tokens.css` (CSS variables — hex + `*-rgb` channels) · `theme.css` (Tailwind v4
`@theme` wiring) · `tailwind.preset.cjs` (Tailwind v3 preset) · `tokens.mjs` +
`tokens.d.ts` (typed JS object).

## Versions
- **v1.1.0** — add `theme.css` (Tailwind v4 `@theme` wiring) + v4 docs. No token
  values changed (design spec still v1.0).
- **v1.0.0** — initial tokens, v3 preset, JS object.
