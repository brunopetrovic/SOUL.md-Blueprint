import type { APIRoute } from 'astro';
import { readRepo } from '../../../../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(readRepo('SKILL.md'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
      'Link': `<${base}/.well-known/agent-skills/soul-engineering/SKILL.md>; rel="canonical", <${base}/llms.txt>; rel="describedby"`
    }
  });
};
