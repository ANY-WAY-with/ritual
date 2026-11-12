# Marked hero study — 2026-11-09

Source: https://marked.dev/. Scope: hero layout and gentle pointer-driven depth, requested for Ritual. Not a full-page clone.

## Observed evidence

- Black viewport-height scene with fixed center copy and peripheral cards.
- Three depth layers: far, mid, near. Near cards blur by 12px; far cards use 1.5px blur and brightness 0.42. Middle cards remain clear.
- Pointer normalized to -1…1. Opposing translations: far 4px, mid 11px, near 26px. Source spring stiffness 60, damping 20, read from its publicly served configuration.
- Separate X/Y drift: ±12px/±10px. X durations start at 9s, increasing 1.3s; Y starts at 11s, increasing 1.1s. Ease-in-out, alternate, infinite.
- Pausing visibly freezes drift; source CSS confirms animation-play-state paused. Reduced-motion disables drift and the source's pointer hook.
- Desktop sample: pointer at (140,500), viewport1440×900. Settled transforms: far(+3.222,-0.444), mid(+8.861,-1.222), near(+20.944,-2.889).
- Mobile390×844: four cards, no desktop navigation links; two middle cards, a blurred near card top-right, a small far card bottom-left. Center title remains 40px.
- Source cycles card content and a typed search phrase. It uses videos/canvas, not still screenshots only.

## Files and adaptation

- Reference route: `/reference/marked-hero`, source-specific wrapper `src/components/sites/marked/` and media `public/sites/marked/`.
- Shared motion engine: `src/components/hero/floating-stage.tsx` and scoped CSS. Editable React/CSS; no embedded production bundles.
- Ritual route: `/`, uses original generated creative photographs in `public/brand/ritual/`, user selected creative references for now.
- The source-specific study isolates one composition with three source videos. It does not reproduce topic rotation, full source library, avatars, authentication, navigation, or sponsor UI.
- `?motion=reduce` on the reference route exercises a forced-reduced-motion fixture. Real OS preference also disables motion. Do not mistake the fixture for an OS-level emulation test.

## Source assets

| Local | Observed source URL |
| --- | --- |
| tags.mp4 | https://marked.dev/seed/media/preview/x-gabriell_lab-2117611847805272267.mp4 |
| preview.mp4 | https://marked.dev/seed/media/preview/x-maximepodgorski-2117330400410493227.mp4 |
| controls.mp4 | https://marked.dev/seed/media/preview/x-arthurhilhorst-2113628897548112196.mp4 |

Source assets remain study-only and are not used on the Ritual home page. Their credited makers are Gabriel, Max Podgorski, and Arthur Hilhorst on Marked. Screenshots are under `docs/design-references/marked/`.

## Rendered verification

- The local reference study was rendered before adapting the home page.
- Ritual desktop1440×900 and mobile390×844 render with all eight image elements decoded and no horizontal overflow.
- At desktop pointer(140,500), the settled offsets were far(+3.214,-0.444), mid(+8.838,-1.222), near(+20.891,-2.889). The slight X difference from source corresponds to the usable width excluding the 15px scrollbar.
- The central title's bounding rectangle was unchanged by pointer movement.
- Pause froze CSS X/Y translations across two observations and ignored a subsequent pointer move. Resume restarted motion.
- Screenshots: `docs/design-references/ritual/desktop-active.png`, `desktop-paused.png`, `mobile-paused.png`.
- Reverse scroll to the footer and back leaves motion running, with no scroll-linked transforms or pinned state.
- Wide desktop1920×1080 keeps the central text clear and caps card widths; no horizontal overflow.
- Forced reduced-motion fixture: every depth transform is `none`, CSS animation names are `none`, and all source videos are paused. Actual OS-level media emulation was unavailable in this browser tool; the `prefers-reduced-motion` CSS and subscription are included and were reviewed.
- Browser console error log was empty.

## Remaining differences

- Ritual uses three original creative images repeated at different depths, rather than Marked's library of interface videos and credited avatar chips.
- Ritual retains its own copy and working email/company links; it has no search box, authentication buttons, sponsorship UI, or timed topic/content replacement.
- The isolated source study uses one fixed layout with eight elements, not the source's complete rotating library/entrance transitions. It is a motion/layout study, not a completed full-site clone.
- The user requested a soft pointer response: no tilt, zoom, cursor follower, or dramatic scroll animation was added.

## Preset-cycle correction — 2026-11-09

The requested bar is an animated example, not an editable chat. Reinspection of the live hero and its public declarations established:

- Five topics, in order: scroll animations → hover states → side panels → command menus → drag interactions. Target topic advances every 5 seconds.
- Erase 16 ms/character, blank pause 250 ms, type 40 ms/character. Cards switch only after the new phrase is fully typed.
- Three alternating layout presets, independent of the five-topic loop. Desktop has 8–9 cards, mobile 4–5. Layouts are scaled from 1440×900 and 375×812 spaces with a central text exclusion zone.
- Cards leave radially outward from their position (260 px × depth factor; 320 ms); arrivals start farther out (340 px × depth factor; 760 ms), with 8 px blur, 1.04 scale and distance-based stagger. Near/mid/far travel factors are 1.7/1/.55.
- Pointer spring remains stiffness 60 / damping 20, with 26/11/4 px depth response; nested 9–14 s horizontal and 11–15 s vertical drifts remain subtle.
- Pause holds text, scene clock, card travel, drift and media. Hidden/offscreen hero holds its clock; reverse scrolling resumes it. Reduced motion keeps a static preset.

Implementation: shared scene engine in `src/components/hero/`, isolated source study at `/reference/marked-hero`, Ritual adaptation at `/`. Ritual retains its agreed headline and uses five creative-search presets and original creative images. The earlier functional chat prototype has been removed.

Remaining differences: Ritual uses six original still images and its own creative phrases rather than Marked's live tagged video library. The source study uses a finite extracted media sample rather than its full catalog. Ritual preserves its own header, copy and spacing; lower-page illustrations remain simplified as documented in `full-landing.md`.
