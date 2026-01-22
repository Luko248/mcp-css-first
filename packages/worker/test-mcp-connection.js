#!/usr/bin/env node

/**
 * Test script for MCP Streamable HTTP connection using the SDK client.
 */

const main = async () => {
  const baseUrl = process.env.MCP_URL || "http://localhost:8787/mcp";

  const { Client } = await import(
    "@modelcontextprotocol/sdk/client/index.js"
  );
  const { StreamableHTTPClientTransport } = await import(
    "@modelcontextprotocol/sdk/client/streamableHttp.js"
  );

  const transport = new StreamableHTTPClientTransport(new URL(baseUrl));
  const client = new Client({
    name: "test-client",
    version: "1.0.0",
  });

  client.onerror = (error) => {
    const message = error?.message || String(error);
    if (message.includes("AbortError")) {
      return;
    }
    console.error("❌ MCP client error:", message);
  };

  try {
    console.log("Attempting to connect to:", baseUrl);
    await client.connect(transport);
    console.log("✅ MCP connection established!");

    const tools = await client.listTools();
    console.log("\n🔧 Tools:");
    for (const tool of tools.tools || []) {
      console.log(`- ${tool.name}`);
    }
  } finally {
    await client.close();
  }
};

main().catch((error) => {
  console.error("❌ MCP test failed:", error.message || error);
  process.exitCode = 1;
});
