# Full-page Ritual wireframe — 2026-11-09

User authorized building the full-page wireframe from `website-blueprint.md`, keeping the floating hero, realistic copy and examples, before selecting a font.

## Route and scope

- `/wireframe`: noindex full-page layout study. Neutral Inter throughout, warm background and the existing hero assets, preset scene maps, timing and pointer response.
- Header and hero use the agreed early-access CTA and in-page navigation. Main `/`, source studies and `/studio` A/B comparison remain available.
- The new body replaces the source-derived landing structure only on this review route.

Section order: hero → interactive thought-to-draft example → creator-context illustration → cross-format examples → practical FAQ → early-access preview → footer.

## Realistic content

The flagship example starts with a creator keeping an old train ticket. Three semantic, keyboard-operable tabs show possible story angles, research leads and a first opening/outline. The same topic continues in the contextual brief and writing/recorded examples, giving the page one coherent thread. The visual example uses an existing original hero illustration.

All dialogue, sample copy and output fragments are authored for this preview. The walkthrough is an illustrative product direction, not a recorded live AI session or exact final app UI. Research links are real leads, rather than a claim to have completed a literature review:

- Russell W. Belk, “Possessions and the Extended Self,” Journal of Consumer Research 15(2), 1988, 139–168. https://doi.org/10.1086/209154
- Linda L. Price, Eric J. Arnould and Carolyn Folkman Curasi, “Older Consumers’ Disposition of Special Possessions,” Journal of Consumer Research 27(2), 2000, 179–201. https://doi.org/10.1086/314319

Titles/metadata were checked against publisher-indexed results on 2026-11-09. Publisher full text/abstract fetches were unavailable; copy labels them as research leads and proposes questions to investigate, rather than asserting empirical results.

## Signup boundary

The email form is a local interaction preview. Native email validation runs, a clear preview-confirmation state appears, and Back to the form restores the form. No email, network request, storage, account connection or subscription is created. Preview labeling is visible before and after submission. Final legal policy, launch platform details, backend collection, invitation cadence and public access flow remain future work.

## Layout and behavior

The body uses open editorial section composition, one large two-column walkthrough, a quiet contextual split, a three-part cross-format row, a single-open native FAQ and a centered form. Mobile stacks the brief and readable artifact, keeps step controls accessible, and changes the visual concept to a two-part composition. Navigation anchors account for the fixed header.

The only shared-component changes are optional wireframe header/CTA configuration and an optional early-access hero CTA. Their defaults preserve the existing homepage and typography studies. No changes were made to the floating motion engine, scene layouts, original image files or app code in `with_ai`.

## Verification

- `npm run check`: ESLint, TypeScript and production build.
- Desktop 1440×900 and mobile 390×844 rendered inspection, with no horizontal overflow.
- Walkthrough: three distinct states, real research destinations, keyboard ArrowRight transitions and updated selected/panel relationships.
- Navigation: hero/header anchors and mobile drawer link-close behavior.
- FAQ: single-open behavior and privacy answer navigation.
- Form: valid-email preview submission, truthful confirmation, Back to form and input clearing. No real signup performed.
- Existing hero motion remains active; prior shared-engine pause/reduced-motion contracts are retained. The route accepts `?motion=reduce` for static review.

Remaining differences/decisions: neutral type is provisional; product artifacts are illustrative; final copy and exact MVP/public policies need product review. Signup is intentionally preview-only. This review route has not replaced the main homepage.
