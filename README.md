# CSS First

An advanced MCP (Model Context Protocol) server that provides intelligent, context-aware CSS-first solutions for UI implementation tasks. Features semantic analysis, framework detection, and intelligent ranking with direct MDN integration.

[![smithery badge](https://smithery.ai/badge/mcp-css-first)](https://smithery.ai/server/mcp-css-first) • [Glama Directory](https://glama.ai/mcp/servers/@Luko248/css-first)

## Setup

Choose between **Remote MCP** (Server-Sent Events) or **Local MCP** (stdio) installation:

### 🌐 Remote MCP via SSE (Recommended)

Connect to our hosted Cloudflare Worker instance - no local installation required:

**URL:** `https://mcp-css-first.chylik-lukas.workers.dev/sse`

#### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "css-first-remote": {
      "url": "https://mcp-css-first.chylik-lukas.workers.dev/sse",
      "transport": "sse"
    }
  }
}
```

#### Cursor / Windsurf / Cline

Add to your MCP settings:

```json
{
  "mcpServers": {
    "css-first-remote": {
      "url": "https://mcp-css-first.chylik-lukas.workers.dev/sse",
      "transport": "sse"
    }
  }
}
```

#### Claude Code CLI

Edit `~/.config/claude/config.json` and add:

```json
{
  "mcpServers": {
    "css-first-remote": {
      "url": "https://mcp-css-first.chylik-lukas.workers.dev/sse",
      "transport": "sse"
    }
  }
}
```

---

### 💻 Local MCP via stdio

Install and run locally using npm package:

#### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "css-first": {
      "command": "npx",
      "args": ["-y", "@depthark/css-first"]
    }
  }
}
```

#### Cursor

Add to MCP settings (`.cursor/mcp_settings.json` or via Settings UI):

```json
{
  "mcpServers": {
    "css-first": {
      "command": "npx",
      "args": ["-y", "@depthark/css-first"]
    }
  }
}
```

#### Windsurf

Add to MCP configuration:

```json
{
  "mcpServers": {
    "css-first": {
      "command": "npx",
      "args": ["-y", "@depthark/css-first"]
    }
  }
}
```

#### Cline (VS Code Extension)

Add to Cline MCP settings:

```json
{
  "mcpServers": {
    "css-first": {
      "command": "npx",
      "args": ["-y", "@depthark/css-first"]
    }
  }
}
```

#### Claude Code CLI

```bash
claude mcp add css-first npx -y @depthark/css-first
```

#### Codex

Add to `mcp_servers.toml`:

```toml
[mcp_servers.css-first]
command = "npx"
args = ["-y", "@depthark/css-first"]
```

#### Zed Editor

Add to Zed settings:

```json
{
  "context_servers": {
    "css-first": {
      "command": {
        "path": "npx",
        "args": ["-y", "@depthark/css-first"]
      }
    }
  }
}
```

---

### 🚀 Deploy Your Own Remote Instance

Deploy your own Cloudflare Worker:

```bash
git clone https://github.com/luko248/css-first
cd css-first
bun install
bun run build:core
bun run deploy:worker
```

Then use your custom URL:
```
https://mcp-css-first.<your-subdomain>.workers.dev/sse
```

## Usage

After adding the configuration:

1. Restart your MCP client
2. Ask CSS questions like:
   - "Create a responsive card layout"
   - "Center a div vertically and horizontally"
   - "Add dark mode support"
   - "Make a sticky header"
   - "Create organic rounded corners with corner-shape"
   - "Design modern buttons with superellipse curves"

## 🚀 Key Features

### **Intelligent Analysis**

- **Semantic Intent Recognition**: Understands user intent through advanced pattern matching (layout, animation, spacing, etc.)
- **Confidence Scoring**: Provides transparency with confidence levels for suggestions
- **Context-Aware Keywords**: Enhanced keyword extraction with semantic understanding

### **Project Context Awareness**

- **Framework Detection**: Automatically detects React, Vue, Angular, Svelte projects
- **CSS Framework Recognition**: Supports Tailwind, Bootstrap, Material-UI, Chakra UI
- **Build Tool Integration**: Recognizes Webpack, Vite, Parcel, Rollup environments
- **Constraint Analysis**: Understands project constraints (performance, accessibility, responsive)

### **Enhanced MDN Integration**

- **Direct MDN Parsing**: Pulls property data straight from MDN pages
- **Performance Caching**: 1-hour intelligent caching for improved response times
- **Real-time Browser Support**: Compatibility data derived from MDN content

### **Intelligent Ranking**

- **Relevance Scoring**: Suggestions ranked by intent match, browser support, and framework compatibility
- **Category-Prioritized Search**: Focuses on most relevant CSS feature categories
- **Framework-Specific Recommendations**: Tailored advice for your tech stack

### **User Experience**

- **Consent-Driven Workflow**: User approval required before property recommendations
- **Detailed Analysis**: Optional semantic analysis breakdown for transparency
- **Implementation Guidance**: Framework-specific best practices and code examples

## Development Installation

For contributors and advanced users who want to modify the source:

```bash
git clone https://github.com/luko248/css-first
cd css-first
bun install
bun run build
```

## Development Usage

For development/testing with local builds:

```json
{
  "mcpServers": {
    "@depthark/css-first": {
      "command": "node",
      "args": ["/absolute/path/to/css-first/packages/cli/dist/cli.js"]
    }
  }
}
```

## Available Tools

### 1. `suggest_css_solution` ⭐

Enhanced CSS-first solution suggester with semantic analysis, context awareness, and intelligent ranking.

**Parameters:**

- `task_description` (string): Description of the UI task or problem to solve
- `preferred_approach` (optional): 'modern', 'compatible', or 'progressive'
- `target_browsers` (optional): Array of target browsers/versions
- `project_context` (optional): Project context (framework, existing CSS patterns, constraints) **NEW**
- `include_analysis` (optional): Include semantic analysis details in response **NEW**
- `baseline` (optional): CSS Baseline availability filter: "Widely Available", "Newly Available", "Limited Availability", "Experimental" **NEW**
- `max_suggestions` (optional): Limit number of suggestions (default 3)
- `response_detail` (optional): "compact" (default) or "full" response fields
  - compact returns minimal fields (property, description, support_level, baseline, overall_support, mdn_url)

**Examples:**

**Basic Usage:**

```json
{
  "task_description": "I need to center a div horizontally and vertically",
  "preferred_approach": "modern"
}
```

**With Project Context:**

```json
{
  "task_description": "Create a responsive card layout with hover animations",
  "preferred_approach": "modern",
  "project_context": "React project using Tailwind CSS, targeting Chrome 90+, performance-critical",
  "include_analysis": true
}
```

**With Baseline Filter:**

```json
{
  "task_description": "Create a tooltip",
  "baseline": "Experimental"
}
```

**Full Response Fields:**

```json
{
  "task_description": "Create a tooltip",
  "response_detail": "full",
  "max_suggestions": 5
}
```

**Response includes:**

- Intelligently ranked CSS suggestions
- Framework-specific recommendations
- Semantic analysis breakdown (optional)
- Confidence scoring and intent detection
- Baseline availability labels with emoji color tags
- Support level derived from MDN browser data
- Compact responses by default to reduce token usage

### 2. `check_css_browser_support`

Checks browser support for specific CSS properties using MDN data.

**Parameters:**

- `css_property` (string): CSS property name to check
- `include_experimental` (optional boolean): Include experimental features

**Example:**

```json
{
  "css_property": "flexbox",
  "include_experimental": false
}
```

### 3. `get_css_property_details`

Retrieves comprehensive information about a CSS property from MDN documentation.

**Parameters:**

- `css_property` (string): CSS property name to get details for
- `include_examples` (optional boolean): Include code examples

**Example:**

```json
{
  "css_property": "grid",
  "include_examples": true
}
```

### 4. `confirm_css_property_usage`

Confirms user consent for using a specific CSS property and provides implementation guidance.

**Parameters:**

- `css_property` (string): CSS property name user wants to use
- `user_consent` (boolean): User consent to use this CSS property
- `fallback_needed` (optional boolean): Whether fallback solutions are needed

**Example:**

```json
{
  "css_property": "container-queries",
  "user_consent": true,
  "fallback_needed": true
}
```

## 🧠 How It Works

### **Intelligent Analysis Pipeline**

1. **Semantic Intent Recognition**: Advanced regex patterns analyze task descriptions to understand user intent (layout, animation, spacing, responsive, visual, interaction)

2. **Project Context Analysis**: Detects frameworks, CSS libraries, build tools, and constraints from project context string

3. **MDN Integration**:
   - Direct MDN parsing for property details and support data
   - Caching: 1-hour intelligent cache for performance

4. **Intelligent Ranking**: Scores suggestions based on:
   - Intent match relevance
   - Browser support level
   - Framework compatibility
   - User confidence multiplier

5. **Context-Aware Recommendations**: Provides framework-specific guidance and best practices

6. **User Consent & Implementation**: Consent-driven workflow with detailed implementation guidance

### **Example Analysis Flow**

```
Input: "Create a responsive navigation menu with smooth animations"
↓
Intent Detection: layout + responsive + animation (85% confidence)
↓
Context: React + Tailwind detected
↓
Ranked Suggestions:
1. Flexbox layout (95% support) + CSS transitions
2. CSS Grid (92% support) + transform animations
3. Container queries (75% support) with fallbacks
↓
Framework Recommendations: "Use Tailwind's responsive prefixes", "Consider React transition components"
```

## Development

```bash
# Install dependencies
bun install

# Build all packages
bun run build

# Build specific packages
bun run build:core     # @css-first/core
bun run build:cli      # @depthark/css-first

# Type check
bun run typecheck

# Lint code
bun run lint

# Deploy to Cloudflare Workers
bun run deploy:worker

# Publish CLI to npm
bun run publish:cli
```

## 📁 Project Structure (Bun Monorepo)

```
packages/
├── core/                        # @css-first/core - shared CSS services
│   └── src/
│       ├── index.ts            # CSS services entry point
│       ├── types.ts            # TypeScript interfaces and enums
│       ├── mdnClient.ts        # MDN client and parser
│       ├── suggestions.ts      # Semantic analysis and intelligent ranking
│       ├── guidance.ts         # Implementation guidance
│       ├── contextAnalyzer.ts  # Project context detection
│       └── features/           # Modular CSS feature definitions
│           ├── animation/      # Animation and transition features
│           ├── layout/         # Flexbox, Grid features
│           ├── logical/        # Logical properties
│           ├── responsive/     # Responsive design
│           ├── visual/         # Visual effects
│           └── ...             # More feature modules
├── cli/                         # @depthark/css-first - npm package
│   └── src/
│       └── index.ts            # MCP server (stdio/HTTP transport)
└── worker/                      # @css-first/worker - Cloudflare Workers
    ├── src/
    │   └── index.ts            # McpAgent class for remote MCP (SSE)
    └── wrangler.toml           # Worker-specific config
```

### **Key Architecture Benefits**

- **Monorepo Structure**: Shared core, separate deployments (npm + Cloudflare)
- **Modular Design**: Each CSS category has dedicated modules for maintainability
- **Semantic Analysis**: Intent recognition and confidence scoring for accuracy
- **Context Awareness**: Framework and project constraint detection
- **Performance Optimized**: Intelligent caching and ranked results
- **Dual Deployment**: Local CLI via npm, remote MCP via Cloudflare Workers

## 🎯 CSS Feature Coverage

### **Intelligent Categories**

The enhanced system provides context-aware suggestions across:

- **Layout** 🏗️: Flexbox, Grid, positioning, display modes
- **Animation** ✨: CSS animations, transitions, transforms
- **Responsive** 📱: Container queries, media queries, viewport units
- **Visual** 🎨: Shadows, gradients, borders, effects
- **Interaction** 🖱️: Hover states, focus, active, disabled
- **Logical Properties** 📐: Writing-mode aware spacing and sizing
- **HTML APIs** 🧩: Dialogs, popovers, invoker commands
- **Typography** 📝: Font properties, text alignment, spacing
- **Positioning** 📍: Static, relative, absolute, fixed, sticky

### **Supported Feature Catalog**

**Logical Spacing**

- Logical Spacing Properties
- Modern CSS Units

**Layout (Flexbox)**

- Flexbox

**Layout (Grid)**

- CSS Grid
- CSS Subgrid

**Animation**

- CSS Transitions
- CSS Animations
- CSS @starting-style
- CSS interpolate-size
- CSS Scroll Timeline
- CSS View Timeline
- CSS Animation Timeline
- CSS Animation Range
- CSS View Timeline Inset
- CSS Timeline Scope
- CSS View Transitions

**Visual**

- CSS Gradients
- CSS Transforms
- Logical Border Properties
- CSS Overflow
- CSS Overflow Clip
- CSS Overscroll Behavior
- CSS Corner Shape
- CSS -webkit-box-reflect

**Responsive**

- Media Queries

**Interaction**

- CSS Scroll Snap
- Modern CSS Carousel with Pseudo-Elements

**Selectors**

- Basic Selectors
- Attribute Selectors
- State Pseudo-classes
- Structural Pseudo-classes
- Modern Selectors
- Pseudo-elements
- Form Validation Selectors

**Logical**

- CSS if() Function

**HTML**

- Invoker Commands
- Dialog closedby Attribute

**Positioning**

- CSS Anchor Positioning
- Anchor Positioning with Container Queries
- Anchor Name
- Position Anchor
- Position Area
- Position Try Properties
- Position Visibility
- Position Try At-Rule
- Anchor Functions

**Display**

- CSS Display Property
- Display Contents
- Flexbox Display
- Grid Display
- Inline Display Values
- Block Display Values
- Table Display Values
- Display None
- List Item Display
- Flow Root Display
- Subgrid Display

**Modern: Container & Queries**

- CSS Container Queries
- CSS Container Style Queries
- CSS Container Scroll State Queries
- CSS Anchor Positioning
- Anchor Positioning with Container Queries
- Expanded Range Syntax

**Modern: Layout & Sizing**

- CSS Subgrid
- CSS Masonry Layout
- CSS Grid Lanes (Masonry)
- CSS Sizing Properties
- Flexbox gap Property
- Enhanced Logical Properties
- Mobile Viewport Heights
- Stretch Sizing Keyword
- CSS aspect-ratio
- CSS Nesting

**Modern: Color & Visual**

- CSS color-mix() Function
- CSS color-contrast() Function
- CSS accent-color
- CSS color-scheme
- CSS light-dark() Function
- Enhanced Light-Dark Theme System
- CSS backdrop-filter
- CSS conic-gradient
- CSS image-set() Function
- Enhanced Text Decoration
- Enhanced font-variant Properties
- Text Box Trim

**Modern: Motion & Transitions**

- Scroll-driven Animations
- Scroll-triggered Animations
- CSS View Transitions
- View Transition Group Property
- Scoped View Transitions

**Modern: Interaction & UI Patterns**

- CSS Carousel with Modern Pseudo-Elements
- Scroll-Driven Carousel Animations
- CSS-Only Form Validation
- CSS-Only Modal/Dialog
- CSS-Only Tabs/Accordion
- CSS-Only Navigation Patterns
- CSS-Only Loading/Skeleton
- Popover API
- Interest Invokers
- Scroll Target Group

**Modern: Media & Environment**

- Enhanced prefers-\* Media Queries
- CSS forced-colors Media Query
- CSS env() Function
- CSS scroll-behavior
- CSS overscroll-behavior

**Modern: Functions & Syntax**

- CSS Enhanced Math Functions
- CSS if() Conditional Function
- CSS Custom Functions (@function)
- CSS shape() Function
- Advanced attr() Function
- Tree Counting Functions
- Customizable Select Element

### **Framework-Specific Features**

- **React**: Component-scoped styling, CSS-in-JS patterns
- **Vue**: Scoped styles, transition components
- **Angular**: ViewEncapsulation, Material Design integration
- **Svelte**: Built-in scoped styling, reactive CSS

### **CSS Framework Integration**

- **Tailwind**: Utility-first patterns, responsive prefixes
- **Bootstrap**: Grid system, utility classes
- **Material-UI**: Theme customization, sx props
- **Chakra UI**: Design system tokens

## 📊 Enhanced Browser Support Levels

- **Excellent** (95%+): ✅ Safe for production use
- **Good** (85%+): ⚠️ Consider fallbacks for legacy browsers
- **Moderate** (70%+): ⚡ Use with caution and provide fallbacks
- **Limited** (<70%): 🔄 Consider alternative approaches
- **Experimental** (varies): 🧪 Cutting-edge features with progressive enhancement

## ✅ CSS Baseline Availability

When you pass the `baseline` parameter, responses include an emoji tag per suggestion:

- **🟢 Widely Available**: broadly supported and safe for most production usage
- **🔵 Newly Available**: recently supported, validate target browsers
- **🟡 Limited Availability**: spotty support; use progressive enhancement
- **🟣 Experimental**: likely behind flags or drafts; only for experiments

## 🔧 Automated Feature Discovery

This MCP features **automated CSS feature discovery** using MDN documentation. The system continuously discovers and integrates recent CSS features (2021-2025) with intelligent categorization.

### **Automated Feature Discovery**

- **🤖 Auto-Discovery**: Automatically finds and categorizes new CSS features from MDN
- **📊 Intelligent Categorization**: Uses semantic analysis to categorize features by type
- **🔄 Continuous Updates**: Built-in mechanisms for ongoing feature maintenance
- **📈 Browser Support Analysis**: Automatic extraction of compatibility information

### **Recently Integrated Features (2021-2025)**

#### **🆕 Major CSS Features Added**

- **Container Queries** (2022): Element-based responsive design with logical units (`cqi`, `cqb`) and style/scroll queries
- **CSS Nesting** (2023): Native CSS nesting without preprocessors
- **:has() Pseudo-class** (2022): Parent selection based on children
- **Dynamic Viewport Units** (2022-2023): Complete logical viewport units (`dvi`, `dvb`, `svi`, `svb`, `lvi`, `lvb`) with physical fallbacks
- **color-mix() Function** (2021-2024): Advanced color mixing in different color spaces
- **Scroll-driven Animations** (2023-2024): Animations driven by scroll progress
- **CSS Cascade Layers** (2022): Better style organization with @layer
- **Subgrid** (2021-2023): Grid items participating in parent grid
- **aspect-ratio Property** (2021): Native aspect ratio control
- **Enhanced Math Functions** (2021-2023): clamp(), round(), trigonometric functions

#### **📱 Responsive & Modern Layout**

- **CSS Anchor Positioning** (2024): Position elements relative to other elements
- **View Transitions** (2023-2024): Smooth page/view transitions
- **Enhanced Logical Properties**: Complete writing-mode aware spacing, sizing, and positioning
- **Container Style Queries**: Query container's computed style values
- **Container Scroll State Queries**: Query container's scroll state
- **Masonry Layout** (Experimental): Pinterest-style layouts

#### **🎨 Visual & Color Enhancements**

- **accent-color**: Customize form control colors
- **color-scheme**: Light/dark mode indication
- **light-dark() Function**: Theme-aware color values
- **backdrop-filter**: Glass morphism effects
- **conic-gradient**: Conical gradients for complex designs
- **corner-shape** (Experimental): Superellipse curves for organic, Apple-like rounded corners

### **Automated Update Commands**

```bash
# Discover and integrate new CSS features from MDN
npm run update-features

# Run feature discovery (development)
npm run discover-features
```

### **MDN Setup**

- Uses direct MDN parsing with caching and structured extraction
- No external MCP dependencies required for documentation lookups

## 🌍 Logical Units & Internationalization

This MCP implements a **logical-first approach** to CSS suggestions, prioritizing writing-mode aware properties for better internationalization support.

### **Logical Units Priority System**

#### **Viewport Units (Logical Preferred)**

- `dvi`, `dvb` (dynamic viewport inline/block) → `dvw`, `dvh` (physical fallback)
- `svi`, `svb` (small viewport inline/block) → `svw`, `svh` (physical fallback)
- `lvi`, `lvb` (large viewport inline/block) → `lvw`, `lvh` (physical fallback)

#### **Container Query Units (Logical Preferred)**

- `cqi`, `cqb` (container query inline/block) → `cqw`, `cqh` (physical fallback)

#### **CSS Properties (Logical Preferred)**

- `inline-size`, `block-size` → `width`, `height` (physical fallback)
- `margin-inline`, `margin-block` → `margin-left/right`, `margin-top/bottom`
- `padding-inline`, `padding-block` → `padding-left/right`, `padding-top/bottom`
- `border-inline`, `border-block` → `border-left/right`, `border-top/bottom`
- `inset-inline`, `inset-block` → `left/right`, `top/bottom`

### **Advanced Container Queries**

#### **Size-based Container Queries (Enhanced)**

```css
@container (inline-size > 30cqi) {
  .component {
    gap: 2cqi;
  }
}
```

#### **Style Queries (NEW)**

```css
@container style(--theme: dark) {
  .card {
    background: var(--dark-bg);
  }
}
```

#### **Scroll State Queries (NEW)**

```css
@container scroll-state(stuck: top) {
  .header {
    backdrop-filter: blur(10px);
  }
}
```

### **Writing-Mode Awareness**

- **RTL Language Support**: Logical properties automatically adapt to right-to-left languages
- **Vertical Writing Modes**: Properties work correctly with `writing-mode: vertical-rl`
- **International Compatibility**: Suggestions prioritize globally compatible approaches

## License

MIT
