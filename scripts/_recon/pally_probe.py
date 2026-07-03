"""Probe pally.com — screenshot + detect the moving-line animation tech."""
import json
from playwright.sync_api import sync_playwright

URL = "https://www.pally.com/"
OUT = "docs/design-references/pally"
import os; os.makedirs(OUT, exist_ok=True)

PROBE = r"""
() => {
  const svgs = [...document.querySelectorAll('svg')];
  const paths = [...document.querySelectorAll('svg path')];
  // animated svg paths: has <animate>/<animateMotion>, CSS animation, or stroke-dasharray
  const animatedPaths = paths.filter(p => {
    const cs = getComputedStyle(p);
    const hasSmil = p.querySelector('animate, animateMotion, animateTransform');
    const dash = cs.strokeDasharray && cs.strokeDasharray !== 'none';
    const anim = cs.animationName && cs.animationName !== 'none';
    return hasSmil || anim || dash;
  });
  const withMotion = [...document.querySelectorAll('animateMotion, animate, animateTransform')];
  return {
    title: document.title,
    counts: {
      svg: svgs.length,
      path: paths.length,
      animatedPaths: animatedPaths.length,
      smil: withMotion.length,
      canvas: document.querySelectorAll('canvas').length,
      video: document.querySelectorAll('video').length,
    },
    // sample animated path details
    animatedSample: animatedPaths.slice(0, 8).map(p => {
      const cs = getComputedStyle(p);
      return {
        d: (p.getAttribute('d') || '').slice(0, 120),
        stroke: cs.stroke,
        strokeWidth: cs.strokeWidth,
        dasharray: cs.strokeDasharray,
        dashoffset: cs.strokeDashoffset,
        animationName: cs.animationName,
        animationDuration: cs.animationDuration,
        parentClass: (p.closest('svg')?.getAttribute('class') || '').slice(0, 60),
        smil: p.querySelector('animate, animateMotion') ? p.querySelector('animate, animateMotion').outerHTML.slice(0,160) : null,
      };
    }),
    // any big/background svgs (the moving-line composition)
    bigSvgs: svgs.filter(s => { const r = s.getBoundingClientRect(); return r.width > 300 && r.height > 200; })
      .slice(0, 6).map(s => {
        const r = s.getBoundingClientRect();
        return { cls: (s.getAttribute('class')||'').slice(0,60), w: Math.round(r.width), h: Math.round(r.height),
                 viewBox: s.getAttribute('viewBox'), pathCount: s.querySelectorAll('path').length,
                 hasSmil: !!s.querySelector('animate, animateMotion') };
      }),
    // libraries / stack
    scripts: [...document.querySelectorAll('script[src]')].map(s => s.src)
      .filter(s => /gsap|lottie|three|framer|motion|anime|rive|webflow|matter|paper|two\.js|d3|svg/i.test(s)).slice(0, 15),
    stack: {
      next: !!document.querySelector('#__next, script#__NEXT_DATA__'),
      webflow: document.documentElement.className.includes('w-mod') || !!document.querySelector('[class*="w-"]'),
      framerMotion: !!window.__framer_events || document.documentElement.getAttribute('data-framer') !== null || !!document.querySelector('[data-framer-name]'),
    },
    fonts: [...new Set([...document.querySelectorAll('*')].slice(0,200).map(el=>getComputedStyle(el).fontFamily))].slice(0,6),
    bodyBg: getComputedStyle(document.body).backgroundColor,
  };
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=90000)
    pg.wait_for_timeout(3000)
    pg.screenshot(path=f"{OUT}/hero.png")  # viewport (where lines usually are)
    for y in range(0,10): pg.mouse.wheel(0,900); pg.wait_for_timeout(250)
    pg.wait_for_timeout(1000); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(1200)
    data = pg.evaluate(PROBE)
    json.dump(data, open(f"{OUT}/probe.json","w"), indent=2)
    b.close()

print("TITLE:", data["title"])
print("COUNTS:", json.dumps(data["counts"]))
print("STACK:", json.dumps(data["stack"]))
print("LIB SCRIPTS:")
for s in data["scripts"]: print("  ", s[:110])
print("FONTS:", data["fonts"])
print("BIG SVGS:")
for s in data["bigSvgs"]: print("  ", s)
print("ANIMATED PATH SAMPLES:")
for a in data["animatedSample"]: print("  ", json.dumps(a))
