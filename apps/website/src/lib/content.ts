import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

export const REPO = 'brunopetrovic/SOUL.md-Blueprint';
export const REPO_URL = `https://github.com/${REPO}`;
export const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/main`;
export const ROOT = path.resolve(process.cwd(), '../..');

export const runtimeSlugs = [
  'hermes','openclaw','pi','opencode','claude-code','codex','deepseek-harness','grok-bot'
] as const;

export const caseStudySlugs = [
  'account-manager','blockchain','co-founder','cybersecurity','designer','developer',
  'finance-accounting','freelance-worker','gamer','health-fitness','job-hunter','marketer',
  'music-audio','mystic','partnerships-funding','psychologist','relationship-advisor',
  'researcher','sales','social-media-manager','trader-investor','weekly-intelligence'
] as const;

export const routeSources: Record<string,string> = {
  '/blueprint': 'MASTER-BLUEPRINT.md',
  '/architecture': 'docs/ARCHITECTURE.md',
  '/engineering': 'docs/ENGINEERING-METHOD.md',
  '/research': 'docs/RESEARCH.md',
  '/sources': 'SOURCES.md'
};

export function titleize(slug: string) {
  return slug.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(' ')
    .replace('Ai ', 'AI ').replace('Api ', 'API ');
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
  try { return readRepo('VERSION').trim(); } catch { return '1.1.0'; }
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

export function pageMarkdown(pathname: string) {
  if (routeSources[pathname]) return readRepo(routeSources[pathname]);
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
  return '';
}

export function publicRoutes() {
  const base = ['/', '/blueprint','/architecture','/engineering','/runtimes','/evaluation','/spec','/tooling','/case-studies','/research','/sources','/governance','/repository'];
  return [
    ...base,
    ...runtimeSlugs.map(s => `/runtimes/${s}`),
    ...caseStudySlugs.map(s => `/case-studies/${s}`)
  ];
}
