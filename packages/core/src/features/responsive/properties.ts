/**
 * Responsive Properties - CSS responsive design features
 */

import { CSSFeature, CSSFeatureCategory } from '../../types.js';

export const RESPONSIVE_FEATURES: Record<string, CSSFeature> = {
  "container-queries": {
    name: "Container Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "container-type",
      "container-name",
      "container",
      "@container",
    ],
    description: "Responsive design based on container size rather than viewport",
    support_level: "moderate",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries",
  },
  "anchored-container-queries": {
    name: "Anchored Container Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "container-type: anchored",
      "@container anchored()",
      "anchored(fallback: ...)",
    ],
    description: "Query which fallback position an anchor-positioned element uses. Works with CSS Anchor Positioning to detect position-try-fallbacks resolution. Enables styling adjustments like arrow direction on tooltips based on actual rendered position.",
    support_level: "experimental",
    mdn_url: "https://developer.chrome.com/blog/anchored-container-queries",
  },
  "container-style-queries": {
    name: "Container Style Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@container style()",
      "style(--custom-property)",
    ],
    description: "Query container computed styles including custom properties. Enables conditional styling based on CSS variable values.",
    support_level: "moderate",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
  },
  "scroll-state-queries": {
    name: "Scroll State Container Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@container scroll-state()",
      "scroll-state(scrollable: ...)",
      "scroll-state(snapped: ...)",
      "scroll-state(stuck: ...)",
    ],
    description: "Query scroll-related states of containers: whether scrollable, snapped to scroll-snap, or stuck (position: sticky). Enables scroll-aware styling without JavaScript.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries",
  },
  "media-queries": {
    name: "Media Queries",
    category: CSSFeatureCategory.RESPONSIVE,
    properties: [
      "@media",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
      "orientation",
      "aspect-ratio",
      "prefers-color-scheme",
      "prefers-reduced-motion",
    ],
    description: "Responsive design based on device characteristics",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries",
  },
};

export const RESPONSIVE_KEYWORDS = [
  'responsive',
  'media',
  'container',
  'queries',
  'breakpoint',
  'viewport',
  'mobile',
  'tablet',
  'desktop',
  'adaptive',
  'fluid',
  'flexible',
  'orientation',
  'aspect-ratio',
  'prefers-color-scheme',
  'prefers-reduced-motion',
  // Anchored container queries
  'anchored',
  'anchor-fallback',
  'position-fallback',
  'tooltip-arrow',
  'popover-direction',
  // Style queries
  'style-query',
  'custom-property-query',
  // Scroll state queries
  'scroll-state',
  'scrollable',
  'snapped',
  'stuck',
  'sticky-state',
  'scroll-snap-state'
];