# CSS-First Agent Skill

An intelligent AI agent skill for providing context-aware, modern CSS-first solutions with semantic analysis and framework detection.

## Overview

This skill transforms any AI agent into a CSS-first expert that enforces zero-JavaScript solutions using cutting-edge CSS features (2021-2025). The agent analyzes user intent, detects project context, and provides intelligently ranked CSS suggestions with implementation guidance.

**Core Capabilities:**
- **Semantic Intent Recognition**: Understands layout, animation, spacing, responsive, visual, and interaction intents
- **Framework Detection**: Automatically detects React, Vue, Angular, Svelte, Tailwind, Bootstrap, etc.
- **Logical-First Approach**: Prioritizes writing-mode aware properties for internationalization
- **MDN Integration**: Pulls live browser support data and baseline status
- **Intelligent Ranking**: Scores suggestions by intent match, browser support, and framework compatibility

## Repository Structure

```
.
├── SKILL.md                    # Main skill definition and integration guide
├── CLAUDE.md                   # Claude Code-specific guidance
├── rules/                      # Behavioral rules for agent decision-making
│   ├── css-only-enforcement.md
│   ├── logical-properties-first.md
│   ├── modern-css-features.md
│   ├── semantic-intent-analysis.md
│   ├── framework-awareness.md
│   ├── browser-support-consideration.md
│   └── progressive-enhancement.md
├── css-demos/                  # Production-ready CSS examples
│   ├── INDEX.md               # Catalog of all examples
│   ├── layout/
│   ├── responsive/
│   ├── animation/
│   ├── theming/
│   ├── positioning/
│   ├── interaction/
│   └── visual/
└── references/
    └── live-mdn-fetch.md      # Workflow for fetching current MDN data
```

### Core Components

**Rules (`rules/`)**

Detailed behavioral guidelines that define how agents should analyze requests and provide solutions:

- `css-only-enforcement.md` - Always prioritize CSS solutions over JavaScript
- `logical-properties-first.md` - Use `inline-size` instead of `width`, etc.
- `modern-css-features.md` - Prioritize 2021-2025 CSS features
- `semantic-intent-analysis.md` - Detect user intent before suggesting solutions
- `framework-awareness.md` - Auto-detect and adapt to project frameworks
- `browser-support-consideration.md` - Always provide baseline status indicators
- `progressive-enhancement.md` - Core functionality first, enhancements on top

**CSS Demos (`css-demos/`)**

Production-ready CSS examples organized by category. Each file includes:
- Direct MDN documentation links
- Baseline status (🟢 Widely Available, 🔵 Newly Available, 🟡 Limited, 🟣 Experimental)
- Browser support percentage
- Task description and rationale
- Clean, commented CSS code

Categories: Layout, Responsive, Animation, Theming, Positioning, Interaction, Visual

**References (`references/`)**

Live data fetch workflows:
- `live-mdn-fetch.md` - Instructions for fetching current MDN Baseline status and feature data

## Baseline Status Indicators

- **🟢 Widely Available** (95%+): Safe for production use
- **🔵 Newly Available** (85-94%): Recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%): Use with progressive enhancement
- **🟣 Experimental** (<70%): Cutting-edge features, use cautiously

## Core Principles

1. **CSS-Only**: Never suggest JavaScript when CSS can solve the problem
2. **Logical Properties**: Always prefer `inline-size` over `width`, `block-size` over `height`
3. **Modern First**: Prioritize 2021-2025 CSS features with baseline status
4. **Progressive Enhancement**: Core functionality works everywhere, enhancements layer on top
5. **Framework Aware**: Adapt recommendations to detected frameworks
6. **Semantic Analysis**: Understand user intent before suggesting solutions

## Quick Reference

| User Intent | CSS Solution | Demo File |
|-------------|--------------|-----------|
| Center element | Flexbox/Grid | `layout/centering-logical.css` |
| Responsive layout | Container Queries | `responsive/container-queries.css` |
| Dark mode | light-dark() | `theming/light-dark-function.css` |
| Page transitions | View Transitions | `animation/view-transitions.css` |
| Scroll effects | Scroll-driven | `animation/scroll-driven.css` |
| Tooltips | Anchor Positioning | `positioning/anchor-positioning.css` |
| Carousel | Scroll Snap | `interaction/carousel-scroll-snap.css` |
| Form validation | :user-valid/:user-invalid | `visual/form-validation.css` |

## Usage

This skill is designed to be loaded into AI agents (Claude Code, custom agents, etc.). The agent will:

1. Analyze user requests for UI/CSS-related tasks
2. Detect user intent (layout, animation, responsive, etc.)
3. Identify project framework (React, Vue, Angular, etc.)
4. Provide modern CSS-first solutions with baseline status
5. Offer framework-specific implementation guidance
6. Include progressive enhancement fallbacks when needed

### Example Integration

When a user asks: *"How do I create a dark mode toggle?"*

The agent will:
- Detect intent: theming
- Reference: `rules/css-only-enforcement.md`, `theming/light-dark-function.css`
- Suggest: CSS `light-dark()` function (🔵 Newly Available - 90%)
- Provide: Framework-specific implementation if framework detected
- Include: Fallback using `@supports` or media queries

## Contributing

### Adding New CSS Demos

1. Choose appropriate category folder in `css-demos/`
2. Follow the established file structure:

```css
/**
 * Feature Name
 *
 * MDN: [Direct link to MDN documentation]
 * Baseline: [🟢/🔵/🟡/🟣 Status]
 * Support: [Percentage and browser versions]
 *
 * Task: [Brief description of what it does]
 * Why: [Rationale for this approach]
 */

/* Clean, commented CSS code */
```

3. Use modern CSS features (2021-2025)
4. Use logical properties throughout
5. Update `css-demos/INDEX.md` with new entry

### Adding New Rules

1. Create new `.md` file in `rules/` folder
2. Include clear examples with ❌ WRONG and ✅ CORRECT patterns
3. Explain the principle and when to apply it
4. Provide validation checklist
5. Reference in `SKILL.md` if needed

### Guidelines

- **Modern First**: Prioritize CSS features from 2021-2025
- **Logical Properties**: Always use `inline-size`, `margin-inline`, etc.
- **No JavaScript**: Unless truly impossible (API calls, state management)
- **Include Baseline**: Always show browser support status
- **Progressive Enhancement**: Provide fallbacks for experimental features
- **MDN Links**: Always link to official MDN documentation

## License

MIT

## Resources

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS Baseline**: https://web.dev/baseline/
- **Web Features Dataset**: https://unpkg.com/web-features/data.json
- **Browser Compat Data**: https://unpkg.com/@mdn/browser-compat-data/data.json
