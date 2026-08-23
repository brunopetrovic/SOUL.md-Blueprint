import type { APIRoute } from 'astro';
import { caseStudySlugs, repoVersion, runtimeSlugs } from '../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const spec = {
    openapi: '3.1.0',
    info: {
      title: 'SOUL.md Blueprint Read API',
      version: repoVersion(),
      description: 'Read-only structured access to the canonical SOUL.md Blueprint catalog, runtime capability profiles, and applied case studies.'
    },
    servers: [{ url: base }],
    tags: [
      { name: 'catalog', description: 'Site-wide discovery and documentation catalog.' },
      { name: 'runtimes', description: 'Runtime capability profiles.' },
      { name: 'case-studies', description: 'Applied SOUL.md and AGENTS.md pairs.' }
    ],
    paths: {
      '/api/v1/catalog.json': {
        get: {
          operationId: 'getCatalog',
          summary: 'Get the Blueprint catalog',
          description: 'Returns canonical discovery links, documentation representations, runtime profiles, and case-study endpoints.',
          tags: ['catalog'],
          responses: {
            '200': {
              description: 'Blueprint catalog',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Catalog' } } }
            }
          }
        }
      },
      '/api/v1/runtime/{slug}.json': {
        get: {
          operationId: 'getRuntimeProfile',
          summary: 'Get a runtime capability profile',
          tags: ['runtimes'],
          parameters: [{
            name: 'slug',
            in: 'path',
            required: true,
            description: 'Runtime profile slug.',
            schema: { type: 'string', enum: runtimeSlugs }
          }],
          responses: {
            '200': {
              description: 'Runtime profile wrapper',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/RuntimeProfile' } } }
            }
          }
        }
      },
      '/api/v1/case-study/{slug}.json': {
        get: {
          operationId: 'getCaseStudy',
          summary: 'Get an applied case study',
          tags: ['case-studies'],
          parameters: [{
            name: 'slug',
            in: 'path',
            required: true,
            description: 'Case-study slug.',
            schema: { type: 'string', enum: caseStudySlugs }
          }],
          responses: {
            '200': {
              description: 'SOUL and AGENTS case-study pair',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/CaseStudy' } } }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        Catalog: {
          type: 'object',
          required: ['schema_version','name','version','description','canonical_repository','discovery','documentation','runtime_profiles','case_studies'],
          properties: {
            schema_version: { type: 'string' },
            name: { type: 'string' },
            version: { type: 'string' },
            description: { type: 'string' },
            canonical_repository: { type: 'string', format: 'uri' },
            discovery: { type: 'object', additionalProperties: { type: 'string' } },
            documentation: { type: 'array', items: { type: 'object', additionalProperties: true } },
            runtime_profiles: { type: 'array', items: { type: 'object', additionalProperties: true } },
            case_studies: { type: 'array', items: { type: 'object', additionalProperties: true } }
          }
        },
        RuntimeProfile: {
          type: 'object',
          required: ['slug','title','source','documentation','profile'],
          properties: {
            slug: { type: 'string' },
            title: { type: 'string' },
            source: { type: 'string', format: 'uri' },
            documentation: { type: 'string', format: 'uri' },
            profile: { type: 'object', additionalProperties: true }
          }
        },
        CaseStudy: {
          type: 'object',
          required: ['slug','title','sources','documentation','soul_markdown','agents_markdown'],
          properties: {
            slug: { type: 'string' },
            title: { type: 'string' },
            sources: { type: 'object', additionalProperties: { type: 'string' } },
            documentation: { type: 'string', format: 'uri' },
            soul_markdown: { type: 'string' },
            agents_markdown: { type: 'string' }
          }
        }
      }
    }
  };
  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      'Content-Type': 'application/vnd.oai.openapi+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
