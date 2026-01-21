/**
 * Selectors Guidance - Implementation guidance for selectors
 */

import { ImplementationGuidance } from "../../types.js";

export const SELECTORS_GUIDANCE: Record<string, ImplementationGuidance> = {
  "Basic Selectors": {
    basic_usage: ".card { } #hero { } [data-state] { }",
    best_practices: [
      "Prefer class selectors for reusable styling",
      "Keep selector specificity low and predictable",
      "Use attribute selectors for state hooks",
    ],
    fallbacks: [],
    example_code: `
.button { padding: 0.5rem 1rem; }
#hero { min-height: 60vh; }
[data-active="true"] { outline: 2px solid currentColor; }
`,
  },
  "Modern Selectors": {
    basic_usage: ".card:is(.featured, .new) { }",
    best_practices: [
      "Use :where() to avoid specificity spikes",
      "Use :has() sparingly for performance-sensitive lists",
      "Combine :is() to reduce repetition",
    ],
    fallbacks: [
      "Provide simpler selector fallbacks when targeting older browsers",
      "Use @supports selector() to gate experimental selectors",
    ],
    example_code: `
.card:where(.featured, .new) {
  border-color: var(--accent);
}

@supports selector(:has(*)) {
  .card:has(img) {
    padding-top: 0;
  }
}
`,
  },
  "Pseudo-elements": {
    basic_usage: ".tag::before { content: \"#\"; }",
    best_practices: [
      "Use ::before/::after for decorative content only",
      "Keep content semantic in HTML when it conveys meaning",
      "Ensure contrast for ::selection styling",
    ],
    fallbacks: [],
    example_code: `
.tag::before {
  content: "#";
  margin-inline-end: 0.25rem;
}

::selection {
  background: color-mix(in srgb, currentColor 30%, transparent);
}
`,
  },
};

export function getSelectorsGuidance(
  featureName: string
): ImplementationGuidance | undefined {
  return SELECTORS_GUIDANCE[featureName];
}
