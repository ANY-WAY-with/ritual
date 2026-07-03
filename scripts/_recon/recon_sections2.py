"""Screenshot + text-dump real sections. Usage: recon_sections2.py <url> <host>"""
import json, sys, os
from playwright.sync_api import sync_playwright
URL, HOST = sys.argv[1], sys.argv[2]
REF = f"docs/design-references/{HOST}"
RES = f"docs/research/{HOST}"
os.makedirs(REF, exist_ok=True)

with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000); pg.wait_for_timeout(2500)
    for y in range(0,16): pg.mouse.wheel(0,900); pg.wait_for_timeout(220)
    pg.wait_for_timeout(1000); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(700)

    # candidate top-level sections: header/nav + <section> + footer, in document order
    cand_js = r"""()=>{
      const cands=[...document.querySelectorAll('header, nav, section, footer')];
      // keep those that are reasonably tall & wide and not nested inside another candidate
      const keep=cands.filter(el=>{const r=el.getBoundingClientRect(); if(r.height<80||r.width<400) return false;
        // exclude if an ancestor is also a candidate section/header/footer
        let p=el.parentElement; while(p){ if(['SECTION','HEADER','FOOTER'].includes(p.tagName)) return false; p=p.parentElement;} return true;});
      return keep.map((el,i)=>{const r=el.getBoundingClientRect();
        return {i, tag:el.tagName.toLowerCase(), cls:(el.className?.toString()||'').slice(0,40), top:Math.round(r.top+scrollY), h:Math.round(r.height),
          text:(el.innerText||'').replace(/\s+/g,' ').slice(0,260)};});
    }"""
    cands = pg.evaluate(cand_js)
    # screenshot each by re-querying via index among the same selector set
    sel_all = "header, nav, section, footer"
    out=[]
    for n,c in enumerate(cands):
        try:
            # scroll & screenshot the nth matching kept element — re-evaluate to get handle
            handle = pg.evaluate_handle(f"""()=>{{
              const cands=[...document.querySelectorAll('{sel_all}')].filter(el=>{{const r=el.getBoundingClientRect(); if(r.height<80||r.width<400) return false; let p=el.parentElement; while(p){{if(['SECTION','HEADER','FOOTER'].includes(p.tagName)) return false; p=p.parentElement;}} return true;}});
              return cands[{c['i']}];}}""")
            el = handle.as_element()
            if el:
                el.scroll_into_view_if_needed(); pg.wait_for_timeout(400)
                fn=f"{REF}/S{n:02d}-{(c['cls'].split(' ')[0] or c['tag'])[:16]}.png".replace('/','-')
                el.screenshot(path=fn, timeout=8000)
                out.append({**c, "shot":fn})
        except Exception as e:
            out.append({**c, "shot":f"ERR {e}"[:60]})
    json.dump(out, open(f"{RES}/sections.json","w"), indent=2)
    b.close()
print(f"=== {HOST}: {len(out)} sections ===")
for c in out:
    print(f"  S{c['i']:02} [{c['tag']}] h={c['h']:5} {c.get('shot','').split('/')[-1]:28} | {c['text'][:80]}")
