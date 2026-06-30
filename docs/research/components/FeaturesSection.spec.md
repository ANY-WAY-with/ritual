# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx` (define an internal `FeatureRow` + a `FEATURES` data array).
- **Screenshot:** `docs/design-references/dittowords/sec07-section.png`
- **Interaction model:** static; wrap each row in `<Reveal>` for fade-up.

## Layout (per row)
- Section on cream (#f7f5f3). Each row is a **2-column grid** centered, max-width ~1280px, padding ~py-12 px-10, gap ~80-100px, `items-center`.
  - `grid-cols-1 lg:grid-cols-2`.
- **Text column** (`.home-page-rebuild-usecase`): a flex row, gap 15px:
  - **Bullet:** a solid **34×34px square** (no radius), `bg-[color]` per row.
  - **Text block** (flex col, gap ~16px):
    - **Title h3:** ABC Social **48px / line-height 48px, 700, letter-spacing -0.96px**, color #000. Responsive `text-[32px] leading-[1.05] md:text-[48px] md:leading-[48px]`.
    - **Body p:** ABC Social **26px / 31.2px, 300, letter-spacing -0.37px**, color #6a6559. Responsive `text-lg md:text-[26px] md:leading-[31.2px]`. margin-top ~16px.
- **Image column** (`.image-ratio-rebuild`): the mockup image (1440×834 intrinsic) `w-full h-auto`, rounded ~16px. The image visually bleeds toward its side edge — let it overflow slightly / sit full-width in its column.
- **Alternation:** rows alternate which column is text vs image:
  - Row1 text-LEFT / image-RIGHT; Row2 image-LEFT / text-RIGHT; Row3 text-LEFT; Row4 image-LEFT; Row5 text-LEFT.
  - Implement with `imageSide` flag; on desktop use grid order (e.g. `lg:order-1/2`) to swap. On mobile ALWAYS image-above-text (text column second), single col.

## FEATURES data (verbatim text + assets, in order)
1. color `#b26dc2` (purple), image `/images/Frame-1400002967.png`, side image-right —
   - Title: "Capture how your product speaks"
   - Body: "Build a rich, structured model of your product language. Start with existing standards—terminology, voice, tone, reusable content patterns—then let Ditto infer the rest by scanning your codebase."
2. color `#64a727` (green), image `/images/Frame-1400002967-1.png`, side image-left —
   - Title: "Apply the standards everywhere you work"
   - Body: "Keep copy consistent and on-brand, no matter who—or what—is writing. Ditto brings guidance and enforcement into Figma, Claude Code, pull requests, prototypes—everywhere your team is building."
3. color `#146ef5` (blue), image `/images/Frame-1400002967-2.png`, side image-right —
   - Title: "Improve the system as you use it"
   - Body: "As your team accepts, rejects, and edits suggestions, Ditto identifies gaps in your standards and proposes updates—so guidance stays up-to-date as your product evolves, and suggestions get better every time."
4. color `#bbb809` (olive), image `/images/Frame-1400002967-3.png`, side image-left —
   - Title: "Trace and govern every decision"
   - Body: "Understand the full story behind the words in your product. Track what changed, why, who approved it, what's live, and how your standards perform over time—all in one connected system."
5. color `#f5c4cc` (pink), image `/images/Frame-1400002967-4.png`, side image-right —
   - Title: "One source of truth, every step of the way"
   - Body: "Localize and ship from the same source of truth. Generate translations as you build, then hand off approved copy to code—with the context and decision history behind every version intact."

## Responsive
- Desktop ≥1024: 2-col alternating. <1024: single column, image first then text, bullet+title inline.
