"""Per-section screenshots + hero deep DOM extraction."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
OUT = "docs/design-references/dittowords"
RES = "docs/research/dittowords"

WALK_JS = r"""
(selector) => {
  const el = document.querySelector(selector);
  if (!el) return JSON.stringify({error:'not found '+selector});
  const props=['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform','textDecoration','backgroundColor','background','padding','paddingTop','paddingRight','paddingBottom','paddingLeft','margin','marginTop','marginBottom','width','height','maxWidth','minWidth','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','borderRadius','border','boxShadow','overflow','position','top','right','bottom','left','zIndex','opacity','transform','transition','cursor','objectFit','mixBlendMode','filter','backdropFilter','whiteSpace'];
  function styles(e){const cs=getComputedStyle(e);const o={};props.forEach(p=>{const v=cs[p];if(v&&v!=='none'&&v!=='normal'&&v!=='auto'&&v!=='0px'&&v!=='rgba(0, 0, 0, 0)')o[p]=v;});return o;}
  function walk(e,d){if(d>5)return null;const ch=[...e.children];
    return {tag:e.tagName.toLowerCase(),cls:e.className?.toString().split(' ').slice(0,4).join(' '),
      text:(e.childNodes.length===1&&e.childNodes[0].nodeType===3)?e.textContent.trim().slice(0,160):null,
      styles:styles(e),
      img:e.tagName==='IMG'?{src:e.currentSrc||e.src,alt:e.alt,w:e.naturalWidth,h:e.naturalHeight}:null,
      svg:e.tagName==='SVG'||e.tagName==='svg'?true:null,
      childCount:ch.length, children:ch.slice(0,16).map(c=>walk(c,d+1)).filter(Boolean)};}
  return JSON.stringify(walk(el,0));
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2500)
    # scroll to bottom to trigger reveals then back
    for y in range(0,11): pg.mouse.wheel(0,900); pg.wait_for_timeout(250)
    pg.wait_for_timeout(1000); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(1000)

    # direct section children of body (filter to real sections)
    idx_js = r"""()=>{const out=[];const kids=[...document.body.children];kids.forEach((el,i)=>{if(['SECTION','FOOTER'].includes(el.tagName)){const r=el.getBoundingClientRect();out.push({i,tag:el.tagName,cls:el.className?.toString()?.slice(0,60),h:Math.round(r.height)});}});return out;}"""
    secs = pg.evaluate(idx_js)
    print("SECTIONS:", json.dumps(secs))

    # screenshot each section element by index among body children
    names=[]
    for n,s in enumerate(secs):
        sel=f"body > *:nth-child({s['i']+1})"
        try:
            elh=pg.evaluate("(sel)=>{const e=document.querySelector(sel);const r=e.getBoundingClientRect();return r.height;}", sel)
            pg.eval_on_selector(sel,"e=>e.scrollIntoView({block:'start'})")
            pg.wait_for_timeout(700)
            fn=f"{OUT}/sec{n:02d}-{s['cls'].split(' ')[0] or s['tag'].lower()}.png".replace(' ','')
            pg.locator(sel).screenshot(path=fn)
            names.append((fn, s['cls'], round(elh)))
        except Exception as e:
            print("  skip", sel, e)
    print("SHOTS:")
    for fn,cls,h in names: print("  ", fn, "|", cls, "| h=",h)

    # Hero deep extraction (section index 0 among sections is body child after navbar)
    pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(500)
    hero = json.loads(pg.evaluate(WALK_JS, "section.section"))
    with open(f"{RES}/hero-dom.json","w") as f: json.dump(hero,f,indent=2)
    b.close()
print("DONE")
