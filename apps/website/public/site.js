(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('soul-theme');
  if (stored === 'light') root.dataset.theme = 'light';
  const theme = document.getElementById('theme-toggle');
  theme?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('soul-theme', root.dataset.theme);
  });

  const drawer = document.getElementById('mobile-drawer');
  const menu = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  let lastFocus = null;
  const setDrawer = (open) => {
    if (!drawer || !menu) return;
    if (open) {
      lastFocus = document.activeElement;
      drawer.removeAttribute('inert');
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden','false');
      menu.setAttribute('aria-expanded','true');
      close?.focus();
    } else {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden','true');
      drawer.setAttribute('inert','');
      menu.setAttribute('aria-expanded','false');
      if (lastFocus instanceof HTMLElement) lastFocus.focus();
    }
  };
  menu?.addEventListener('click', () => setDrawer(true)); close?.addEventListener('click', () => setDrawer(false));
  drawer?.addEventListener('click', e => { if (e.target === drawer) setDrawer(false); });
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setDrawer(false)));

  const modal = document.getElementById('search-modal');
  const searchToggle = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  let index = [];
  const setSearch = async (open) => {
    if (!modal) return;
    if (open) {
      lastFocus = document.activeElement;
      modal.removeAttribute('inert'); modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
      if (!index.length) { try { index = await (await fetch('/search-index.json')).json(); } catch {} }
      setTimeout(() => input?.focus(), 20);
    } else {
      modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modal.setAttribute('inert','');
      if (lastFocus instanceof HTMLElement) lastFocus.focus();
    }
  };
  searchToggle?.addEventListener('click', () => setSearch(true)); searchClose?.addEventListener('click', () => setSearch(false));
  modal?.addEventListener('click', e => { if (e.target === modal) setSearch(false); });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearch(true); }
    if (e.key === 'Escape') { if (modal?.classList.contains('open')) setSearch(false); else if (drawer?.classList.contains('open')) setDrawer(false); }
  });
  input?.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!results) return;
    if (!q) { results.innerHTML = '<span class="panel-label">Type to search canonical pages and sources.</span>'; return; }
    const hits = index.filter(x => (x.title+' '+x.text+' '+x.path).toLowerCase().includes(q)).slice(0,12);
    results.innerHTML = hits.map(x => `<a class="search-result" role="option" href="${x.url}"><strong>${escapeHtml(x.title)}</strong><span>${escapeHtml(x.path)}</span></a>`).join('') || '<span class="panel-label">No matches.</span>';
  });
  function escapeHtml(s){ return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button'); btn.type='button'; btn.className='copy-code'; btn.textContent='COPY';
    btn.addEventListener('click', async () => { const code = pre.querySelector('code'); await navigator.clipboard.writeText(code?.textContent || pre.childNodes[0]?.textContent || ''); btn.textContent='COPIED'; setTimeout(()=>btn.textContent='COPY',1200); });
    pre.appendChild(btn);
  });

  const trapFocus = (container, e) => {
    if (e.key !== 'Tab' || !container) return;
    const items = [...container.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('inert') && el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  document.addEventListener('keydown', e => {
    if (modal?.classList.contains('open')) trapFocus(modal, e);
    else if (drawer?.classList.contains('open')) trapFocus(drawer, e);
  });

  document.querySelectorAll('[data-tabs]').forEach(tabs => {
    const buttons = [...tabs.querySelectorAll('[role="tab"]')];
    const panels = [...tabs.querySelectorAll('[role="tabpanel"]')];
    const select = (i) => { buttons.forEach((b,j)=>{b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1}); panels.forEach((p,j)=>p.hidden=j!==i); };
    buttons.forEach((b,i)=>{ b.addEventListener('click',()=>select(i)); b.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const n=(i+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;select(n);buttons[n].focus();}}); }); select(0);
  });

  const canvas = document.getElementById('network-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d'); let pts=[]; let w=0,h=0,raf=0; const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resize=()=>{const dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const coarse=matchMedia('(pointer: coarse)').matches;const count=Math.min(coarse?38:86,Math.max(24,Math.floor(w/(coarse?22:14))));pts=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.15+.35}));};
    const draw=()=>{ctx.clearRect(0,0,w,h);const light=root.dataset.theme==='light';const pc=light?'35,55,37':'222,244,220',lc=light?'44,68,45':'198,255,92';for(const p of pts){if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}}for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<125){ctx.beginPath();ctx.strokeStyle=`rgba(${lc},${(.14*(1-dist/125)).toFixed(3)})`;ctx.lineWidth=.65;ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}for(const p of pts){ctx.beginPath();ctx.fillStyle=`rgba(${pc},.42)`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();}if(!reduce&&!document.hidden)raf=requestAnimationFrame(draw);};
    addEventListener('resize',resize,{passive:true});document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden&&!reduce)draw();});resize();draw();
  }
})();
