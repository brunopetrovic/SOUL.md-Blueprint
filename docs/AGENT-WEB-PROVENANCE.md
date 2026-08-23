# Agent-Readable Web Standards Provenance

Verified: 2026-08-23.

This document records the standards and first-party implementation references used by the SOUL.md Blueprint website's agent-readable distribution layer.

## Cloudflare Pages

Authority: first-party deployment/runtime documentation.

- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- https://developers.cloudflare.com/pages/functions/advanced-mode/
- https://developers.cloudflare.com/workers/wrangler/commands/pages/

Implementation relevance:

- `wrangler pages deploy` is the supported direct-upload command for prebuilt Pages assets.
- CI deployment uses `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` rather than committing credentials.
- Pages advanced mode recognizes `_worker.js` in the output directory.
- Advanced-mode Workers must forward static-asset requests through `env.ASSETS.fetch()`.

## HTTP representation negotiation

Authority: HTTP semantics and media-type conventions.

Implementation rule:

- Browser/default requests retain the canonical HTML representation.
- Requests that explicitly accept `text/markdown` may receive the documented Markdown alternate.
- Responses that vary by `Accept` emit `Vary: Accept`.
- Markdown responses identify their representation with `Content-Type: text/markdown` and `Content-Location`.
- Canonical and alternate relationships are also advertised through HTTP `Link` metadata.

## OpenAPI

Authority: OpenAPI Specification 3.1.

- https://spec.openapis.org/oas/v3.1.0

Implementation relevance:

- `/openapi.json` describes only operations that are actually exposed by the website.
- The contract is read-only and does not invent write authority.

## API Catalog

Authority: RFC 9727, "The API Catalog".

- https://www.rfc-editor.org/rfc/rfc9727.html

Implementation relevance:

- `/.well-known/api-catalog` advertises discoverable API descriptions without conflating discovery with authorization.

## Agent Skills discovery

Implementation status: emerging agent ecosystem convention rather than universal web-platform law.

Repository policy:

- Skill discovery points to an actual `SKILL.md` artifact.
- The published skill artifact is digest-backed so consumers can detect representation drift.
- The skill remains a procedure/knowledge artifact; it does not grant runtime permissions.

## Agent permissions manifest

Implementation status: advisory interoperability surface.

Repository policy:

- `/.well-known/agent-permissions.json` communicates preferred interaction boundaries.
- It does not replace Cloudflare access controls, authentication, sandboxing, runtime policy, tool permissions, or human approval gates.
- No public manifest may be interpreted as credentials or as authority to publish, purchase, message external parties, modify accounts, or perform destructive actions.

## Wildcard `agents.json`

Implementation status: agent-discovery interoperability surface.

Repository policy:

- The manifest links to real OpenAPI operation identifiers and existing public surfaces.
- It must never advertise MCP, A2A, or another endpoint as live solely because source code exists in the repository.

## `llms.txt` and related AI-ingestion surfaces

Implementation status: community/emerging convention.

Repository policy:

- `llms.txt` is an optimized discovery index, not a security boundary or substitute for canonical documentation.
- `llms-full.txt` is a convenience corpus projection; canonical repository files remain authoritative.

## Supersession rule

When a first-party specification or Cloudflare deployment contract changes, current first-party documentation supersedes this dated record. Update the implementation and this provenance note together, then rerun the repository conformance workflow.
