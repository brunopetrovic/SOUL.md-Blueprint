# Agent-readable web architecture

The Blueprint website treats AI-agent readability as three separate layers.

## 1. Discovery

Humans and agents should be able to discover canonical content without executing application JavaScript.

Primary surfaces:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/agents.txt`
- `/agents.json`
- HTML `rel="describedby"` links to `/llms.txt`
- HTML `rel="alternate" type="text/markdown"` links to page-level Markdown mirrors

`llms.txt` is a discovery map, not an instruction channel that outranks platform policy or user authority.

## 2. Structural parsing

Every canonical human page is statically prerendered to semantic HTML. JavaScript is progressive enhancement only.

Pages include:

- semantic heading hierarchy;
- `<main>`, `<article>`, `<section>`, `<nav>` and accessible landmarks;
- per-page canonical links and descriptions;
- Markdown mirrors;
- Schema.org JSON-LD;
- breadcrumb data where applicable;
- complete sitemap coverage for runtime and case-study detail pages.

The build reads repository Markdown/JSON from the same checkout. Runtime GitHub availability is not required for normal documentation rendering.

## 3. Protocol action surfaces

Protocol manifests MUST describe capabilities that actually exist.

- `apps/agent-api` implements a read-only MCP endpoint.
- The same Worker implements a minimal read-only A2A knowledge endpoint and Agent Card.
- The website does not claim those endpoints are live until deployment configuration points discovery metadata at an actual public service.
- `/.well-known/agent-permissions.json` is explicitly advisory. It does not grant authority or enforce permissions.

### Authority invariant

```text
agent-readable policy
        ≠
delegated authority
        ≠
technical permission
```

Hard controls remain a runtime/platform concern.
