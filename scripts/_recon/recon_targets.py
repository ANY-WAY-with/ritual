"""Capture specific sections by heading text. Usage: recon_targets.py <host>"""
import json, sys, os
from playwright.sync_api import sync_playwright

HOST = sys.argv[1]
CFG = {
  "programa": {
    "url": "https://programa.design/",
    "targets": [
      ("hero", "Beautiful software"),
      ("cards", "Built by and for interior designers"),
      ("quote", "scalable now"),
      ("cta", "Try Programa free"),
    ],
  },
  "jasper": {
    "url": "https://www.jasper.ai/",
    "targets": [
      ("hero", "Put AI agents to work for marketing"),
      ("platformcards", "The execution platform for intelligent marketing"),
      ("stats", "Proven strategies, real results"),
      ("cta", "Put AI agents to work, on your terms"),
    ],
  },
}
c = CFG[HOST]
REF = f"docs/design-references/{HOST}"
RES = f"docs/research/{HOST}"
os.makedirs(REF, exist_ok=True)

FIND_JS = r"""
(text) => {
  // find deepest element whose textContent contains text, then climb to a "section-like" ancestor
  const all=[...document.querySelectorAll('h1,h2,h3,h4,p,span,div,a,button')];
  const hit=all.find(el=>el.innerText && el.innerText.includes(text));
  if(!hit) return null;
  // climb to a block that is a large layout container (width ~ full, height > 200)
  let el=hit;
  for(let k=0;k<12;k++){
    const r=el.getBoundingClientRect();
    if(r.width>900 && r.height>240) break;
    if(el.parentElement) el=el.parentElement; else break;
  }
  const r=el.getBoundingClientRect();
  const imgs=[...el.querySelectorAll('img')].map(i=>{
    let s=i.currentSrc||i.src;
    if(s.includes('_next/image')){try{const u=new URL(s);const q=u.searchParams.get('url'); if(q) s=q;}catch(e){}}
    return {src:s.split('/').pop().split('?')[0], w:i.naturalWidth,h:i.naturalHeight, alt:i.alt};
  }).slice(0,30);
  return {
    text: el.innerText.replace(/\n{2,}/g,'\n').slice(0,900),
    box:{top:Math.round(r.top+scrollY),h:Math.round(r.height),w:Math.round(r.width)},
    imgs
  };
}
"""

results={}
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1440,"height":900})
    pg.goto(c["url"], wait_until="networkidle", timeout=90000); pg.wait_for_timeout(2500)
    for y in range(0,16): pg.mouse.wheel(0,900); pg.wait_for_timeout(200)
    pg.wait_for_timeout(1000); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(600)
    for name, text in c["targets"]:
        info = pg.evaluate(FIND_JS, text)
        if not info: results[name]={"error":"not found"}; print(f"  {name}: NOT FOUND ({text})"); continue
        # screenshot the region via clip
        top=max(0, info["box"]["top"]-10); h=min(info["box"]["h"]+20, 2200)
        pg.evaluate(f"window.scrollTo(0,{top})"); pg.wait_for_timeout(500)
        try:
            pg.screenshot(path=f"{REF}/T-{name}.png", clip={"x":0,"y":10,"width":1440,"height":min(h, 1400)})
        except Exception as e:
            pg.screenshot(path=f"{REF}/T-{name}.png")
        results[name]=info
        print(f"  {name}: box h={info['box']['h']} imgs={len(info['imgs'])}")
    json.dump(results, open(f"{RES}/targets.json","w"), indent=2)
    b.close()
print("DONE", HOST)
