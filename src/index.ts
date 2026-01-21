/**
 * MCP CSS First - A Model Context Protocol server for CSS-only development
 *
 * This server enforces CSS-only solutions for UI implementation tasks. It strictly
 * provides modern CSS solutions using:
 * - Modern CSS features (2021-2025) with logical properties as default
 * - CSS-only carousels with modern pseudo-elements (::scroll-marker, ::scroll-button)
 * - light-dark() function for theme switching
 * - Container queries and dynamic viewport units
 * - Zero JavaScript solutions only
 *
 * @author MCP CSS First Team
 * @version 1.0.0
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
import express from "express";
import { randomUUID } from "crypto";

import { version } from "../package.json";
import {
  searchMDNForCSSProperties,
  fetchBrowserSupportFromMDN,
  fetchCSSPropertyDetailsFromMDN,
  generateBrowserSupportRecommendation,
  getAlternativeCSSProperties,
  getImplementationGuidance,
  type CSSPropertySuggestion,
  type BrowserSupportInfo,
  type CSSPropertyDetails,
} from "./services/mdnApi.js";
import {
  deriveSupportLevel,
  getBaselineFromSupportLevel,
  getBaselineLabel,
} from "./services/css/suggestions.js";

// Export for testing purposes
export { CSS_FEATURES, searchFeatures } from "./services/mdnApi.js";

/** The main MCP server instance */
const server = new McpServer({ name: "MCP CSS First", version });

/**
 * MCP Tool: CSS Property Suggestion
 *
 * This tool analyzes UI task descriptions and suggests appropriate CSS properties
 * from MDN documentation. It provides comprehensive information including browser
 * support data and asks for user consent before recommending usage.
 */
server.registerTool(
  "suggest_css_solution",
  {
    description: "CSS-ONLY solution engine with strict enforcement of modern CSS features. Provides zero-JavaScript solutions using cutting-edge CSS (2021-2025) with logical properties, modern carousels, and light-dark() theming.",
    inputSchema: {
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
  },
  async (args: {
    task_description: string;
    preferred_approach?: "modern" | "compatible" | "progressive";
    target_browsers?: string[];
    project_context?: string;
    baseline?: string;
    max_suggestions?: number;
    response_detail?: "compact" | "full";
    include_analysis?: boolean;
  }) => {
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
        if (["widely available", "widely-available", "wide"].includes(normalized)) {
          return "**🟢 Widely Available**";
        }
        if (["newly available", "newly-available", "new"].includes(normalized)) {
          return "**🔵 Newly Available**";
        }
        if (["limited availability", "limited-availability", "limited"].includes(normalized)) {
          return "**🟡 Limited Availability**";
        }
        if (["experimental", "experiental", "exp"].includes(normalized)) {
          return "**🟣 Experimental**";
        }
        return undefined;
      })();

      // Enhanced semantic analysis and intelligent search
      const suggestions: CSSPropertySuggestion[] =
        await searchMDNForCSSProperties(
          task_description,
          preferred_approach,
          project_context,
          baseline,
          max_suggestions
        );

      // Get analysis details if requested
      let analysisDetails = null;
      if (include_analysis) {
        const { analyzeTaskIntent } = await import("./services/mdnApi.js");
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
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                error: error instanceof Error ? error.message : "Unknown error",
              }
            ),
          },
        ],
      };
    }
  }
);

/**
 * MCP Tool: Browser Support Checker
 *
 * This tool checks browser support for specific CSS properties using MDN data
 * and provides detailed compatibility information across different browsers.
 */
server.registerTool(
  "check_css_browser_support",
  {
    description: "Checks browser support for specific CSS properties using MDN data and provides detailed compatibility information.",
    inputSchema: {
      css_property: z
        .string()
        .describe("CSS property name to check browser support for"),
      include_experimental: z
        .boolean()
        .optional()
        .describe("Include experimental/draft features in results"),
    },
  },
  async (args: { css_property: string; include_experimental?: boolean }) => {
    try {
      const { css_property, include_experimental = false } = args;

      const supportInfo: BrowserSupportInfo = await fetchBrowserSupportFromMDN(
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
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                error: error instanceof Error ? error.message : "Unknown error",
              }
            ),
          },
        ],
      };
    }
  }
);

/**
 * MCP Tool: CSS Property Details
 *
 * This tool retrieves comprehensive information about a CSS property from MDN
 * documentation including syntax, examples, and use cases.
 */
server.registerTool(
  "get_css_property_details",
  {
    description: "Retrieves comprehensive information about a CSS property from MDN documentation including syntax, examples, and use cases.",
    inputSchema: {
      css_property: z.string().describe("CSS property name to get details for"),
      include_examples: z
        .boolean()
        .optional()
        .describe("Include code examples in the response"),
    },
  },
  async (args: { css_property: string; include_examples?: boolean }) => {
    try {
      const { css_property, include_examples = true } = args;

      const details: CSSPropertyDetails = await fetchCSSPropertyDetailsFromMDN(
        css_property,
        include_examples
      );

      const result = {
        property: css_property,
        details,
        mdn_url: `https://developer.mozilla.org/en-US/docs/Web/CSS/${css_property}`,
      };

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                error: error instanceof Error ? error.message : "Unknown error",
              }
            ),
          },
        ],
      };
    }
  }
);

/**
 * MCP Tool: User Consent Confirmation
 *
 * This tool confirms user consent for using a specific CSS property and provides
 * implementation guidance including code examples and best practices.
 */
server.registerTool(
  "confirm_css_property_usage",
  {
    description: "Confirms user consent for using a specific CSS property and provides implementation guidance.",
    inputSchema: {
      css_property: z.string().describe("CSS property name user wants to use"),
      user_consent: z.boolean().describe("User consent to use this CSS property"),
      fallback_needed: z
        .boolean()
        .optional()
        .describe("Whether fallback solutions are needed"),
    },
  },
  async (args: {
    css_property: string;
    user_consent: boolean;
    fallback_needed?: boolean;
  }) => {
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
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                error: error instanceof Error ? error.message : "Unknown error",
              }
            ),
          },
        ],
      };
    }
  }
);

/**
 * Start the MCP server
 *
 * Supports both stdio and HTTP transports:
 * - Default: stdio transport for npx usage
 * - PORT env var or --port <number>: HTTP transport for cloud deployment (Render, etc.)
 */
async function startServer() {
  const args = process.argv.slice(2);
  const portIndex = args.indexOf("--port");

  // Check for port from environment variable (Render) or command line argument
  let port: number | undefined;

  if (process.env.PORT) {
    port = parseInt(process.env.PORT);
  } else if (portIndex !== -1 && portIndex + 1 < args.length) {
    port = parseInt(args[portIndex + 1]);
  }

  if (port !== undefined) {
    if (isNaN(port)) {
      console.error("Invalid port number");
      process.exit(1);
    }

    const app = express();
    app.use(express.json());

    // Health check endpoint for Render and other cloud providers
    app.get("/health", (_req, res) => {
      res.status(200).json({ status: "ok", service: "MCP CSS First", version });
    });

    // Root endpoint with service info
    app.get("/", (_req, res) => {
      res.status(200).json({
        name: "MCP CSS First",
        version,
        description: "MCP server for CSS-only development",
        endpoints: {
          health: "/health",
          mcp: "/mcp (POST)"
        }
      });
    });

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
    });

    await server.connect(transport);

    app.post("/mcp", async (req, res) => {
      try {
        await transport.handleRequest(req, res, req.body);
      } catch (error) {
        console.error("Error handling MCP request:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.listen(port, "0.0.0.0", () => {
      console.log(`MCP CSS First server running on HTTP port ${port}`);
      console.log(`Health check: http://localhost:${port}/health`);
      console.log(`MCP endpoint: http://localhost:${port}/mcp`);
    });
  } else {
    // Default stdio transport for npx usage
    const transport = new StdioServerTransport();
    await server.connect(transport);
  }
}

startServer().catch(console.error);
