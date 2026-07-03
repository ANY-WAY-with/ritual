"""Extract pally's thread SVG (full), keyframes, fonts, colors."""
import json, re
from playwright.sync_api import sync_playwright

URL = "https://www.pally.com/"
RES = "docs/research/pally"

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2500)

    data = pg.evaluate(r"""() => {
      // biggest svg = thread system
      const svg=[...document.querySelectorAll('svg')].sort((a,b)=>b.getBoundingClientRect().height-a.getBoundingClientRect().height)[0];
      const paths=svg?[...svg.querySelectorAll('path')]:[];
      const threads = paths.map(p=>{
        const cs=getComputedStyle(p);
        return { d:p.getAttribute('d'), stroke:cs.stroke, strokeWidth:cs.strokeWidth,
          dasharray:cs.strokeDasharray, dashoffset:cs.strokeDashoffset,
          animation:cs.animation, animationName:cs.animationName, animationDelay:cs.animationDelay,
          animationDuration:cs.animationDuration, opacity:cs.opacity, klass:(p.getAttribute('class')||'') };
      });
      // defs (gradient)
      const defs=svg?[...svg.querySelectorAll('defs, linearGradient, radialGradient')].map(d=>d.outerHTML).join('\n'):'';
      // wrapper svg attributes
      const svgAttrs = svg ? {viewBox:svg.getAttribute('viewBox'), klass:svg.getAttribute('class'), style:svg.getAttribute('style'),
        parentKlass:(svg.parentElement?.getAttribute('class')||'')} : null;
      // keyframes thread-*
      let kf='';
      for (const ss of document.styleSheets){ try{ for(const r of ss.cssRules){
        if(r.type===CSSRule.KEYFRAMES_RULE && /thread/i.test(r.name)) kf += r.cssText+'\n';
      }}catch(e){} }
      // font faces (neueMontreal) + font files
      const fontUrls=new Set();
      for (const ss of document.styleSheets){ try{ for(const r of ss.cssRules){
        if(r.type===CSSRule.FONT_FACE_RULE){ const m=r.cssText.match(/url\(([^)]+)\)/g); if(/neue|montreal/i.test(r.cssText)&&m) m.forEach(u=>fontUrls.add(u.replace(/url\(["']?/,'').replace(/["']?\)$/,''))); }
      }}catch(e){} }
      // colors on key elements
      const grab=(sel)=>{const el=document.querySelector(sel); if(!el)return null; const c=getComputedStyle(el); return {color:c.color,bg:c.backgroundColor,fontSize:c.fontSize,fontWeight:c.fontWeight,fontFamily:c.fontFamily.split(',')[0]};};
      return { threadCount:paths.length, svgAttrs, defs, threads, keyframes:kf,
        fontUrls:[...fontUrls],
        h1:grab('h1'), body:{bg:getComputedStyle(document.body).backgroundColor} };
    }""")
    json.dump(data, open(f"{RES}/threads.json","w"), indent=2)
    b.close()

print("threadCount:", data["threadCount"])
print("svgAttrs:", json.dumps(data["svgAttrs"]))
print("=== keyframes ===\n", data["keyframes"])
print("=== defs (gradient) ===\n", data["defs"][:600])
print("=== fontUrls ===")
for u in data["fontUrls"]: print("  ", u)
print("=== h1 ===", json.dumps(data["h1"]))
print("=== per-thread anim (delay/opacity/name) ===")
for i,t in enumerate(data["threads"]):
    print(f"  [{i}] delay={t['animationDelay']} dur={t['animationDuration']} name={t['animationName']} opacity={t['opacity']} dash={t['dasharray']} class='{t['klass'][:30]}'")
