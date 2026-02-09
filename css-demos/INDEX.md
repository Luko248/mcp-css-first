# CSS Demos Index

All CSS demos are organized by category with direct MDN links, baseline status, and browser support.

## Layout

### [centering-logical.css](layout/centering-logical.css)
**Modern Centering with Logical Properties**
- Baseline: 🟢 Widely Available (99%)
- MDN: [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values), [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- Task: Center a card horizontally and vertically
- Features: align-content, flexbox, grid, place-items, auto margins

### [logical-spacing.css](layout/logical-spacing.css)
**Advanced Logical Spacing**
- Baseline: 🟢 Widely Available (95%)
- MDN: [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- Task: Create responsive spacing that works in any writing mode
- Features: Logical spacing, container units, writing modes

### [subgrid.css](layout/subgrid.css)
**CSS Subgrid**
- Baseline: 🔵 Newly Available (92%)
- MDN: [Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
- Task: Align nested grid items to parent grid tracks
- Features: `grid-template-rows: subgrid`, `grid-template-columns: subgrid`, named lines

### [has-selector.css](layout/has-selector.css)
**:has() Relational Pseudo-Class**
- Baseline: 🔵 Newly Available (92%)
- MDN: [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- Task: Style parents based on children, siblings, or form state
- Features: Parent selection, quantity queries, sibling awareness, form validation

### [css-nesting.css](layout/css-nesting.css)
**Native CSS Nesting**
- Baseline: 🔵 Newly Available (91%)
- MDN: [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- Task: Write component styles with native CSS nesting
- Features: `&` nesting selector, nested media/container queries, compound selectors

---

## Responsive

### [media-queries.css](responsive/media-queries.css)
**Modern Media Queries — Range Syntax + Logical Queries**
- Baseline: 🔵 Newly Available (93%)
- MDN: [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media)
- Task: Write modern, readable media queries with range syntax
- Features: `(width >= 900px)`, `(600px <= width <= 899px)`, preference queries, interaction queries

### [supports-rule.css](responsive/supports-rule.css)
**@supports Feature Detection**
- Baseline: 🟢 Widely Available (98%)
- MDN: [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports)
- Task: Detect CSS feature support and provide progressive enhancement
- Features: Property support, `selector()`, `font-tech()`, `and`/`or`/`not` operators

---

## Container Queries

### [size-queries.css](container/size-queries.css)
**Container Size Queries**
- Baseline: 🔵 Newly Available (90%)
- MDN: [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- Task: Make components responsive to their container, not the viewport
- Features: `container-type: inline-size`, named containers, container units (cqi, cqb, cqw, cqh, cqmin, cqmax)

### [style-queries.css](container/style-queries.css)
**Container Style Queries**
- Baseline: 🟡 Limited Availability (78%)
- MDN: [Style Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@container#querying_custom_properties)
- Task: Style components based on parent custom property values
- Features: `@container style(--prop: value)`, theme switching, component theming

### [scroll-state-queries.css](container/scroll-state-queries.css)
**Scroll State Container Queries**
- Baseline: 🟣 Experimental (Chrome 133+)
- MDN: [Scroll State Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- Task: Style elements based on scroll state (scrollable, stuck, snapped)
- Features: `scroll-state(stuck:)`, `scroll-state(snapped:)`, `scroll-state(scrollable:)`

### [anchored-queries.css](container/anchored-queries.css)
**Anchored Container Queries**
- Baseline: 🟣 Experimental (Chrome 141+)
- Reference: [Chrome Blog](https://developer.chrome.com/blog/anchored-container-queries)
- Task: Query which anchor position fallback is active and adapt styles
- Features: `container-type: anchored`, `@container anchored(fallback:)`, tooltip arrow direction

---

## Animation

### [view-transitions.css](animation/view-transitions.css)
**Smooth Animations with View Transitions**
- Baseline: 🔵 Newly Available (90%)
- MDN: [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- Task: Add smooth page transitions
- Features: View transitions, modern translate property, named transitions

### [scroll-driven.css](animation/scroll-driven.css)
**Scroll-Driven Animations**
- Baseline: 🔵 Newly Available (88%)
- MDN: [Scroll Timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll), [View Timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view)
- Task: Create animation that responds to scroll
- Features: Scroll timeline, view timeline, animation-range

### [starting-style.css](animation/starting-style.css)
**Entry/Exit Animations with @starting-style + interpolate-size**
- Baseline: 🔵 Newly Available (87%)
- MDN: [@starting-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style), [interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size)
- Task: Animate elements entering/exiting the DOM
- Features: `@starting-style`, `transition-behavior: allow-discrete`, `interpolate-size: allow-keywords`, dialog/popover/details animation

---

## Theming

### [light-dark-function.css](theming/light-dark-function.css)
**Dark Mode with light-dark() Function**
- Baseline: 🔵 Newly Available (90%)
- MDN: [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark), [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)
- Task: Implement dark mode support
- Features: light-dark() function, color-scheme property

---

## Positioning

### [anchor-positioning.css](positioning/anchor-positioning.css)
**Anchor Positioning for Tooltips**
- Baseline: 🟡 Limited Availability (75%)
- MDN: [Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)
- Task: Create tooltips positioned relative to elements
- Features: anchor-name, position-anchor, position-area, position-try, @supports fallback

---

## Interaction

### [css-carousel.css](interaction/css-carousel.css)
**CSS Carousel — Slider, Tabs, Scroll Spy, Series**
- Baseline: 🟣 Experimental (Chrome 135+)
- MDN: [CSS Carousel Features](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels)
- Task: Build carousels, tabs, and scroll spy with only CSS
- Features: `::scroll-button()`, `::scroll-marker-group`, `::scroll-marker`, `:target-current`, `:target-before`, `scroll-state()`, anchor positioning
- Patterns: Horizontal slider, tab panels, vertical scroll spy, Netflix-style series grid

### [popover.css](interaction/popover.css)
**Popover API with CSS**
- Baseline: 🔵 Newly Available (91%)
- MDN: [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), [:popover-open](https://developer.mozilla.org/en-US/docs/Web/CSS/:popover-open)
- Task: Create popovers, dropdowns, and tooltips with HTML + CSS only
- Features: `popover` attribute, `:popover-open`, `::backdrop`, anchor positioning, invoker commands, dialog `closedby`

### [hover-media-queries.css](interaction/hover-media-queries.css)
**Hover and Pointer Media Queries**
- Baseline: 🟢 Widely Available (97%)
- MDN: [@media/hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover), [@media/pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer)
- Task: Adapt interaction patterns for touch vs pointer devices
- Features: `@media (hover:)`, `@media (pointer:)`, `@media (any-hover:)`, touch target sizing

---

## Visual

### [form-validation.css](visual/form-validation.css)
**Modern Form with CSS-Only Validation**
- Baseline: 🔵 Newly Available (90%)
- MDN: [:user-valid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid), [:user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
- Task: Style form with validation feedback
- Features: :user-valid, :user-invalid, :focus-visible, :has() form validation

### [color-mix.css](visual/color-mix.css)
**color-mix() Function**
- Baseline: 🔵 Newly Available (91%)
- MDN: [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)
- Task: Create color variations, tints, shades, and transparency from a single base
- Features: `color-mix()` in oklch/srgb, tints, shades, transparency, interactive states

### [corner-shape.css](visual/corner-shape.css)
**CSS corner-shape Property**
- Baseline: 🟣 Experimental (Chrome 139+)
- MDN: [corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)
- Task: Create modern border shapes — bevels, scoops, squircles, notches, tooltip arrows
- Features: `corner-shape` (round, squircle, bevel, scoop, notch, superellipse), tooltip arrow with scoop, animated morphing

---

## Legend

- **🟢 Widely Available** (95%+): Safe for production use
- **🔵 Newly Available** (85-94%): Recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%): Use with progressive enhancement
- **🟣 Experimental** (<70%): Cutting-edge features, use cautiously
