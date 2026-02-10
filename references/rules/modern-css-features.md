# Modern CSS Features Rule (2021-2025)

## Principle

**ALWAYS prefer modern CSS features (2021-2025) that provide better DX, performance, and maintainability.**

## Priority Order

When suggesting CSS solutions, prefer in this order:

1. **2024-2025 Features** (cutting-edge, check baseline)
2. **2022-2023 Features** (widely available)
3. **2021 Features** (excellent support)
4. **Pre-2021 Features** (only when modern alternatives don't exist)

---

## Modern Features by Category

### Layout & Sizing (2021-2025)

#### ✅ Container Queries (2022-2023)
**Status**: 🔵 Newly Available

```css
.container {
  container-type: inline-size;
  container-name: card;
}

@container card (inline-size > 40cqi) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

**Use instead of**: Media queries for component-level responsive design

---

#### ✅ Subgrid (2023)
**Status**: 🔵 Newly Available

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.grid-item {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

**Use instead of**: Complex grid nesting workarounds

---

#### ✅ Dynamic Viewport Units (2022-2023)
**Status**: 🔵 Newly Available

```css
/* ❌ WRONG — 100vh overflows on mobile (ignores browser chrome) */
.hero {
  min-height: 100vh;
}

/* ✅ CORRECT — dynamic viewport block, adapts to browser UI */
.hero {
  min-block-size: 100dvb;
}

/* Small = with all UI visible, Large = with UI retracted */
.sidebar {
  min-block-size: 100svb; /* safe minimum */
  max-block-size: 100lvb; /* maximum expanded */
}
```

**All unit variants** (each prefix has 6):

| Prefix | Width | Height | Inline | Block | Min | Max |
|--------|-------|--------|--------|-------|-----|-----|
| sv | svw | svh | svi | svb | svmin | svmax |
| lv | lvw | lvh | lvi | lvb | lvmin | lvmax |
| dv | dvw | dvh | dvi | dvb | dvmin | dvmax |

**Rule**: Always use `dv*` for full-height layouts, `sv*` for safe minimums, `lv*` for maximums. Prefer logical variants (`dvi`, `dvb`) over physical (`dvw`, `dvh`). **Never use `100vh`** for full-screen sections.

**Use instead of**: `100vh`, `100vw`, `100vmin`, `100vmax`

---

### Color & Theming (2021-2024)

#### ✅ light-dark() Function (2023-2024)
**Status**: 🔵 Newly Available

```css
:root {
  color-scheme: light dark;
}

.element {
  background: light-dark(white, #1a1a1a);
  color: light-dark(#333, #f0f0f0);
  border-color: light-dark(#ddd, #444);
}
```

**Use instead of**: Media query `prefers-color-scheme` with duplicated rules

---

#### ✅ color-mix() Function (2023)
**Status**: 🔵 Newly Available

```css
.button {
  --primary: #0066cc;
  background: var(--primary);
}

.button:hover {
  background: color-mix(in srgb, var(--primary) 80%, white);
}
```

**Use instead of**: Manually defining color variations or using opacity

---

#### ✅ accent-color (2021-2022)
**Status**: 🟢 Widely Available

```css
:root {
  accent-color: #0066cc;
}

/* Automatically styles checkboxes, radios, range inputs */
```

**Use instead of**: Custom-styled form controls

---

### Animations & Transitions (2023-2024)

#### ✅ View Transitions API (2023-2024)
**Status**: 🔵 Newly Available

```css
@view-transition {
  navigation: auto;
}

.card {
  view-transition-name: card-transition;
}

::view-transition-old(card-transition),
::view-transition-new(card-transition) {
  animation-duration: 0.3s;
}
```

**Use instead of**: JavaScript animation libraries for page transitions

---

#### ✅ Scroll-Driven Animations (2023-2024)
**Status**: 🔵 Newly Available

```css
@keyframes reveal {
  from { opacity: 0; translate: 0 20px; }
  to { opacity: 1; translate: 0 0; }
}

.element {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

**Use instead of**: JavaScript scroll listeners and animation libraries

---

#### ✅ @starting-style (2023)
**Status**: 🔵 Newly Available

```css
.dialog {
  transition: opacity 0.3s, translate 0.3s;

  @starting-style {
    opacity: 0;
    translate: 0 -20px;
  }
}

.dialog[open] {
  opacity: 1;
  translate: 0 0;
}
```

**Use instead of**: JavaScript for entry animations

---

#### ✅ Individual Transform Properties (2022)
**Status**: 🟢 Widely Available

```css
/* ❌ WRONG — legacy transform shorthand */
.card {
  transform: translateY(-4px) rotate(2deg) scale(1.05);
}

/* ✅ CORRECT — individual properties */
.card {
  translate: 0 -4px;
  rotate: 2deg;
  scale: 1.05;
}
```

**Rule**: Always use `translate`, `rotate`, and `scale` as standalone properties. Only use `transform` for operations that have no individual property equivalent (e.g., `skew()`, `matrix()`, `perspective()`).

**Benefits**: Independent animation/transition of each axis, cleaner keyframes, no order-dependence issues.

**Use instead of**: `transform: translateX()`, `transform: translateY()`, `transform: translate()`, `transform: rotate()`, `transform: scale()`

---

### Positioning & Layout (2020-2024)

#### ✅ isolation: isolate (2020)
**Status**: 🟢 Widely Available

```css
/* ❌ WRONG — z-index wars */
.header   { z-index: 100; }
.modal    { z-index: 9999; }
.tooltip  { z-index: 99999; }

/* ✅ CORRECT — isolation creates scoped stacking contexts */
.header  { isolation: isolate; z-index: 1; }
.modal   { isolation: isolate; z-index: 2; }
.tooltip { isolation: isolate; z-index: 3; }
```

**Rule**: When a user has z-index issues, **always suggest `isolation: isolate`** on the parent component. It creates a stacking context with zero side effects — unlike `position: relative; z-index: 0`, `transform: translateZ(0)`, or `opacity: 0.99` hacks.

**Use instead of**: Escalating z-index values, transform/opacity hacks to force stacking contexts

---

#### ✅ Anchor Positioning (2024)
**Status**: 🟡 Limited Availability

```css
.button {
  anchor-name: --my-anchor;
}

.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  margin-block-end: 0.5rem;
}
```

**Use instead of**: JavaScript positioning libraries for tooltips/popovers

---

### Selectors & Pseudo-classes (2021-2024)

#### ✅ :has() Pseudo-class (2022-2023)
**Status**: 🔵 Newly Available

```css
/* Parent selector! */
.card:has(img) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

/* Form validation */
form:has(:invalid) .submit-button {
  opacity: 0.5;
  pointer-events: none;
}
```

**Use instead of**: JavaScript for parent/sibling styling

---

#### ✅ :is() and :where() (2021)
**Status**: 🟢 Widely Available

```css
/* Reduce selector repetition */
:is(h1, h2, h3, h4, h5, h6) {
  margin-block: 0;
  line-height: 1.2;
}

/* Zero specificity with :where() */
:where(.card, .panel, .box) {
  padding-inline: 1rem;
}
```

**Use instead of**: Repeating selectors or high-specificity rules

---

#### ✅ :focus-visible (2021)
**Status**: 🟢 Widely Available

```css
/* Only show outline for keyboard focus */
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}

button:focus:not(:focus-visible) {
  outline: none;
}
```

**Use instead of**: Removing focus outlines (bad for accessibility)

---

### CSS Nesting (2023)

#### ✅ Native CSS Nesting
**Status**: 🔵 Newly Available

```css
.card {
  padding-inline: 1rem;
  background: white;

  & .title {
    font-size: 1.5rem;
  }

  &:hover {
    background: #f5f5f5;
  }

  @media (inline-size > 600px) {
    padding-inline: 2rem;
  }
}
```

**Use instead of**: CSS preprocessors (Sass, Less) for nesting

---

### Container Style Queries (2024)

#### ✅ Style Queries
**Status**: 🟡 Limited Availability

```css
.card-container {
  container-name: card;
  --theme: dark;
}

@container card style(--theme: dark) {
  .card {
    background: #1a1a1a;
    color: white;
  }
}
```

**Use instead of**: JavaScript for theme detection in components

---

### Math Functions (2021-2024)

#### ✅ Enhanced Math Functions
**Status**: 🟢 Widely Available

```css
/* Trigonometry — circular menu positioning */
.menu-item {
  --angle: calc(360deg / var(--items) * var(--i));
  translate:
    calc(cos(var(--angle)) * var(--radius))
    calc(sin(var(--angle)) * -1 * var(--radius));
}

/* atan2() — point element toward a target */
.pointer {
  rotate: atan2(var(--dy), var(--dx));
}

/* Rounding */
.element {
  padding: round(up, 1.3rem, 0.5rem);
}

/* clamp() */
.container {
  inline-size: clamp(300px, calc(50vi - 2rem), 800px);
}
```

**Functions**: `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`, `round()`, `mod()`, `rem()`, `abs()`, `sign()`, `clamp()`, `min()`, `max()`

**Use instead of**: JavaScript for circular positioning, angle calculations, and complex math

---

#### ✅ sibling-index() & sibling-count() (2025)
**Status**: 🟣 Experimental

```css
/* ❌ OLD — repetitive nth-child rules */
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }

/* ✅ NEW — single declaration */
.item { animation-delay: calc(sibling-index() * 100ms); }

/* Rainbow color distribution */
.item { background: oklch(0.7 0.15 calc(360deg / sibling-count() * sibling-index())); }
```

**Use instead of**: Inline `--i` variables, repetitive `:nth-child()` rules

---

### Interaction (2024-2025)

#### ✅ CSS Carousel Features (2025)
**Status**: 🟣 Experimental (Chrome 135+)

```css
.carousel {
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}

.slide::scroll-marker { content: ""; }
.slide::scroll-marker:target-current { /* active dot */ }

.carousel::scroll-button(left) { content: "\25C4" / "Previous"; }
.carousel::scroll-button(right) { content: "\25BA" / "Next"; }
```

**Use instead of**: JavaScript carousels, tab components, scroll spy

---

#### ✅ scroll-margin & scroll-padding (2021)
**Status**: 🟢 Widely Available

```css
/* ❌ WRONG — section scrolls behind fixed nav */
.main-nav { position: fixed; block-size: 4rem; }

/* ✅ CORRECT — offset scroll target by nav height */
:root { --nav-block-size: 4rem; }
html { scroll-padding-block-start: var(--nav-block-size); }
/* or per-element: */
section[id] { scroll-margin-block-start: var(--nav-block-size); }
```

**Rule**: When a fixed/sticky nav obscures anchor-linked sections, always set `scroll-padding-block-start` on the scroll container (or `scroll-margin-block-start` on targets). Use logical properties.

**Use instead of**: JavaScript `scrollIntoView` offset hacks, negative margin + padding tricks

---

#### ✅ Popover API (2024)
**Status**: 🔵 Newly Available

```css
[popover]:popover-open { display: block; }
[popover]::backdrop { background: rgb(0 0 0 / 0.3); }
```

HTML: `<button popovertarget="menu">Open</button><div id="menu" popover>...</div>`

**Use instead of**: JavaScript toggle logic, z-index stacking

---

#### ✅ Invoker Commands (2025)
**Status**: 🟣 Experimental

HTML: `<button commandfor="dialog" command="show-modal">Open</button>`

**Use instead of**: JavaScript event listeners for dialog/popover triggers

---

#### ✅ Interest Invokers (2025)
**Status**: 🟣 Experimental

```html
<button interestfor="tooltip">Hover me</button>
<div id="tooltip" popover="hint">Tooltip content</div>
```

```css
[interestfor] { interest-delay: 300ms 600ms; }
```

**Use instead of**: JavaScript mouseenter/mouseleave handlers for hover tooltips and previews

---

#### ✅ Dialog Best Practices
**Rule**: Always lock body scroll when a `<dialog>` is open, and use `scrollbar-gutter: stable` to prevent layout shift from the scrollbar disappearing.

```css
/* ❌ WRONG — background scrolls behind open dialog */
dialog[open] {
  /* ... styles only ... */
}

/* ✅ CORRECT — lock scroll + preserve scrollbar space */
html:has(dialog[open]) {
  overflow: hidden;
  scrollbar-gutter: stable;
}
```

MDN: [scrollbar-gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)

**Why `scrollbar-gutter: stable`**: When `overflow: hidden` removes the scrollbar, page content shifts. `scrollbar-gutter: stable` reserves the scrollbar space even when scrollbar is not visible, preventing layout jank.

---

### Visual (2025)

#### ✅ corner-shape (2025)
**Status**: 🟣 Experimental (Chrome 139+)

```css
.squircle { border-radius: 20%; corner-shape: squircle; }
.bevel    { border-radius: 1rem; corner-shape: bevel; }
.scoop    { border-radius: 2rem; corner-shape: scoop; }
.notch    { border-radius: 1rem; corner-shape: notch; }
```

**Use instead of**: SVG/clip-path workarounds for non-round corners

---

#### ✅ Gap Decorations — column-rule & row-rule (2025)
**Status**: 🟣 Experimental (Chrome 139+); `column-rule` in multicol is 🟢 Widely Available

```css
/* Grid with vertical + horizontal separators */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  column-rule: 1px solid oklch(0.85 0 0);
  row-rule: 1px solid oklch(0.85 0 0);
}

/* Flex nav with dividers */
.nav {
  display: flex;
  gap: 1rem;
  column-rule: 1px solid oklch(0.8 0 0);
}
```

**Use instead of**: Border hacks, pseudo-elements, or `<hr>` elements for visual separators between grid/flex items

---

#### ✅ clip-path: shape() (2025)
**Status**: 🟣 Experimental (Chrome 135+, Safari 18.4+)

```css
/* Responsive curved clip — uses CSS units, not SVG px */
.wave {
  clip-path: shape(
    from 0% 0%,
    line to 100% 0%,
    line to 100% 80%,
    curve to 0% 80% with 50% 100%,
    close
  );
}
```

**Commands**: `from`, `line to`, `curve to` (quadratic/cubic), `arc to`, `hline to`, `vline to`, `close`

**Use instead of**: SVG `path()` in clip-path (fixed px, not responsive), complex polygon approximations of curves

---

#### ✅ overflow: clip + overflow-clip-margin (2022-2024)
**Status**: overflow: clip 🔵 Newly Available; overflow-clip-margin 🟡 Limited Availability

```css
/* ❌ WRONG — overflow: hidden clips focus outlines and shadows */
.form-group {
  overflow: hidden;
}

/* ✅ CORRECT — overflow: clip with margin preserves visual effects */
.form-group {
  overflow: clip;
  overflow-clip-margin: 4px;           /* room for outline + offset */
}
```

**Rule**: When a user has clipped focus rings, box-shadows, or badges — always suggest `overflow: clip` + `overflow-clip-margin` instead of `overflow: hidden`. It clips without creating a scroll container and allows visual breathing room.

**Use instead of**: `overflow: hidden` when focus outlines, shadows, or decorative elements get cut off

---

### Sizing & Interpolation (2024-2025)

#### ✅ interpolate-size (2024)
**Status**: 🟣 Experimental

```css
:root { interpolate-size: allow-keywords; }

.panel {
  block-size: 0;
  transition: block-size 0.3s;
}
.panel.open { block-size: auto; }
```

**Use instead of**: JavaScript height measurement for expand/collapse

---

#### ✅ stretch Sizing Keyword (2025)
**Status**: 🟡 Limited Availability

```css
/* ❌ WRONG — 100% + margin = overflow */
.input { inline-size: 100%; margin-inline: 1rem; }

/* ✅ CORRECT — stretch accounts for margins */
.input { inline-size: stretch; margin-inline: 1rem; }
```

**Use instead of**: `width: 100%` + margin (overflow), `calc(100% - 2rem)` workarounds, `-webkit-fill-available`

---

#### ✅ text-box-trim & text-box-edge (2025)
**Status**: 🟡 Limited Availability

```css
/* Pixel-perfect optical centering */
.button {
  padding-block: 0.75rem;
  text-box: trim-both cap alphabetic;
}
```

**Use instead of**: Manual line-height hacks, negative margins for text alignment

---

### 3D Transforms (2022)

#### ✅ perspective + preserve-3d
**Status**: 🟢 Widely Available

```css
/* 3D scene setup */
.scene { perspective: 800px; }

.cube {
  transform-style: preserve-3d;
}

.cube__face {
  backface-visibility: hidden;
  rotate: y 90deg;
  translate: 0 0 var(--half);
}

/* 3D carousel — items in a circle */
.carousel {
  --items: 6;
  --radius: calc(var(--item-size) / 2 / tan(180deg / var(--items)));
}

.carousel__item {
  rotate: y calc(360deg / var(--items) * var(--i));
  translate: 0 0 var(--radius);
}
```

**3D property chain**: `perspective` (parent) → `transform-style: preserve-3d` (container) → `backface-visibility: hidden` (faces) → `rotate` / `translate` (positioning).

**Flattening gotchas**: `overflow: hidden`, `opacity < 1`, `filter`, `contain: paint`, `clip-path`, `mask` on a `preserve-3d` element will BREAK 3D. Use `overflow: clip` instead.

**Use instead of**: WebGL / JavaScript animation libraries for 3D UI effects (cubes, carousels, card flips, tilt effects)

---

### Responsive (2024-2025)

#### ✅ Scroll State Queries (2025)
**Status**: 🟣 Experimental (Chrome 133+)

```css
.container { container-type: scroll-state; }

@container scroll-state(stuck: top) {
  .header { box-shadow: 0 2px 8px rgb(0 0 0 / 0.15); }
}

@container scroll-state(snapped: inline) {
  .slide > * { opacity: 1; }
}
```

**Use instead of**: JavaScript IntersectionObserver for sticky/snap detection

---

### Accessibility (2020+)

#### ✅ prefers-reduced-motion (MANDATORY)
**Status**: 🟢 Widely Available

**Rule**: Every animation, transition, and scroll effect MUST have a `prefers-reduced-motion: reduce` override. This is not optional — it is a WCAG 2.1 AA requirement.

```css
/* ❌ WRONG — animation with no motion preference check */
.card {
  animation: slide-in 0.5s ease;
}

/* ✅ CORRECT — motion-safe approach (opt-in) */
.card {
  opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
  .card {
    animation: slide-in 0.5s ease;
  }
}

/* ✅ ALSO CORRECT — opt-out approach */
.card {
  animation: slide-in 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}

/* Smooth scroll — ALWAYS gate behind motion preference */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

**Apply to**: All `animation`, `transition`, `scroll-behavior: smooth`, view transitions, scroll-driven animations, `@starting-style` entry effects, 3D rotations, parallax

**Related queries**:
- `prefers-contrast: more | less` — high/low contrast needs (🟢)
- `prefers-reduced-transparency: reduce` — solid backgrounds over glass effects (🔵)
- `forced-colors: active` — Windows High Contrast mode, use system colors (🟢)

---

## Feature Detection

When using experimental features, provide fallbacks:

```css
/* Fallback */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Modern */
@supports (container-type: inline-size) {
  .container {
    container-type: inline-size;
    max-inline-size: 100%;
  }
}
```

---

## Baseline Status Guide

When suggesting features, always mention baseline status:

- **🟢 Widely Available** (95%+ support): Use confidently
- **🔵 Newly Available** (85-94% support): Safe for most modern projects
- **🟡 Limited Availability** (70-84% support): Use with progressive enhancement
- **🟣 Experimental** (<70% support): Bleeding edge, use cautiously

---

## Modernization Priority

Replace these old patterns with modern alternatives:

| ❌ Old Pattern | ✅ Modern Alternative | Status |
|---------------|---------------------|--------|
| Floats for layout | Flexbox, Grid | 🟢 |
| `@media` for components | `@container` | 🔵 |
| `100vh` | `100dvb` | 🔵 |
| `prefers-color-scheme` duplicated | `light-dark()` | 🔵 |
| JavaScript scroll listeners | `animation-timeline: view()` | 🔵 |
| JavaScript tooltip positioning | Anchor Positioning | 🟡 |
| `z-index: 9999` wars | `isolation: isolate` + small z-index scale | 🟢 |
| `overflow: hidden` (clips outlines) | `overflow: clip` + `overflow-clip-margin` | 🔵 |
| JS scroll offset for fixed nav | `scroll-padding-block-start` / `scroll-margin-block-start` | 🟢 |
| Sass/Less nesting | Native CSS nesting | 🔵 |
| `:focus` outlines | `:focus-visible` | 🟢 |
| Manual color variations | `color-mix()` | 🔵 |
| `left/right/top/bottom` | `inset-inline/block` | 🟢 |
| JavaScript carousels/tabs | CSS Carousel pseudo-elements | 🟣 |
| JavaScript toggle for popovers | Popover API + `popovertarget` | 🔵 |
| JS height measurement for expand | `interpolate-size: allow-keywords` | 🟣 |
| JS IntersectionObserver for sticky | `@container scroll-state(stuck:)` | 🟣 |
| JS entry animations | `@starting-style` + `allow-discrete` | 🔵 |
| `opacity: 0` workarounds | `@starting-style` for display changes | 🔵 |
| Inline `--i` + nth-child stagger | `sibling-index()` / `sibling-count()` | 🟣 |
| JS mouseenter/leave for tooltips | `interestfor` + `interest-delay` | 🟣 |
| `line-height: 1` text centering | `text-box: trim-both cap alphabetic` | 🟡 |
| `width: 100%` + margin overflow | `inline-size: stretch` | 🟡 |
| Animations without motion check | `prefers-reduced-motion: reduce` override | 🟢 |
| `overflow: hidden` for glassmorphism | `prefers-reduced-transparency: reduce` solid fallback | 🔵 |

---

## Validation Checklist

Before suggesting CSS, ask:

- [ ] Is there a 2021+ feature that solves this better?
- [ ] Am I using container queries instead of media queries for components?
- [ ] Am I using logical properties and viewport units?
- [ ] Am I using `light-dark()` for theming?
- [ ] Am I using scroll-driven animations instead of JavaScript?
- [ ] Am I using `:has()` for parent/sibling selectors?
- [ ] Have I checked the baseline status?
- [ ] Does every animation/transition have a `prefers-reduced-motion` override?
- [ ] Do glass/transparency effects have a `prefers-reduced-transparency` fallback?
- [ ] Does the design work in `forced-colors` mode?

---

## Remember

**Modern CSS is not just about new features—it's about better patterns, better performance, and better developer experience.**

Stay current with MDN, web.dev, and CSS Baseline to provide cutting-edge solutions.
