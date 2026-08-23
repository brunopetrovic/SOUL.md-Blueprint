import type { APIRoute, GetStaticPaths } from 'astro';
import { publicRoutes,pageMarkdown,readRepo,runtimeSlugs,caseStudySlugs,titleize } from '../lib/content';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = publicRoutes().filter(p => p !== '/' && !['/runtimes','/case-studies','/repository'].includes(p));
  return [
    { params:{mirror:'index'}, props:{content: readRepo('README.md')} },
    { params:{mirror:'runtimes'}, props:{content:'# Runtime profiles\n\n'+runtimeSlugs.map(s=>`- [${titleize(s)}](/runtimes/${s}.md)`).join('\n')} },
    { params:{mirror:'case-studies'}, props:{content:'# Case studies\n\n'+caseStudySlugs.map(s=>`- [${titleize(s)}](/case-studies/${s}.md)`).join('\n')} },
    ...paths.map(p=>({params:{mirror:p.slice(1)},props:{content:pageMarkdown(p)}}))
  ];
};
export const GET: APIRoute = ({props}) => new Response(props.content,{headers:{'Content-Type':'text/markdown; charset=utf-8','Cache-Control':'public, max-age=300'}});
