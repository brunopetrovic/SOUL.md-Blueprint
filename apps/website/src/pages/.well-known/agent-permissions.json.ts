import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const policy = {
    metadata: {
      schema_version: '1.0.0',
      last_updated: '2026-08-23T18:42:00Z',
      author: 'SOUL.md Blueprint'
    },
    strict: true,
    resource_rules: [
      { verb: 'read_content', selector: '*', allowed: true },
      { verb: 'read_metadata', selector: '*', allowed: true },
      { verb: 'follow_link', selector: 'a', allowed: true },
      { verb: 'scroll_page', selector: '*', allowed: true },
      { verb: 'copy_to_clipboard', selector: '*', allowed: true },
      { verb: 'execute_script', selector: '*', allowed: false },
      { verb: 'set_input_value', selector: '*', allowed: false },
      { verb: 'submit_form', selector: '*', allowed: false },
      { verb: 'upload_file', selector: '*', allowed: false }
    ],
    action_guidelines: [
      {
        directive: 'SHOULD',
        description: 'Prefer the published Markdown representations or read-only OpenAPI endpoints when they satisfy the information need.'
      },
      {
        directive: 'MUST NOT',
        description: 'Represent this advisory manifest as an authorization grant, sandbox, credential boundary, or substitute for runtime-enforced permissions.'
      }
    ],
    api: [{
      type: 'openapi',
      endpoint: `${base}/openapi.json`,
      docs: `${base}/tooling`,
      description: 'Read-only structured access to the Blueprint catalog, runtime profiles, and case studies.'
    }]
  };
  return new Response(JSON.stringify(policy, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
