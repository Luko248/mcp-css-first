/**
 * HTML Features - Declarative HTML capabilities relevant to CSS-first UI
 */

import { CSSFeature, CSSFeatureCategory } from "../../types.js";

export const HTML_FEATURES: Record<string, CSSFeature> = {
  invoker_commands: {
    name: "Invoker Commands",
    category: CSSFeatureCategory.HTML,
    properties: ["commandfor", "command", "popovertarget", "popovertargetaction"],
    description: "Declarative invoker actions for dialogs and popovers without JavaScript.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API",
  },
  dialog_closedby: {
    name: "Dialog closedby Attribute",
    category: CSSFeatureCategory.HTML,
    properties: ["closedby", "closedby=none", "closedby=closerequest", "closedby=any"],
    description: "Control dialog light dismiss behavior via the closedby attribute.",
    support_level: "experimental",
    mdn_url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy",
  },
};

export const HTML_KEYWORDS = [
  "commandfor",
  "command",
  "invoker",
  "popover",
  "dialog",
  "modal",
  "popovertarget",
  "popovertargetaction",
  "closedby",
  "closerequest",
  "light-dismiss",
];
