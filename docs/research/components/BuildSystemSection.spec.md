# BuildSystemSection Specification

## Overview
- **Target file:** `src/components/BuildSystemSection.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec03-product-visual.png`
- **Interaction model:** autoplay looping **alpha video** (the isometric machine + orange path animation). Static labels top/bottom.

## Layout
- Section on cream (#f7f5f3), `class="product-visual"` semantics: padding-top ~80px, padding-bottom ~100px. `relative`, `overflow-hidden`.
- **Dotted halftone background:** add `bg-dot-grid` (utility already in globals) on an absolutely-positioned layer behind content, OR on the section. Subtle dots (radial-gradient). Centered, covers the section.
- Centered column (`Container`, text-center):
  - **Top label:** "Build your system" — ABC Social, ~24px/700, color #000, letter-spacing -0.32px, margin-bottom (the video sits below).
  - **Video:** `<video autoPlay loop muted playsInline preload="auto" aria-hidden>` with `<source src="/videos/webDitto-Homepage-Platform-Loop.webm" type="video/webm" />`. The video has a transparent/alpha background (shows isometric machine + orange winding path connecting cube nodes). Size: centered, ~max-w-[640px], `h-auto`, mx-auto. Poster fallback `/design-references/dittowords/isometric-illustration.png` is NOT in public — instead omit poster or copy the frame; do not set a poster that 404s.
  - **Bottom label:** "Connect it to every surface" — same style as top label, ~24px/700, color #000, margin-top.

## Assets
- `/videos/webDitto-Homepage-Platform-Loop.webm` — the looping alpha animation (already downloaded).

## Text (verbatim)
- "Build your system"
- "Connect it to every surface"

## Responsive
- Mobile: video shrinks (max-w-[320px]), labels ~20px. Dot grid persists. Centered.
