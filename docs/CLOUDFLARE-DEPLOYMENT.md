# Cloudflare Pages Deployment

This repository is deployable as a Cloudflare Pages project using the prerendered Astro output in `apps/website/dist`.

The production website uses **Pages advanced mode** because `apps/website/public/_worker.js` is copied into the build output as `dist/_worker.js`. That Worker must remain in module syntax and forward asset requests through `env.ASSETS.fetch()`.

## Production target

Default Pages project name:

```text
soul-md-blueprint
```

Default production URL:

```text
https://soul-md-blueprint.pages.dev
```

Both can be overridden with GitHub repository variables:

- `CLOUDFLARE_PAGES_PROJECT`
- `PUBLIC_SITE_URL`

## Required Cloudflare/GitHub setup

Create a Cloudflare API token with Pages write access and add these GitHub Actions repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

For the first deployment, ensure the Pages project exists in the intended Cloudflare account. With Wrangler, the one-time setup is:

```bash
npx wrangler pages project create soul-md-blueprint --production-branch=main
```

If a different project name is used, set the GitHub repository variable `CLOUDFLARE_PAGES_PROJECT` to that exact name.

## Automated production deployment

Workflow:

```text
.github/workflows/cloudflare-pages.yml
```

It runs on relevant pushes to `main` and can also be triggered manually with `workflow_dispatch`.

The workflow:

1. checks out the repository;
2. requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`;
3. installs the website dependencies with `npm ci`;
4. builds the Astro website using `PUBLIC_SITE_URL`;
5. asserts the expected advanced-mode Worker and critical discovery artifacts exist;
6. deploys `apps/website/dist` using `cloudflare/wrangler-action@v3` and `wrangler pages deploy`.

## Manual deployment

From the repository root:

```bash
cd apps/website
npm ci --no-audit --no-fund
PUBLIC_SITE_URL=https://soul-md-blueprint.pages.dev npm run build
cd ../..
CLOUDFLARE_ACCOUNT_ID=<account-id> npx wrangler pages deploy apps/website/dist --project-name=soul-md-blueprint --branch=main
```

Wrangler also requires an authenticated session or `CLOUDFLARE_API_TOKEN` in the environment.

## Post-deployment verification

Verify at minimum:

```text
/
/blueprint
/blueprint.md
/AGENTS.md
/llms.txt
/llms-full.txt
/agents.json
/openapi.json
/.well-known/api-catalog
/.well-known/agent-permissions.json
/.well-known/agent-skills/index.json
/sitemap.xml
/sitemap.md
```

Then verify Markdown negotiation:

```bash
curl -i -H 'Accept: text/markdown' https://<production-host>/blueprint
```

Expected properties include:

- `200` status;
- `Content-Type: text/markdown`;
- `Vary: Accept`;
- `Content-Location: /blueprint.md`;
- canonical/discovery `Link` headers.

A normal browser request to `/blueprint` must still return HTML.

## Deployment truthfulness

Source code that can deploy to Cloudflare is not proof that deployment happened. Do not advertise the Cloudflare site, MCP endpoint, A2A endpoint, or any other public service as live until the production URL is fetched successfully and the expected headers/content are verified.

## Official Cloudflare references

- Cloudflare Pages Direct Upload: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Direct Upload with continuous integration: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- Pages advanced mode: https://developers.cloudflare.com/pages/functions/advanced-mode/
- Wrangler Pages commands: https://developers.cloudflare.com/workers/wrangler/commands/pages/
