"""Phase 1 recon: full-page screenshots + global asset/font/color discovery."""
import json, sys
from playwright.sync_api import sync_playwright

URL = "https://www.dittowords.com/"
OUT = "docs/design-references/dittowords"
RES = "docs/research/dittowords"

DISCOVERY_JS = r"""
() => {
  const cs = (el,p) => getComputedStyle(el)[p];
  return {
    images: [...document.querySelectorAll('img')].map(img => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      width: img.naturalWidth, height: img.naturalHeight,
      parentClasses: img.parentElement?.className?.toString()?.slice(0,120),
      position: cs(img,'position'), zIndex: cs(img,'zIndex')
    })),
    videos: [...document.querySelectorAll('video')].map(v => ({
      src: v.src || v.querySelector('source')?.src,
      poster: v.poster, autoplay: v.autoplay, loop: v.loop, muted: v.muted
    })),
    backgroundImages: [...document.querySelectorAll('*')].filter(el => {
      const bg = getComputedStyle(el).backgroundImage; return bg && bg !== 'none';
    }).slice(0,80).map(el => ({
      url: getComputedStyle(el).backgroundImage.slice(0,300),
      element: el.tagName + '.' + (el.className?.toString()?.split(' ')[0] || '')
    })),
    svgCount: document.querySelectorAll('svg').length,
    fonts: [...new Set([...document.querySelectorAll('*')].slice(0,400).map(el => getComputedStyle(el).fontFamily))],
    favicons: [...document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch"], link[rel*="manifest"]')].map(l => ({ rel:l.rel, href: l.href, sizes: l.sizes?.toString(), type:l.type })),
    metaOg: [...document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]')].map(m=>({k:m.getAttribute('property')||m.getAttribute('name'), v:m.getAttribute('content')})),
    title: document.title,
    stylesheetLinks: [...document.querySelectorAll('link[rel=stylesheet]')].map(l=>l.href),
    fontLinks: [...document.querySelectorAll('link[href*="font"], link[rel=preload][as=font]')].map(l=>l.href),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    bodyColor: getComputedStyle(document.body).color,
    bodyFont: getComputedStyle(document.body).fontFamily,
    htmlClasses: document.documentElement.className,
    hasLenis: !!document.querySelector('.lenis') || !!window.Lenis || document.documentElement.className.includes('lenis'),
    scripts: [...document.querySelectorAll('script[src]')].map(s=>s.src).filter(s=>/lenis|locomotive|gsap|framer|aos|swiper/i.test(s))
  };
}
"""

# Key element font/color probe
PROBE_JS = r"""
() => {
  const sels = ['h1','h2','h3','h4','p','a','button','nav','span','small','code','li'];
  const out = {};
  for (const s of sels) {
    const el = document.querySelector(s);
    if (!el) continue;
    const c = getComputedStyle(el);
    out[s] = {fontFamily:c.fontFamily, fontSize:c.fontSize, fontWeight:c.fontWeight, lineHeight:c.lineHeight, letterSpacing:c.letterSpacing, color:c.color, textTransform:c.textTransform};
  }
  return out;
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    # Desktop
    pg = b.new_page(viewport={"width":1440,"height":900}, device_scale_factor=1)
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(2500)
    # scroll through to trigger lazy loads
    for y in range(0, 12):
        pg.mouse.wheel(0, 900)
        pg.wait_for_timeout(300)
    pg.wait_for_timeout(1500)
    pg.evaluate("window.scrollTo(0,0)")
    pg.wait_for_timeout(800)
    pg.screenshot(path=f"{OUT}/full-desktop.png", full_page=True)

    disc = pg.evaluate(DISCOVERY_JS)
    probe = pg.evaluate(PROBE_JS)
    with open(f"{RES}/asset-discovery.json","w") as f: json.dump(disc, f, indent=2)
    with open(f"{RES}/font-color-probe.json","w") as f: json.dump(probe, f, indent=2)

    # Mobile
    pgm = b.new_page(viewport={"width":390,"height":844}, device_scale_factor=1, is_mobile=True)
    pgm.goto(URL, wait_until="networkidle", timeout=90000)
    pgm.wait_for_timeout(2000)
    for y in range(0, 16):
        pgm.mouse.wheel(0, 700); pgm.wait_for_timeout(250)
    pgm.wait_for_timeout(1200)
    pgm.evaluate("window.scrollTo(0,0)"); pgm.wait_for_timeout(600)
    pgm.screenshot(path=f"{OUT}/full-mobile.png", full_page=True)

    b.close()
print("DONE")
print("images:", len(disc["images"]), "videos:", len(disc["videos"]), "svgCount:", disc["svgCount"])
print("fonts:", disc["fonts"][:6])
print("hasLenis:", disc["hasLenis"], "scripts:", disc["scripts"])
print("title:", disc["title"])
