"""Deep DOM+CSS walk for each section -> docs/research/dittowords/dom/*.json"""
import json, os
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
OUTDIR = "docs/research/dittowords/dom"
os.makedirs(OUTDIR, exist_ok=True)

WALK_JS = r"""
(selector) => {
  const el = document.querySelector(selector);
  if (!el) return JSON.stringify({error:'not found '+selector});
  const props=['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform','backgroundColor','padding','paddingTop','paddingBottom','paddingLeft','paddingRight','margin','marginTop','marginBottom','width','height','maxWidth','minWidth','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','gridTemplateRows','gridColumn','gridRow','borderRadius','border','boxShadow','overflow','position','top','left','right','bottom','zIndex','opacity','transform','objectFit','textAlign'];
  function styles(e){const cs=getComputedStyle(e);const o={};props.forEach(p=>{const v=cs[p];if(v&&v!=='none'&&v!=='normal'&&v!=='auto'&&v!=='0px'&&v!=='rgba(0, 0, 0, 0)')o[p]=v;});return o;}
  function walk(e,d){if(d>5)return null;const ch=[...e.children];const r=e.getBoundingClientRect();
    return {tag:e.tagName.toLowerCase(),cls:e.className?.toString().split(' ').slice(0,5).join(' '),
      box:{w:Math.round(r.width),h:Math.round(r.height)},
      text:(e.childNodes.length===1&&e.childNodes[0].nodeType===3)?e.textContent.trim().slice(0,200):null,
      styles:styles(e),
      img:e.tagName==='IMG'?{src:(e.currentSrc||e.src).split('/').pop(),alt:e.alt,w:e.naturalWidth,h:e.naturalHeight}:null,
      childCount:ch.length, children:ch.slice(0,20).map(c=>walk(c,d+1)).filter(Boolean)};}
  return JSON.stringify(walk(el,0));
}
"""

# (name, selector by body nth-child index from recon3) — body children: navbar is child 1
TARGETS = [
  ("nav", "body > div.navbar"),
  ("logomarquee", "body > section:nth-of-type(2)"),
  ("intro", "body > section:nth-of-type(3)"),
  ("build", "body > section.product-visual"),
  ("bottleneck", "body > section:nth-of-type(5)"),
  ("integrates", "body > section:nth-of-type(6)"),
  ("bento", "body > section.bg-black:nth-of-type(7)"),
  ("features", "body > section:nth-of-type(8)"),
  ("impact", "body > section.bg-red"),
  ("finalcta", "body > section.bg-black:nth-of-type(10)"),
  ("footer", "footer.footer"),
]

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2500)
    for y in range(0,12): pg.mouse.wheel(0,900); pg.wait_for_timeout(200)
    pg.wait_for_timeout(800); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(600)
    for name, sel in TARGETS:
        try:
            res = pg.evaluate(WALK_JS, sel)
            data = json.loads(res)
            with open(f"{OUTDIR}/{name}.json","w") as f: json.dump(data,f,indent=2)
            err = data.get("error") if isinstance(data,dict) else None
            print(f"  {name:12} {'ERR '+err if err else 'ok  '+data.get('cls','')[:30]+' '+str(data.get('box'))}")
        except Exception as e:
            print(f"  {name:12} EXC {e}")
    b.close()
print("DONE")
