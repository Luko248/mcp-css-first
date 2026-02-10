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

### [grid-lanes-masonry.css](layout/grid-lanes-masonry.css)
**CSS Grid Lanes — Masonry Layout**
- Baseline: 🟣 Experimental (Safari TP 234+, Firefox behind flag)
- WebKit: [Introducing CSS Grid Lanes](https://webkit.org/blog/17660/introducing-css-grid-lanes/)
- Task: Create masonry (waterfall) layouts with pure CSS
- Features: `display: grid-lanes`, `grid-template-columns`, lane spanning, explicit placement, horizontal brick layout, `@supports` fallback

### [isolation-stacking.css](layout/isolation-stacking.css)
**isolation: isolate — Stacking Context Control**
- Baseline: 🟢 Widely Available (97%)
- MDN: [isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
- Task: Fix z-index issues by creating explicit stacking contexts
- Features: `isolation: isolate`, component-scoped z-index, mix-blend-mode containment, z-index scale with custom properties

### [stretch-keyword.css](layout/stretch-keyword.css)
**stretch Sizing Keyword**
- Baseline: 🟡 Limited Availability
- MDN: [stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/stretch)
- Task: Fill containing block while respecting margins
- Features: `inline-size: stretch`, margin-safe full-width, form inputs, sticky bars, comparison vs `100%`, `@supports` fallback

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

### [viewport-units.css](responsive/viewport-units.css)
**Modern Viewport Units — Small, Large, Dynamic**
- Baseline: 🔵 Newly Available (93%)
- Reference: [Viewport Units (web.dev)](https://web.dev/blog/viewport-units)
- MDN: [Viewport-relative lengths](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport)
- Task: Size elements relative to the viewport with mobile-safe units
- Features: `svw/svh/svi/svb`, `lvw/lvh/lvi/lvb`, `dvw/dvh/dvi/dvb`, `*vmin/*vmax`, fluid typography, scroll-snap sections

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
- Features: `scroll-state(stuck:)`, `scroll-state(snapped:)`, `scroll-state(scrollable:)`, breadcrumb scroll mask with `@property` + `mask` edge fade

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
- Features: View transitions, named transitions, scoped view transitions (subtree transitions, concurrent animations), nested view transition groups (`view-transition-group: contain/nearest`, `::view-transition-group-children()`, 3D clipping)

### [scroll-driven.css](animation/scroll-driven.css)
**Scroll-Driven Animations**
- Baseline: 🔵 Newly Available (88%)
- MDN: [Scroll Timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll), [View Timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view)
- Task: Create animation that responds to scroll
- Features: Scroll timeline, view timeline, animation-range

### [scroll-triggered.css](animation/scroll-triggered.css)
**Scroll-Triggered Animations**
- Baseline: 🟣 Experimental (Chrome 145+)
- Reference: [Chrome Blog](https://developer.chrome.com/blog/scroll-triggered-animations)
- Task: Fire time-based animations when elements cross a scroll offset
- Features: `animation-trigger`, `timeline-trigger-name`, `timeline-trigger-source`, `trigger-scope`, decoupled triggers, staggered entries, scrollytelling

### [starting-style.css](animation/starting-style.css)
**Entry/Exit Animations with @starting-style + interpolate-size**
- Baseline: 🔵 Newly Available (87%)
- MDN: [@starting-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style), [interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size)
- Task: Animate elements entering/exiting the DOM
- Features: `@starting-style`, `transition-behavior: allow-discrete`, `interpolate-size: allow-keywords`, dialog/popover/details animation, dialog body scroll lock with `scrollbar-gutter: stable`

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

### [interest-invokers.css](interaction/interest-invokers.css)
**Interest Invokers — Hover/Focus-Triggered Popovers**
- Baseline: 🟣 Experimental (Chrome behind flag)
- MDN: [Interest Invokers](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers), [interest-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interest-delay)
- Task: Show popovers on hover/focus without JavaScript
- Features: `interestfor` attribute, `popover="hint"`, `interest-delay`, `:interest-target`, link previews, mega-menu, anchor positioning

### [flip-card.css](interaction/flip-card.css)
**Flip Card / 3D Tile — backface-visibility**
- Baseline: 🟢 Widely Available (97%)
- MDN: [backface-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility), [transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style), [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- Task: Create flip cards, 3D tiles, and reveal-on-hover UI patterns
- Features: `backface-visibility: hidden`, `transform-style: preserve-3d`, `perspective`, horizontal/vertical flip, product tiles, team cards, keyboard accessible, `prefers-reduced-motion`

### [perspective-3d.css](interaction/perspective-3d.css)
**CSS 3D Transforms & Perspective**
- Baseline: 🟢 Widely Available (97%)
- MDN: [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective), [transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
- Task: Build 3D scenes — cubes, carousels, rotating forms, tilt effects
- Features: CSS cube construction, face navigation via `:target`, form-on-cube, 3D carousel, tilt-on-hover, isometric scene with floor, text ring, scroll-driven 3D rotation, perspective guide, 3D flattening gotchas

### [popover.css](interaction/popover.css)
**Popover API with CSS**
- Baseline: 🔵 Newly Available (91%)
- MDN: [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), [:popover-open](https://developer.mozilla.org/en-US/docs/Web/CSS/:popover-open)
- Task: Create popovers, dropdowns, and tooltips with HTML + CSS only
- Features: `popover` attribute, `:popover-open`, `::backdrop`, anchor positioning, invoker commands, dialog `closedby`

### [overscroll-behavior.css](interaction/overscroll-behavior.css)
**overscroll-behavior**
- Baseline: 🟢 Widely Available (97%)
- MDN: [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
- Task: Prevent scroll chaining, pull-to-refresh, and bounce effects
- Features: `overscroll-behavior`, `overscroll-behavior-block`, `overscroll-behavior-inline`, contain/none values, modal scroll locking, carousel containment

### [scroll-margin-padding.css](interaction/scroll-margin-padding.css)
**scroll-margin & scroll-padding**
- Baseline: 🟢 Widely Available (96%)
- MDN: [scroll-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin), [scroll-padding](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)
- Task: Prevent anchor-linked sections from scrolling behind fixed navigation
- Features: `scroll-margin-block-start`, `scroll-padding-block-start`, fixed/sticky nav offset, scroll-snap offsets, logical properties, dynamic nav height

### [target-focus-within.css](interaction/target-focus-within.css)
**:target & :focus-within Pseudo-Selectors**
- Baseline: 🟢 Widely Available (99% / 97%)
- MDN: [:target](https://developer.mozilla.org/en-US/docs/Web/CSS/:target), [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
- Task: Highlight anchor-linked sections, animate on navigation, style containers on child focus
- Features: `:target` highlight/animate, CSS-only modal, tab switching, `:focus-within` form highlight, floating labels, search expand, dropdown keep-open, table row highlight

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

### [gap-decorations.css](visual/gap-decorations.css)
**Gap Decorations — column-rule & row-rule**
- Baseline: column-rule (multicol) 🟢 Widely Available; gap decorations (grid/flex) 🟣 Experimental (Chrome 139+)
- MDN: [column-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule)
- Reference: [Gap Decorations (Chrome Blog)](https://developer.chrome.com/blog/gap-decorations)
- Task: Draw separator lines between grid columns, flex items, or multicol columns
- Features: `column-rule`, `row-rule`, `repeat()` patterns, `column-rule-offset`, multicol/grid/flex support, `@supports` fallback

### [backdrop-filter.css](visual/backdrop-filter.css)
**backdrop-filter — Glassmorphism & Background Effects**
- Baseline: 🔵 Newly Available (92%)
- MDN: [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- Task: Apply visual effects to the area behind an element
- Features: `blur()`, `brightness()`, `contrast()`, `grayscale()`, `hue-rotate()`, `invert()`, `saturate()`, `sepia()`, glassmorphism, frosted nav, tinted glass, `@supports` fallback

### [relative-colors.css](visual/relative-colors.css)
**Relative Color Syntax — Color Conversion & Channel Manipulation**
- Baseline: 🔵 Newly Available (90%)
- MDN: [Using Relative Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Task: Create color variants, convert between color spaces, manipulate channels
- Features: `oklch(from var(--color) ...)`, lighten/darken, opacity adjust, desaturate, complementary/triadic palettes, color space conversion, dynamic theming, tint/shade scales

### [clip-path-shape.css](visual/clip-path-shape.css)
**clip-path: shape() — Responsive Clipping & Scroll Morphing**
- Baseline: 🟣 Experimental (Chrome 135+, Safari 18.4+)
- MDN: [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- Reference: [CSS shape() (Chrome Blog)](https://developer.chrome.com/blog/css-shape)
- Task: Create responsive clip shapes with curves, animate/morph them on scroll
- Features: `shape()` function (from, line, curve, arc, close), `@property` + scroll-driven morphing, hover blob, responsive notched card, `@supports` fallback

### [mix-blend-mode.css](visual/mix-blend-mode.css)
**mix-blend-mode — Adaptive Content & Visual Blending**
- Baseline: 🟢 Widely Available (97%)
- MDN: [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
- Task: Make text/content adapt color based on background, create visual effects
- Features: `difference` for adaptive text, `multiply` image tint, `screen` glow, `exclusion`, `isolation: isolate` containment, all blend modes reference

### [corner-shape.css](visual/corner-shape.css)
**CSS corner-shape Property**
- Baseline: 🟣 Experimental (Chrome 139+)
- MDN: [corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)
- Task: Create modern border shapes — bevels, scoops, squircles, notches, tooltip arrows
- Features: `corner-shape` (round, squircle, bevel, scoop, notch, superellipse), tooltip arrow with scoop, animated morphing

### [text-box-trim.css](visual/text-box-trim.css)
**text-box-trim & text-box-edge — Optical Text Alignment**
- Baseline: 🟡 Limited Availability
- MDN: [text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim), [text-box-edge](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-edge)
- Reference: [CSS text-box-trim (Chrome Blog)](https://developer.chrome.com/blog/css-text-box-trim)
- Task: Remove extra whitespace above/below text for pixel-perfect vertical centering
- Features: `text-box-trim`, `text-box-edge`, `text-box` shorthand, cap/alphabetic/ex metrics, buttons, badges, headings, `@supports` fallback

### [overflow-clip-margin.css](visual/overflow-clip-margin.css)
**overflow: clip + overflow-clip-margin**
- Baseline: overflow: clip 🔵 Newly Available (92%); overflow-clip-margin 🟡 Limited Availability
- MDN: [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow), [overflow-clip-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-margin)
- Task: Clip overflow while keeping focus outlines, shadows, and decorations visible
- Features: `overflow: clip`, `overflow-clip-margin`, single-axis clipping, focus ring preservation, badge/ribbon overflow, `@supports` fallback

---

## Functions & Values

### [css-if-function.css](functions/css-if-function.css)
**CSS if() Function**
- Baseline: 🟣 Experimental
- MDN: [if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- Task: Apply conditional values inline without at-rules
- Features: `if(style():)`, `if(media():)`, `if(supports():)`, nested `if()`, logical operators, use in `calc()` and shorthands

### [custom-functions.css](functions/custom-functions.css)
**CSS Custom Functions (@function) and Mixins (@mixin)**
- Baseline: 🟣 Experimental (@function Chrome 137+, @mixin not yet implemented)
- MDN: [@function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function), [Custom Functions Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins)
- Task: Create reusable CSS functions that accept arguments and return values
- Features: `@function`, `result:` descriptor, typed parameters, composing functions, design tokens, `@mixin`/`@apply` (spec only)

### [advanced-attr.css](functions/advanced-attr.css)
**Advanced attr() Function**
- Baseline: 🟣 Experimental (Chrome 133+)
- MDN: [attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/attr)
- Reference: [Chrome Blog](https://developer.chrome.com/blog/advanced-attr)
- Task: Read HTML attributes as typed CSS values — colors, numbers, lengths
- Features: `type(<color>)`, `type(<integer>)`, `type(<custom-ident>)`, dimension units, `raw-string`, `@property` + `attr()` conic progress demo, fallbacks

### [sibling-functions.css](functions/sibling-functions.css)
**sibling-index() & sibling-count() Functions**
- Baseline: 🟣 Experimental (Chrome behind flag)
- MDN: [sibling-index()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-index), [sibling-count()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-count)
- Task: Dynamically style elements based on their position among siblings
- Features: Staggered animations (one-line), reverse stagger, rainbow colors, progressive sizing, circular layout without `--i`, dynamic opacity

### [trigonometric-functions.css](functions/trigonometric-functions.css)
**CSS Trigonometric Functions — sin(), cos(), tan(), atan2()**
- Baseline: 🔵 Newly Available (93%)
- MDN: [sin()](https://developer.mozilla.org/en-US/docs/Web/CSS/sin), [cos()](https://developer.mozilla.org/en-US/docs/Web/CSS/cos), [tan()](https://developer.mozilla.org/en-US/docs/Web/CSS/tan), [atan2()](https://developer.mozilla.org/en-US/docs/Web/CSS/atan2)
- Task: Position elements in circles, arcs, and radial patterns with pure CSS
- Features: Circular menus, animated reveals, semicircle/arc layouts, clock faces, orbit animations, wave patterns, spirals, `@property` + trig, `atan2()` pointer rotation

### [contrast-color.css](functions/contrast-color.css)
**contrast-color() Function**
- Baseline: 🟡 Limited Availability
- MDN: [contrast-color()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/contrast-color)
- Task: Automatically pick black or white text for maximum contrast
- Features: WCAG AA auto contrast, dynamic buttons, color swatches, tag clouds, `@supports` fallback

---

## Specificity

### [cascade-layers.css](specificity/cascade-layers.css)
**@layer — Cascade Layers**
- Baseline: 🟢 Widely Available (95%)
- MDN: [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer)
- Task: Control specificity and cascade order without selector hacks
- Features: Layer declaration order, nested layers, `@import` with layers, `!important` reversal, unlayered overrides

### [scope-rule.css](specificity/scope-rule.css)
**@scope — Scoped Styles**
- Baseline: 🔵 Newly Available (87%)
- MDN: [@scope](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope)
- Task: Scope styles to DOM subtrees and control specificity with proximity
- Features: Scope root/limit (donut scope), `:scope` pseudo-class, scoping proximity, low-specificity selectors, scope + nesting

---

## Accessibility

### [prefers-reduced-motion.css](accessibility/prefers-reduced-motion.css)
**Accessibility Media Queries — Reduced Motion, Contrast, Transparency**
- Baseline: 🟢 Widely Available (97%+)
- MDN: [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast), [prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency), [forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
- Task: Respect user accessibility preferences — disable decorative motion, adapt contrast, handle transparency and forced colors
- Features: Global animation reset, targeted per-component control, motion-safe opt-in pattern, scroll-behavior gating, view transition disable, essential vs decorative motion guide, `prefers-contrast`, `prefers-reduced-transparency`, `forced-colors`, all accessibility queries reference

---

## Native Customization

### [customizable-select.css](native-customization/customizable-select.css)
**Customizable Select Element**
- Baseline: 🟣 Experimental (Chrome 135+)
- MDN: [Customizable Select](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- Task: Style native `<select>` with full visual control — picker, options, icons, animations
- Features: `appearance: base-select`, `::picker(select)`, `::picker-icon`, `::checkmark`, `<selectedcontent>`, `:open`, entry/exit animations, `@supports` fallback

---

## Legend

- **🟢 Widely Available** (95%+): Safe for production use
- **🔵 Newly Available** (85-94%): Recently stable, verify target browsers
- **🟡 Limited Availability** (70-84%): Use with progressive enhancement
- **🟣 Experimental** (<70%): Cutting-edge features, use cautiously
