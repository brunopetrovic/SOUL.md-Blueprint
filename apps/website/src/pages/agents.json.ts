import type { APIRoute } from 'astro';
import { repoVersion } from '../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const body = {
    agentsJson: '0.1.0',
    info: {
      title: 'SOUL.md Blueprint Agent API',
      version: repoVersion(),
      description: 'Read-only structured discovery for the SOUL.md Blueprint over its published OpenAPI contract.'
    },
    sources: [{
      id: 'blueprint-api',
      path: `${base}/openapi.json`
    }],
    flows: [{
      id: 'browse_blueprint_flow',
      title: 'Browse SOUL.md Blueprint',
      description: 'Discover canonical documentation, runtime profiles, case studies, and agent-readable interfaces.',
      actions: [{
        id: 'catalog_action',
        sourceId: 'blueprint-api',
        operationId: 'getCatalog'
      }],
      links: [],
      fields: {
        parameters: [],
        responses: {
          success: { type: 'object' }
        }
      }
    }]
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
