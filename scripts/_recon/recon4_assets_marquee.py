"""Collect all asset URLs + marquee content + key reusable element CSS."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
RES = "docs/research/dittowords"

COLLECT_JS = r"""
() => {
  const abs = u => { try { return new URL(u, location.href).href } catch(e){ return u } };
  // all img srcs incl srcset
  const imgs = new Set();
  document.querySelectorAll('img').forEach(i=>{ if(i.currentSrc) imgs.add(i.currentSrc); if(i.src) imgs.add(i.src); });
  // background images
  const bgs = new Set();
  document.querySelectorAll('*').forEach(el=>{
    const bg=getComputedStyle(el).backgroundImage;
    const m=bg && bg.match(/url\(["']?([^"')]+)["']?\)/g);
    if(m) m.forEach(x=>{ const u=x.replace(/url\(["']?/,'').replace(/["']?\)$/,''); if(/^https?:|^\//.test(u)) bgs.add(abs(u)); });
  });
  const vids=[...document.querySelectorAll('video')].map(v=>({src:v.src||v.querySelector('source')?.src, poster:v.poster}));
  // marquees
  function marq(sel){const el=document.querySelector(sel); if(!el) return null;
    return {html: el.parentElement.innerHTML.slice(0,1500), text: el.innerText.slice(0,400)};}
  return {
    images:[...imgs].filter(u=>/^https?:/.test(u)),
    bgs:[...bgs],
    videos:vids,
    logoMarquee: marq('.marquee-content'),
    integratesMarquee: marq('.integrates-everywhere-marquee'),
  };
}
"""

BTN_JS = r"""
() => {
  const out={};
  const grab=(label, el)=>{ if(!el) return; const c=getComputedStyle(el); const r=el.getBoundingClientRect();
    out[label]={text:el.innerText?.trim().slice(0,40), bg:c.backgroundColor, color:c.color, padding:c.padding, borderRadius:c.borderRadius, fontSize:c.fontSize, fontWeight:c.fontWeight, fontFamily:c.fontFamily, border:c.border, h:Math.round(r.height), letterSpacing:c.letterSpacing, gap:c.gap, display:c.display};
  };
  // find buttons by text
  const all=[...document.querySelectorAll('a, button')];
  grab('getStarted_nav', all.find(a=>/^Get Started$/.test(a.innerText?.trim())));
  grab('bookDemo_nav', all.find(a=>/^Book a Demo$/.test(a.innerText?.trim())));
  grab('getDemo_hero', all.find(a=>/^Get a Demo$/.test(a.innerText?.trim())));
  grab('getStartedFree', all.find(a=>/Get Started Free/.test(a.innerText?.trim())));
  grab('seeFullPlatform', all.find(a=>/See the full Ditto platform/.test(a.innerText?.trim())));
  grab('seeCaseStudies', all.find(a=>/See Case Studies/.test(a.innerText?.trim())));
  // nav link
  grab('navlink', all.find(a=>/^Product$/.test(a.innerText?.trim())));
  return out;
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2000)
    for y in range(0,11): pg.mouse.wheel(0,900); pg.wait_for_timeout(200)
    pg.wait_for_timeout(800); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(600)
    data = pg.evaluate(COLLECT_JS)
    btns = pg.evaluate(BTN_JS)
    with open(f"{RES}/assets-full.json","w") as f: json.dump(data,f,indent=2)
    with open(f"{RES}/buttons.json","w") as f: json.dump(btns,f,indent=2)
    b.close()

print("images:", len(data["images"]), "bgs:", len(data["bgs"]), "videos:", data["videos"])
print("\n=== LOGO MARQUEE text ===\n", (data["logoMarquee"] or {}).get("text"))
print("\n=== INTEGRATES MARQUEE text ===\n", (data["integratesMarquee"] or {}).get("text"))
print("\n=== BUTTONS ===")
for k,v in btns.items(): print(" ", k, "->", json.dumps(v))
