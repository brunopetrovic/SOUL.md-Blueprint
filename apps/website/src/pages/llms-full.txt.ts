import type { APIRoute } from 'astro';
import { readRepo, runtimeSlugs, caseStudySlugs, titleize } from '../lib/content';

const docs = [
  'STANDARD-v1.md',
  'MASTER-BLUEPRINT.md',
  'AI-INGEST.md',
  'AGENTS.md',
  'SKILL.md',
  'docs/FOUNDATIONS.md',
  'docs/ARCHITECTURE.md',
  'docs/ENGINEERING-METHOD.md',
  'docs/AUTHORITY-MODEL.md',
  'docs/IDENTITY-LIFECYCLE.md',
  'docs/SUBAGENTS-DELEGATION.md',
  'docs/CONTEXT-ECONOMICS.md',
  'docs/EVALUATION.md',
  'docs/SECURITY-GOVERNANCE.md',
  'docs/ANTI-PATTERNS.md',
  'docs/RESEARCH.md',
  'docs/RESEARCH-2026-EXTENSIONS.md',
  'docs/GLOSSARY.md',
  'SOURCES.md'
];

export const GET: APIRoute = () => {
  let out = '# SOUL.md Blueprint — full AI corpus\n\n';
  for (const rel of docs) out += `\n\n---\n\n# SOURCE: ${rel}\n\n${readRepo(rel)}`;
  for (const s of runtimeSlugs) out += `\n\n---\n\n# RUNTIME: ${titleize(s)}\n\n\`\`\`json\n${readRepo(`runtime-profiles/${s}.json`)}\n\`\`\``;
  for (const s of caseStudySlugs) out += `\n\n---\n\n# CASE: ${titleize(s)} / SOUL.md\n\n${readRepo(`case-studies/${s}/SOUL.md`)}\n\n# CASE: ${titleize(s)} / AGENTS.md\n\n${readRepo(`case-studies/${s}/AGENTS.md`)}`;
  return new Response(out, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
