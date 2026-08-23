import type { APIRoute, GetStaticPaths } from 'astro';
import { publicRoutes, pageMarkdown, prepareMarkdownRepresentation } from '../lib/content';

export const getStaticPaths: GetStaticPaths = async () => publicRoutes().map(pathname => ({
  params: { mirror: pathname === '/' ? 'index' : pathname.slice(1) },
  props: { pathname, content: pageMarkdown(pathname) }
}));

export const GET: APIRoute = ({ props, site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const pathname = String(props.pathname || '/');
  const canonical = new URL(pathname === '/' ? '/' : pathname, `${base}/`).toString();
  const content = prepareMarkdownRepresentation(pathname, String(props.content || ''), `${base}/`);
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'Vary': 'Accept',
      'Content-Location': `${pathname === '/' ? '/index' : pathname}.md`,
      'Link': `<${canonical}>; rel="canonical", <${base}/llms.txt>; rel="describedby", <${base}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"`
    }
  });
};
