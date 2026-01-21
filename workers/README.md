# MCP CSS First - Cloudflare Workers

Remote MCP server for CSS-only development running on Cloudflare Workers with Durable Objects.

## Features

- **Remote MCP Server** - Accessible via URL, no local installation needed
- **Durable Objects** - Each MCP session has persistent state
- **WebSocket Hibernation** - Pay only when the server is actively processing
- **Global Edge Network** - Low latency from anywhere in the world

## Quick Start

### 1. Install Dependencies

```bash
cd workers
npm install
```

### 2. Local Development

```bash
npm run dev
```

This starts the local development server at `http://localhost:8787`.

Test endpoints:
- Health check: `http://localhost:8787/health`
- Service info: `http://localhost:8787/`
- MCP (SSE): `http://localhost:8787/sse`
- MCP (Streamable HTTP): `http://localhost:8787/mcp`

### 3. Deploy to Cloudflare

```bash
# Login to Cloudflare (first time only)
npx wrangler login

# Deploy
npm run deploy
```

Your MCP server will be available at:
```
https://mcp-css-first.<your-subdomain>.workers.dev
```

## Configuration

### wrangler.jsonc

The main configuration file. Key settings:

```jsonc
{
  "name": "mcp-css-first",           // Worker name (becomes URL prefix)
  "compatibility_flags": ["nodejs_compat"], // Node.js compatibility
  "durable_objects": {
    "bindings": [{
      "name": "MCP_OBJECT",
      "class_name": "CSSFirstMCP"    // Durable Object class
    }]
  }
}
```

### Custom Domain

To use a custom domain, add to `wrangler.jsonc`:

```jsonc
{
  "routes": [
    { "pattern": "mcp.yourdomain.com/*", "zone_name": "yourdomain.com" }
  ]
}
```

## Connecting MCP Clients

### Claude Desktop

Add to your Claude Desktop config (`~/.config/Claude/claude_desktop_config.json` on Linux/Mac or `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "css-first-remote": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp-css-first.<your-subdomain>.workers.dev/sse"
      ]
    }
  }
}
```

### Cloudflare AI Playground

1. Go to [Cloudflare AI Playground](https://playground.ai.cloudflare.com/)
2. Click "Add MCP Server"
3. Enter your worker URL: `https://mcp-css-first.<your-subdomain>.workers.dev/sse`

### Cursor / Other MCP Clients

Use the SSE endpoint: `https://mcp-css-first.<your-subdomain>.workers.dev/sse`

## Available Tools

The MCP server exposes 4 tools:

1. **suggest_css_solution** - CSS-only solution engine with modern CSS features
2. **check_css_browser_support** - Check browser support for CSS properties
3. **get_css_property_details** - Get comprehensive CSS property documentation
4. **confirm_css_property_usage** - Confirm usage and get implementation guidance

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Service information |
| `/health` | GET | Health check |
| `/sse` | POST | MCP over Server-Sent Events |
| `/mcp` | POST | MCP Streamable HTTP transport |

## Development

### Project Structure

```
workers/
├── src/
│   └── index.ts          # McpAgent class and worker handler
├── wrangler.jsonc        # Cloudflare Workers config
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
└── worker-configuration.d.ts  # Type definitions
```

### Commands

```bash
npm run dev      # Start local development server
npm run deploy   # Deploy to Cloudflare
npm run typecheck # Type check
npm run tail     # Stream live logs from production
```

### Logs

View real-time logs from your deployed worker:

```bash
npm run tail
```

## Differences from Node.js Version

| Feature | Node.js (npm) | Cloudflare Workers |
|---------|---------------|-------------------|
| Transport | stdio / HTTP | SSE / Streamable HTTP |
| State | In-memory cache | Durable Objects |
| Scaling | Manual | Automatic |
| Cold starts | None | ~50ms (hibernation) |
| Cost | Self-hosted | Pay per request |

## Troubleshooting

### "Durable Object not found"

Run the migration:
```bash
npx wrangler migrations create v1 --new_class=CSSFirstMCP
npx wrangler deploy
```

### Build errors with imports

The worker imports services from the parent `src/` directory. Make sure:
1. You're in the `workers/` directory
2. Parent `src/services/` exists
3. Run `npm run dev` from `workers/` directory

### Rate limiting

Cloudflare Workers have a limit of 100,000 requests/day on the free plan. For higher limits, upgrade to the Workers Paid plan.

## Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare MCP Guide](https://developers.cloudflare.com/agents/guides/remote-mcp-server/)
- [MCP Specification](https://modelcontextprotocol.io/)
- [Main CSS First Repository](https://github.com/luko248/css-first)
