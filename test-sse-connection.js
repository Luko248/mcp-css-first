#!/usr/bin/env node

/**
 * Test script for MCP SSE connection using fetch + SSE parsing.
 */

const main = async () => {
  const baseUrl = process.env.MCP_URL || "http://localhost:8787";
  const sseUrl = new URL("/sse", baseUrl).toString();

  console.log("Attempting to connect to:", sseUrl);
  console.log("Using SSE protocol...\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    console.log("\n⏱️  Test timeout - closing connection");
    controller.abort();
  }, 10000);

  const initMessage = {
    jsonrpc: "2.0",
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "test-client",
        version: "1.0.0",
      },
    },
    id: 1,
  };

  const sendInitialize = async (endpointPath) => {
    const endpointUrl = new URL(endpointPath, baseUrl).toString();
    console.log("\nSending initialize message to:", endpointUrl);
    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initMessage),
    });
    if (!response.ok) {
      throw new Error(`Initialize POST failed: ${response.status}`);
    }
  };

  const parseSseEvents = async (stream) => {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let endpointSent = false;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let eventEnd = buffer.indexOf("\n\n");
      while (eventEnd !== -1) {
        const rawEvent = buffer.slice(0, eventEnd);
        buffer = buffer.slice(eventEnd + 2);
        eventEnd = buffer.indexOf("\n\n");

        const lines = rawEvent.split("\n");
        let eventType = "message";
        let data = "";
        for (const line of lines) {
          if (line.startsWith("event:")) eventType = line.slice(6).trim();
          if (line.startsWith("data:")) data += line.slice(5).trim();
        }

        if (eventType === "endpoint" && data && !endpointSent) {
          endpointSent = true;
          await sendInitialize(data);
          continue;
        }

        if (eventType === "message" && data) {
          console.log("\n📨 Received message:");
          try {
            const json = JSON.parse(data);
            console.log(JSON.stringify(json, null, 2));
          } catch (error) {
            console.log(data);
          }
          clearTimeout(timeout);
          controller.abort();
          return;
        }
      }
    }
  };

  try {
    const response = await fetch(sseUrl, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`SSE connect failed: ${response.status}`);
    }
    console.log("✅ SSE connection established!");
    await parseSseEvents(response.body);
  } catch (error) {
    console.error("❌ SSE error:", error.message || error);
  } finally {
    clearTimeout(timeout);
  }
};

main().catch((error) => {
  console.error("❌ SSE test failed:", error.message || error);
  process.exitCode = 1;
});
