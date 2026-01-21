/**
 * Responsive Guidance - Implementation guidance for responsive design properties
 */

import { ImplementationGuidance } from '../../types.js';

export const RESPONSIVE_GUIDANCE: Record<string, ImplementationGuidance> = {
  "anchored-container-queries": {
    basic_usage: `/* Make the positioned element query-aware of its anchor state */
.tooltip {
  container-type: anchored;
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: bottom, left, right;
}

/* Style based on which fallback position is active */
@container anchored(fallback: top) {
  .tooltip-arrow {
    /* Arrow pointing down when tooltip is on top */
    border-top-color: #333;
    bottom: -8px;
  }
}

@container anchored(fallback: bottom) {
  .tooltip-arrow {
    /* Arrow pointing up when tooltip is on bottom */
    border-bottom-color: #333;
    top: -8px;
  }
}`,
    best_practices: [
      "Always use container-type: anchored on the positioned element, not the anchor",
      "Combine with CSS Anchor Positioning (anchor-name, position-anchor, position-area)",
      "Use position-try-fallbacks to define the fallback positions you want to query",
      "Query specific fallbacks using anchored(fallback: <position-area>)",
      "Great for adjusting tooltip arrows, menu borders, and directional UI elements",
      "Eliminates need for JavaScript to detect which position was applied"
    ],
    fallbacks: [
      "Use JavaScript with ResizeObserver/IntersectionObserver to detect position changes",
      "Apply generic styling that works regardless of position",
      "Use CSS transforms with calc() for arrow positioning that adapts automatically"
    ],
    example_code: `/* Complete tooltip with adaptive arrow using anchored container queries */
.button {
  anchor-name: --tooltip-anchor;
}

.tooltip {
  /* Enable anchored container queries */
  container-type: anchored;

  /* Anchor positioning setup */
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: top;
  position-try-fallbacks: bottom, left, right;

  /* Base styling */
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
}

.tooltip::after {
  content: '';
  position: absolute;
  border: 8px solid transparent;
}

/* Arrow adjusts based on actual rendered position */
@container anchored(fallback: top) {
  .tooltip::after {
    border-top-color: #333;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@container anchored(fallback: bottom) {
  .tooltip::after {
    border-bottom-color: #333;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@container anchored(fallback: left) {
  .tooltip::after {
    border-left-color: #333;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
  }
}

@container anchored(fallback: right) {
  .tooltip::after {
    border-right-color: #333;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
  }
}`
  },
  "scroll-state-queries": {
    basic_usage: `/* Query if container is scrollable in a direction */
.scroll-container {
  container-type: scroll-state;
  overflow: auto;
}

@container scroll-state(scrollable: top) {
  .back-to-top {
    visibility: visible;
  }
}

/* Query if element is stuck (position: sticky) */
.sticky-header {
  container-type: scroll-state;
  position: sticky;
  top: 0;
}

@container scroll-state(stuck: top) {
  .sticky-header {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}

/* Query if element is snapped (scroll-snap) */
.carousel-item {
  container-type: scroll-state;
  scroll-snap-align: center;
}

@container scroll-state(snapped: x) {
  .carousel-item {
    scale: 1.05;
  }
}`,
    best_practices: [
      "Use scroll-state(scrollable: ...) to show/hide scroll indicators",
      "Use scroll-state(stuck: ...) to add shadows or visual feedback to sticky elements",
      "Use scroll-state(snapped: ...) to highlight the currently snapped carousel item",
      "Combine multiple scroll-state queries with and/or operators",
      "Use logical values (block, inline, block-start, etc.) for better i18n support"
    ],
    fallbacks: [
      "Use IntersectionObserver for scroll position detection",
      "Use scroll event listeners with debouncing for scroll state tracking",
      "Apply static styles that work without scroll-state awareness"
    ],
    example_code: `/* Sticky header with visual feedback when stuck */
.header {
  container-type: scroll-state;
  position: sticky;
  top: 0;
  background: white;
  transition: box-shadow 0.2s, background 0.2s;
}

@container scroll-state(stuck: top) {
  .header {
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(8px);
  }
}

/* Scroll indicator that hides when can't scroll anymore */
.scroll-area {
  container-type: scroll-state;
  overflow-y: auto;
  position: relative;
}

.scroll-down-indicator {
  opacity: 0;
  transition: opacity 0.2s;
}

@container scroll-state(scrollable: bottom) {
  .scroll-down-indicator {
    opacity: 1;
  }
}

/* Carousel with snapped item highlighting */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
}

.carousel-slide {
  container-type: scroll-state;
  scroll-snap-align: center;
  flex: 0 0 80%;
  opacity: 0.5;
  transition: opacity 0.3s, transform 0.3s;
}

@container scroll-state(snapped: x) {
  .carousel-slide {
    opacity: 1;
    transform: scale(1.02);
  }
}`
  },
  "container-style-queries": {
    basic_usage: `/* Query custom property values */
.card {
  container-type: style;
  --theme: light;
}

@container style(--theme: dark) {
  .card-content {
    background: #1a1a1a;
    color: white;
  }
}

/* Query if custom property is set (non-initial) */
@container style(--highlight) {
  .card {
    border: 2px solid var(--highlight);
  }
}`,
    best_practices: [
      "Use style queries with custom properties for theme-based styling",
      "Combine with size queries for comprehensive responsive logic",
      "Style queries evaluate computed values, not specified values",
      "Use for component-level theming without class toggling"
    ],
    fallbacks: [
      "Use data attributes with CSS attribute selectors",
      "Use class-based theming with JavaScript",
      "Use CSS cascade layers for fallback styling"
    ],
    example_code: `/* Theme-aware card using style queries */
.theme-container {
  container-type: style;
  --card-variant: default;
}

.card {
  padding: 1rem;
  border-radius: 8px;
  background: white;
  color: #333;
}

@container style(--card-variant: featured) {
  .card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
}

@container style(--card-variant: warning) {
  .card {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
  }
}

@container style(--card-variant: error) {
  .card {
    background: #f8d7da;
    border-left: 4px solid #dc3545;
  }
}`
  }
};

export function getResponsiveGuidance(property: string, needsFallback: boolean = false): ImplementationGuidance | null {
  const guidance = RESPONSIVE_GUIDANCE[property];
  if (!guidance) return null;

  return {
    ...guidance,
    fallbacks: needsFallback ? guidance.fallbacks : []
  };
}