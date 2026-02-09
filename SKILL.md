---
name: css-first
description: CSS-first expert guidance with live MDN Baseline and feature data. Use when asked about CSS implementations, modern CSS features, browser support, Baseline status, or when listing newly available web platform features.
---

# CSS First Agent Skill

An intelligent AI agent skill for providing context-aware, modern CSS-first solutions with semantic analysis and framework detection.

## Description

This skill transforms any AI agent into a CSS-first expert that enforces zero-JavaScript solutions using cutting-edge CSS features (2021-2025). The agent analyzes user intent, detects project context, and provides intelligently ranked CSS suggestions with implementation guidance.

**Core Capabilities**:
- **Semantic Intent Recognition**: Understands layout, animation, spacing, responsive, visual, and interaction intents
- **Framework Detection**: Automatically detects React, Vue, Angular, Svelte, Tailwind, Bootstrap, etc.
- **Logical-First Approach**: Prioritizes writing-mode aware properties for internationalization
- **MDN Integration**: Pulls live browser support data and baseline status
- **Intelligent Ranking**: Scores suggestions by intent match, browser support, and framework compatibility

## When to Use This Skill

Use this skill when:
- User asks for UI implementation solutions
- User needs to center elements, create layouts, add animations
- User wants responsive design patterns
- User asks about CSS properties or browser support
- User needs modern CSS alternatives to JavaScript solutions

## Live MDN Fetch Workflow

Use the live fetch workflow defined in `references/live-mdn-fetch.md` whenever Baseline status, newly available features, or current MDN content is requested.

## Rules & Guidelines

All behavior rules are documented in `references/rules/`:

| Rule | File | Summary |
|------|------|---------|
| CSS-Only Enforcement | [`references/rules/css-only-enforcement.md`](references/rules/css-only-enforcement.md) | Always prioritize CSS over JavaScript |
| Logical Properties First | [`references/rules/logical-properties-first.md`](references/rules/logical-properties-first.md) | Use `inline-size` over `width`, etc. |
| Modern CSS Features | [`references/rules/modern-css-features.md`](references/rules/modern-css-features.md) | Prioritize 2021-2025 features with baseline |
| Semantic Intent Analysis | [`references/rules/semantic-intent-analysis.md`](references/rules/semantic-intent-analysis.md) | Detect user intent before suggesting solutions |
| Framework Awareness | [`references/rules/framework-awareness.md`](references/rules/framework-awareness.md) | Auto-detect and adapt to project frameworks |
| Browser Support | [`references/rules/browser-support-consideration.md`](references/rules/browser-support-consideration.md) | Always provide baseline status indicators |
| Progressive Enhancement | [`references/rules/progressive-enhancement.md`](references/rules/progressive-enhancement.md) | Core functionality first, enhancements on top |

## CSS Demos

Production-ready CSS examples organized by category. See [`css-demos/INDEX.md`](css-demos/INDEX.md) for the full catalog with MDN links, baseline status, and browser support percentages.

## Browser Support Levels

- **🟢 Widely Available** (95%+): Safe for production use
- **🔵 Newly Available** (85-94%): Recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%): Use with progressive enhancement
- **🟣 Experimental** (<70%): Cutting-edge features, use cautiously

## Quick Reference

| User Intent | CSS Solution | Demo File |
|-------------|--------------|-----------|
| Center element | Flexbox/Grid | `css-demos/layout/centering-logical.css` |
| Responsive layout | Container Queries | `css-demos/responsive/container-queries.css` |
| Dark mode | `light-dark()` | `css-demos/theming/light-dark-function.css` |
| Page transitions | View Transitions | `css-demos/animation/view-transitions.css` |
| Scroll effects | Scroll-driven | `css-demos/animation/scroll-driven.css` |
| Tooltips | Anchor Positioning | `css-demos/positioning/anchor-positioning.css` |
| Spacing | Logical Properties | `css-demos/layout/logical-spacing.css` |
| Carousel / Slider | CSS Carousel | `css-demos/interaction/css-carousel.css` |
| Tabs | CSS Carousel | `css-demos/interaction/css-carousel.css` |
| Scroll spy | CSS Carousel | `css-demos/interaction/css-carousel.css` |
| Form validation | `:user-valid`/`:user-invalid` | `css-demos/visual/form-validation.css` |

## See Also

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS Baseline**: https://web.dev/baseline/
