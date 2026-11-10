# Ritual: tech-forward creator preview

Implemented 2026-11-10 at `/preview`. This is an authored Ritual refinement, not a new Marked clone. User requested a more tech-forward full page, keeping the floating hero and animation, with different creator styles developing the same idea. Typography remains provisional Inter.

## Composition

- Original six hero images, preset typing, timed scene changes, spring parallax, blur, pause and reduced-motion implementation are reused without edits to the hero engine.
- Warm off-white canvas, neutral charcoal, precise dividers, restrained accents and a consistent product frame replace the proposed nostalgic photography direction. No new generated imagery was integrated.
- Hero → same-idea creator comparison → context diagram → cross-format creative artifacts → FAQ → early-access form preview → compact footer.
- A single idea, “Why do all my feeds start to feel the same?”, develops into an explainer, visual essay or opinionated piece. Selecting a creator changes references, voice, audience, title, angle, opening and outline together. The Ritual frame stays consistent. These are explicitly authored examples, not live model responses or customer work.
- Visual, written and recorded artifacts represent creative development, not a claim that Ritual renders finished films or audio.
- Existing `/`, `/wireframe`, `/studio` and source-reference routes remain available for comparison.

## Verification

- `npm run check`: lint, strict type checking and production build pass.
- Rendered comparison at 1440px desktop and 390px mobile. Workspace changes from side-by-side context/output to stacked context/output; context diagram and artifact cards retain their content. No horizontal overflow or broken images observed.
- All three creator selections verified. ArrowRight and Home keyboard selection verified; selected tab, panel label and output update together.
- Desktop anchors and mobile menu links verified. FAQ opens the selected answer and closes the previous one.
- Early-access form validates email locally, shows an honest preview confirmation and returns to the form. It sends no request and stores no email.
- Evidence in `docs/design-references/ritual-creator-preview/`: desktop creator variants, desktop full page, mobile full page and mobile output.

## Remaining differences and open decisions

- Inter is a placeholder; this iteration does not choose sans versus serif.
- Creator examples are illustrative archetypes. Actual creator work and confirmed product screens can replace these once available and approved.
- Early access is a local interface preview. Collection, consent, privacy policy and final availability/platform details require a later implementation before public signup.
- Existing floating hero photos intentionally remain unchanged as requested. They do not yet change to match the comparison tabs below the hero.
- Additional full-page animation was deliberately kept minimal so the retained hero and creator comparison have clear hierarchy.
