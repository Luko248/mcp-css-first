import { fetchBrowserSupportFromMDN } from "../services/css/mdnClient.js";
import { searchMDNForCSSProperties } from "../services/css/suggestions.js";

async function run(): Promise<void> {
  const support = await fetchBrowserSupportFromMDN("overflow-clip-margin");
  if (!support.is_default) {
    console.error(
      "Expected default support for overflow-clip-margin when MDN data is missing."
    );
    process.exit(1);
  }

  const suggestions = await searchMDNForCSSProperties(
    "overflow clip margin",
    "modern"
  );
  const target = suggestions.find(
    (suggestion) => suggestion.property === "overflow-clip-margin"
  );
  if (!target) {
    console.error(
      "Expected overflow-clip-margin to be suggested with fallback support."
    );
    process.exit(1);
  }
  if (target.support_level !== "limited") {
    console.error(
      `Expected support_level "limited" from feature fallback, got "${target.support_level}".`
    );
    process.exit(1);
  }

  console.log("Support fallback validation passed.");
}

run().catch((error) => {
  console.error("Support fallback validation failed:", error);
  process.exit(1);
});
