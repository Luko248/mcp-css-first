/**
 * Selectors Properties - CSS selector features
 */

import { CSSFeature, CSSFeatureCategory } from "../../types.js";

export const SELECTORS_FEATURES: Record<string, CSSFeature> = {
  basic_selectors: {
    name: "Basic Selectors",
    category: CSSFeatureCategory.SELECTORS,
    properties: ["*", "element", ".class", "#id", "[attr]"],
    description: "Foundational selectors for elements, classes, IDs, and attributes",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
  },
  attribute_selectors: {
    name: "Attribute Selectors",
    category: CSSFeatureCategory.SELECTORS,
    properties: ['[attr="value"]', "[attr^=prefix]", "[attr$=suffix]", "[attr*=contains]"],
    description: "Match elements by attribute presence or value patterns",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
  },
  pseudo_classes: {
    name: "State Pseudo-classes",
    category: CSSFeatureCategory.SELECTORS,
    properties: [":hover", ":focus", ":active", ":visited", ":disabled", ":checked"],
    description: "Style elements based on user interaction and state",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
  },
  structural_pseudo_classes: {
    name: "Structural Pseudo-classes",
    category: CSSFeatureCategory.SELECTORS,
    properties: [
      ":first-child",
      ":last-child",
      ":nth-child()",
      ":nth-of-type()",
      ":only-child",
      ":empty",
    ],
    description: "Select elements based on position or structure",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",
  },
  modern_selectors: {
    name: "Modern Selectors",
    category: CSSFeatureCategory.SELECTORS,
    properties: [
      ":is()",
      ":where()",
      ":not()",
      ":has()",
      ":focus-visible",
      ":focus-within",
      ":target-within",
      ":user-valid",
      ":user-invalid",
    ],
    description: "Advanced selectors for complex matching and better specificity control",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
  },
  pseudo_elements: {
    name: "Pseudo-elements",
    category: CSSFeatureCategory.SELECTORS,
    properties: ["::before", "::after", "::marker", "::selection", "::placeholder"],
    description: "Target generated content and element subparts",
    support_level: "good",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",
  },
  form_validation_selectors: {
    name: "Form Validation Selectors",
    category: CSSFeatureCategory.SELECTORS,
    properties: [":invalid", ":valid", ":required", ":optional", ":placeholder-shown"],
    description: "Select form fields by validation state",
    support_level: "excellent",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid",
  },
};
