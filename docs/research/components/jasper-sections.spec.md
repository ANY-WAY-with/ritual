# Jasper sections (namespace: src/components/jasper/)

Bold, playful, colorful. Big display headings use serif `font-feature` (weight ~450, navy `jasper-navy #00063d`). Body/UI uses `font-abcrom`; mono labels use `font-abcrom-mono`. Palette: navy `jasper-navy #00063d`, ink `jasper-ink #262627`, red CTA `jasper-red #fa4028`, purples `jasper-purple #9146ff`/`jasper-purple-deep #6724c9`/`jasper-purple-soft #bd95ff`/`jasper-lilac #f5f0fc`, greens `jasper-green #207a00`/`jasper-green-bright #45ff00`/`jasper-green-deep #103a00`, backgrounds `jasper-cloud #f9f9f9`/`jasper-cloud2 #f2f2f3`/`jasper-efeff #efefff`, white. Ref crops in `docs/design-references/jasper/crop-*.png`. Assets in `/jasper/images/`.

## JasperHero.tsx (includes nav) — "use client" not needed
Ref: `crop-hero.png`. bg `jasper-cloud`.
- Nav (max-w ~1240 mx-auto py-5 flex justify-between items-center): left wordmark "jasper" (font-feature, italic-ish serif, `text-jasper-red text-2xl`). Center links (Platform, Solutions, Resources, Company, Pricing) font-abcrom 16px text-jasper-ink. Right: "Log In" + "Free Trial" (text) + "Get A Demo" pill (`bg-jasper-red text-white rounded-md px-5 py-2.5 font-medium`).
- "New!" banner pill (centered, mt-6): a light-green rounded pill: `New!` (bold green) + "Optimize your brand for AI search with our GEO Agent. Learn more →" (navy). small.
- h1 `font-feature text-jasper-navy text-center text-[52px] md:text-[80px] leading-[0.98]`: "Put AI agents to work for marketing"
- sub (font-abcrom text-jasper-navy/80 text-center ~18px max-w-[560px] mx-auto mt-5): "Orchestrate intelligent agents to run end-to-end marketing workflows—delivering speed, control, and measurable impact."
- buttons (mt-8 flex gap-3 justify-center): "Start Free Trial" (`border border-jasper-navy text-jasper-navy rounded-md px-6 py-3`) + "Get A Demo" (`bg-jasper-red text-white rounded-md px-6 py-3`).
- ILLUSTRATION band (mt-12, relative h-[280px] md:h-[420px], overflow-hidden): recreate abstract shapes in CSS (do NOT use a screenshot):
  - green squares (`bg-jasper-green-bright`) tiled left with a blue grid overlay (repeating-linear-gradient blue lines),
  - a pink triangle (clip-path) mid-left,
  - a vertical stack of 4 green circles (`bg-jasper-green`) on the right inside a bright-green column,
  - a blue diagonal stripe. Keep it playful/geometric. Centered composition.

## JasperPlatformCards.tsx
Ref: `crop-platformcards.png`. White bg, py-20, centered.
- Eyebrow (font-abcrom-mono uppercase text-xs tracking-wide text-jasper-red, centered): "The Jasper Platform"
- h2 `font-feature text-jasper-navy text-center text-[36px] md:text-[54px] leading-[1.05] max-w-[820px] mx-auto`: "The execution platform for intelligent marketing"
- sub (font-abcrom text-jasper-navy/70 text-center max-w-[640px] mx-auto mt-4): "Jasper is the agentic execution layer built for modern marketing teams. With 100+ specialized AI agents and connected context, execute more workflows and drive results across your channel and content."
- 3 cards (grid grid-cols-1 md:grid-cols-3 gap-5 mt-12, max-w-[1120px] mx-auto), each rounded-2xl p-8 min-h-[320px] flex flex-col justify-between, with a subtle grid pattern bg (use inline `backgroundImage` repeating-linear-gradient in the card's tint):
  1. "Agents" — tint green (`bg-[#eafbe4]`), grid lines green. body: "Purpose-built AI agents that execute real marketing work from idea to launch."
  2. "Content Pipelines" — tint pink/red (`bg-[#ffe9e4]`), grid red. body: "Repeatable workflows that move work from idea to launch."
  3. "Jasper IQ" — tint blue (`bg-[#e6ecff]`), grid blue. body: "Maintain quality and authenticity with a rich context hub."
  Card title: font-feature text-jasper-navy text-2xl. body font-abcrom text-jasper-navy/70 text-sm.

## JasperStatsBento.tsx
Ref: `crop-stats.png`. bg white, py-20.
- h2 `font-feature text-jasper-navy text-center text-[40px] md:text-[64px] leading-[1.02]`: "Proven strategies, real results"
- "Explore Customer Stories" pill (centered mt-5): `border border-jasper-navy/20 rounded-md px-5 py-2.5 text-jasper-navy text-sm`.
- Bento grid (mt-12 max-w-[1120px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]): mix of colored stat cards (rounded-2xl p-6 flex flex-col justify-between). Suggested cells (vary bg colors from palette + tints):
  - big number "10,000+" (font-feature text-3xl navy) label "hours saved annually" — bg jasper-lilac (span 1)
  - "Compliant, high-quality, and localized marketing content at scale" quote card — bg jasper-cloud2 (span 2)
  - "60%" + "of SEO now discoverable & actionable" — bg `#eafbe4`
  - "7,500" + "marketing content pieces produced" — bg `#e6ecff`
  - "3x" + "faster campaign production" — bg jasper-purple-soft/40
  - "Time-to-market" + "cut dramatically across teams" — bg jasper-cloud
  Numbers font-feature navy; labels font-abcrom text-sm navy/70. Make it visually varied and colorful like the ref.

## JasperCta.tsx
Ref: `crop-cta.png`. bg `jasper-cloud`, py-20. 2-col (lg): left text, right photo.
- Left: h2 `font-feature text-jasper-navy text-[40px] md:text-[64px] leading-[1.02]`: "Put AI agents to work, on your terms". sub (font-abcrom text-jasper-navy/70 mt-4 max-w-[440px]): "Explore how Jasper agents automate real work across every team, strategy, and function." "Get A Demo" pill (mt-6, `bg-jasper-red text-white rounded-md px-6 py-3`). Add a couple decorative green circles (`bg-jasper-green`) near it.
- Right: `next/image` `/jasper/images/Closing_photo_1.avif` (rounded-2xl, w-full h-auto), width 941 height 900.

## JasperFooter.tsx
Ref: `crop-footer.png`. Dark bg (`bg-jasper-navy`), text white, py-16. Columns (grid grid-cols-2 md:grid-cols-4 gap-8 font-abcrom):
- Platform: Agents, Content Pipelines, Jasper IQ, Integrations, Security
- Solutions: By Team, By Use Case, By Industry, Enterprise
- Resources: Blog, Foundations, Customer Stories, Help Center, Community
- Company: About, Careers, Contact, Trust Center
Headings: font-abcrom-mono uppercase text-xs tracking-wide text-white/50 mb-3. Links text-sm text-white/85 hover:text-white.
Bottom: giant "Jasper" wordmark (font-feature text-white, `text-[12vw] leading-none`) across full width, mt-12. Bottom bar: "© 2026 Jasper AI, Inc." (text-white/60 text-sm) + small social/legal links row.
