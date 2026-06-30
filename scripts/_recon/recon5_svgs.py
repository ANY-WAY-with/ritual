"""Extract inline SVGs (deduped) + high-res capture of isometric illustration."""
import json, hashlib
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
RES = "docs/research/dittowords"
OUT = "docs/design-references/dittowords"

SVG_JS = r"""
() => {
  const out=[];
  document.querySelectorAll('svg').forEach(svg=>{
    const r=svg.getBoundingClientRect();
    out.push({
      html: svg.outerHTML.slice(0,6000),
      w: Math.round(r.width), h: Math.round(r.height),
      cls: svg.getAttribute('class')||'',
      parentCls: svg.parentElement?.className?.toString()?.slice(0,60)||'',
      grandParentCls: svg.parentElement?.parentElement?.className?.toString()?.slice(0,60)||'',
      nearText: (svg.closest('section, footer, nav, div')?.innerText||'').slice(0,40)
    });
  });
  return out;
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900}, device_scale_factor=2)
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2000)
    for y in range(0,11): pg.mouse.wheel(0,900); pg.wait_for_timeout(200)
    pg.wait_for_timeout(800); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(800)

    svgs = pg.evaluate(SVG_JS)
    # dedupe by html
    seen={}; uniq=[]
    for s in svgs:
        h=hashlib.md5(s["html"].encode()).hexdigest()[:8]
        if h in seen: seen[h]+=1; continue
        seen[h]=1; s["hash"]=h; uniq.append(s)
    for s in uniq: s["count"]=seen[s["hash"]]
    with open(f"{RES}/svgs.json","w") as f: json.dump(uniq,f,indent=2)

    # High-res capture of the isometric illustration (product-visual section)
    try:
        sel="section.product-visual"
        pg.eval_on_selector(sel,"e=>e.scrollIntoView({block:'center'})")
        pg.wait_for_timeout(1200)
        pg.locator(sel).screenshot(path=f"{OUT}/isometric-illustration.png")
        # also try to grab the svg inside it raw
        raw = pg.eval_on_selector(sel, "e=>{const s=e.querySelector('svg'); return s?s.outerHTML:null;}")
        if raw:
            with open(f"{OUT}/isometric.svg","w") as f: f.write(raw)
            print("isometric svg saved, len", len(raw))
        else:
            print("no svg inside product-visual; img?")
            img = pg.eval_on_selector(sel, "e=>{const i=e.querySelector('img,video,canvas'); return i?i.outerHTML.slice(0,300):'none';}")
            print("  inner media:", img)
    except Exception as e:
        print("iso capture err", e)

    b.close()

print(f"\nUNIQUE SVGS: {len(uniq)}")
for s in uniq:
    print(f"  {s['hash']} x{s['count']:2}  {s['w']}x{s['h']:<4} cls='{s['cls'][:24]}' parent='{s['parentCls'][:24]}' near='{s['nearText'][:24].strip()}'")
