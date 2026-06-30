# Ditto Homepage — Behavior Bible

## Global
- **Scroll:** native (no Lenis/Locomotive). `html` has webflow classes `w-mod-js w-mod-ix`.
- **Libraries:** GSAP 3.11.3 + ScrollTrigger (CDN). Used for scroll-triggered reveals and the scrubbed video / illustration. Lottie for hero badge + agent burst animations.
- **Fonts:** all self-hosted ABC Social .otf (FOUT possible).

## Header (navbar)
- `position: sticky; top: 0; z-index: 999;` height 67px.
- bg `rgba(247,245,243,0)` (transparent) at BOTH scroll 0 and scroll 700 — **does NOT change on scroll** (no shadow, no bg fill, no shrink). Simple sticky transparent bar.
- Nav links + dropdown carets (Solutions▾, Resources▾). Dropdowns open on hover/click (mega-menu) — out of primary scope; render caret + hover color change only.

## Marquees (two)
1. **Logo cloud** — `.marquee-content.scroll`, `animation: scroll 60s linear infinite`. Two duplicate track copies for seamless loop. Translates left.
2. **Integrates Everywhere** — `.integrates-everywhere-marquee.scroll`, same `scroll 60s linear infinite`, 3 track copies. Large word-image PNGs + app icons scrolling horizontally.
- Keyframes `@keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-100%)} }` (standard webflow marquee).

## Build-your-system (product-visual)
- Center media is a **transparent alpha video**: `<video autoplay loop muted playsinline>` with `data-webm` (webDitto-Homepage-Platform-Loop.webm) + `data-hevc` (HEVC .mov for Safari). Use webm `<source>` in clone.
- Background = dotted halftone pattern (image `root.webp` or CSS dots).
- Likely a scroll-scrub / reveal via ScrollTrigger; acceptable to autoplay-loop the video.

## Scroll reveals
- Sections/feature rows fade-up into view as they enter viewport (GSAP). Implement with a lightweight IntersectionObserver `fade-up` (translateY 20-30px → 0, opacity 0 → 1, ~0.6s ease). Not pixel-critical; apply tastefully to section headings, feature rows, bento cards, stats.

## Hover states
- **Buttons (pills):** slight darken / scale on hover (subtle). Black pill stays black; add `transition: transform .2s, background .2s`, hover scale ~1.02 or opacity. Arrow icon nudges right on hover (common webflow pattern; translateX ~3px).
- **Nav links:** color #6a6559 → #000 on hover.
- **Footer links:** off-white, hover → underline or brightness.
- **Logo marquee:** typically grayscale/opacity; here logos are full color already.

## Hero decorative
- Floating "Assign to · Lyra Chen ▾" badge (Lottie) above headline — recreate as static pill (collapsed state) with small hand-drawn squiggle accent above-right.
- Inline agent-burst icon (Lottie, orange rounded-square sunburst) between "and" and "agents" — use captured PNG `/images/agent-burst.png`, sized ~85px, vertical-align middle. Optional slow CSS rotation on the sunburst.

## Responsive
- **Tablet 768:** multi-col → fewer cols; bento stacks toward 1-2 col; feature rows may keep side-by-side or begin stacking.
- **Mobile 390:** everything single column. Feature rows = image above text. Nav collapses to hamburger (mobile menu). Logo marquee continues. Hero H1 scales down substantially (~40-48px). Stats stack vertically.
- Breakpoints follow Webflow defaults: 991px (tablet), 767px (mobile landscape), 479px (mobile portrait).
