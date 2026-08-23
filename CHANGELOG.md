# Changelog

All notable changes to the SOUL.md Blueprint specification are recorded here.

The project follows Semantic Versioning for the **Blueprint specification**, not for third-party runtimes.

## [1.2.0] — 2026-08-23

### Added
- Public `/AGENTS.md` web representation backed by the canonical repository operational contract.
- Canonical glossary and machine-readable `/sitemap.md` surface.
- Markdown representations for public documentation routes with frontmatter, canonical/source provenance, stable freshness metadata, sitemap context, and language-tagged opening fences.
- `Accept: text/markdown` content negotiation through the Cloudflare Pages advanced-mode `_worker.js`, including `Vary: Accept`, `Content-Location`, canonical/alternate links, OpenAPI discovery, API Catalog discovery, and Agent Skills discovery.
- Read-only website API endpoints for catalog, runtime profiles, and case studies.
- OpenAPI 3.1 contract at `/openapi.json` linked to the website read-only API.
- Wildcard `agents.json` discovery manifest tied to real OpenAPI operation IDs.
- LAS-WG-shaped `/.well-known/agent-permissions.json` policy that remains explicitly advisory rather than a grant of authority.
- RFC 9727 API Catalog at `/.well-known/api-catalog`.
- Agent Skills Discovery index and digest-backed `SOUL Engineering` skill artifact under `/.well-known/agent-skills/`.
- Cloudflare Pages deployment workflow and handoff documentation for authenticated Wrangler deployment.
- Expanded CI conformance assertions covering agent-readable representations, discovery manifests, OpenAPI linkage, permissions, API catalog, Agent Skills digest integrity, and Markdown negotiation behavior.

### Changed
- Blueprint project version advanced to 1.2.0.
- `llms.txt`, `llms-full.txt`, `agents.txt`, robots discovery, footer discovery, and repository representation now expose the broader machine interface set.
- `sitemap.xml` freshness semantics no longer stamp every URL with the build date.
- `SKILL.md` now carries Agent Skills-compatible frontmatter while preserving its canonical engineering procedure.
- Cloudflare deployment guidance now distinguishes source readiness, Pages project/account setup, GitHub secret configuration, and actual production deployment.

### Security
- Agent-facing permission manifests remain descriptive/advisory and do not replace Cloudflare, runtime, tool, or account authorization controls.
- The public website API remains read-only and exposes no credential, publishing, financial, destructive, or account-management operations.
- Deployment credentials are expected only through GitHub Actions secrets or an authenticated Cloudflare/Wrangler session; no Cloudflare credential is committed to the repository.

## [1.1.0] — 2026-08-23

### Added
- Canonical Astro static website under `apps/website`, preserving the Torus visual system while prerendering substantive semantic HTML.
- Responsive hardening for mobile/tablet/desktop, safe areas, `dvh`, mobile TOC, reduced motion, coarse-pointer touch targets, accessible drawers/search/tabs, and keyboard focus restoration.
- Website AI discovery: `llms.txt`, `llms-full.txt`, `agents.txt`, `agents.json`, complete sitemap, robots policy, Markdown alternates, `rel="describedby"`, canonical links, and Schema.org JSON-LD.
- Root `agents.txt` / `agents.json` discovery manifests and `docs/AGENT-WEB-DISCOVERY.md`.
- Conservative experimental `agent-permissions.json` source policy explicitly marked advisory, not enforcement.
- Cloudflare Worker reference implementation under `apps/agent-api` with read-only MCP tools and a minimal A2A knowledge endpoint/Agent Card.
- GitHub Actions conformance workflow validating JSON, case-study pairs, Core-28 cardinality, website build, agent API typecheck, semantic HTML and discovery outputs.

### Changed
- Blueprint project version advanced to 1.1.0; schema versions remain unchanged where semantics are backward compatible.
- Root `llms.txt` upgraded to linked discovery format.
- Website content is read from the checked-out repository at build time rather than fetched from GitHub at page-view time.

### Security
- Added strict static-site security headers and a self-hosted/no-third-party-font architecture.
- Agent API is read-only by design and validates browser origins for MCP requests.
- No manifest grants authority, credentials, publishing rights, financial permissions, or destructive capabilities.

## [1.0.0] — 2026-08-21

### Added
- Formal SOUL Intermediate Representation (`spec/SOUL-IR.schema.json`).
- Portable SOUL package manifest (`spec/SOUL-PACKAGE.schema.json`).
- Machine-readable evaluation case/result schemas.
- Core 28-case adversarial behavioral suite with criticality and repetition guidance.
- Reference `soul_lint.py` and `soul_eval.py` tooling.
- 22 paired SOUL + AGENTS domain case studies.
- Identity lifecycle, subagent/delegation, context-economics, and authority doctrine.
- Machine-readable runtime capability profiles.
- Portable `SKILL.md` and `llms.txt` AI-ingestion surfaces.
- Machine-readable provenance registry.
- Contribution, migration, security, and release governance.

### Changed
- GitHub is the canonical production specification.
- Notion is the upstream research/oracle workspace and knowledge mirror.
- Runtime artifacts are compiled projections of canonical semantics, not independent identity sources.
- Evaluation emphasizes repeated-run pass rates, critical failures, worst-case behavior, ablation, and mutation testing.

### Compatibility
Version 1.0.0 formalizes concepts already present in the pre-1.0 repository. Existing SOUL files do not require automatic rewriting; audit them against v1 schemas and tests.

## Versioning policy
- **MAJOR** — changes canonical semantics or breaks schema/adapter compatibility.
- **MINOR** — adds backward-compatible doctrine, schemas, adapters, evals, case studies, or tooling.
- **PATCH** — clarifications, source refreshes, corrections, and non-semantic documentation improvements.

Runtime documentation can become stale without a Blueprint version bump. Runtime profiles therefore carry their own `verified_at` dates.
