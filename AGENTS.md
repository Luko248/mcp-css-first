# Repository Guidelines

## Project Structure (pnpm Monorepo)

```
mcp-css-first/
├── packages/
│   ├── core/           # @css-first/core - shared CSS services
│   │   └── src/        # MDN client, suggestions, features, types
│   ├── cli/            # @depthark/css-first - npm package (stdio/HTTP)
│   │   └── src/        # MCP server entrypoint
│   └── worker/         # @css-first/worker - Cloudflare Workers (SSE)
│       └── src/        # McpAgent class for remote MCP
├── pnpm-workspace.yaml # Workspace configuration
├── wrangler.toml       # Cloudflare Workers deployment config
└── smithery.yaml       # Smithery registry config
```

## Build, Test, and Development Commands

```bash
pnpm install              # Install all dependencies
pnpm run build            # Build all packages
pnpm run build:core       # Build @css-first/core only
pnpm run build:cli        # Build @depthark/css-first only
pnpm run typecheck        # Type check all packages
pnpm run lint             # Run ESLint
pnpm run deploy:worker    # Deploy to Cloudflare Workers
pnpm run publish:cli      # Publish CLI to npm
```

### Package-specific commands (run from package directory)
- `packages/cli`: `pnpm run build` - bundles with `@vercel/ncc`
- `packages/core`: `pnpm run build` - compiles TypeScript
- `packages/worker`: `pnpm run dev` - local Cloudflare development

## Coding Style & Naming Conventions
- TypeScript with strict mode enabled
- Indentation is 2 spaces; prefer double quotes
- Use `camelCase` for variables/functions, `PascalCase` for types/classes
- Follow ESLint rules (unused args prefixed with `_`)

## Package Dependencies
- `@css-first/core` is internal (private: true), shared between cli and worker
- `@depthark/css-first` is publishable to npm
- `@css-first/worker` is private, deployed to Cloudflare only

## Testing Guidelines
- No automated test runner configured
- Rely on `pnpm run typecheck` and manual CLI testing
- Test worker locally with `pnpm --filter @css-first/worker dev`

## Commit & Pull Request Guidelines
- Conventional Commits style: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- Keep commits scoped to single changes
- PRs should pass: build, lint, typecheck

## Deployment
- **npm**: `pnpm run publish:cli` from root or `pnpm publish` from packages/cli
- **Cloudflare Workers**: Auto-deploys on git push via wrangler.toml
- Runtime target: Node.js 18+
