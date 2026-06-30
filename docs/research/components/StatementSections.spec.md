# IntroSection + BottleneckSection Specification (two files)

Two near-identical centered-statement sections on cream bg. Build BOTH files.

## Shared style
- Section on cream (#f7f5f3), centered text, generous vertical padding.
- Wrap heading in `<Reveal>` for fade-up.
- `Container` with max-width ~900px, `text-center`, mx-auto.
- **H2:** ABC Social, **44.8px / line-height 49.28px, weight 700**, color #000, centered, text-balance. Responsive: `text-[30px] leading-[1.1] md:text-[44.8px] md:leading-[49.28px]`.
- Body paragraph (intro only): 26px/300 (`text-xl md:text-[26px] md:leading-[31.2px]`), color #6a6559, max-width ~700px, centered, margin-top ~16px.

## 1) `src/components/IntroSection.tsx`
- padding ~ py-16 md:py-20.
- H2 (verbatim): "Shipping great copy is hard. Shipping great copy on every team, in every tool, across every line of code, is even harder."
- Body p (verbatim): "Ditto makes it easy. Centralize your standards, strings, and decisions in one content system, and connect that system wherever your team builds."

## 2) `src/components/BottleneckSection.tsx`
- padding ~ pt-12 pb-16.
- H2 only (verbatim, note curly apostrophe): "Don't let copy be your bottleneck. Bring structure to your workflows, to write and ship faster."

## Responsive
- Mobile: heading ~30px, paddings reduce. Centered throughout.
