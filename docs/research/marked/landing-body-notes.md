# Below-hero landing-page reproduction

Implemented by `MarkedLandingBody({ variant })` in `src/components/sites/marked/marked-landing-body.tsx` and its scoped CSS module.

## Structure and observed geometry

The implementation follows the recorded Marked section order:

1. A compact rotating-logo-wall position, represented as a static wordmark strip.
2. Feature grid: two 340px large cards and three 211px small cards, 15px gaps, 16px corners, plus the proof/CTA row.
3. Vertical category tabs beside a 340px media panel; mobile tabs run horizontally.
4. Two-column agent/conversation illustration.
5. Reversed two-column reference stack and copy.
6. Horizontal media shelf.
7. Two-column FAQ.
8. Multi-column footer.

Desktop content width is 1040px within a 1080px shell including 20px side padding. Headings are 40px/1.06, medium, with gray second lines. Mobile stacks the grid and split sections, reduces headings to 33px, and retains native horizontal touch scrolling.

## Working interactions

- Category tabs support click, arrow keys, Home and End; the selected tab controls the preview panel.
- Gallery previous/next buttons scroll by a card; disabled boundary states update on scroll and resize.
- Gallery/category cards open a native modal dialog with a close button, Escape behavior, native focus handling, and a meaningful follow-up link.
- FAQ has one open answer at a time and accessible expanded/control relationships.
- Section anchors, contact email, company link and footer links have real destinations.
- Reveals enhance visible-by-default content. If reduced motion is requested, all content remains visible without reveal or thumbnail transitions.

## Reference versus Ritual

The reference variant uses locally downloaded source thumbnails, source section text, and source outbound links. Source FAQ responses were verified live by the parent and retained only in the reference variant. Some thumbnail captions are descriptive reconstructions from the recorded asset inventory. The logo strip, save-card stack and agent illustration do not reproduce the full source's timed media/typing cycles or all provider logos. Reference card details use an inline dialog rather than recreating Marked's entire reference-detail app.

The Ritual variant uses only the original generated creative imagery and original concept copy. It does not claim live backend features, product privacy guarantees, customers, partnerships, pricing, user counts, or third-party integrations. The conversation illustration is explicitly labeled as illustrative. The first-look FAQ distinguishes illustrative reference imagery from product screenshots. Legal links are omitted until real policies exist, with relevant site/contact links supplied instead.

## Validation completed in this subtask

Targeted ESLint for the component and project TypeScript checking passed. Parent integration owns full production build and rendered desktop/mobile comparison.
