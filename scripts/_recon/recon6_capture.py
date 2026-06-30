"""Capture hero Lottie elements as PNGs + grab remaining token values."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
IMG = "public/images"
RES = "docs/research/dittowords"

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900}, device_scale_factor=3)
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(3000)  # let lottie render

    # capture hero badge + burst
    for sel, name in [(".teams-animation","hero-badge.png"), (".agents-animation","agent-burst.png")]:
        try:
            loc = pg.locator(sel).first
            loc.scroll_into_view_if_needed(); pg.wait_for_timeout(800)
            loc.screenshot(path=f"{IMG}/{name}", omit_background=True)
            print("captured", name)
        except Exception as e:
            print("fail", name, e)

    # remaining tokens
    vals = pg.evaluate(r"""
    () => {
      const out={};
      // hero yellow highlight
      const hl=[...document.querySelectorAll('h1 span, h1 *')].find(e=>{
        const bg=getComputedStyle(e).backgroundColor; return bg && bg!=='rgba(0, 0, 0, 0)';});
      out.heroHighlightBg = hl?getComputedStyle(hl).backgroundColor:null;
      out.heroHighlightTxt = hl?hl.innerText:null;
      // h1 container styles
      const h1=document.querySelector('h1'); const c=getComputedStyle(h1);
      out.h1={fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textAlign:c.textAlign,fontFamily:c.fontFamily};
      // blue button (final CTA)
      const blue=[...document.querySelectorAll('a,button')].find(a=>{const bg=getComputedStyle(a).backgroundColor; return /^Get a Demo$/.test(a.innerText?.trim()) && bg.includes('rgb') ;});
      // find the one on black bg (blue)
      const demos=[...document.querySelectorAll('a,button')].filter(a=>/^Get a Demo$/.test(a.innerText?.trim()));
      out.demoButtons = demos.map(a=>({bg:getComputedStyle(a).backgroundColor,color:getComputedStyle(a).color}));
      // section paddings of intro section
      return out;
    }""")
    print(json.dumps(vals, indent=2))
    b.close()
