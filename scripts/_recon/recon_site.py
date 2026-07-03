"""Parameterized recon for one site. Usage: recon_site.py <url> <host>"""
import json, sys, os
from playwright.sync_api import sync_playwright

URL = sys.argv[1]
HOST = sys.argv[2]
RES = f"docs/research/{HOST}"
REF = f"docs/design-references/{HOST}"
os.makedirs(RES, exist_ok=True); os.makedirs(REF, exist_ok=True); os.makedirs(f"{RES}/dom", exist_ok=True)

DISCOVERY_JS = r"""
() => {
  const abs=u=>{try{return new URL(u,location.href).href}catch(e){return u}};
  const imgs=new Set();
  document.querySelectorAll('img').forEach(i=>{if(i.currentSrc)imgs.add(i.currentSrc);if(i.src)imgs.add(i.src);});
  const bgs=new Set();
  document.querySelectorAll('*').forEach(el=>{const bg=getComputedStyle(el).backgroundImage;const m=bg&&bg.match(/url\(["']?([^"')]+)["']?\)/g);if(m)m.forEach(x=>{const u=x.replace(/url\(["']?/,'').replace(/["']?\)$/,'');if(/^https?:|^\//.test(u))bgs.add(abs(u));});});
  return {
    title: document.title,
    images:[...imgs].filter(u=>/^https?:/.test(u)),
    bgs:[...bgs].slice(0,60),
    videos:[...document.querySelectorAll('video')].map(v=>({src:v.src||v.querySelector('source')?.src, poster:v.poster, hevc:v.getAttribute('data-hevc'), webm:v.getAttribute('data-webm')})),
    fonts:[...new Set([...document.querySelectorAll('*')].slice(0,400).map(el=>getComputedStyle(el).fontFamily))].slice(0,12),
    favicons:[...document.querySelectorAll('link[rel*="icon"],link[rel*="apple-touch"],link[rel*="manifest"]')].map(l=>({rel:l.rel,href:l.href,type:l.type})),
    meta:[...document.querySelectorAll('meta[property^="og:"],meta[name^="twitter:"],meta[name="description"]')].map(m=>({k:m.getAttribute('property')||m.getAttribute('name'),v:(m.getAttribute('content')||'').slice(0,120)})),
    stylesheets:[...document.querySelectorAll('link[rel=stylesheet]')].map(l=>l.href).slice(0,10),
    scripts:[...document.querySelectorAll('script[src]')].map(s=>s.src).filter(s=>/lenis|locomotive|gsap|framer|aos|swiper|webflow|react|next/i.test(s)).slice(0,12),
    bodyBg:getComputedStyle(document.body).backgroundColor,
    bodyColor:getComputedStyle(document.body).color,
    bodyFont:getComputedStyle(document.body).fontFamily,
    hasLenis:!!document.querySelector('.lenis')||document.documentElement.className.includes('lenis'),
  };
}
"""
PROBE_JS = r"""
() => {
  const sels=['h1','h2','h3','h4','p','a','button','nav','li','span'];
  const out={};
  for(const s of sels){const el=document.querySelector(s);if(!el)continue;const c=getComputedStyle(el);
    out[s]={fontFamily:c.fontFamily,fontSize:c.fontSize,fontWeight:c.fontWeight,lineHeight:c.lineHeight,letterSpacing:c.letterSpacing,color:c.color,textTransform:c.textTransform};}
  return out;
}
"""
TOPO_JS = r"""
() => {
  const info=el=>{const r=el.getBoundingClientRect();const c=getComputedStyle(el);
    return {tag:el.tagName.toLowerCase(),cls:(el.className?.toString()||'').slice(0,60),id:el.id||'',top:Math.round(r.top+scrollY),h:Math.round(r.height),bg:c.backgroundColor,pos:c.position,z:c.zIndex};};
  const root=document.querySelector('main')||document.body;
  const direct=[...document.body.children].filter(e=>!['SCRIPT','STYLE','LINK','NOSCRIPT'].includes(e.tagName));
  const mainKids=root!==document.body?[...root.children]:[];
  const sections=[...document.querySelectorAll('section, header, footer, [class*=section]')].filter(el=>{const r=el.getBoundingClientRect();return r.height>60&&r.width>300;}).slice(0,50);
  return {direct:direct.map(info), mainKids:mainKids.map(info), sections:sections.map(info)};
}
"""
ANIM_JS = r"""
() => {[...document.querySelectorAll('*')].forEach(()=>{});
  const out=[];const seen=new Set();
  for(const el of document.querySelectorAll('*')){const c=getComputedStyle(el);
    if(c.animationName&&c.animationName!=='none'){const k=c.animationName+el.className;if(seen.has(k))continue;seen.add(k);
      out.push({cls:(el.className?.toString()||'').slice(0,50),anim:c.animationName,dur:c.animationDuration,timing:c.animationTimingFunction,iter:c.animationIterationCount});}}
  return out.slice(0,30);
}
"""

with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2500)
    for y in range(0,16): pg.mouse.wheel(0,900); pg.wait_for_timeout(250)
    pg.wait_for_timeout(1200); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(800)
    pg.screenshot(path=f"{REF}/full-desktop.png", full_page=True)
    disc=pg.evaluate(DISCOVERY_JS); probe=pg.evaluate(PROBE_JS); topo=pg.evaluate(TOPO_JS); anims=pg.evaluate(ANIM_JS)
    json.dump(disc,open(f"{RES}/asset-discovery.json","w"),indent=2)
    json.dump(probe,open(f"{RES}/font-color-probe.json","w"),indent=2)
    json.dump(topo,open(f"{RES}/topology.json","w"),indent=2)
    json.dump(anims,open(f"{RES}/animations.json","w"),indent=2)

    # per-section screenshots (body direct children that are sections/header/footer)
    idx_js=r"""()=>{const out=[];[...document.body.children].forEach((el,i)=>{if(['SECTION','HEADER','FOOTER','DIV','MAIN'].includes(el.tagName)){const r=el.getBoundingClientRect();if(r.height>60)out.push({i,tag:el.tagName,cls:(el.className?.toString()||'').slice(0,40),h:Math.round(r.height)});}});return out;}"""
    secs=pg.evaluate(idx_js)
    shots=[]
    for n,s in enumerate(secs[:20]):
        sel=f"body > *:nth-child({s['i']+1})"
        try:
            pg.eval_on_selector(sel,"e=>e.scrollIntoView({block:'start'})"); pg.wait_for_timeout(500)
            fn=f"{REF}/sec{n:02d}-{(s['cls'].split(' ')[0] or s['tag'].lower())[:20]}.png".replace(' ','')
            pg.locator(sel).screenshot(path=fn, timeout=8000); shots.append((fn,s['tag'],s['cls'][:30],s['h']))
        except Exception as e: shots.append((sel,"ERR",str(e)[:40],0))
    pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(400)

    # mobile
    pgm=b.new_page(viewport={"width":390,"height":844}, is_mobile=True)
    pgm.goto(URL, wait_until="networkidle", timeout=90000); pgm.wait_for_timeout(2000)
    for y in range(0,18): pgm.mouse.wheel(0,700); pgm.wait_for_timeout(200)
    pgm.wait_for_timeout(1000); pgm.evaluate("window.scrollTo(0,0)"); pgm.wait_for_timeout(600)
    pgm.screenshot(path=f"{REF}/full-mobile.png", full_page=True)
    b.close()

print(f"=== {HOST} ===")
print("title:", disc["title"])
print("images:", len(disc["images"]), "videos:", len(disc["videos"]), "bgs:", len(disc["bgs"]))
print("bodyBg:", disc["bodyBg"], "bodyFont:", disc["bodyFont"][:50])
print("fonts:", disc["fonts"][:6])
print("scripts:", disc["scripts"][:6])
print("hasLenis:", disc["hasLenis"])
print("SECTION SHOTS:")
for fn,tag,cls,h in shots: print(f"  {fn} [{tag}] {cls} h={h}")
