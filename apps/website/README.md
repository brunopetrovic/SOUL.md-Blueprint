# SOUL.md Blueprint Website

Static, prerendered Astro interface for the canonical repository. The website reads repository Markdown/JSON **at build time**, so human pages, crawlers, accessibility tools, and AI agents receive substantive semantic HTML without executing JavaScript.

The website is also a deliberate **agent-readable distribution layer**. Human HTML, Markdown representations, discovery manifests, read-only API surfaces, and protocol metadata are generated from the same canonical repository so they do not become independent sources of truth.

## Local development

From `apps/website`:

```bash
npm install --no-audit --no-fund
npm run check
npm run build
npm run dev
```

The site expects to live two directories below the repository root (`apps/website`).

## Cloudflare Pages

- Root directory: `apps/website`
- Build command: `npm install --no-audit --no-fund && npm run build`
- Output directory: `dist`
- Required production environment variable: `PUBLIC_SITE_URL=https://your-canonical-domain.example`
- Node compatibility: current LTS

`PUBLIC_SITE_URL` controls generated canonical URLs in JSON-LD, `llms.txt`, sitemaps, OpenAPI, API Catalog, Agent Skills Discovery, and related manifests. Production deployments MUST set the real canonical origin rather than relying on the development fallback.

The core site is fully prerendered. JavaScript is progressive enhancement only (theme, canvas, search, tabs, drawers, code-copy).

## Markdown representations and content negotiation

Every public documentation route receives a clean `.md` representation with:

- YAML frontmatter (`title`, `description`, `canonical`, `source`, `last_updated`, `representation`);
- semantic equivalence with the canonical HTML/source material;
- language-tagged opening code fences;
- a `## Sitemap` navigation section;
- canonical/discovery HTTP `Link` relations when served through Cloudflare.

Cloudflare Pages Advanced Mode is implemented by `public/_worker.js`. For a documentation URL such as `/blueprint`:

```http
GET /blueprint
Accept: text/markdown
```

is internally mapped to `/blueprint.md` and returned as `text/markdown` with `Vary: Accept` and `Content-Location: /blueprint.md`. Normal browser requests continue to receive HTML. The Worker also adds canonical, Markdown alternate, `llms.txt`, OpenAPI, API Catalog, and Agent Skills discovery relations.

## Agent discovery surfaces

The build exposes:

- `/llms.txt` — curated model discovery map;
- `/llms-full.txt` — concatenated high-context corpus;
- `/sitemap.xml` — crawler enumeration with stable source-aware `lastmod` dates;
- `/sitemap.md` — curated Markdown hierarchy;
- `/AGENTS.md` — public copy of canonical repository operating instructions;
- `/glossary` and `/glossary.md` — canonical vocabulary;
- `/agents.txt` — compact discovery notes;
- `/robots.txt` — crawl policy;
- `/search-index.json` — static search index;
- Markdown alternates for every public documentation route (`*.md`).

## Read-only API surfaces

The website publishes a real, read-only HTTP API rather than a decorative OpenAPI file:

- `/openapi.json` — OpenAPI 3.1 service description;
- `/api/v1/catalog.json` — documentation/runtime/case-study catalog;
- `/api/v1/runtime/{slug}.json` — runtime capability profiles;
- `/api/v1/case-study/{slug}.json` — applied SOUL + AGENTS pairs;
- `/.well-known/api-catalog` — RFC 9727 API Catalog linking to the real OpenAPI service;
- `/agents.json` — Wildcard v0.1.0 flow manifest referencing real OpenAPI `operationId`s.

These endpoints are informational/read-only. They do not grant tool authority or create side-effecting capabilities.

## Agent permissions

`/.well-known/agent-permissions.json` follows the LAS-WG v1.0.0 shape and communicates an advisory read-oriented interaction policy. It explicitly does **not** replace runtime-enforced permissions, authentication, sandboxing, credentials, ACLs, or human approval boundaries.

## Agent Skills Discovery

The canonical root `SKILL.md` contains Agent Skills-compatible YAML frontmatter and is published as:

- `/.well-known/agent-skills/index.json` — discovery index using the 0.2.0 schema;
- `/.well-known/agent-skills/soul-engineering/SKILL.md` — exact served skill artifact.

The index digest is generated from the exact `SKILL.md` bytes at build time and CI verifies that the published SHA-256 digest matches the served artifact.

## Protocol truthfulness

A2A and MCP reference implementations exist in `../agent-api`. The website MUST NOT advertise their well-known discovery manifests as live until the corresponding deployed endpoints have been verified.

The same rule applies to commerce, payment, authentication, UI-control, or other agent protocols: **do not occupy a standardized discovery path unless the project actually implements the capability and conforms to that protocol.**

## Conformance

`.github/workflows/conformance.yml` is the production gate. It validates:

- repository JSON and case-study structure;
- website and Agent API typechecks;
- static build success;
- `llms.txt`, sitemap, public `AGENTS.md`, glossary, and Markdown mirror contracts;
- OpenAPI and Wildcard `agents.json` linkage;
- LAS-WG agent-permissions shape;
- RFC 9727 API Catalog linkage;
- Agent Skills index/frontmatter/digest integrity;
- representative Markdown frontmatter, navigation, and language-tagged fences;
- Cloudflare `Accept: text/markdown` negotiation, `Vary`, discovery `Link` headers, media types, and CORS behavior.
