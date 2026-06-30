# Ditto Homepage — Page Topology (desktop 1440)

Scroll container = native body (bg `#f7f5f3`). No smooth-scroll library (no Lenis). GSAP + ScrollTrigger present for reveal/scrub animations.

| # | Section | class / bg | Height | Interaction | Component |
|---|---|---|---|---|---|
| 0 | **Navbar** | `.navbar` sticky, z-999, transparent | 67px | static sticky (NO scroll change) | `SiteHeader` |
| 1 | **Hero** | `.section` | ~701 | Lottie badge + burst (decorative), static | `HeroSection` |
| 2 | **Logo cloud** | `.section` | ~147 | CSS marquee (`.marquee-content.scroll`, 60s linear) | `LogoMarquee` |
| 3 | **Intro** ("Shipping great copy is hard") | `.section` | ~260 | static (may fade-in on scroll) | `IntroSection` |
| 4 | **Build your system** | `.product-visual` | ~922 | **alpha VIDEO** (transparent webm/HEVC) on dotted bg | `BuildSystemSection` |
| 5 | **Bottleneck** ("Don't let copy be your bottleneck") | `.section` | ~359 | static | `BottleneckSection` |
| 6 | **Integrates Everywhere marquee** | `.section` | ~80 | CSS marquee (`.integrates-everywhere-marquee.scroll`, 60s) | `IntegratesMarquee` |
| 7 | **Dark platform / bento** ("The system that works…") | `.section.bg-black` | ~1186 | static bento grid | `PlatformSection` (+ card subcomponents) |
| 8 | **Feature rows** (5 alternating) | `.section` | ~2433 | static (likely scroll fade-in) | `FeaturesSection` w/ `FeatureRow` |
| 9 | **Stats + Testimonials** | `.section.bg-red` (#ff6137) | ~661 | static | `ImpactSection` |
| 10 | **Final CTA** ("Copy is the last layer…") | `.section.bg-black` | ~449 | static | `FinalCtaSection` |
| 11 | **Footer** | `footer.footer` (#000) | ~981 | static (link hovers) | `SiteFooter` |

## Layout
- Most sections: centered content, max-width ~1200px, generous vertical padding.
- Feature mockup cards bleed to the viewport edge (image overflows on its side).
- Navbar overlays content (sticky, transparent) — content starts at top:62.
- z-index: navbar 999; a fixed `#warmly-widget` (z huge) — IGNORE (3rd-party).

## Section content map
- **Hero:** H1 "Get teams and [agent-burst] agents shipping product copy from [yellow]one source of truth.[/yellow]" + sub "Structured context behind every word — so that it's accurate, consistent, and on-brand by default." + [Get a Demo] (black) [Get Started Free →] (ghost). Floating "Assign to · Lyra Chen ▾" badge above headline.
- **Logo cloud:** marquee of: staffbase, root, microsoft, ebay, stash, bigcommerce, ownup, uber-carshare, mcafee, rakuten, immutable, step, zero, happy-money, curology + center pill "8,000+ teams trust Ditto".
- **Intro:** H2 "Shipping great copy is hard. Shipping great copy on every team, in every tool, across every line of code, is even harder." + p "Ditto makes it easy. Centralize your standards, strings, and decisions in one content system, and connect that system wherever your team builds."
- **Build your system:** label "Build your system" (top), alpha video center, label "Connect it to every surface" (bottom). Dotted halftone bg.
- **Bottleneck:** H2 "Don't let copy be your bottleneck. Bring structure to your workflows, to write and ship faster."
- **Integrates marquee:** alternating word-PNGs ("Integrates", "Everywhere") + app-icon PNGs (Cursor, Claude, Figma, ChatGPT, Github, Storybook).
- **Platform/bento:** H2 "The system that works, everywhere you work" + [See the full Ditto platform] (yellow pill). Bento grid: cream "Built into your design tooling" + code mockup + olive OpenAI-icon square; orange "Claude Code" terminal; github PR card; purple Figma card; green "Integrated with your AI tooling". Uses Frame-1400002967(*).png images.
- **Features (5 rows, alternating text/image):**
  1. purple — "Capture how your product speaks" / "Build a rich, structured model of your product language. Start with existing standards—terminology, voice, tone, reusable content patterns—then let Ditto infer the rest by scanning your codebase." — img Product-Grid-1
  2. green — "Apply the standards everywhere you work" / "Keep copy consistent and on-brand, no matter who—or what—is writing. Ditto brings guidance and enforcement into Figma, Claude Code, pull requests, prototypes—everywhere your team is building." — Product-Grid-2
  3. blue — "Improve the system as you use it" / "As your team accepts, rejects, and edits suggestions, Ditto identifies gaps in your standards and proposes updates—so guidance stays up-to-date as your product evolves, and suggestions get better every time." — Product-Grid-3
  4. olive — "Trace and govern every decision" / "Understand the full story behind the words in your product. Track what changed, why, who approved it, what's live, and how your standards perform over time—all in one connected system." — Product-Grid-4
  5. pink — "One source of truth, every step of the way" / "Localize and ship from the same source of truth. Generate translations as you build, then hand off approved copy to code—with the context and decision history behind every version intact." — Product-Grid-5
- **Impact (orange):** label "Small words, massive impact" + H "Teams that build on Ditto ship more, fix less." + [See Case Studies]. Stats (3, divided): "70% faster resolution of copy fixes", "40hrs of dev time saved per release", "20% faster product release cycles". Two testimonials w/ quote-icon: (1) "Numbers aside, the biggest thing is that I have is just way more confidence in the content. With Ditto, we can see problems way faster. It does save me a ton of time, but I never cared about that as much as value for our members." — Designer, Big Sky Health. (2) "With our data in Looker and content in Ditto, we have complete visibility into user states and are able to really rapidly tweak and deploy content…shipping content updates almost daily." — Engineer, Big Sky Health.
- **Final CTA (black):** H "Copy is the last layer of your product without a system." + p "Design, development, and now copy. Don't get lost in the overload of generative AI – build a system to ship copy you can trust." + [Get a Demo] (blue) [Get Started →] (ghost light).
- **Footer (black):** 4 cols (Solutions / Product / Resources / Company+Legal) + second Solutions group; newsletter "Never miss an update: Sign up for updates, exclusive insights, and product releases." + email input + Submit; giant DITTO. wordmark; "Made with ♥ in San Francisco" / "© 2026 Ditto Tech Inc."
