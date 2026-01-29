# Repository Guidelines

## Project Structure & Module Organization

- `SKILL.md` defines the CSS-first skill behavior, scope, and references.
- `css-demos/` contains production-ready CSS examples grouped by topic (see `css-demos/INDEX.md`).
- `rules/` documents behavioral rules (e.g., CSS-only enforcement, logical properties first).
- `references/` holds supporting docs (e.g., live MDN fetch workflow).

## Build, Test, and Development Commands

This repo is documentation and CSS demos only—there is no build system or test runner configured.
- Review demos by opening the CSS files in a simple HTML scaffold or your preferred playground.
- Keep `css-demos/INDEX.md` in sync when adding or removing demos.

Example manual check:
```sh
open css-demos/animation/view-transitions.css
```

## Coding Style & Naming Conventions

- Indentation: 2 spaces in Markdown, 2 spaces in CSS examples.
- Prefer logical properties and modern CSS features (2021–2025).
- Naming:
  - Demo files: `css-demos/<category>/<kebab-case>.css`
  - Markdown sections: Title Case headings.
- Demos should be self-documenting with brief, high-signal comments and MDN links.

## Testing Guidelines

- No automated tests.
- When adding demos, verify:
  - The example works in a modern browser.
  - Baseline status and support notes are accurate in the file header.
  - `css-demos/INDEX.md` includes the new demo with a short description.

## Commit & Pull Request Guidelines

- Commit messages follow a Conventional Commits style: `type: short summary`.
  - Examples: `docs: add new layout demo`, `chore: update references`.
- PRs should include:
  - A brief description of the change.
  - Links to relevant MDN pages if you added or updated CSS features.
  - Screenshot or GIF for visual demos when behavior is easier to see than to describe.

## Agent-Specific Notes

- Keep changes aligned with the rules in `rules/`.
- If a change affects Baseline status or browser support, update the relevant demo headers and `css-demos/INDEX.md`.
