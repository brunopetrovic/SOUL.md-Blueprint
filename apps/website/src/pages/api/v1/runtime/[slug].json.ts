import type { APIRoute, GetStaticPaths } from 'astro';
import { loadRuntime, runtimeSlugs, sourceUrl, titleize } from '../../../../lib/content';

export const getStaticPaths: GetStaticPaths = async () =>
  runtimeSlugs.map(slug => ({ params: { slug }, props: { slug } }));

export const GET: APIRoute = ({ props, site }) => {
  const slug = String(props.slug);
  const { rel, data } = loadRuntime(slug);
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(JSON.stringify({
    slug,
    title: titleize(slug),
    source: sourceUrl(rel),
    documentation: `${base}/runtimes/${slug}`,
    profile: data
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
