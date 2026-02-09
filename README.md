# CSS-First Agent Skill

> Transform any AI agent into a CSS-first expert. Zero-JavaScript solutions using cutting-edge CSS features (2021-2026).

## What It Does

This skill gives AI agents deep knowledge of modern CSS so they provide CSS-only solutions instead of reaching for JavaScript. It includes:

- **7 behavioral rules** — CSS-only enforcement, logical properties, modern features, semantic intent analysis, framework detection, browser support, progressive enhancement
- **10 production-ready CSS demos** — layout, responsive, animation, theming, positioning, interaction, visual
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

| User Intent       | CSS Solution                    | Demo                                             |
| ----------------- | ------------------------------- | ------------------------------------------------ |
| Center element    | Flexbox / Grid                  | `css-demos/layout/centering-logical.css`         |
| Responsive layout | Container Queries               | `css-demos/responsive/container-queries.css`     |
| Dark mode         | `light-dark()`                  | `css-demos/theming/light-dark-function.css`      |
| Page transitions  | View Transitions                | `css-demos/animation/view-transitions.css`       |
| Scroll effects    | Scroll-driven animations        | `css-demos/animation/scroll-driven.css`          |
| Tooltips          | Anchor Positioning              | `css-demos/positioning/anchor-positioning.css`   |
| Carousel / Slider | CSS Carousel                    | `css-demos/interaction/css-carousel.css`         |
| Tabs              | CSS Carousel                    | `css-demos/interaction/css-carousel.css`         |
| Scroll spy        | CSS Carousel                    | `css-demos/interaction/css-carousel.css`         |
| Form validation   | `:user-valid` / `:user-invalid` | `css-demos/visual/form-validation.css`           |

## Structure

```
SKILL.md                          # Skill definition (loaded by agents)
references/
  rules/                          # 7 behavioral rules
  live-mdn-fetch.md               # Live MDN data fetch workflow
css-demos/
  INDEX.md                        # Full catalog with MDN links & baseline status
  layout/                         # Centering, spacing, logical properties
  responsive/                     # Container queries, style queries
  animation/                      # View transitions, scroll-driven animations
  theming/                        # Dark mode with light-dark()
  positioning/                    # Anchor positioning
  interaction/                    # CSS Carousel (slider, tabs, scroll spy)
  visual/                         # Form validation with :user-valid
```

## Baseline Status Indicators

- **🟢 Widely Available** (95%+) — safe for production
- **🔵 Newly Available** (85-94%) — recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%) — use with progressive enhancement
- **🟣 Experimental** (<70%) — cutting-edge, use cautiously

## License

MIT
