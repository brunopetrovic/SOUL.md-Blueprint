import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nAllow: /llms.txt\nAllow: /llms-full.txt\nAllow: /sitemap.md\nAllow: /AGENTS.md\nAllow: /agents.txt\nAllow: /agents.json\nAllow: /openapi.json\nAllow: /api/\nAllow: /.well-known/\nSitemap: ${base}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
