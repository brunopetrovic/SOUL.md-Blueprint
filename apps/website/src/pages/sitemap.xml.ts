import type { APIRoute } from 'astro';
import { publicRoutes, routeLastmod } from '../lib/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site || new URL('https://soul-md-blueprint.pages.dev')).toString().replace(/\/$/, '');
  const urls = publicRoutes().map(pathname => {
    const loc = `${base}${pathname === '/' ? '' : pathname}`;
    return `<url><loc>${loc}</loc><lastmod>${routeLastmod(pathname)}</lastmod></url>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
