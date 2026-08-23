# SOUL Blueprint Agent API

Cloudflare Worker implementing a **read-only MCP server** plus a minimal, deterministic A2A v1 knowledge agent over the canonical SOUL.md Blueprint corpus.

It has no credentials, financial actions, publishing, account mutation, destructive tools, or hidden authority.

## Endpoints

- `POST /mcp` — MCP Streamable HTTP JSON responses (no SSE/session state required for these read-only tools)
- `GET /mcp` — returns 405 (server does not open an SSE listener)
- `GET /.well-known/agent-card.json` — A2A v1 public Agent Card
- `POST /a2a` — A2A JSON-RPC `SendMessage` support for deterministic search/retrieval requests
- `GET /health`
- `GET /server.json` — MCP Registry remote-server metadata using the current registry schema

## MCP tools

- `search_blueprint`
- `get_document`
- `get_runtime_profile`
- `get_case_study`
- `get_eval_case`
- `lint_soul`
- `audit_soul`
- `compile_runtime_plan`

`compile_runtime_plan` returns a deterministic deployment plan. It does **not** pretend to rewrite or reason like an LLM.

## Deployment

Set `SITE_ORIGIN` to the deployed static website origin, `ALLOWED_ORIGINS` to allowed browser origins, then deploy with Wrangler. After deployment, update website discovery metadata to mark MCP/A2A as live and point to the deployed Worker URL.
