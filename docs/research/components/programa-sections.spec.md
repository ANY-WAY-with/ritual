# Programa sections (namespace: src/components/programa/)

Editorial/calm aesthetic. Headings use serif `font-rhymes` (weight 300–400, tight tracking); body uses `font-inter`. Palette: ink `programa-ink #1a1a1a`, muted `programa-muted #7b736c`, faint `programa-faint`, bg white + cream `programa-cream #f8f6f3`, border `programa-border #eeece6`, CTA pale-yellow `programa-yellow #fdffa2`. Reference crops in `docs/design-references/programa/crop-*.png`. Assets in `/programa/images/`.

## ProgramaHero.tsx (includes nav)
Ref: `crop-hero.png`. White bg, centered.
- Nav row (max-w ~1200, mx-auto, py-5, flex justify-between items-center): left wordmark "Programa" (font-inter, ~20px, medium, ink) with a small mark (3 dots + arrow — approximate with a simple inline svg or skip). Center links (Features, Solutions, Pricing, Learn) font-inter 16px ink. Right: "Log in" (text) + "Start free" pill (`bg-programa-yellow text-programa-ink rounded-full px-4 py-2 text-sm font-medium`).
- Small "All-new" pill (subtle, centered, muted) — optional.
- h1 `font-rhymes` `text-[44px] md:text-[60px] leading-[1.05] tracking-[-1.5px] text-programa-ink` centered, weight 300: "Beautiful software for interior designers"
- sub (font-inter, text-programa-muted, ~18px, centered, max-w-[520px] mx-auto mt-4): "Streamline your workflow and unlock your studio's potential. Start your 7 day free trial."
- buttons (mt-8, flex gap-3 justify-center): "Get started" (`bg-programa-ink text-white rounded-full px-6 py-3 text-sm`) + "Watch our demo" (`bg-white border border-programa-border rounded-full px-6 py-3 text-sm text-programa-ink`).
- Hero image (mt-12, mx-auto, max-w-[960px], rounded-2xl, shadow-xl, overflow-hidden): `next/image` `/programa/images/da02fbff20d401cba9288395a6cb8befb4030f07-2955x2024.png` (Programa projects dashboard), width 2955 height 2024, `w-full h-auto`.

## ProgramaFeatures.tsx (3 alternating rows)
Ref: full-desktop. Section white/cream, py-20. Centered serif h2 "More time to design" (font-rhymes ~44px, ink) at top. Then a `ROWS` array → 3 rows, alternating text/image (2-col grid lg, gap-16, items-center, max-w-[1100px] mx-auto, py-12). Text col: h3 font-rhymes ~32px ink; body font-inter text-programa-muted ~16px mt-3; a small link/button mt-4 (text with arrow OR a subtle pill). Image col: rounded-2xl image.
Rows (title, body, cta, image file):
1. "Specification, streamlined" / "Specify in real-time meaning no double handling data or version control." / "Get started" / `/programa/images/f0bb1633e6826388616ba8a088b476619df21455-4000x2400.webp`
2. "Management, minimized" / "Manage projects effortlessly with our intuitive and agile platform." / "Get started" / `/programa/images/5ec8e56c0ec3f52c248b118fdbebb68383b275d9-1392x1104.png`
3. "Presentations, perfected" / "Purpose-built presentation tools provide a single-source-of-truth from concept to completion." / "Explore Presentations" / `/programa/images/5ec8e56c0ec3f52c248b118fdbebb68383b275d9-1392x1104.png`
(Rows 1&3 text-left/image-right; row 2 image-left/text-right. Mobile: image above text.)

## ProgramaQuoteBanner.tsx
Ref: `crop-quote.png`. A centered dark rounded card (`bg-programa-ink2 #1a1916` or black, rounded-3xl, max-w-[1100px] mx-auto, py-20 px-8, my-16). Big centered serif quote (font-rhymes, white, `text-[32px] md:text-[44px]` leading-tight): "Honestly, I feel like we're scalable now." Small muted attribution line below (font-inter, text-white/60, ~14px): e.g. "— Studio using Programa". (Keep minimal.)

## ProgramaCta.tsx
Ref: `crop-cta.png`. Cream/white section, centered, py-24. Huge serif "Try Programa free" (font-rhymes `text-[56px] md:text-[80px]` leading-[1] tracking-[-2px] text-programa-ink). Below (mt-8): "Get started" pill (`bg-programa-yellow text-programa-ink rounded-full px-7 py-3.5 font-medium`). Optionally a muted subline.

## ProgramaFooter.tsx
Ref: `crop-footer.png`. Light bg (white or cream), border-t border-programa-border, py-16. Columns (grid grid-cols-2 md:grid-cols-4 gap-8, font-inter): 
- PRODUCT: All features, Specification tools, Management tools, Presentation tools, Client dashboard, Integrations, Pricing
- ABOUT: About us, Careers, Blog, Contact
- RESOURCES: Help center, Tutorials, Community, What's new
- LEGAL: Terms of Service, Privacy Policy
Column headings: font-inter uppercase text-xs tracking-wide text-programa-faint mb-3. Links: text-sm text-programa-ink hover:text-programa-muted. Bottom: "Programa" wordmark (left) + "© 2026 Programa" (right, muted), mt-10 pt-6 border-t.
