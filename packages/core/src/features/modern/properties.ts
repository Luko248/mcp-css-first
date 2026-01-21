/**
 * Modern CSS Features (2021-2025) - Auto-discovered and integrated from MDN
 * These features have been automatically categorized and integrated using context7
 */

import { CSSFeature, CSSFeatureCategory } from '../../types.js';

export const MODERN_CSS_FEATURES: Record<string, CSSFeature> = {
  // Container Queries (2022) - Complete with size, style, and scroll state queries
  container_queries: {
    name: "CSS Container Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      // Container setup
      "container-type",
      "container-name", 
      "container",
      "@container",
      // Container query units (logical preferred)
      "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"
    ],
    description: "Apply styles based on containing element size, style, or scroll state",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"
  },

  // Container Style Queries (2023-2024)
  container_style_queries: {
    name: "CSS Container Style Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@container style()",
      "container-type"
    ],
    description: "Query container's computed style values for conditional styling",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries#container_style_queries"
  },

  // Container Scroll State Queries (Experimental)
  container_scroll_state_queries: {
    name: "CSS Container Scroll State Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@container scroll-state()",
      "container-type"
    ],
    description: "Query container's scroll state for scroll-aware styling",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries#container_scroll_state_queries"
  },

  // CSS Cascade Layers (2022) - Better style organization
  cascade_layers: {
    name: "CSS Cascade Layers",
    category: CSSFeatureCategory.LOGICAL,
    properties: ["@layer"],
    description: "Control cascade order and create explicit style layers",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"
  },

  // Subgrid (2019-2023) - Grid enhancement
  subgrid: {
    name: "CSS Subgrid",
    category: CSSFeatureCategory.LAYOUT,
    properties: ["grid-template-columns", "grid-template-rows"],
    description: "Grid items participate in parent grid sizing with 'subgrid' value",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"
  },

  // Color Functions Level 4 & 5 (2021-2024)
  color_mix: {
    name: "CSS color-mix() Function",
    category: CSSFeatureCategory.VISUAL,
    properties: ["color-mix"],
    description: "Mix two colors in specified color space",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
  },

  color_contrast: {
    name: "CSS color-contrast() Function",
    category: CSSFeatureCategory.VISUAL,
    properties: ["color-contrast"],
    description: "Automatically select highest contrast color from a list",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast"
  },

  accent_color: {
    name: "CSS accent-color",
    category: CSSFeatureCategory.VISUAL,
    properties: ["accent-color"],
    description: "Customize accent color of form controls",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color"
  },

  color_scheme: {
    name: "CSS color-scheme",
    category: CSSFeatureCategory.VISUAL,
    properties: ["color-scheme"],
    description: "Indicate which color schemes an element can be rendered in",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme"
  },

  light_dark: {
    name: "CSS light-dark() Function",
    category: CSSFeatureCategory.VISUAL,
    properties: ["light-dark"],
    description: "Return different values for light and dark color schemes",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"
  },

  // Dynamic Viewport Units (2022-2023) - Complete with logical variants
  dynamic_viewport: {
    name: "Dynamic Viewport Units",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      // Physical viewport units
      "dvh", "dvw", "svh", "svw", "lvh", "lvw",
      // Logical viewport units (preferred)
      "dvi", "dvb", "svi", "svb", "lvi", "lvb"
    ],
    description: "Viewport units that adjust for mobile browser UI with logical and physical variants",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths"
  },

  // Scroll-driven Animations (2023-2024)
  scroll_timeline: {
    name: "Scroll-driven Animations",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "scroll-timeline",
      "scroll-timeline-name",
      "scroll-timeline-axis",
      "animation-timeline",
      "view-timeline",
      "view-timeline-name",
      "view-timeline-axis"
    ],
    description: "CSS animations driven by scroll progress",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_driven_Animations"
  },

  // Scroll-triggered Animations (2024)
  scroll_triggered_animations: {
    name: "Scroll-triggered Animations",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "animation-timeline",
      "animation-range",
      "animation-range-start",
      "animation-range-end"
    ],
    description: "Trigger animations at specific scroll thresholds using CSS timelines",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range"
  },

  // CSS Nesting (2023)
  css_nesting: {
    name: "CSS Nesting",
    category: CSSFeatureCategory.LOGICAL,
    properties: ["&"],
    description: "Write nested CSS rules natively in CSS",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Nesting"
  },

  // CSS aspect-ratio (2021)
  aspect_ratio: {
    name: "CSS aspect-ratio",
    category: CSSFeatureCategory.LAYOUT,
    properties: ["aspect-ratio"],
    description: "Set preferred aspect ratio for elements",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"
  },

  // Enhanced Math Functions (2021-2023)
  math_functions: {
    name: "CSS Enhanced Math Functions",
    category: CSSFeatureCategory.LOGICAL,
    properties: ["clamp", "min", "max", "round", "mod", "rem", "sin", "cos", "tan"],
    description: "Advanced mathematical functions for responsive design",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions"
  },

  // Logical Properties Enhancements (2021-2022)
  logical_properties_enhanced: {
    name: "Enhanced Logical Properties",
    category: CSSFeatureCategory.LOGICAL,
    properties: [
      "margin-inline", "margin-block",
      "padding-inline", "padding-block", 
      "border-inline", "border-block",
      "inset-inline", "inset-block"
    ],
    description: "Writing-mode aware spacing and sizing properties",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties"
  },

  // Flexbox gap (2021)
  flexbox_gap: {
    name: "Flexbox gap Property",
    category: CSSFeatureCategory.LAYOUT,
    properties: ["gap", "row-gap", "column-gap"],
    description: "Gap property support in flexbox layouts",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
  },

  // Text Decoration Enhancements (2021)
  text_decoration_enhanced: {
    name: "Enhanced Text Decoration",
    category: CSSFeatureCategory.VISUAL,
    properties: [
      "text-decoration-thickness",
      "text-underline-offset",
      "text-decoration-skip-ink"
    ],
    description: "Better control over text decoration appearance",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
  },

  // backdrop-filter Wider Support (2021-2022)
  backdrop_filter: {
    name: "CSS backdrop-filter",
    category: CSSFeatureCategory.VISUAL,
    properties: ["backdrop-filter"],
    description: "Apply graphical effects to area behind element",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
  },

  // overscroll-behavior (2021)
  overscroll_behavior: {
    name: "CSS overscroll-behavior",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "overscroll-behavior",
      "overscroll-behavior-x", 
      "overscroll-behavior-y"
    ],
    description: "Control scroll chaining and overscroll behavior",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"
  },

  // scroll-behavior (2021)
  scroll_behavior: {
    name: "CSS scroll-behavior",
    category: CSSFeatureCategory.INTERACTION,
    properties: ["scroll-behavior"],
    description: "Enable smooth scrolling behavior",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
  },

  // conic-gradient (2021)
  conic_gradient: {
    name: "CSS conic-gradient",
    category: CSSFeatureCategory.VISUAL,
    properties: ["conic-gradient"],
    description: "Create conical/angular gradients",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient"
  },

  // image-set() (2021-2022)
  image_set: {
    name: "CSS image-set() Function",
    category: CSSFeatureCategory.VISUAL,
    properties: ["image-set"],
    description: "Provide multiple image options for different resolutions",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set"
  },

  // env() function (2021-2022)
  env_function: {
    name: "CSS env() Function",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: ["env"],
    description: "Access environment variables like safe area insets",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
  },

  // Enhanced Media Queries (2021-2023)
  prefers_media_queries: {
    name: "Enhanced prefers-* Media Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "prefers-color-scheme",
      "prefers-reduced-motion",
      "prefers-contrast",
      "prefers-reduced-transparency",
      "prefers-reduced-data"
    ],
    description: "Media queries for user preferences and accessibility",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#user_preference_media_features"
  },

  // forced-colors (2022)
  forced_colors: {
    name: "CSS forced-colors Media Query",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: ["forced-colors"],
    description: "Detect when user agent enforces limited color palette",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors"
  },

  // CSS Anchor Positioning (2024)
  anchor_positioning: {
    name: "CSS Anchor Positioning",
    category: CSSFeatureCategory.POSITIONING,
    properties: [
      "anchor-name",
      "position-anchor",
      "anchor",
      "anchor-scope"
    ],
    description: "Position elements relative to other elements",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Anchor_Positioning"
  },

  // View Transitions (2023-2024)
  view_transitions: {
    name: "CSS View Transitions",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "view-transition-name",
      "view-transition-class"
    ],
    description: "Smooth transitions between different views/pages",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name"
  },

  // Scoped View Transitions (2024)
  scoped_view_transitions: {
    name: "Scoped View Transitions",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "view-transition-name",
      "::view-transition-group()",
      "::view-transition-old()",
      "::view-transition-new()"
    ],
    description: "Scoped view transitions for partial UI updates without full page transitions",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name"
  },

  // CSS font-variant enhancements (2021-2023)
  font_variant_enhanced: {
    name: "Enhanced font-variant Properties",
    category: CSSFeatureCategory.VISUAL,
    properties: [
      "font-variant-alternates",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric"
    ],
    description: "Fine-grained control over font variant features",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"
  },

  // Masonry Layout (Experimental)
  masonry_layout: {
    name: "CSS Masonry Layout",
    category: CSSFeatureCategory.LAYOUT,
    properties: ["masonry"],
    description: "Masonry-style grid layouts",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout"
  },

  // Grid Lanes (Experimental)
  grid_lanes_layout: {
    name: "CSS Grid Lanes (Masonry)",
    category: CSSFeatureCategory.LAYOUT,
    properties: ["display: grid-lanes"],
    description: "Grid lanes for masonry-like layouts using a dedicated display value",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
  },

  // Modern CSS Carousel with Pseudo-Elements (2024-2025)
  css_carousel_pseudo_elements: {
    name: "CSS Carousel with Modern Pseudo-Elements",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "::scroll-marker-group",
      "::scroll-marker", 
      "::scroll-button",
      "scroll-snap-type",
      "scroll-behavior",
      "overflow-inline"
    ],
    description: "CSS-only carousel with auto-generated navigation using modern pseudo-elements",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap"
  },

  // Enhanced Light-Dark Theme System (2024)
  light_dark_enhanced: {
    name: "Enhanced Light-Dark Theme System",
    category: CSSFeatureCategory.VISUAL,
    properties: [
      "light-dark",
      "color-scheme", 
      "@media (prefers-color-scheme)",
      "system-ui"
    ],
    description: "Complete CSS-only theme system using light-dark() function with system preferences",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"
  },

  // Scroll-Driven Carousel Animations (2024)
  scroll_driven_carousel: {
    name: "Scroll-Driven Carousel Animations",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "scroll-timeline",
      "animation-timeline",
      "scroll-timeline-axis: inline",
      "view-timeline"
    ],
    description: "CSS-only carousel animations driven by scroll position with logical axis support",
    support_level: "experimental", 
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_driven_Animations"
  },

  // CSS-Only Form Validation (2021-2024)
  css_form_validation: {
    name: "CSS-Only Form Validation",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      ":valid",
      ":invalid", 
      ":user-valid",
      ":user-invalid",
      ":required",
      ":optional",
      ":in-range",
      ":out-of-range",
      ":pattern",
      "::placeholder"
    ],
    description: "Complete form validation using CSS pseudo-classes without JavaScript",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#user_action_pseudo-classes"
  },

  // CSS-Only Modal/Dialog (2022-2024)
  css_modal_dialog: {
    name: "CSS-Only Modal/Dialog",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      ":target",
      ":focus-within", 
      "dialog",
      ":popover-open",
      "anchor-name",
      "position-anchor",
      "backdrop-filter"
    ],
    description: "Modal dialogs and popovers using CSS-only techniques with modern anchoring",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
  },

  // CSS-Only Tabs/Accordion (Classic + Modern)
  css_tabs_accordion: {
    name: "CSS-Only Tabs/Accordion",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      ":checked",
      ":target",
      "details",
      "summary", 
      ":open",
      "counter-increment",
      "counter-reset"
    ],
    description: "Interactive tabs and accordions using checkbox/radio hack and HTML details",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
  },

  // CSS-Only Navigation Patterns (2021-2024)
  css_navigation: {
    name: "CSS-Only Navigation Patterns",
    category: CSSFeatureCategory.LAYOUT,
    properties: [
      ":target",
      ":checked",
      ":focus-within",
      "position: sticky",
      "scroll-padding-block",
      "scroll-margin-block",
      "overflow-inline"
    ],
    description: "Responsive navigation menus, hamburger menus, and sticky headers without JavaScript",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
  },

  // CSS-Only Loading/Skeleton (2021-2024)
  css_loading_skeleton: {
    name: "CSS-Only Loading/Skeleton",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "@keyframes",
      "animation-timeline",
      "background-image",
      "linear-gradient",
      "animation-play-state",
      ":empty",
      "::before",
      "::after"
    ],
    description: "Loading states, skeleton screens, and progress indicators using pure CSS",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
  },

  // Mobile Viewport Heights (2022-2024)
  mobile_viewport_heights: {
    name: "Mobile Viewport Heights",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "height",
      "min-height",
      "max-height",
      "block-size",
      "min-block-size",
      "max-block-size",
      "dvh",
      "svh", 
      "lvh",
      "dvi",
      "svi",
      "lvi",
      "dvb",
      "svb",
      "lvb",
      "100vh",
      "100dvh"
    ],
    description: "Mobile-optimized viewport height units that handle mobile browser UI correctly",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths"
  },

  // CSS Positioning (Modern)
  css_positioning_modern: {
    name: "Modern CSS Positioning",
    category: CSSFeatureCategory.POSITIONING,
    properties: [
      "position",
      "sticky",
      "fixed",
      "absolute",
      "relative",
      "static",
      "inset",
      "inset-block",
      "inset-inline",
      "inset-block-start",
      "inset-block-end",
      "inset-inline-start", 
      "inset-inline-end",
      "top",
      "bottom",
      "left",
      "right"
    ],
    description: "Modern positioning with logical properties and sticky positioning",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
  },

  // CSS Sizing Properties
  css_sizing: {
    name: "CSS Sizing Properties",
    category: CSSFeatureCategory.LAYOUT,
    properties: [
      "width",
      "height",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "inline-size",
      "block-size",
      "min-inline-size",
      "min-block-size",
      "max-inline-size",
      "max-block-size",
      "box-sizing",
      "aspect-ratio"
    ],
    description: "Modern sizing properties with logical equivalents for international layouts",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model"
  },

  // ============================================
  // CSS Wrapped 2025 Features
  // ============================================

  // Customizable Select Element (2025)
  customizable_select: {
    name: "Customizable Select Element",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "appearance: base-select",
      "::picker(select)",
      "::picker-icon"
    ],
    description: "Full CSS styling of native <select> elements. Use appearance: base-select to enable rich HTML content in options and full CSS control over the dropdown picker.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/appearance"
  },

  // Text Box Trim (2025)
  text_box: {
    name: "Text Box Trim",
    category: CSSFeatureCategory.VISUAL,
    properties: [
      "text-box",
      "text-box-trim",
      "text-box-edge"
    ],
    description: "Vertically center text optically by trimming extra space from block edges. Values: trim-both, trim-start, trim-end with edge values: cap, ex, text, alphabetic, ideographic.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box"
  },

  // Shape Function (2025)
  shape_function: {
    name: "CSS shape() Function",
    category: CSSFeatureCategory.VISUAL,
    properties: [
      "shape()",
      "clip-path: shape()",
      "offset-path: shape()"
    ],
    description: "Create complex, responsive clipping shapes using CSS syntax. Supports commands: move, line, hline, vline, curve, smooth, arc, close. Unlike path(), shape() accepts CSS units and calc().",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/shape"
  },

  // CSS if() Conditional Function (2025)
  if_function: {
    name: "CSS if() Conditional Function",
    category: CSSFeatureCategory.LOGICAL,
    properties: [
      "if()",
      "if(style())",
      "if(media())",
      "if(supports())"
    ],
    description: "Inline conditional values in CSS properties. Query types: style() for custom properties, media() for viewport conditions, supports() for feature detection. Use else: for fallback values.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if"
  },

  // CSS Custom Functions @function (2025)
  custom_functions: {
    name: "CSS Custom Functions (@function)",
    category: CSSFeatureCategory.LOGICAL,
    properties: [
      "@function",
      "result",
      "--function-name()"
    ],
    description: "Define reusable CSS logic blocks with @function. Functions accept typed parameters, can include local custom properties, and return values via the result descriptor. Called using --function-name() syntax.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function"
  },

  // Stretch Sizing Keyword (2025)
  stretch_sizing: {
    name: "Stretch Sizing Keyword",
    category: CSSFeatureCategory.LAYOUT,
    properties: [
      "width: stretch",
      "height: stretch",
      "inline-size: stretch",
      "block-size: stretch"
    ],
    description: "Fills containing block while respecting margins. Unlike 100%, stretch applies to the margin box, making the total size (including margins) fill the available space.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/width"
  },

  // Tree Counting Functions (2025)
  tree_counting_functions: {
    name: "Tree Counting Functions",
    category: CSSFeatureCategory.LOGICAL,
    properties: [
      "sibling-index()",
      "sibling-count()"
    ],
    description: "Dynamic sibling-aware calculations. sibling-index() returns element's position among siblings (1-based). sibling-count() returns total sibling count. Perfect for staggered animations and dynamic layouts without JavaScript.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-index"
  },

  // Advanced attr() Function (2025)
  advanced_attr: {
    name: "Advanced attr() Function",
    category: CSSFeatureCategory.LOGICAL,
    properties: [
      "attr()",
      "attr(name type())",
      "attr(name type(<color>))",
      "attr(name type(<length>))",
      "attr(name type(<number>))"
    ],
    description: "Use HTML attributes as typed CSS values. Syntax: attr(attribute type(<type>), fallback). Supports types: <color>, <length>, <number>, <percentage>, <angle>, <time>, <custom-ident>.",
    support_level: "moderate",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/attr"
  },

  // View Transition Group (2025)
  view_transition_group: {
    name: "View Transition Group Property",
    category: CSSFeatureCategory.ANIMATION,
    properties: [
      "view-transition-group",
      "view-transition-group: nearest",
      "view-transition-group: contain",
      "::view-transition-group()"
    ],
    description: "Control nested view transitions. view-transition-group: nearest retains 3D transforms and clipping during transitions by grouping with nearest ancestor. Enables complex page transitions.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::view-transition-group"
  },

  // Popover API with CSS (2024-2025)
  popover_api: {
    name: "Popover API",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "popover",
      "popover=auto",
      "popover=manual",
      "popover=hint",
      ":popover-open",
      "::backdrop"
    ],
    description: "Declarative popovers without JavaScript. auto: light-dismissable, closes others. manual: explicit control only. hint: for tooltips, coexists with other popovers. Style with :popover-open pseudo-class.",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover"
  },

  // Interest Invokers (2025)
  interest_invokers: {
    name: "Interest Invokers",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "interestfor",
      "interest-delay"
    ],
    description: "Declarative hover/focus UI triggering. The interestfor attribute triggers UI on hover/focus interest. interest-delay controls timing. Enables accessible tooltip patterns without JavaScript.",
    support_level: "experimental",
    mdn_url: "https://developer.chrome.com/blog/css-wrapped-2025"
  },

  // Scroll Target Group (2025)
  scroll_target_group: {
    name: "Scroll Target Group",
    category: CSSFeatureCategory.INTERACTION,
    properties: [
      "scroll-target-group",
      "scroll-target-group: auto",
      ":target-current"
    ],
    description: "Transform anchor links into scroll markers. With scroll-target-group: auto, targeted elements become scroll markers. Use :target-current pseudo-class to style the currently targeted item.",
    support_level: "experimental",
    mdn_url: "https://developer.chrome.com/blog/css-wrapped-2025"
  },

  // Expanded Range Syntax (2025)
  expanded_range_syntax: {
    name: "Expanded Range Syntax",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@container style(--var > value)",
      "@container style(--var < value)",
      "@container style(--var >= value)",
      "@container style(--var <= value)"
    ],
    description: "Comparison operators in style and container queries. Enables numeric comparisons: @container style(--progress > 50%). Works with custom properties that resolve to numbers.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@container"
  }
};

export const MODERN_CSS_KEYWORDS = [
  // Container Queries (with logical units preferred)
  'container', 'query', 'container-type', 'size', 'style-query', 'scroll-state',
  'cqi', 'cqb', 'cqw', 'cqh', 'cqmin', 'cqmax',

  // Dynamic Viewport (logical units preferred)
  'dvi', 'dvb', 'svi', 'svb', 'lvi', 'lvb', // Logical (preferred)
  'dvh', 'dvw', 'svh', 'svw', 'lvh', 'lvw', // Physical (fallback)
  'dynamic', 'viewport', 'mobile-ui',

  // Color Functions
  'color-mix', 'accent-color', 'light-dark', 'color-scheme',

  // Scroll Animations
  'scroll-timeline', 'view-timeline', 'scroll-driven', 'scroll-triggered', 'scroll-trigger', 'animation-range',

  // Modern Selectors
  'has', 'parent', 'descendant',

  // Nesting
  'nesting', 'nested', 'sass-like',

  // Aspect Ratio
  'aspect-ratio', 'ratio', 'proportion',

  // Math Functions
  'clamp', 'min', 'max', 'round', 'trigonometric',

  // Logical Properties (always preferred)
  'logical', 'inline', 'block', 'writing-mode',
  'margin-inline', 'margin-block', 'padding-inline', 'padding-block',
  'border-inline', 'border-block', 'inset-inline', 'inset-block',

  // Modern Layout
  'subgrid', 'masonry', 'grid-lanes', 'gap', 'flexbox',

  // Visual Effects
  'backdrop-filter', 'conic-gradient', 'image-set',

  // Interaction
  'overscroll', 'scroll-behavior', 'smooth',

  // Environment
  'env', 'safe-area', 'notch',

  // Preferences
  'prefers', 'reduced-motion', 'color-scheme', 'contrast',

  // Positioning
  'anchor', 'position-anchor',

  // Transitions
  'view-transition', 'page-transition', 'scoped-view-transition', 'view-transition-group',

  // Modern Carousel Features
  'scroll-marker', 'scroll-button', 'carousel-pseudo', 'css-carousel',
  'scroll-driven-animation', 'timeline-axis',

  // Enhanced Theming
  'light-dark-function', 'system-ui', 'theme-css-only',

  // CSS-Only Interactive Patterns
  'form-validation', 'css-validation', 'user-valid', 'user-invalid',
  'modal-css', 'dialog-css', 'popover-css', 'target-pseudo',
  'tabs-css', 'accordion-css', 'details-summary', 'checkbox-hack',
  'navigation-css', 'hamburger-css', 'sticky-header',
  'loading-css', 'skeleton-css', 'progress-css',

  // Modern Selectors
  'is-where-selectors', 'has-selector', 'focus-visible', 'focus-within',

  // Mobile Viewport Heights
  'mobile-height', 'viewport-height', 'full-height', 'dvh', 'svh', 'lvh',
  'mobile-viewport', 'browser-ui', 'dynamic-viewport',

  // Positioning
  'sticky', 'fixed', 'absolute', 'relative', 'position', 'inset',
  'positioning', 'header-fixed', 'header-sticky',

  // Sizing
  'height', 'width', 'block-size', 'inline-size', 'sizing', 'dimensions',
  'min-height', 'max-height', 'aspect-ratio', 'box-sizing',

  // CSS Wrapped 2025 Features
  // Customizable Select
  'base-select', 'appearance: base-select', 'picker', '::picker(select)',
  'select-styling', 'custom-select', 'stylable-select',

  // Text Box Trim
  'text-box', 'text-box-trim', 'text-box-edge', 'trim-both', 'trim-start',
  'cap', 'alphabetic', 'optical-sizing', 'vertical-centering',

  // Shape Function
  'shape()', 'clip-path-shape', 'responsive-shape', 'curve', 'arc',
  'complex-shapes', 'css-shapes',

  // CSS if() Function
  'if()', 'css-if', 'conditional-css', 'inline-conditionals',
  'style-query-if', 'media-query-if', 'supports-query-if',

  // CSS Custom Functions
  '@function', 'css-function', 'custom-function', 'result-descriptor',
  'reusable-css', 'css-logic',

  // Stretch Sizing
  'stretch', 'width-stretch', 'height-stretch', 'fill-available',
  'margin-box-sizing',

  // Tree Counting Functions
  'sibling-index', 'sibling-count', 'tree-counting', 'staggered-animation',
  'dynamic-nth', 'sibling-aware',

  // Advanced attr()
  'attr-type', 'typed-attr', 'attr-color', 'attr-length', 'attr-number',
  'data-attribute-css',

  // View Transition Group
  'view-transition-group', 'nested-transitions', 'transition-nearest',
  '3d-transitions',

  // Popover API
  'popover', 'popover-auto', 'popover-manual', 'popover-hint',
  'light-dismiss', 'tooltip-popover', ':popover-open',

  'popovertarget', 'show-modal', 'toggle-popover',

  // Interest Invokers
  'interestfor', 'interest-delay', 'hover-trigger', 'focus-trigger',

  // Scroll Target Group
  'scroll-target-group', ':target-current', 'anchor-scroll-markers',

  // Expanded Range Syntax
  'style-comparison', 'numeric-queries', 'range-syntax'
];
