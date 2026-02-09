# CSS-First Agent Skill

> Transform any AI agent into a CSS-first expert. Zero-JavaScript solutions using cutting-edge CSS features (2021-2026).

## What It Does

This skill gives AI agents deep knowledge of modern CSS so they provide CSS-only solutions instead of reaching for JavaScript. It includes:

- **7 behavioral rules** — CSS-only enforcement, logical properties, modern features, semantic intent analysis, framework detection, browser support, progressive enhancement
- **22 production-ready CSS demos** — layout, responsive, container queries, animation, theming, positioning, interaction, visual
- **Live MDN integration** — fetch current Baseline status and browser support data on demand

## Features

| Capability                  | Description                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------- |
| Semantic Intent Recognition | Detects layout, animation, spacing, responsive, visual, and interaction intents                         |
| Framework Detection         | Auto-detects React, Vue, Angular, Svelte, Tailwind, Bootstrap                                           |
| Logical Properties First    | Prioritizes `inline-size`, `margin-inline`, etc. for internationalization                               |
| Modern CSS (2021-2025)      | Container queries, view transitions, scroll-driven animations, `light-dark()`, anchor positioning       |
| Browser Support Awareness   | Every suggestion includes Baseline status (Widely Available / Newly Available / Limited / Experimental) |
| Progressive Enhancement     | Core functionality first, enhancements layered with `@supports`                                         |

## Quick Reference

| User Intent          | CSS Solution                    | Demo                                              |
| -------------------- | ------------------------------- | ------------------------------------------------- |
| Center element       | Flexbox / Grid                  | `css-demos/layout/centering-logical.css`          |
| Aligned grids        | Subgrid                         | `css-demos/layout/subgrid.css`                    |
| Parent selection     | `:has()`                        | `css-demos/layout/has-selector.css`               |
| Component styles     | CSS Nesting                     | `css-demos/layout/css-nesting.css`                |
| Responsive layout    | Media queries (range syntax)    | `css-demos/responsive/media-queries.css`          |
| Feature detection    | `@supports`                     | `css-demos/responsive/supports-rule.css`          |
| Container responsive | Container size queries          | `css-demos/container/size-queries.css`            |
| Component theming    | Container style queries         | `css-demos/container/style-queries.css`           |
| Sticky detection     | Scroll state queries            | `css-demos/container/scroll-state-queries.css`    |
| Tooltip arrow flip   | Anchored container queries      | `css-demos/container/anchored-queries.css`        |
| Dark mode            | `light-dark()`                  | `css-demos/theming/light-dark-function.css`       |
| Page transitions     | View Transitions                | `css-demos/animation/view-transitions.css`        |
| Scroll effects       | Scroll-driven animations        | `css-demos/animation/scroll-driven.css`           |
| Entry/exit animation | `@starting-style`               | `css-demos/animation/starting-style.css`          |
| Tooltips             | Anchor Positioning              | `css-demos/positioning/anchor-positioning.css`    |
| Carousel / Tabs      | CSS Carousel                    | `css-demos/interaction/css-carousel.css`          |
| Popovers / Dropdowns | Popover API                     | `css-demos/interaction/popover.css`               |
| Touch vs pointer     | Hover media queries             | `css-demos/interaction/hover-media-queries.css`   |
| Form validation      | `:user-valid` / `:user-invalid` | `css-demos/visual/form-validation.css`            |
| Color variations     | `color-mix()`                   | `css-demos/visual/color-mix.css`                  |
| Modern shapes        | `corner-shape`                  | `css-demos/visual/corner-shape.css`               |

## Structure

```
SKILL.md                          # Skill definition (loaded by agents)
references/
  rules/                          # 7 behavioral rules
  live-mdn-fetch.md               # Live MDN data fetch workflow
css-demos/
  INDEX.md                        # Full catalog with MDN links & baseline status
  layout/                         # Centering, spacing, subgrid, :has(), nesting
  responsive/                     # Media queries (range syntax), @supports
  container/                      # Size, style, scroll-state, anchored queries
  animation/                      # View transitions, scroll-driven, @starting-style
  theming/                        # Dark mode with light-dark()
  positioning/                    # Anchor positioning
  interaction/                    # CSS Carousel, popover, hover media queries
  visual/                         # Form validation, color-mix(), corner-shape
```

## Baseline Status Indicators

- **🟢 Widely Available** (95%+) — safe for production
- **🔵 Newly Available** (85-94%) — recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%) — use with progressive enhancement
- **🟣 Experimental** (<70%) — cutting-edge, use cautiously

## License

MIT
