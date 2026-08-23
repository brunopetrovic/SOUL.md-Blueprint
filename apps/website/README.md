# SOUL.md Blueprint Website

Static, prerendered Astro interface for the canonical repository. The website reads repository Markdown/JSON **at build time**, so human pages, crawlers, accessibility tools, and AI agents receive substantive semantic HTML without executing JavaScript.

## Local development

From `apps/website`:

```bash
npm install
npm run build
npm run dev
```

The site expects to live two directories below the repository root (`apps/website`).

## Cloudflare Pages

- Root directory: `apps/website`
- Build command: `npm install --no-audit --no-fund && npm run build`
- Output directory: `dist`
- Recommended environment variable: `PUBLIC_SITE_URL=https://your-domain.example`
- Node compatibility: current LTS

The app is fully static. JavaScript is progressive enhancement only (theme, canvas, search, tabs, drawers, code-copy).

## Agent surfaces

The build exposes:

- `/llms.txt`
- `/llms-full.txt`
- `/agents.txt`
- `/agents.json`
- `/.well-known/agent-permissions.json`
- Markdown alternates for documentation routes (`*.md`)
- `/search-index.json`
- `/sitemap.xml`
- `/robots.txt`

A2A and MCP are implemented in `../agent-api`. Their public discovery manifests should only point to deployed endpoints.
