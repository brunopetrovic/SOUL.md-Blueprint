import type { APIRoute } from 'astro';
import { sitemapMarkdown } from '../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(sitemapMarkdown(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Vary': 'Accept',
      'Link': `<${base}/sitemap.md>; rel="canonical", <${base}/llms.txt>; rel="describedby", <${base}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"`
    }
  });
};
