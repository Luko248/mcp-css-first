# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A CSS-First Agent Skill — a knowledge base of rules, CSS demos, and references that AI agents consume. See `SKILL.md` for the full skill definition, capabilities, and quick reference table.

## Development Notes

This is a knowledge base repository with no build process or test runner. All content is static markdown and CSS files meant to be read by AI agents.

## Coding Style & Naming Conventions

- Indentation: 2 spaces in Markdown, 2 spaces in CSS examples
- Prefer logical properties and modern CSS features (2021-2025)
- Demo files: `css-demos/<category>/<kebab-case>.css`
- Markdown sections: Title Case headings
- Demos should be self-documenting with brief, high-signal comments and MDN links
- When a browser MCP server (Playwright, Chrome DevTools, Browser MCP) or browser hook is available, use it to verify CSS renders correctly — see `references/rules/browser-verification.md`

## CSS Demo File Structure

All examples in `css-demos/` follow this header format:

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

## Adding New CSS Demos

1. Choose appropriate category folder in `css-demos/`
2. Follow the header format above
3. Use modern CSS features (2021-2025) and logical properties throughout
4. Update `css-demos/INDEX.md` with new entry
5. Verify the example works in a modern browser

## Adding New Rules

1. Create new `.md` file in `references/rules/`
2. Include clear examples with wrong and correct patterns
3. Explain the principle and when to apply it
4. Provide validation checklist
5. Reference in `SKILL.md` rules table

## Commit & Pull Request Guidelines

- Commit messages follow Conventional Commits: `type: short summary`
  - Examples: `docs: add new layout demo`, `chore: update references`
- PRs should include:
  - A brief description of the change
  - Links to relevant MDN pages if you added or updated CSS features
  - Screenshot or GIF for visual demos when behavior is easier to see than to describe

## Key Paths

- `SKILL.md` — Main skill definition (capabilities, rules table, quick reference)
- `references/rules/` — Behavioral rules (7 files)
- `references/live-mdn-fetch.md` — Live MDN data fetch workflow
- `css-demos/INDEX.md` — Catalog of all 47 CSS examples with metadata

## CSS Demo Categories

- `css-demos/layout/` — Centering, spacing, subgrid, `:has()`, nesting, grid lanes, isolation/stacking, stretch
- `css-demos/responsive/` — Media queries, `@supports`, viewport units (sv/lv/dv)
- `css-demos/container/` — Size queries, style queries, scroll-state queries, anchored queries
- `css-demos/animation/` — View transitions (+ nested groups), scroll-driven, scroll-triggered, `@starting-style`
- `css-demos/theming/` — `light-dark()`
- `css-demos/positioning/` — Anchor positioning
- `css-demos/interaction/` — CSS carousel, popover, interest invokers, hover queries, overscroll-behavior, scroll-margin/padding, `:target`/`:focus-within`
- `css-demos/visual/` — Form validation, `color-mix()`, relative colors, `backdrop-filter`, `mix-blend-mode`, `corner-shape`, `clip-path: shape()`, gap decorations, `text-box-trim`, `overflow: clip`
- `css-demos/functions/` — `if()`, `@function`, `attr()`, `contrast-color()`, trig functions, `sibling-index()`/`sibling-count()`
- `css-demos/specificity/` — `@layer`, `@scope`
- `css-demos/accessibility/` — `prefers-reduced-motion`, `prefers-contrast`, `prefers-reduced-transparency`, `forced-colors`
- `css-demos/native-customization/` — Customizable `<select>`
