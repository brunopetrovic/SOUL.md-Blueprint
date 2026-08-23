const NON_DOCUMENT_EXTENSION = /\.(?:md|txt|json|xml|css|js|mjs|map|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|pdf|zip|webmanifest)$/i;
const SPECIAL_MARKDOWN_RESOURCES = new Set(['/AGENTS.md', '/sitemap.md']);

function acceptsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  return accept.split(',').some(part => {
    const [type, ...parameters] = part.trim().split(';');
    if (type.trim().toLowerCase() !== 'text/markdown') return false;
    const q = parameters
      .map(value => value.trim())
      .find(value => value.toLowerCase().startsWith('q='));
    return !q || Number.parseFloat(q.slice(2)) > 0;
  });
}

function isDocumentPath(pathname) {
  if (pathname.startsWith('/api/') || pathname.startsWith('/.well-known/')) return false;
  if (SPECIAL_MARKDOWN_RESOURCES.has(pathname)) return false;
  return !NON_DOCUMENT_EXTENSION.test(pathname);
}

function markdownPathFor(pathname) {
  if (pathname === '/' || pathname === '') return '/index.md';
  return `${pathname.replace(/\/$/, '')}.md`;
}

function canonicalPathForMarkdown(pathname) {
  if (SPECIAL_MARKDOWN_RESOURCES.has(pathname)) return pathname;
  if (pathname === '/index.md') return '/';
  return pathname.endsWith('.md') ? pathname.slice(0, -3) || '/' : pathname;
}

function mergeVary(current, token) {
  const values = (current || '').split(',').map(v => v.trim()).filter(Boolean);
  if (!values.some(v => v.toLowerCase() === token.toLowerCase())) values.push(token);
  return values.join(', ');
}

function discoveryLinks(origin, canonicalPath, markdownPath, includeAlternate) {
  const links = [
    `<${origin}${canonicalPath}>; rel="canonical"`,
    `<${origin}/llms.txt>; rel="describedby"`,
    `<${origin}/openapi.json>; rel="service-desc"; type="application/openapi+json;version=3.1"`,
    `<${origin}/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
    `<${origin}/.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`
  ];
  if (includeAlternate && markdownPath) {
    links.splice(1, 0, `<${origin}${markdownPath}>; rel="alternate"; type="text/markdown"`);
  }
  return links.join(', ');
}

function cloneResponse(response, headers) {
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

function decorateDocument(response, { origin, canonicalPath, markdownPath, isMarkdown }) {
  const headers = new Headers(response.headers);
  headers.set('Vary', mergeVary(headers.get('Vary'), 'Accept'));
  headers.set('Link', discoveryLinks(origin, canonicalPath, markdownPath, !isMarkdown));
  if (isMarkdown) {
    headers.set('Content-Type', 'text/markdown; charset=utf-8');
    if (markdownPath) headers.set('Content-Location', markdownPath);
  }
  return cloneResponse(response, headers);
}

function decorateMachine(response, pathname, origin) {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', '*');

  if (pathname === '/.well-known/api-catalog') {
    headers.set('Content-Type', 'application/linkset+json;profile="https://www.rfc-editor.org/info/rfc9727"');
    headers.set('Link', `<${origin}/.well-known/api-catalog>; rel="canonical", <${origin}/openapi.json>; rel="service-desc"; type="application/openapi+json;version=3.1"`);
  } else if (pathname === '/.well-known/agent-skills/index.json') {
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Link', `<${origin}/.well-known/agent-skills/index.json>; rel="canonical", <${origin}/llms.txt>; rel="describedby"`);
  } else if (pathname.startsWith('/.well-known/agent-skills/') && pathname.endsWith('/SKILL.md')) {
    headers.set('Content-Type', 'text/markdown; charset=utf-8');
    headers.set('Link', `<${origin}${pathname}>; rel="canonical", <${origin}/.well-known/agent-skills/index.json>; rel="collection", <${origin}/llms.txt>; rel="describedby"`);
  } else if (pathname === '/openapi.json') {
    headers.set('Content-Type', 'application/openapi+json;version=3.1; charset=utf-8');
    headers.set('Link', `<${origin}/openapi.json>; rel="canonical", <${origin}/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", <${origin}/llms.txt>; rel="describedby"`);
  } else if (pathname === '/agents.json' || pathname === '/.well-known/agent-permissions.json' || pathname.startsWith('/api/')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  return cloneResponse(response, headers);
}

function isMachineEndpoint(pathname) {
  return pathname === '/.well-known/api-catalog' ||
    pathname.startsWith('/.well-known/agent-skills/') ||
    pathname === '/.well-known/agent-permissions.json' ||
    pathname === '/openapi.json' ||
    pathname === '/agents.json' ||
    pathname.startsWith('/api/');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    if ((method === 'GET' || method === 'HEAD') && acceptsMarkdown(request) && isDocumentPath(url.pathname)) {
      const markdownPath = markdownPathFor(url.pathname);
      const markdownUrl = new URL(markdownPath, url.origin);
      const markdownRequest = new Request(markdownUrl.toString(), {
        method,
        headers: request.headers,
        redirect: request.redirect
      });
      const markdownResponse = await env.ASSETS.fetch(markdownRequest);
      if (markdownResponse.ok) {
        return decorateDocument(markdownResponse, {
          origin: url.origin,
          canonicalPath: url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, ''),
          markdownPath,
          isMarkdown: true
        });
      }
    }

    const response = await env.ASSETS.fetch(request);

    if ((method === 'GET' || method === 'HEAD') && isMachineEndpoint(url.pathname)) {
      return decorateMachine(response, url.pathname, url.origin);
    }

    if ((method === 'GET' || method === 'HEAD') && (url.pathname.endsWith('.md') || SPECIAL_MARKDOWN_RESOURCES.has(url.pathname))) {
      return decorateDocument(response, {
        origin: url.origin,
        canonicalPath: canonicalPathForMarkdown(url.pathname),
        markdownPath: url.pathname,
        isMarkdown: true
      });
    }

    if ((method === 'GET' || method === 'HEAD') && isDocumentPath(url.pathname)) {
      const canonicalPath = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
      return decorateDocument(response, {
        origin: url.origin,
        canonicalPath,
        markdownPath: markdownPathFor(canonicalPath),
        isMarkdown: false
      });
    }

    return response;
  }
};
