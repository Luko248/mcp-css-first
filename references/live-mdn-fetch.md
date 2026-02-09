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

| CSS Feature | web-features ID | compat_features key |
|---|---|---|
| Container Queries | `container-queries` | `css.at-rules.container` |
| Container Style Queries | `container-queries-style` | — |
| Anchor Positioning | `anchor-positioning` | `css.properties.anchor-name` |
| View Transitions | `view-transitions` | `css.properties.view-transition-name` |
| Scroll-driven Animations | `scroll-driven-animations` | `css.properties.animation-timeline` |
| `:has()` | `has` | `css.selectors.has` |
| CSS Nesting | `nesting` | `css.selectors.nesting` |
| Subgrid | `subgrid` | `css.properties.grid-template-columns.subgrid` |
| `light-dark()` | `light-dark` | `css.types.color.light-dark` |
| `color-mix()` | `color-mix` | `css.types.color.color-mix` |
| `@starting-style` | `starting-style` | `css.at-rules.starting-style` |
| Popover API | `popover` | `api.HTMLElement.popover` |
| `:user-valid` | `user-valid-pseudo` | `css.selectors.user-valid` |

If you can't find the feature ID, search the JSON for the CSS property name within `compat_features` arrays.

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
