import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const catalog = `${base}/.well-known/api-catalog`;
  const api = `${base}/api/v1/catalog.json`;
  const body = {
    linkset: [
      {
        anchor: catalog,
        item: [
          {
            href: api,
            title: 'SOUL.md Blueprint Read API'
          }
        ]
      },
      {
        anchor: api,
        'service-desc': [
          {
            href: `${base}/openapi.json`,
            type: 'application/openapi+json;version=3.1'
          }
        ],
        'service-doc': [
          {
            href: `${base}/tooling`
          }
        ]
      }
    ]
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json;profile="https://www.rfc-editor.org/info/rfc9727"',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
