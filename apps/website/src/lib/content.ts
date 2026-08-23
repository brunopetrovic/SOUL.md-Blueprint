import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

export const REPO = 'brunopetrovic/SOUL.md-Blueprint';
export const REPO_URL = `https://github.com/${REPO}`;
export const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/main`;
export const ROOT = path.resolve(process.cwd(), '../..');
export const AGENT_READABILITY_RELEASE_DATE = '2026-08-23';

export const runtimeSlugs = [
  'hermes','openclaw','pi','opencode','claude-code','codex','deepseek-harness','grok-bot'
] as const;

export const caseStudySlugs = [
  'account-manager','blockchain','co-founder','cybersecurity','designer','developer',
  'finance-accounting','freelance-worker','gamer','health-fitness','job-hunter','marketer-distributor',
  'music-audio','mystic','partnerships-funding','psychological-clarity','relationship-advisor',
  'researcher','sales-operator','social-media-manager','trader-investor','weekly-intelligence'
] as const;

export const routeSources: Record<string,string> = {
  '/blueprint': 'MASTER-BLUEPRINT.md',
  '/architecture': 'docs/ARCHITECTURE.md',
  '/engineering': 'docs/ENGINEERING-METHOD.md',
  '/research': 'docs/RESEARCH.md',
  '/sources': 'SOURCES.md',
  '/glossary': 'docs/GLOSSARY.md'
};

const routeDescriptions: Record<string,string> = {
  '/': 'Runtime-neutral specification and engineering discipline for durable AI-agent identity.',
  '/blueprint': 'Canonical doctrine and engineering laws for durable AI-agent identity.',
  '/architecture': 'Semantic separation of identity, user context, memory, operations, skills, style, policy, and task context.',
  '/engineering': 'Construction, refactoring, compression, verification, and regression method for SOUL engineering.',
  '/runtimes': 'Runtime capability profiles and transport mappings for deploying canonical SOUL semantics across agent harnesses.',
  '/evaluation': 'Behavioral regression methodology, Core-28 evaluation cases, and production quality gates.',
  '/spec': 'Machine-readable schemas for SOUL intermediate representations, packages, evaluations, and runtime capability profiles.',
  '/tooling': 'Reference linting and evaluation tooling for SOUL artifacts and conformance workflows.',
  '/case-studies': 'Applied SOUL.md and AGENTS.md pairs demonstrating domain-specific identity and operational separation.',
  '/research': 'Research evidence, limitations, and synthesis behind the Blueprint engineering doctrine.',
  '/sources': 'Provenance and source-authority registry for runtime, research, standards, and community claims.',
  '/governance': 'Repository governance, security, contribution rules, change control, and operational instructions.',
  '/repository': 'Complete source-file index for the canonical SOUL.md Blueprint repository.',
  '/glossary': 'Canonical terminology for SOUL identity engineering, runtime transport, authority, context lifecycle, evaluation, and agent-readable web surfaces.'
};

export function titleize(slug: string) {
  return slug.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(' ')
    .replace('Ai ', 'AI ').replace('Api ', 'API ').replace(/^Soul\b/, 'SOUL');
}

export function pageTitle(pathname: string) {
  if (pathname === '/') return 'SOUL.md Blueprint';
  if (pathname === '/runtimes') return 'Runtime Profiles';
  if (pathname === '/case-studies') return 'Case Studies';
  if (pathname === '/spec') return 'Machine-readable Specifications';
  if (pathname === '/tooling') return 'Reference Tooling';
  if (pathname === '/repository') return 'Repository';
  if (pathname === '/governance') return 'Governance';
  if (pathname === '/glossary') return 'Glossary';
  const last = pathname.split('/').filter(Boolean).pop() || 'Home';
  return titleize(last);
}

export function pageDescription(pathname: string) {
  if (routeDescriptions[pathname]) return routeDescriptions[pathname];
  const runtime = pathname.match(/^\/runtimes\/([^/]+)$/);
  if (runtime) return `${titleize(runtime[1])} capability profile and runtime adapter mapping for SOUL identity semantics.`;
  const cs = pathname.match(/^\/case-studies\/([^/]+)$/);
  if (cs) return `${titleize(cs[1])} case study pairing durable SOUL identity with project-operational AGENTS instructions.`;
  return 'SOUL.md Blueprint documentation.';
}

export function pageSource(pathname: string) {
  if (pathname === '/') return 'README.md';
  if (routeSources[pathname]) return routeSources[pathname];
  const runtime = pathname.match(/^\/runtimes\/([^/]+)$/);
  if (runtime) return `runtime-profiles/${runtime[1]}.json`;
  const cs = pathname.match(/^\/case-studies\/([^/]+)$/);
  if (cs) return `case-studies/${cs[1]}/SOUL.md + case-studies/${cs[1]}/AGENTS.md`;
  if (pathname === '/runtimes') return 'runtime-profiles/';
  if (pathname === '/case-studies') return 'case-studies/';
  if (pathname === '/evaluation') return 'docs/EVALUATION.md + evals/core/core-28.json';
  if (pathname === '/spec') return 'spec/';
  if (pathname === '/tooling') return 'tools/';
  if (pathname === '/governance') return 'AGENTS.md + SECURITY.md + CONTRIBUTING.md + CHANGELOG.md';
  if (pathname === '/repository') return 'repository tree';
  return 'repository';
}

export function readRepo(rel: string) {
  const safe = rel.replace(/^\/+/, '');
  const full = path.resolve(ROOT, safe);
  if (!full.startsWith(ROOT + path.sep) && full !== ROOT) throw new Error('Unsafe path');
  return fs.readFileSync(full, 'utf8');
}

export function existsRepo(rel: string) {
  try { return fs.existsSync(path.resolve(ROOT, rel)); } catch { return false; }
}

export function sourceUrl(rel: string) {
  return `${REPO_URL}/blob/main/${rel.split('/').map(encodeURIComponent).join('/')}`;
}

export function rawUrl(rel: string) {
  return `${RAW_BASE}/${rel.split('/').map(encodeURIComponent).join('/')}`;
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
  breaks: false
}).use(anchor, { slugify, permalink: anchor.permalink.linkInsideHeader({ symbol: '#', placement: 'before' }) });

// Explicit protocol allowlist even though markdown-it already validates links.
md.validateLink = (url: string) => /^(https?:|mailto:|#|\/)/i.test(url.trim());

export type Heading = { level: number; text: string; id: string };

function slugify(text: string) {
  return text.toLowerCase().trim().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g,'-').replace(/-+/g,'-');
}

export function renderMarkdown(source: string) {
  const headings: Heading[] = [];
  const tokens = md.parse(source, {});
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === 'heading_open') {
      const level = Number(t.tag.slice(1));
      const inline = tokens[i+1];
      const text = inline?.content || '';
      headings.push({ level, text, id: slugify(text) });
    }
  }
  return { html: md.render(source), headings };
}

export function listRepoFiles(dir = ROOT, prefix = ''): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git','node_modules','dist','.astro'].includes(entry.name)) continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listRepoFiles(full, rel));
    else out.push(rel);
  }
  return out.sort();
}

export function repoVersion() {
  try { return readRepo('VERSION').trim(); } catch { return '1.2.0'; }
}

export function loadRuntime(slug: string) {
  const rel = `runtime-profiles/${slug}.json`;
  return { rel, data: JSON.parse(readRepo(rel)) };
}

export function loadCase(slug: string) {
  return {
    soulRel: `case-studies/${slug}/SOUL.md`,
    agentsRel: `case-studies/${slug}/AGENTS.md`,
    soul: readRepo(`case-studies/${slug}/SOUL.md`),
    agents: readRepo(`case-studies/${slug}/AGENTS.md`)
  };
}

export function routeLastmod(pathname: string) {
  const runtime = pathname.match(/^\/runtimes\/([^/]+)$/);
  if (runtime) {
    try {
      const data = loadRuntime(runtime[1]).data as Record<string, unknown>;
      for (const key of ['verified_at','last_verified','verification_date','verified_on','last_updated']) {
        const value = data[key];
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0,10);
      }
    } catch { /* stable fallback below */ }
  }
  // Versioned release date: stable across rebuilds. Update intentionally when a public
  // representation or its represented source materially changes; never stamp build time.
  return AGENT_READABILITY_RELEASE_DATE;
}

function normalizeBareCodeFences(source: string) {
  const lines = source.split('\n');
  let inFence = false;
  return lines.map(line => {
    if (!line.startsWith('```')) return line;
    if (!inFence) {
      inFence = true;
      return line.slice(3).trim() ? line : '```text';
    }
    inFence = false;
    return line;
  }).join('\n');
}

export function markdownNavigation() {
  return `## Sitemap\n\n- [Home](/index.md)\n- [Master Blueprint](/blueprint.md)\n- [Architecture](/architecture.md)\n- [Engineering Method](/engineering.md)\n- [Runtime Profiles](/runtimes.md)\n- [Evaluation](/evaluation.md)\n- [Specifications](/spec.md)\n- [Case Studies](/case-studies.md)\n- [Research](/research.md)\n- [Sources](/sources.md)\n- [Glossary](/glossary.md)\n- [Governance](/governance.md)\n- [Repository](/repository.md)\n- [Full Markdown sitemap](/sitemap.md)\n- [llms.txt](/llms.txt)\n- [OpenAPI](/openapi.json)\n`;
}

export function sitemapMarkdown() {
  return `# SOUL.md Blueprint Sitemap\n\n> Curated agent-readable map of the canonical SOUL.md Blueprint website. Markdown links point to clean machine-readable representations where available.\n\n## Canonical doctrine\n- [Home](/index.md): project overview, architecture map, and entry points.\n- [Master Blueprint](/blueprint.md): canonical durable identity doctrine and engineering laws.\n- [Architecture](/architecture.md): semantic-layer separation and responsibility boundaries.\n- [Engineering Method](/engineering.md): construction, refactoring, compression, and verification method.\n- [Glossary](/glossary.md): canonical terminology used across the project.\n\n## Evaluation and specification\n- [Evaluation](/evaluation.md): behavioral regression methodology and Core-28.\n- [Machine-readable specifications](/spec.md): SOUL-IR, package, evaluation, and runtime capability schemas.\n- [Reference tooling](/tooling.md): lint and evaluation tooling.\n\n## Runtime deployment\n- [Runtime index](/runtimes.md): runtime-neutral compatibility map.\n${runtimeSlugs.map(s=>`- [${titleize(s)}](/runtimes/${s}.md): machine-readable runtime capability profile.`).join('\n')}\n\n## Applied case studies\n- [Case-study index](/case-studies.md): all applied SOUL + AGENTS pairs.\n${caseStudySlugs.map(s=>`- [${titleize(s)}](/case-studies/${s}.md): domain-specific identity and operational instructions.`).join('\n')}\n\n## Research, provenance, and governance\n- [Research](/research.md): empirical evidence and limitations.\n- [Sources](/sources.md): source registry and authority hierarchy.\n- [Governance](/governance.md): repository operations, security, contribution, and change control.\n- [Repository](/repository.md): complete canonical source-file index.\n\n## Agent interfaces\n- [AGENTS.md](/AGENTS.md): public copy of repository operating instructions.\n- [llms.txt](/llms.txt): curated model discovery map.\n- [llms-full.txt](/llms-full.txt): full AI corpus.\n- [agents.txt](/agents.txt): concise discovery notes.\n- [agents.json](/agents.json): Wildcard v0.1.0 agent flows over the real OpenAPI surface.\n- [OpenAPI](/openapi.json): HTTP API contract.\n- [Agent permissions](/.well-known/agent-permissions.json): LAS-WG v1.0.0 advisory interaction policy.\n- [XML sitemap](/sitemap.xml): crawler URL enumeration.\n`;
}

export function pageMarkdown(pathname: string) {
  if (pathname === '/') return readRepo('README.md');
  if (routeSources[pathname]) return readRepo(routeSources[pathname]);
  if (pathname === '/runtimes') return '# Runtime profiles\n\n' + runtimeSlugs.map(s=>`- [${titleize(s)}](/runtimes/${s}.md)`).join('\n');
  if (pathname === '/case-studies') return '# Case studies\n\n' + caseStudySlugs.map(s=>`- [${titleize(s)}](/case-studies/${s}.md)`).join('\n');
  const runtime = pathname.match(/^\/runtimes\/([^/]+)$/);
  if (runtime) return '```json\n' + readRepo(`runtime-profiles/${runtime[1]}.json`) + '\n```\n';
  const cs = pathname.match(/^\/case-studies\/([^/]+)$/);
  if (cs) {
    const c = loadCase(cs[1]);
    return `# ${titleize(cs[1])}\n\n## SOUL.md\n\n${c.soul}\n\n---\n\n## AGENTS.md\n\n${c.agents}`;
  }
  if (pathname === '/evaluation') return readRepo('docs/EVALUATION.md') + '\n\n## Core-28 JSON\n\n```json\n' + readRepo('evals/core/core-28.json') + '\n```';
  if (pathname === '/spec') return '# Machine-readable specifications\n\n' + ['SOUL-IR.schema.json','SOUL-PACKAGE.schema.json','EVAL-CASE.schema.json','EVAL-RESULT.schema.json','RUNTIME-CAPABILITY-PROFILE.schema.json'].map(f => `## ${f}\n\n\`spec/${f}\``).join('\n\n');
  if (pathname === '/tooling') return '# Reference tooling\n\n- `tools/soul-lint/soul_lint.py`\n- `tools/soul-eval/soul_eval.py`\n';
  if (pathname === '/governance') return [readRepo('AGENTS.md'),readRepo('SECURITY.md'),readRepo('CONTRIBUTING.md'),readRepo('CHANGELOG.md')].join('\n\n---\n\n');
  if (pathname === '/repository') return '# Repository\n\nEvery public source file in the canonical repository.\n\n' + listRepoFiles().map(f=>`- [${f}](${sourceUrl(f)})`).join('\n');
  return '';
}

export function prepareMarkdownRepresentation(pathname: string, body: string, base: string) {
  const canonicalPath = pathname === '/' ? '/' : pathname;
  const canonical = new URL(canonicalPath, base).toString();
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(pageTitle(pathname))}`,
    `description: ${JSON.stringify(pageDescription(pathname))}`,
    `canonical: ${JSON.stringify(canonical)}`,
    `source: ${JSON.stringify(pageSource(pathname))}`,
    `last_updated: ${JSON.stringify(routeLastmod(pathname))}`,
    `representation: ${JSON.stringify('text/markdown')}`,
    '---'
  ].join('\n');
  return `${frontmatter}\n\n${normalizeBareCodeFences(body).trim()}\n\n${markdownNavigation()}`;
}

export function publicRoutes() {
  const base = ['/', '/blueprint','/architecture','/engineering','/runtimes','/evaluation','/spec','/tooling','/case-studies','/research','/sources','/governance','/repository','/glossary'];
  return [
    ...base,
    ...runtimeSlugs.map(s => `/runtimes/${s}`),
    ...caseStudySlugs.map(s => `/case-studies/${s}`)
  ];
}
