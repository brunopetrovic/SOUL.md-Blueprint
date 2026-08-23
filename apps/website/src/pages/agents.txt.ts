import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const b = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  return new Response(`# SOUL.md Blueprint agent discovery\n\nPurpose: machine-readable access to the SOUL identity engineering standard.\nCanonical source: https://github.com/brunopetrovic/SOUL.md-Blueprint\nllms: ${b}/llms.txt\nfull-corpus: ${b}/llms-full.txt\nmarkdown-sitemap: ${b}/sitemap.md\nrepository-instructions: ${b}/AGENTS.md\nglossary: ${b}/glossary.md\nopenapi: ${b}/openapi.json\ncatalog-api: ${b}/api/v1/catalog.json\nwildcard-agents: ${b}/agents.json\npermissions: ${b}/.well-known/agent-permissions.json\nMCP: source exists under apps/agent-api but is not advertised here as deployed until its public endpoint is verified.\nA2A: source exists under apps/agent-api but is not advertised here as deployed until its public endpoint is verified.\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
