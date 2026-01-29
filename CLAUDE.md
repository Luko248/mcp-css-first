# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **CSS-First Agent Skill** for AI agents - a knowledge base and ruleset that transforms AI assistants into CSS-first experts. The skill enforces zero-JavaScript solutions using cutting-edge CSS features (2021-2025) with semantic analysis, framework detection, and live MDN integration.

## Core Architecture

### Three-Part Knowledge System

1. **Rules (`rules/`)** - Behavioral guidelines that define how to analyze requests and provide solutions
2. **CSS Demos (`css-demos/`)** - Production-ready CSS examples organized by category with MDN links and baseline status
3. **References (`references/`)** - Live data fetch workflows for up-to-date MDN content

### Key Files

- **`SKILL.md`** - Main skill definition and integration guide
- **`rules/css-only-enforcement.md`** - Core principle: always prioritize CSS over JavaScript
- **`rules/logical-properties-first.md`** - Use `inline-size` instead of `width`, etc. for internationalization
- **`rules/modern-css-features.md`** - Prioritize 2021-2025 CSS features with baseline status
- **`rules/semantic-intent-analysis.md`** - Detect user intent (layout, animation, spacing, etc.)
- **`rules/framework-awareness.md`** - Auto-detect React, Vue, Angular, Tailwind, etc.
- **`rules/browser-support-consideration.md`** - Provide baseline status (🟢 🔵 🟡 🟣)
- **`rules/progressive-enhancement.md`** - Core functionality first, enhancements on top
- **`references/live-mdn-fetch.md`** - Workflow for fetching current MDN data and baseline status
- **`css-demos/INDEX.md`** - Catalog of all CSS examples with metadata

## Live MDN Fetch Workflow

When users ask about Baseline status, newly available features, or current MDN content, follow the workflow defined in `references/live-mdn-fetch.md`:

1. Fetch Baseline definition from MDN Glossary
2. Fetch web-features dataset (source of truth for baseline status)
3. Fetch Browser-Compat Data (BCD) for feature metadata
4. Fetch MDN pages for current documentation
5. Always fetch fresh data - never rely on cached knowledge

## CSS Demo Organization

All examples in `css-demos/` follow this structure:

```css
/**
 * [Feature Name]
 *
 * MDN: [Direct MDN link]
 * Baseline: [🟢/🔵/🟡/🟣 Status]
 * Support: [Percentage]
 *
 * Task: [What it does]
 * Why: [Rationale for approach]
 */
```

Categories:
- **layout/** - Centering, spacing, logical properties
- **responsive/** - Container queries, style queries
- **animation/** - View transitions, scroll-driven animations
- **theming/** - Dark mode with `light-dark()` function
- **positioning/** - Anchor positioning for tooltips
- **interaction/** - Carousels with scroll snap
- **visual/** - Form validation with `:user-valid`

## Baseline Status Indicators

- **🟢 Widely Available** (95%+): Safe for production
- **🔵 Newly Available** (85-94%): Recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%): Use with progressive enhancement
- **🟣 Experimental** (<70%): Cutting-edge, use cautiously

## Core Principles (Priority Order)

1. **CSS-Only**: Never suggest JavaScript when CSS can solve the problem
2. **Logical Properties First**: Always use `inline-size` over `width`, `margin-inline` over `margin-left/right`
3. **Modern Features (2021-2025)**: Prioritize recent CSS features with baseline status
4. **Progressive Enhancement**: Core functionality works everywhere, enhancements layer on top
5. **Framework Aware**: Detect and adapt to React, Vue, Angular, Tailwind, etc.
6. **Semantic Analysis**: Understand user intent before suggesting solutions

## When Using This Skill

The skill should activate when users:
- Ask for UI implementation solutions
- Need layout/centering/spacing/animations
- Want responsive design patterns
- Ask about CSS properties or browser support
- Need modern CSS alternatives to JavaScript

## Property Mappings Reference

### Critical Logical Property Substitutions

```css
/* ❌ Physical → ✅ Logical */
width          → inline-size
height         → block-size
margin-left    → margin-inline-start
margin-right   → margin-inline-end
padding-left   → padding-inline-start
padding-right  → padding-inline-end
left/right     → inset-inline-start/end
top/bottom     → inset-block-start/end
100vw          → 100vi
100vh          → 100vb (or 100dvb for dynamic)
10cqw          → 10cqi
text-align: left → text-align: start
```

## Modern CSS Feature Priorities

### Prefer 2024-2025 Features
- Anchor Positioning (🟡 Limited - 75%)
- Container Style Queries (🟡 Limited - 78%)
- `@starting-style` (🔵 Newly Available)

### Prefer 2022-2023 Features
- Container Queries (🔵 Newly Available - 90%)
- View Transitions (🔵 Newly Available - 90%)
- Scroll-Driven Animations (🔵 Newly Available - 88%)
- `light-dark()` function (🔵 Newly Available - 90%)
- `:has()` pseudo-class (🔵 Newly Available)
- CSS Nesting (🔵 Newly Available)
- Dynamic Viewport Units `dvb/dvi` (🔵 Newly Available)

### Prefer 2021 Features
- `:is()` and `:where()` (🟢 Widely Available)
- `:focus-visible` (🟢 Widely Available)
- `accent-color` (🟢 Widely Available)

## Framework Detection

Auto-detect from user messages and provide framework-specific guidance:

- **React**: CSS Modules, `className` prop, Tailwind integration
- **Vue**: `<style scoped>`, `:class` binding, `v-bind` for CSS custom properties
- **Angular**: `ViewEncapsulation`, `[ngClass]`, `:host` selectors
- **Tailwind**: Utility classes, responsive prefixes, `@apply` directive
- **Svelte**: Component-scoped styles, `class:` directive

## Quick Reference Table

| User Intent | CSS Solution | Demo File |
|-------------|--------------|-----------|
| Center element | Flexbox/Grid with logical properties | `layout/centering-logical.css` |
| Responsive layout | Container queries | `responsive/container-queries.css` |
| Dark mode | `light-dark()` function | `theming/light-dark-function.css` |
| Page transitions | View Transitions API | `animation/view-transitions.css` |
| Scroll effects | Scroll-driven animations | `animation/scroll-driven.css` |
| Tooltips | Anchor positioning | `positioning/anchor-positioning.css` |
| Carousel | Scroll snap | `interaction/carousel-scroll-snap.css` |
| Form validation | `:user-valid` / `:user-invalid` | `visual/form-validation.css` |

## Progressive Enhancement Pattern

Always provide fallbacks for experimental features:

```css
/* Base functionality (works everywhere) */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Enhancement (modern browsers) */
@supports (container-type: inline-size) {
  .container {
    container-type: inline-size;
    max-inline-size: 100%;
  }
}
```

## Exceptions to CSS-Only Rule

JavaScript is acceptable ONLY for:
- Fetching data from APIs
- Complex state management across disconnected components
- Real-time updates (WebSockets, SSE)
- Dynamic data manipulation (calculations, filtering large datasets)

Even semantic HTML can eliminate JavaScript needs:
- Use `<details>` for accordions
- Use `<dialog>` for modals
- Native form validation works without JavaScript

## File Structure

```
.
├── SKILL.md                    # Main skill documentation
├── rules/                      # Behavioral rules (7 files)
│   ├── css-only-enforcement.md
│   ├── logical-properties-first.md
│   ├── modern-css-features.md
│   ├── semantic-intent-analysis.md
│   ├── framework-awareness.md
│   ├── browser-support-consideration.md
│   └── progressive-enhancement.md
├── css-demos/                  # Production-ready examples
│   ├── INDEX.md
│   ├── layout/
│   ├── responsive/
│   ├── animation/
│   ├── theming/
│   ├── positioning/
│   ├── interaction/
│   └── visual/
└── references/
    └── live-mdn-fetch.md      # MDN data fetch workflow
```

## Development Notes

This is a knowledge base repository with no build process. All content is static markdown and CSS files meant to be read by AI agents. When making updates:

1. Keep CSS demos minimal and focused on a single concept
2. Always include MDN links, baseline status, and support percentages in demo headers
3. Use modern CSS features and logical properties throughout
4. Update `css-demos/INDEX.md` when adding new demos
5. Follow the established demo file structure with inline comments
