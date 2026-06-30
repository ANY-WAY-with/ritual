# ImpactSection (stats + testimonials, orange) Specification

## Overview
- **Target file:** `src/components/ImpactSection.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec08-section.png`
- **Interaction model:** static (wrap groups in `<Reveal>`).

## Layout
- Section bg **orange #ff6137**, color #000 (black text on orange), padding ~py-20. `Container` max ~1200px.
- **Top block** = a 4-column row at desktop: first cell is the intro, next 3 are stats, separated by thin vertical dividers (`border-l border-black/20`).
  - Layout: `grid grid-cols-1 md:grid-cols-4 gap-0`. Each stat cell has left padding + left border divider (not the first).
  - **Intro cell (col 1):**
    - Small label: "Small words, massive impact" — ~14px/700, color #000.
    - Heading: "Teams that build on Ditto ship more, fix less." — ABC Social ~24px/700, lh 28.8, ls -0.32px, color #000, mt ~8px.
    - `<PillButton variant="primary" size="sm">See Case Studies</PillButton>` (black pill, mt ~16px).
  - **Stat cells (cols 2-4):** each:
    - Big number: ABC Social **Extended** (`font-extended`), **86.4px / 76px, weight 700, letter-spacing -2px**, color #000. Responsive `text-[56px] md:text-[86.4px] leading-none`.
    - Label below (mt ~12px): ~24px/700 (`text-xl md:text-2xl font-bold`), color #000.
    - Stats: ["70%", "faster resolution of copy fixes"], ["40hrs", "of dev time saved per release"], ["20%", "faster product release cycles"].
- **Testimonials block** (mt ~80px): 2 columns at desktop (`grid grid-cols-1 md:grid-cols-2 gap-12`):
  - Each: `<QuoteIcon className="h-8 w-auto text-black" />` (mb ~24px), then quote `<p>` ~24px/400 (`text-xl md:text-2xl`), color #000, then author (mt ~24px) ~20px/700 bold.
  - Testimonial 1: quote "Numbers aside, the biggest thing is that I have is just way more confidence in the content. With Ditto, we can see problems way faster. It does save me a ton of time, but I never cared about that as much as value for our members." — author "Designer, Big Sky Health"
  - Testimonial 2: quote "With our data in Looker and content in Ditto, we have complete visibility into user states and are able to really rapidly tweak and deploy content…shipping content updates almost daily." — author "Engineer, Big Sky Health"

## Assets
- QuoteIcon from `@/components/icons`.

## Responsive
- Desktop ≥768: 4-col stats row + 2-col testimonials. Mobile: stack stats vertically (remove vertical dividers, maybe top borders), testimonials stack.
