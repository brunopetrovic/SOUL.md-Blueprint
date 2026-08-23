import type { APIRoute } from 'astro';
import { caseStudySlugs, pageDescription, pageTitle, publicRoutes, repoVersion, REPO_URL, runtimeSlugs, titleize } from '../../../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const body = {
    schema_version: '1.0',
    name: 'SOUL.md Blueprint',
    version: repoVersion(),
    description: 'Runtime-neutral specification and engineering discipline for durable AI-agent identity.',
    canonical_repository: REPO_URL,
    discovery: {
      llms: `${base}/llms.txt`,
      full_corpus: `${base}/llms-full.txt`,
      sitemap_markdown: `${base}/sitemap.md`,
      openapi: `${base}/openapi.json`,
      agents: `${base}/agents.json`,
      permissions: `${base}/.well-known/agent-permissions.json`
    },
    documentation: publicRoutes().map(path => ({
      path,
      title: pageTitle(path),
      description: pageDescription(path),
      html: `${base}${path === '/' ? '' : path}`,
      markdown: `${base}${path === '/' ? '/index' : path}.md`
    })),
    runtime_profiles: runtimeSlugs.map(slug => ({
      slug,
      title: titleize(slug),
      api: `${base}/api/v1/runtime/${slug}.json`,
      documentation: `${base}/runtimes/${slug}`
    })),
    case_studies: caseStudySlugs.map(slug => ({
      slug,
      title: titleize(slug),
      api: `${base}/api/v1/case-study/${slug}.json`,
      documentation: `${base}/case-studies/${slug}`
    }))
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
