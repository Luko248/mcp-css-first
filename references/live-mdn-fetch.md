# Live MDN Fetch Workflow

CSS demo headers contain static baseline snapshots (with a `Last verified` date). Use this workflow to fetch **real-time** data whenever:

- A user asks about Baseline status or browser support
- A user asks which features are newly available
- A demo header's `Last verified` date is older than 3 months
- You are unsure whether a static snapshot is still accurate

---

## Step 1 — Look Up Feature in web-features Dataset

**Source of truth for Baseline status.**

Fetch: `https://unpkg.com/web-features/data.json`

The JSON is keyed by feature ID. Look up the feature by searching for its name or related CSS property in `compat_features`.

### How to Read the Status

```
data["<feature-id>"].status.baseline
```

| `status.baseline` | Skill Label | Meaning |
|---|---|---|
| `"high"` | 🟢 Widely Available | Supported across all major engines for 30+ months |
| `"low"` | 🔵 Newly Available | Supported across all major engines, but recently |
| `false` | 🟡 Limited or 🟣 Experimental | Not yet baseline — check browser support to decide |

### Dates

- `status.baseline_low_date` — when the feature first became Baseline (all engines)
- `status.baseline_high_date` — when it became Widely Available (30 months after low)

### Browser Versions

```
data["<feature-id>"].status.support
→ { "chrome": "105", "firefox": "110", "safari": "16" }
```

### Common Feature IDs for This Skill

#### Layout & Sizing
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| Container Queries | `container-queries` | `css.at-rules.container` |
| Container Style Queries | `container-queries-style` | — |
| `:has()` | `has` | `css.selectors.has` |
| CSS Nesting | `nesting` | `css.selectors.nesting` |
| Subgrid | `subgrid` | `css.properties.grid-template-columns.subgrid` |
| `isolation` | `isolation` | `css.properties.isolation` |
| `stretch` keyword | `stretch-sizing` | `css.properties.width.stretch` |
| Dynamic viewport units | `viewport-units` | `css.types.length.svh` |

#### Animation & Transitions
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| View Transitions | `view-transitions` | `css.properties.view-transition-name` |
| Nested view transition groups | `view-transition-group` | `css.properties.view-transition-group` |
| Scroll-driven Animations | `scroll-driven-animations` | `css.properties.animation-timeline` |
| `@starting-style` | `starting-style` | `css.at-rules.starting-style` |
| `interpolate-size` | `interpolate-size` | `css.properties.interpolate-size` |

#### Interaction
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| Popover API | `popover` | `api.HTMLElement.popover` |
| Invoker commands | `invokers` | `html.elements.button.command` |
| Interest invokers | `interest-invokers` | `html.elements.button.interestfor` |
| `overscroll-behavior` | `overscroll-behavior` | `css.properties.overscroll-behavior` |
| `scroll-margin` | `scroll-margin` | `css.properties.scroll-margin` |
| `scroll-padding` | `scroll-padding` | `css.properties.scroll-padding` |
| Anchor Positioning | `anchor-positioning` | `css.properties.anchor-name` |
| Scroll state queries | `scroll-state-queries` | `css.at-rules.container.scroll-state` |
| Customizable select | `customizable-select` | `css.properties.appearance.base-select` |

#### Visual & Color
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| `light-dark()` | `light-dark` | `css.types.color.light-dark` |
| `color-mix()` | `color-mix` | `css.types.color.color-mix` |
| Relative color syntax | `relative-color` | `css.types.color.rgb.relative` |
| `backdrop-filter` | `backdrop-filter` | `css.properties.backdrop-filter` |
| `mix-blend-mode` | `mix-blend-mode` | `css.properties.mix-blend-mode` |
| `corner-shape` | `corner-shape` | `css.properties.corner-shape` |
| `clip-path: shape()` | `clip-path-shape` | `css.types.basic-shape.shape` |
| Gap decorations | `gap-decorations` | `css.properties.row-rule` |
| `text-box-trim` | `text-box-trim` | `css.properties.text-box-trim` |
| `overflow: clip` | `overflow-clip` | `css.properties.overflow.clip` |
| `overflow-clip-margin` | `overflow-clip-margin` | `css.properties.overflow-clip-margin` |
| `:user-valid` | `user-valid-pseudo` | `css.selectors.user-valid` |

#### Functions
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| `if()` | `css-if` | `css.types.if` |
| `@function` | `css-function` | `css.at-rules.function` |
| Advanced `attr()` | `attr-type` | `css.types.attr.type-or-unit` |
| `contrast-color()` | `contrast-color` | `css.types.color.contrast-color` |
| Trig functions | `trig-functions` | `css.types.sin` |
| `sibling-index()` | `sibling-index` | `css.types.sibling-index` |
| `sibling-count()` | `sibling-count` | `css.types.sibling-count` |

#### Specificity & Cascade
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| `@layer` | `cascade-layers` | `css.at-rules.layer` |
| `@scope` | `scope` | `css.at-rules.scope` |

#### Accessibility
| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| `prefers-reduced-motion` | `prefers-reduced-motion` | `css.at-rules.media.prefers-reduced-motion` |
| `prefers-contrast` | `prefers-contrast` | `css.at-rules.media.prefers-contrast` |
| `prefers-reduced-transparency` | `prefers-reduced-transparency` | `css.at-rules.media.prefers-reduced-transparency` |
| `forced-colors` | `forced-colors` | `css.at-rules.media.forced-colors` |

> **Note**: Some experimental features may not yet have a web-features ID. If you can't find the feature ID, search the JSON for the CSS property name within `compat_features` arrays.

---

## Step 2 — Fetch Browser-Compat Data (BCD) for Details

**For per-browser version numbers, partial support flags, and MDN URLs.**

Fetch: `https://unpkg.com/@mdn/browser-compat-data/data.json`

Navigate to the CSS property:

```
data.css.properties["<property-name>"].__compat
→ {
    mdn_url: "https://developer.mozilla.org/...",
    support: {
      chrome: [{ version_added: "105" }],
      firefox: [{ version_added: "110" }],
      safari: [{ version_added: "16" }]
    },
    status: {
      experimental: true/false,
      standard_track: true/false,
      deprecated: false
    }
  }
```

Use `status.experimental` to distinguish 🟡 Limited (not experimental but not baseline) from 🟣 Experimental.

---

## Step 3 — Fetch MDN Page for Current Documentation

For each feature, open its `mdn_url` from BCD and extract:

1. **What it is** — one-sentence summary
2. **Syntax** — current valid values
3. **Caveats** — any known issues, partial implementations
4. **Compatibility** — cross-reference with Baseline from Step 1

---

## Step 4 — Cross-reference with Demo Headers

Compare fetched data against the static header in the relevant `css-demos/*.css` file:

```css
/**
 * ...
 * Baseline: 🟣 Experimental     ← compare with Step 1
 * Support: Chrome 139+           ← compare with Step 2
 * Last verified: 2025-06         ← is this stale?
 */
```

### Decision Table

| Fetched Status | Demo Header Says | Action |
|---|---|---|
| `baseline: "high"` | 🟡 or 🔵 | Update header to 🟢 Widely Available |
| `baseline: "low"` | 🟡 or 🟣 | Update header to 🔵 Newly Available |
| `baseline: false`, not experimental | 🟣 | Update header to 🟡 Limited Availability |
| Same as header | Same | No update needed |

When reporting to the user, **always use the freshly fetched data**, not the static header.

---

## Step 5 — Listing Newly Available Features

When a user asks "what CSS features became newly available?":

1. Fetch `https://unpkg.com/web-features/data.json`
2. Filter entries where `status.baseline === "low"`
3. Sort by `status.baseline_low_date` descending (most recent first)
4. Filter to CSS-related entries (`group` includes `"css"`)
5. Present with dates, browser versions, and MDN links

---

## Rules

- **Always fetch fresh data** — never rely on cached knowledge or static headers alone
- **Cite sources** — include Baseline status, browser versions, and MDN link in responses
- **Prefer web-features** for Baseline status (it is the official source of truth)
- **Prefer BCD** for per-browser version numbers
- **Prefer MDN pages** for syntax docs and caveats
- **Report discrepancies** — if fetched data contradicts a demo header, tell the user and note the header should be updated
