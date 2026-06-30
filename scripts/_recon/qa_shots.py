"""Screenshot the local clone for QA comparison."""
from playwright.sync_api import sync_playwright

URL = "http://localhost:3100/"
OUT = "docs/design-references/dittowords/clone"
import os; os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    b = p.chromium.launch()
    # desktop
    pg = b.new_page(viewport={"width":1440,"height":900})
    pg.goto(URL, wait_until="networkidle", timeout=60000)
    pg.wait_for_timeout(1500)
    for y in range(0,12): pg.mouse.wheel(0,900); pg.wait_for_timeout(180)
    pg.wait_for_timeout(800); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(600)
    pg.screenshot(path=f"{OUT}/clone-desktop.png", full_page=True)
    # viewport-height section shots at scroll offsets
    pg.close()
    # mobile
    pgm = b.new_page(viewport={"width":390,"height":844}, is_mobile=True)
    pgm.goto(URL, wait_until="networkidle", timeout=60000)
    pgm.wait_for_timeout(1200)
    for y in range(0,16): pgm.mouse.wheel(0,700); pgm.wait_for_timeout(150)
    pgm.wait_for_timeout(600); pgm.evaluate("window.scrollTo(0,0)"); pgm.wait_for_timeout(500)
    pgm.screenshot(path=f"{OUT}/clone-mobile.png", full_page=True)
    b.close()
print("DONE")
