# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec00-section.png`
- **Interaction model:** static (decorative Lottie replaced by static assets).

## Layout
- Section bg = page cream (#f7f5f3), centered content, padding-top ~40px, padding-bottom ~80px. Use `Container`, `text-center`, items centered (flex col, gap).
- **Floating badge** (above headline): a small rounded pill row, centered, margin-bottom ~16px. Use the captured asset `/images/hero-badge.png` rendered ~`h-[110px] w-auto` via next/image (width 711 height 366), OR rebuild as a white pill: `[👤 Assign to] | [Lyra Chen ▾]`. Prefer the PNG (transparent) sized about 230px wide; place centered. (It is decorative.)
- **H1** (the headline), centered, max-width ~960px:
  - Font ABC Social, **89.6px / line-height 89.6px (1.0), weight 400, letter-spacing -2.16px**, color #000, text-center, text-balance.
  - Content (inline): `Get teams and ` + `<img src="/images/agent-burst.png">` (inline, ~85px, vertical-align middle, width 258 h 258) + ` agents shipping product copy from ` + a `<span>` with **bg #ffdd33** (yellow highlight) wrapping `one source of truth.` The highlight span: inline, bg-ditto-yellow, padding ~0 12px, the yellow box hugs the text (box-decoration-break: clone), color stays #000.
  - Responsive: scale H1 down — `text-[40px] leading-[40px] md:text-[64px] md:leading-[64px] lg:text-[89.6px] lg:leading-[89.6px]`. Agent burst icon scales with text.
- **Subtitle** `<p>`: "Structured context behind every word — so that it's accurate, consistent, and on-brand by default." Font 26px/300 (use `text-xl md:text-2xl`), color #6a6559, max-width ~640px, centered, margin-top ~24px.
- **CTAs** (row, centered, gap ~24px, margin-top ~32px):
  - `<PillButton variant="primary">Get a Demo</PillButton>` (black, arrow)
  - `<PillButton variant="ghost">Get Started Free</PillButton>` (ghost muted, arrow)

## Assets
- `/images/hero-badge.png` (711×366, transparent) — floating badge.
- `/images/agent-burst.png` (258×258, transparent) — inline in headline. Optional: wrap in span with `animate-spin-slow` for subtle rotation (the sunburst). Keep subtle / optional.

## Text (verbatim)
- H1: Get teams and [icon] agents shipping product copy from **one source of truth.**
- Sub: "Structured context behind every word — so that it's accurate, consistent, and on-brand by default."
- Buttons: "Get a Demo", "Get Started Free"

## Responsive
- Mobile: H1 ~40px, sub smaller, CTAs stack or stay inline; badge smaller. Everything centered.
