"""Phase 1 interaction sweep: animations, header scroll, marquees, topology."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
RES = "docs/research/dittowords"

TOPOLOGY_JS = r"""
() => {
  // top-level sections under main/body
  const root = document.querySelector('.main-wrapper, main, body');
  const kids = [...document.body.querySelectorAll('section, .section, [class*=section]')].filter(el=>{
    const r=el.getBoundingClientRect(); return r.height>80 && r.width>300;
  });
  // fallback: direct children of body wrapper
  const direct = [...(document.querySelector('.page-wrapper, .main-wrapper, body')?.children||[])];
  function info(el){
    const r=el.getBoundingClientRect(); const c=getComputedStyle(el);
    return {tag:el.tagName.toLowerCase(), cls:el.className?.toString()?.slice(0,80),
      id:el.id||el.getAttribute('data-w-id')||'', top:Math.round(r.top+scrollY), h:Math.round(r.height),
      bg:c.backgroundColor, pos:c.position, z:c.zIndex};
  }
  return {
    direct: direct.map(info),
    sections: kids.slice(0,40).map(info)
  };
}
"""

ANIM_JS = r"""
() => {
  // find elements with CSS animation (marquees) or transform transitions
  const out=[];
  for (const el of document.querySelectorAll('*')) {
    const c=getComputedStyle(el);
    if (c.animationName && c.animationName!=='none') {
      out.push({tag:el.tagName.toLowerCase(), cls:el.className?.toString()?.slice(0,60), anim:c.animationName, dur:c.animationDuration, timing:c.animationTimingFunction, iter:c.animationIterationCount});
    }
  }
  return out.slice(0,40);
}
"""

HERO_HEADLINE_JS = r"""
() => {
  const h1=document.querySelector('h1');
  return h1? {text:h1.innerText, html:h1.innerHTML.slice(0,500)} : null;
}
"""

HEADER_JS = r"""
() => {
  const nav=document.querySelector('.navbar, nav, header, [class*=nav]');
  if(!nav) return null;
  const c=getComputedStyle(nav);
  const r=nav.getBoundingClientRect();
  return {cls:nav.className?.toString()?.slice(0,80), position:c.position, bg:c.backgroundColor, backdrop:c.backdropFilter, boxShadow:c.boxShadow, height:Math.round(r.height), padding:c.padding, transform:c.transform, borderRadius:c.borderRadius, top:c.top};
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2000)

    topo = pg.evaluate(TOPOLOGY_JS)
    anims = pg.evaluate(ANIM_JS)

    # Hero headline animation sample over 7s
    headline_samples=[]
    for i in range(14):
        h=pg.evaluate(HERO_HEADLINE_JS)
        headline_samples.append(h["text"] if h else None)
        pg.wait_for_timeout(500)

    # Header at scroll 0
    header0 = pg.evaluate(HEADER_JS)
    pg.evaluate("window.scrollTo(0, 700)")
    pg.wait_for_timeout(900)
    header1 = pg.evaluate(HEADER_JS)
    pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(500)

    out={"topology":topo, "animations":anims, "headline_samples":headline_samples,
         "header_scroll0":header0, "header_scroll700":header1}
    with open(f"{RES}/behaviors-raw.json","w") as f: json.dump(out,f,indent=2)

    b.close()

print("=== HEADLINE SAMPLES (cycling?) ===")
for s in headline_samples: print("  ", repr(s))
print("\n=== ANIMATIONS (marquees) ===")
for a in anims: print("  ", a)
print("\n=== HEADER scroll0 ===", json.dumps(header0))
print("=== HEADER scroll700 ===", json.dumps(header1))
print("\n=== TOPOLOGY direct children ===")
for d in topo["direct"]: print("  ", d)
