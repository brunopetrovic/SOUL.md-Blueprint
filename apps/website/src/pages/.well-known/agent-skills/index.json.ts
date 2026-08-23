import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { readRepo } from '../../../lib/content';

const skill = readRepo('SKILL.md');
const digest = `sha256:${createHash('sha256').update(skill, 'utf8').digest('hex')}`;
const description = 'Create, audit, refactor, compile, test, and govern durable AI-agent identity systems using the SOUL.md Blueprint.';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const body = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [{
      name: 'soul-engineering',
      type: 'skill-md',
      description,
      url: `${base}/.well-known/agent-skills/soul-engineering/SKILL.md`,
      digest
    }]
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
