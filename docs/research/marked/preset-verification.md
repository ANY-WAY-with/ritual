# Timed hero verification — 2026-11-09

Source: https://marked.dev/. Local: `/reference/marked-hero` (source study), `/` (Ritual adaptation). Layout and depth engine: `src/components/hero/floating-stage.tsx`, `scene-layouts.ts`, `floating-stage.module.css`. Ritual phrases/media: `src/components/ritual/ritual-hero.tsx`.

Observed desktop source at 1280×720: `drag interactions` has clear cards on the left center and upper right; `side panels` changes to two clear cards above the headline and another at the lower right. Both change content as well as coordinates. Mobile source at 390×844 shows only 4–5 cards, arranged above and below the central text. Source public declarations confirm the three layout maps, typing timings, radial vectors and depth factors recorded in `hero.md`.

Local rendered checks:

- Desktop 1440×900: initial `cinematic landscapes` uses desert/coast/alpine images; later `colour in motion` uses night/sculpture/fabric. Scene counter advances independently of the five-phrase index, so the three layout maps alternate across repeated phrase loops.
- Mobile 390×844: four cards, no horizontal overflow, loaded images, readable central bar and working navigation. Images stay outside the central content area.
- Pause freezes the phrase, scene index, CSS card travel and drift. Resume continues from the held elapsed time.
- Reduced-motion fixture `/reference/marked-hero?motion=reduce`: static first phrase, disabled motion control, no card travel animation or pointer displacement.
- Existing lower landing sections remain present. Hero and header CTAs navigate to real page sections; the functional chat dialog and sample reply logic are removed.
- `npm run check` passes (ESLint, TypeScript, production build).

Remaining differences are deliberate adaptation choices: Ritual's own headline/header, six original creative stills and five creative phrases, versus Marked's interaction phrases and tagged video catalog. The source study has a finite media sample. Lower-page illustration simplifications remain listed in `full-landing.md`.

## Warm off-white trial — 2026-11-09

Palette-only update for Ritual: paper background, charcoal text, pale stone controls, light cards/dialogs and mobile drawer. Original six image files, preset definitions, layout maps and animation code are unchanged. Optical layer opacity is reduced on the light background; blur/travel/drift timings are unchanged. The isolated source study remains dark.

Rendered at 1440×900 and 390×844; checked category tabs, detail dialog, mobile drawer and image loading. Mobile has no horizontal overflow. `npm run check` passes. Remaining differences from the approved dark version are the palette, subtle card shadows and optical layer opacity.
