/**
 * MCP CSS First - Cloudflare Workers Remote MCP Server
 *
 * URL: https://mcp-css-first.<account>.workers.dev/sse
 */

import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Import from @css-first/core
import {
  searchMDNForCSSProperties,
  fetchBrowserSupportFromMDN,
  fetchCSSPropertyDetailsFromMDN,
  generateBrowserSupportRecommendation,
  getAlternativeCSSProperties,
  getImplementationGuidance,
  analyzeTaskIntent,
  deriveSupportLevel,
  getBaselineFromSupportLevel,
  getBaselineLabel,
} from "@css-first/core";

interface Env {
  MCP_OBJECT: DurableObjectNamespace;
}

/**
 * CSSFirstMCP - Cloudflare Durable Object for MCP sessions
 */
export class CSSFirstMCP extends McpAgent<Env, {}, {}> {
  server = new McpServer({
    name: "MCP CSS First",
    version: "1.3.2",
  });

  async init() {
    // Tool 1: CSS Property Suggestion
    this.server.tool(
      "suggest_css_solution",
      "CSS-ONLY solution engine with strict enforcement of modern CSS features. Provides zero-JavaScript solutions using cutting-edge CSS (2021-2025) with logical properties, modern carousels, and light-dark() theming.",
      {
        task_description: z
          .string()
          .describe("Description of the UI task or problem to solve"),
        preferred_approach: z
          .enum(["modern", "compatible", "progressive"])
          .optional()
          .describe(
            "Preferred CSS approach - modern (latest features), compatible (wide browser support), or progressive (with fallbacks)"
          ),
        target_browsers: z
          .array(z.string())
          .optional()
          .describe(
            'Target browsers/versions (e.g., ["Chrome 90+", "Firefox 88+", "Safari 14+"])'
          ),
        project_context: z
          .string()
          .optional()
          .describe(
            "Project context (framework, existing CSS patterns, constraints)"
          ),
        baseline: z
          .string()
          .optional()
          .describe(
            "CSS Baseline availability filter: Widely Available, Newly Available, Limited Availability, Experimental"
          ),
        max_suggestions: z
          .number()
          .int()
          .min(1)
          .max(10)
          .optional()
          .describe("Maximum number of suggestions to return (default 3)"),
        response_detail: z
          .enum(["compact", "full"])
          .optional()
          .describe("Response detail level: compact reduces tokens"),
        include_analysis: z
          .boolean()
          .optional()
          .describe("Include semantic analysis details in response"),
      },
      async (args) => {
        try {
          const {
            task_description,
            preferred_approach = "modern",
            project_context,
            baseline,
            max_suggestions = 3,
            response_detail = "compact",
            include_analysis = false,
          } = args;

          const baselineLabel = (() => {
            if (!baseline) return undefined;
            const normalized = baseline.trim().toLowerCase();
            if (
              ["widely available", "widely-available", "wide"].includes(
                normalized
              )
            ) {
              return "**🟢 Widely Available**";
            }
            if (
              ["newly available", "newly-available", "new"].includes(normalized)
            ) {
              return "**🔵 Newly Available**";
            }
            if (
              ["limited availability", "limited-availability", "limited"].includes(
                normalized
              )
            ) {
              return "**🟡 Limited Availability**";
            }
            if (["experimental", "experiental", "exp"].includes(normalized)) {
              return "**🟣 Experimental**";
            }
            return undefined;
          })();

          const suggestions = await searchMDNForCSSProperties(
            task_description,
            preferred_approach,
            project_context,
            baseline,
            max_suggestions
          );

          let analysisDetails = null;
          if (include_analysis) {
            analysisDetails = analyzeTaskIntent(task_description, project_context);
          }

          const result =
            suggestions.length === 0
              ? {
                  success: false,
                  message: baselineLabel
                    ? `No CSS-only suggestions for ${baselineLabel}.`
                    : "No CSS-only suggestions found.",
                  ...(baselineLabel && { baseline: baselineLabel }),
                  suggestions: [],
                  ...(analysisDetails && { analysis: analysisDetails }),
                }
              : {
                  success: true,
                  message: `Found ${suggestions.length} CSS-only suggestion(s).${baselineLabel ? ` Baseline ${baselineLabel}.` : ""}`,
                  ...(baselineLabel && { baseline: baselineLabel }),
                  suggestions: suggestions.map((suggestion) => {
                    const consentMessage = `Use ${suggestion.property}? ${suggestion.browser_support.overall_support}% support.`;
                    if (response_detail === "full") {
                      return {
                        ...suggestion,
                        needs_consent: true,
                        consent_message: consentMessage,
                      };
                    }
                    return {
                      property: suggestion.property,
                      description: suggestion.description,
                      support_level: suggestion.support_level,
                      baseline: suggestion.baseline,
                      browser_support: {
                        overall_support: suggestion.browser_support.overall_support,
                      },
                      mdn_url: suggestion.mdn_url,
                      needs_consent: true,
                      consent_message: consentMessage,
                    };
                  }),
                  ...(analysisDetails && {
                    analysis: {
                      ...analysisDetails,
                      explanation: `Intent ${analysisDetails.intent.join(
                        ", "
                      )} (${Math.round(analysisDetails.confidence * 100)}%).`,
                    },
                  }),
                };

          return {
            content: [{ type: "text", text: JSON.stringify(result) }],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  error: error instanceof Error ? error.message : "Unknown error",
                }),
              },
            ],
          };
        }
      }
    );

    // Tool 2: Browser Support Checker
    this.server.tool(
      "check_css_browser_support",
      "Checks browser support for specific CSS properties using MDN data and provides detailed compatibility information.",
      {
        css_property: z
          .string()
          .describe("CSS property name to check browser support for"),
        include_experimental: z
          .boolean()
          .optional()
          .describe("Include experimental/draft features in results"),
      },
      async (args) => {
        try {
          const { css_property, include_experimental = false } = args;

          const supportInfo = await fetchBrowserSupportFromMDN(
            css_property,
            include_experimental
          );

          const result = {
            property: css_property,
            browser_support: supportInfo,
            recommendation: generateBrowserSupportRecommendation(supportInfo),
            safe_to_use: supportInfo.overall_support >= 80,
          };

          return {
            content: [{ type: "text", text: JSON.stringify(result) }],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  error: error instanceof Error ? error.message : "Unknown error",
                }),
              },
            ],
          };
        }
      }
    );

    // Tool 3: CSS Property Details
    this.server.tool(
      "get_css_property_details",
      "Retrieves comprehensive information about a CSS property from MDN documentation including syntax, examples, and use cases.",
      {
        css_property: z.string().describe("CSS property name to get details for"),
        include_examples: z
          .boolean()
          .optional()
          .describe("Include code examples in the response"),
      },
      async (args) => {
        try {
          const { css_property, include_examples = true } = args;

          const details = await fetchCSSPropertyDetailsFromMDN(
            css_property,
            include_examples
          );

          const result = {
            property: css_property,
            details,
            mdn_url: `https://developer.mozilla.org/en-US/docs/Web/CSS/${css_property}`,
          };

          return {
            content: [{ type: "text", text: JSON.stringify(result) }],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  error: error instanceof Error ? error.message : "Unknown error",
                }),
              },
            ],
          };
        }
      }
    );

    // Tool 4: User Consent Confirmation
    this.server.tool(
      "confirm_css_property_usage",
      "Confirms user consent for using a specific CSS property and provides implementation guidance.",
      {
        css_property: z.string().describe("CSS property name user wants to use"),
        user_consent: z.boolean().describe("User consent to use this CSS property"),
        fallback_needed: z
          .boolean()
          .optional()
          .describe("Whether fallback solutions are needed"),
      },
      async (args) => {
        try {
          const { css_property, user_consent, fallback_needed = false } = args;
          const browserSupport = await fetchBrowserSupportFromMDN(css_property);
          const supportLevel = deriveSupportLevel(browserSupport.overall_support);

          const result = !user_consent
            ? {
                message: `Declined ${css_property}.`,
                alternative_suggestions: await getAlternativeCSSProperties(
                  css_property
                ),
              }
            : {
                message: `Approved ${css_property}.`,
                implementation_guidance: await getImplementationGuidance(
                  css_property,
                  fallback_needed
                ),
                support_level: supportLevel,
                baseline: getBaselineLabel(getBaselineFromSupportLevel(supportLevel)),
                browser_support: browserSupport,
                css_property: css_property,
                approved: true,
              };

          return {
            content: [{ type: "text", text: JSON.stringify(result) }],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  error: error instanceof Error ? error.message : "Unknown error",
                }),
              },
            ],
          };
        }
      }
    );
  }
}

/**
 * Worker fetch handler
 */
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response(
        JSON.stringify({
          status: "ok",
          service: "MCP CSS First",
          version: "1.3.2",
          runtime: "Cloudflare Workers",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (url.pathname === "/" && request.method === "GET") {
      return new Response(
        JSON.stringify({
          name: "MCP CSS First",
          version: "1.3.2",
          description: "Remote MCP server for CSS-only development",
          runtime: "Cloudflare Workers with Durable Objects",
          endpoints: {
            health: "/health",
            sse: "/sse (MCP over SSE)",
            mcp: "/mcp (Streamable HTTP)",
          },
          documentation: "https://github.com/luko248/css-first",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (url.pathname === "/sse" || url.pathname === "/mcp") {
      const id = env.MCP_OBJECT.idFromName("default");
      const stub = env.MCP_OBJECT.get(id);
      return stub.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  },
};
