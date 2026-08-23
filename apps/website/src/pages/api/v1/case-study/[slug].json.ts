import type { APIRoute, GetStaticPaths } from 'astro';
import { caseStudySlugs, loadCase, sourceUrl, titleize } from '../../../../lib/content';

export const getStaticPaths: GetStaticPaths = async () =>
  caseStudySlugs.map(slug => ({ params: { slug }, props: { slug } }));

export const GET: APIRoute = ({ props, site }) => {
  const slug = String(props.slug);
  const c = loadCase(slug);
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(JSON.stringify({
    slug,
    title: titleize(slug),
    sources: {
      soul: sourceUrl(c.soulRel),
      agents: sourceUrl(c.agentsRel)
    },
    documentation: `${base}/case-studies/${slug}`,
    soul_markdown: c.soul,
    agents_markdown: c.agents
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
