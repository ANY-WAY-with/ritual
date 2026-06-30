"""Targeted computed styles for feature titles, bento grid, impact stats, etc."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"

JS = r"""
() => {
  const grab = (el) => { if(!el) return null; const c=getComputedStyle(el); const r=el.getBoundingClientRect();
    return {w:Math.round(r.width),h:Math.round(r.height),fontSize:c.fontSize,fontWeight:c.fontWeight,lineHeight:c.lineHeight,letterSpacing:c.letterSpacing,color:c.color,bg:c.backgroundColor,borderRadius:c.borderRadius,padding:c.padding,gap:c.gap,display:c.display,gridTemplateColumns:c.gridTemplateColumns,gridTemplateRows:c.gridTemplateRows,maxWidth:c.maxWidth,fontFamily:c.fontFamily.split(',')[0]};};
  const out={};
  // FEATURE: first usecase block -> bullet + title + body
  const uc=document.querySelector('.home-page-rebuild-usecase');
  if(uc){
    out.feature_usecase=grab(uc);
    const kids=[...uc.children];
    out.feature_bullet=grab(kids[0]);
    // title/body live in 2nd child likely
    const textcol=kids[1]||kids[0];
    out.feature_textcol=grab(textcol);
    const hs=textcol?.querySelector('h1,h2,h3,h4'); out.feature_title=grab(hs); out.feature_title_text=hs?.innerText;
    const ps=textcol?.querySelector('p'); out.feature_body=grab(ps); out.feature_body_text=ps?.innerText?.slice(0,60);
    // bullet deeper (the colored square)
    out.feature_bullet_inner=grab(uc.querySelector('div,span'));
  }
  // BENTO grid
  const bento=document.querySelector('.bg-black .w-layout-grid, .bg-black [class*=grid], .bg-black .w-layout-blockcontainer');
  // find a grid display element within first bg-black
  const blk=document.querySelector('section.bg-black');
  let grid=null;
  if(blk){ grid=[...blk.querySelectorAll('*')].find(e=>getComputedStyle(e).display==='grid'); }
  out.bento_grid=grab(grid);
  if(grid){ out.bento_cells=[...grid.children].map(c=>{const g=grab(c); g.gridColumn=getComputedStyle(c).gridColumn; g.gridRow=getComputedStyle(c).gridRow; return g;}); }
  // IMPACT stats: big number
  const red=document.querySelector('section.bg-red');
  if(red){
    const nums=[...red.querySelectorAll('*')].filter(e=>/^\d+(%|hrs)?$/.test(e.innerText?.trim()));
    out.impact_number=grab(nums[0]); out.impact_number_text=nums[0]?.innerText;
    // heading
    const h=red.querySelector('h1,h2,h3'); out.impact_heading=grab(h); out.impact_heading_text=h?.innerText;
  }
  // FOOTER columns
  const ft=document.querySelector('footer');
  if(ft){ const fgrid=[...ft.querySelectorAll('*')].find(e=>getComputedStyle(e).display==='grid'||getComputedStyle(e).display==='flex'&&e.children.length>=3); out.footer_cols=grab(ft.querySelector('[class*=link], a'));
    const heading=[...ft.querySelectorAll('div,h3,h4,p')].find(e=>/Solutions|Product|Resources/.test(e.innerText?.trim()?.split('\n')[0]||''));
    out.footer_heading=grab(heading); out.footer_heading_text=heading?.innerText?.split('\n')[0];
  }
  // INTRO heading
  const intro=document.querySelectorAll('section')[2];
  return out;
};
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2000)
    for y in range(0,12): pg.mouse.wheel(0,900); pg.wait_for_timeout(180)
    pg.wait_for_timeout(800); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(500)
    out = pg.evaluate(JS)
    print(json.dumps(out, indent=2))
    b.close()
