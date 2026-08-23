import type { APIRoute } from 'astro';
import { publicRoutes,pageMarkdown,titleize } from '../lib/content';
const entries=publicRoutes().map(url=>{const raw=pageMarkdown(url);const title=url==='/'?'SOUL.md Blueprint':titleize(url.split('/').filter(Boolean).pop()||'Home');const text=raw.replace(/```[\s\S]*?```/g,' ').replace(/[#>*_`\[\](){}|-]/g,' ').replace(/\s+/g,' ').slice(0,1800);return {title,path:url,url,text};});
export const GET: APIRoute=()=>new Response(JSON.stringify(entries),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=3600'}});
