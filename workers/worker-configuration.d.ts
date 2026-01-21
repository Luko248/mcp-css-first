/**
 * Cloudflare Workers environment type definitions
 */

interface Env {
  MCP_OBJECT: DurableObjectNamespace;
}

declare module "agents/mcp" {
  export class McpAgent<E = unknown, S = unknown, P = unknown> {
    server: import("@modelcontextprotocol/sdk/server/mcp.js").McpServer;
    env: E;
    state: S;
    props: P;
    setState(state: Partial<S>): void;
    init(): Promise<void>;
    fetch(request: Request): Promise<Response>;
  }
}
