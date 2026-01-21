/**
 * HTML Guidance - Implementation guidance for HTML capabilities
 */

export const HTML_GUIDANCE = {
  "Invoker Commands": {
    implementation: `
<!-- Dialog (modal) -->
<button commandfor="demo-dialog" command="show-modal">Open dialog</button>
<dialog id="demo-dialog">
  <p>Dialog content</p>
  <button commandfor="demo-dialog" command="close">Close</button>
</dialog>

<!-- Popover -->
<button commandfor="demo-popover" command="toggle-popover">Toggle popover</button>
<div id="demo-popover" popover>
  Popover content
</div>
`,
    bestPractices: [
      "Use commandfor to bind invokers to dialogs or popovers by id",
      "Prefer command values show-modal/close for dialogs and toggle-popover for popovers",
      "Pair with the Popover API for tooltips and menus without JS",
      "Provide focus styles and ensure keyboard access",
      "Treat as progressive enhancement for now",
    ],
    browserSupport: "Experimental; verify browser support before shipping",
    fallbacks: [
      "Use popovertarget/popover API where available",
      "Fallback to <dialog> with JS showModal()/close()",
      "Provide non-modal alternatives for unsupported browsers",
    ],
  },
  "Dialog closedby Attribute": {
    implementation: `
<dialog id="settings" closedby="any">
  <p>Settings</p>
  <button commandfor="settings" command="close">Close</button>
</dialog>
`,
    bestPractices: [
      "Use closedby=\"any\" to allow ESC and backdrop click",
      "Use closedby=\"closerequest\" to allow ESC only",
      "Use closedby=\"none\" to disable light dismiss entirely",
      "Always provide a visible close button for accessibility",
      "Pair with focus management when opening dialogs",
    ],
    browserSupport: "Experimental; verify support before shipping",
    fallbacks: [
      "Use <dialog> with JS showModal()/close()",
      "Provide an explicit close control for all users",
      "Avoid relying on light dismiss if unsupported",
    ],
  },
};

export function getHtmlGuidance(featureName: string): any {
  return (HTML_GUIDANCE as any)[featureName] || {
    implementation: "Feature guidance not available",
    bestPractices: ["Check MDN documentation for latest information"],
    browserSupport: "Check MDN for current support",
    fallbacks: ["Progressive enhancement recommended"],
  };
}
