/**
 * Positioning Guidance - Implementation guidance for CSS anchor positioning
 */

import { ImplementationGuidance } from '../../types.js';

export const POSITIONING_GUIDANCE: Record<string, ImplementationGuidance> = {
  "anchor-positioning": {
    basic_usage: `/* Define an anchor element */
.anchor {
  anchor-name: --my-anchor;
}

/* Position element relative to anchor */
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
}`,
    best_practices: [
      "Use semantic anchor names that describe the element's purpose",
      "Provide fallback positioning strategies with position-try-fallbacks",
      "Consider accessibility when implementing tooltips and popovers",
      "Test positioning behavior across different viewport sizes",
      "Use position-visibility to handle clipping scenarios gracefully"
    ],
    fallbacks: [
      "Use traditional absolute positioning with JavaScript for older browsers",
      "Implement CSS Grid or Flexbox for layout-based positioning",
      "Consider using CSS transforms as an alternative positioning method"
    ],
    example_code: `/* Complete tooltip example with anchor positioning */
.button {
  anchor-name: --tooltip-anchor;
  position: relative;
}

.tooltip {
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: top;
  position-try-fallbacks: bottom, left, right;
  position-visibility: anchors-visible;
  
  /* Styling */
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  
  /* Initially hidden */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.button:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
}`
  },
  "anchor-name": {
    basic_usage: `.anchor-element {
  anchor-name: --my-anchor;
}`,
    best_practices: [
      "Use descriptive anchor names with double dashes (--)",
      "Ensure anchor names are unique within the positioning context",
      "Group related anchors with consistent naming conventions"
    ],
    fallbacks: [
      "Use data attributes or IDs for JavaScript-based positioning fallbacks"
    ],
    example_code: `/* Multiple anchor elements with consistent naming */
.nav-item {
  anchor-name: --nav-item;
}

.nav-item[data-section="home"] {
  anchor-name: --nav-home;
}

.nav-item[data-section="about"] {
  anchor-name: --nav-about;
}`
  },
  "position-anchor": {
    basic_usage: `.positioned-element {
  position: absolute;
  position-anchor: --anchor-name;
}`,
    best_practices: [
      "Ensure the referenced anchor name exists",
      "Use position: absolute or position: fixed with anchor positioning",
      "Consider using implicit anchor references when appropriate"
    ],
    fallbacks: [
      "Implement JavaScript-based positioning for unsupported browsers"
    ],
    example_code: `/* Popover positioned relative to trigger button */
.trigger {
  anchor-name: --popover-trigger;
}

.popover {
  position: absolute;
  position-anchor: --popover-trigger;
  position-area: bottom-outside;
  width: 200px;
  max-height: 300px;
  overflow-y: auto;
}`
  },
  "position-area": {
    basic_usage: `.tooltip {
  position-area: top;
  /* or: top-left, top-right, bottom, left, right, etc. */
}`,
    best_practices: [
      "Use logical position areas for better internationalization support",
      "Combine with position-try-fallbacks for robust positioning",
      "Consider content size when choosing position areas"
    ],
    fallbacks: [
      "Use manual offset calculations with top, left, bottom, right properties"
    ],
    example_code: `/* Context menu with multiple position areas */
.context-menu {
  position: absolute;
  position-anchor: --context-anchor;
  position-area: bottom-right;
  position-try-fallbacks: bottom-left, top-right, top-left;
  
  min-width: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}`
  },
  "position-sticky": {
    basic_usage: `.sticky-header {
  position: sticky;
  top: 0;
}`,
    best_practices: [
      "Avoid full-height sticky elements on mobile devices - they can cause usability issues",
      "Use reasonable heights for sticky headers (max 15-20% of viewport height)",
      "Ensure sticky elements don't cover important content",
      "Consider using position: fixed with JavaScript for complex sticky behavior",
      "Test sticky positioning on various mobile devices and orientations"
    ],
    fallbacks: [
      "Use position: fixed with JavaScript scroll handlers for older browsers",
      "Implement intersection observer for sticky-like behavior",
      "Use CSS transforms for pseudo-sticky effects"
    ],
    example_code: `/* Good: Reasonable height sticky header */
.header {
  position: sticky;
  top: 0;
  height: 60px; /* Reasonable height */
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 100;
}

/* Avoid: Full height sticky on mobile */
@media (max-width: 768px) {
  .sidebar {
    /* DON'T: position: sticky; height: 100vh; */
    /* Instead use: */
    position: static;
  }
}

/* Good: Responsive sticky navigation */
.nav {
  position: sticky;
  top: 0;
  background: var(--surface-color);
  padding: 0.5rem 1rem;
}

@media (max-width: 768px) {
  .nav {
    height: 56px; /* Mobile-appropriate height */
    padding: 0.25rem 1rem;
  }
}

/* Advanced: Conditional sticky with CSS */
.conditional-sticky {
  position: sticky;
  top: 0;
}

@media (max-width: 768px) and (orientation: landscape) {
  .conditional-sticky {
    position: static; /* Disable on mobile landscape */
  }
}

/* Sticky with safe areas for mobile */
.mobile-sticky {
  position: sticky;
  top: env(safe-area-inset-top);
  padding: 0.5rem;
}

/* Fallback for unsupported browsers */
@supports not (position: sticky) {
  .header {
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  body {
    padding-top: 60px; /* Account for fixed header */
  }
}`
  },
  "position-try": {
    basic_usage: `@position-try --tooltip-fallback {
  position-area: bottom;
  margin-top: 8px;
}

.tooltip {
  position-try-fallbacks: --tooltip-fallback, flip-block;
}`,
    best_practices: [
      "Define reusable position-try strategies for common patterns",
      "Use built-in keywords like flip-block, flip-inline when appropriate",
      "Order fallbacks from most to least preferred"
    ],
    fallbacks: [
      "Implement JavaScript-based collision detection and repositioning"
    ],
    example_code: `/* Comprehensive fallback system for dropdown */
@position-try --dropdown-right {
  position-area: right;
  margin-left: 8px;
}

@position-try --dropdown-left {
  position-area: left;
  margin-right: 8px;
}

.dropdown {
  position: absolute;
  position-anchor: --dropdown-trigger;
  position-area: bottom;
  position-try-fallbacks: --dropdown-right, --dropdown-left, flip-block;
  position-try-order: most-width;
}`
  },
  "anchor-with-container-queries": {
    basic_usage: `/* Step 1: Set up anchor element */
.trigger {
  anchor-name: --popup-anchor;
}

/* Step 2: Position element with fallbacks AND enable anchored queries */
.popup {
  container-type: anchored;  /* Enable anchored container queries */
  position: absolute;
  position-anchor: --popup-anchor;
  position-area: top;
  position-try-fallbacks: bottom, left, right;
}

/* Step 3: Query which fallback was actually used */
@container anchored(fallback: top) {
  .popup-arrow { transform: rotate(180deg); }
}

@container anchored(fallback: bottom) {
  .popup-arrow { transform: rotate(0deg); }
}`,
    best_practices: [
      "Apply container-type: anchored to the positioned element, NOT the anchor",
      "Define position-try-fallbacks before using @container anchored() queries",
      "Use anchored(fallback: <value>) where value matches your position-try-fallbacks",
      "Perfect for tooltip arrows, dropdown indicators, and directional visual cues",
      "Combine with @position-try for custom fallback definitions",
      "No JavaScript needed - purely CSS solution for position-aware styling"
    ],
    fallbacks: [
      "Use JavaScript MutationObserver/ResizeObserver to detect position changes",
      "Use Popover API with JavaScript for older browser support",
      "Design UI elements that work visually regardless of position"
    ],
    example_code: `/* Complete adaptive tooltip with arrow that follows position */
.button {
  anchor-name: --tooltip-anchor;
  position: relative;
}

.tooltip {
  /* Enable anchored container queries */
  container-type: anchored;

  /* Anchor positioning setup */
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: block-start;  /* Prefer top (logical) */
  position-try-fallbacks: block-end, inline-start, inline-end;
  position-visibility: anchors-visible;

  /* Styling */
  background: var(--tooltip-bg, #1a1a2e);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.15s;
  pointer-events: none;
}

.button:hover .tooltip,
.button:focus-visible .tooltip {
  opacity: 1;
}

/* Arrow element */
.tooltip::before {
  content: '';
  position: absolute;
  border: 6px solid transparent;
}

/* Arrow direction based on actual rendered position */
@container anchored(fallback: block-start) {
  .tooltip::before {
    border-block-start-color: var(--tooltip-bg, #1a1a2e);
    inset-block-end: -12px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }
}

@container anchored(fallback: block-end) {
  .tooltip::before {
    border-block-end-color: var(--tooltip-bg, #1a1a2e);
    inset-block-start: -12px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }
}

@container anchored(fallback: inline-start) {
  .tooltip::before {
    border-inline-start-color: var(--tooltip-bg, #1a1a2e);
    inset-inline-end: -12px;
    inset-block-start: 50%;
    transform: translateY(-50%);
  }
}

@container anchored(fallback: inline-end) {
  .tooltip::before {
    border-inline-end-color: var(--tooltip-bg, #1a1a2e);
    inset-inline-start: -12px;
    inset-block-start: 50%;
    transform: translateY(-50%);
  }
}

/* Context menu with border that attaches to anchor side */
.context-menu {
  container-type: anchored;
  position: absolute;
  position-anchor: --context-anchor;
  position-area: bottom;
  position-try-fallbacks: top, right, left;

  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 0.5rem 0;
  min-width: 160px;
}

@container anchored(fallback: bottom) {
  .context-menu {
    border-top: 3px solid var(--accent-color);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

@container anchored(fallback: top) {
  .context-menu {
    border-bottom: 3px solid var(--accent-color);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

@container anchored(fallback: right) {
  .context-menu {
    border-left: 3px solid var(--accent-color);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

@container anchored(fallback: left) {
  .context-menu {
    border-right: 3px solid var(--accent-color);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}`
  }
};

export function getPositioningGuidance(property: string): ImplementationGuidance | undefined {
  return POSITIONING_GUIDANCE[property];
}