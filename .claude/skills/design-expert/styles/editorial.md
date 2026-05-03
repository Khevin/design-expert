# Editorial

Long-form work — case studies, magazine pieces, museum essays, design-agency project pages, books, blog posts, landing pages with editorial intent, ebooks, infographics, and museum-grade informative pages. The register is editorial when the user is asked to commit ten or twenty minutes of attention to a piece of writing and imagery, and the surface is structured so that the writing and imagery are the work — not the chrome around them. Editorial is not the third-best fit for "marketing landing page" or "fancy dashboard." It is its own discipline with its own grammar, and most attempts at editorial design on the web fail because they were built like marketing landings instead.

This file is the canonical source for the rules that apply *because the register is editorial*. Load it before `craft.md`, `grids.md`, `typography.md`, and the rest of the foundationals when the register is editorial. The rules here override the product defaults in `components.md` and `interaction.md` where the two conflict — when in editorial register, density inverts, color recedes, type carries meaning, whitespace becomes the design.

---

## What good looks like

Editorial design at its best looks inevitable. The reader closes the tab and says "that was a pleasure to read" without being able to articulate why. The why was the discipline — the rail that oriented them, the type roles that gave each voice its own register, the heavy chapter bar that named the section change without competing with it, the asymmetric image rhythm that gave each artwork its breath, the monochrome chrome that disappeared so the work could be seen. The four references below are the exemplars to study before any editorial build.

**Work & Co — client work.** `https://work.co/clients/lyft/` and adjacent project pages. The canonical web case-study layout: rail-and-body grid (3/9 split on a 12-col base), three type roles (display sans for KPI numerals and chapter headers, body serif for narrative, small sans for rail labels), heavy chapter bars, big numbered chapter anchors at the same scale as the chapter title, asymmetric image rhythm with full-bleed brand bands. The discipline that earned it: nothing decorative survived. Every element has a job.

**Pentagram — project pages.** `https://www.pentagram.com/work` and the project entries inside. The case-study format that the design-agency tradition has held for two decades — body serif column, narrow editorial gutters, big imagery with generous breathing room, monochrome chrome with the project's brand color appearing only inside the artwork, captions in italic serif as prose rather than mono "FIG · 04 · LABEL" eyebrows. Pentagram's discipline is the bar.

**The New York Times — long-form magazine pieces.** Pieces from `nytimes.com/projects` and the Magazine and Cooking sections. Editorial typography at its most refined — body serif at 18–20px, line-height 1.55, max-width 65ch, pull quotes set as italic display serif at 32–48px with a hairline rule, image captions in italic serif as prose. The pattern: every element type has one defined treatment, and the treatment is consistent across every piece.

**Apple Newsroom and editorial product pages.** `https://www.apple.com/newsroom/` and adjacent newsroom-style long-form pieces. Display sans at 80–130px for chapter headers, body serif (or restrained sans) for narrative, generous whitespace, full-bleed photography that breathes inside its own band, monochrome chrome. The discipline lesson is restraint — Apple's brand has color, but the editorial chrome around its writing does not.

**Field Notes — journal-style writing.** `https://fieldnotesbrand.com/journal` and design-agency journals modeled after it (Instrument, Method, Frog). Editorial pacing for shorter-form work — body serif column, hairlines between entries, dated entry headers, no card vocabulary. A reminder that editorial doesn't have to mean "long" — it has to mean "writing-and-imagery first, chrome last."

**Print-edition reference — The Vignelli Canon.** Massimo Vignelli's six-typeface doctrine and the grid-and-type discipline that it formalizes. Read `references/vignelli-canon.md` and `design-gods/massimo-vignelli.md` for the principles; the print exemplar is what every web-editorial layout is borrowing from at one remove. The web is print at lower resolution; editorial design on the web is the discipline of print transcribed for screens.

---

## Six editorial moves

The shape that works appears across the well-made case-study sites and editorial-magazine pages. Six moves, in roughly this order, define the register. Loading this section is the contract — if a design is in editorial register and is missing four or more of these moves, the discipline has not been applied and the design is being built like marketing or product instead.

**The two-column rail.** Body content lives in a wide right column, typically 700–900px wide and capped at 65–75ch reading width. Section labels and chapter eyebrows live in a narrow left rail, typically 200–280px wide. Labels are small sans-serif, mid-grey, anchored to the vertical position of their content — they function like running heads in a printed book. The rail does not compete with the body; it orients. On a 12-column grid this is a 3/9 or 4/8 split. Most pages reach for centered text or 12-col symmetric grids and miss this — the rail is what makes a long-form piece *navigable* without a sticky table of contents floating in the corner.

**Three type roles, not two.** Display sans-serif (bold, large, often 80–130px) for KPI numerals and chapter headers. Body serif (transitional or modern serif — Caslon, Plantin, Source Serif, Crimson, Lyon) for narrative prose. Small sans-serif (mid-grey, 12–14px, sometimes uppercase) for rail labels and figure captions. The display voice carries structure, the body voice carries the writing, the label voice carries wayfinding. Mixing these collapses the hierarchy. The single biggest tell of a templated case study is one font doing all three jobs — the surface looks like a long-form blog post pasted into a Squarespace template instead of a piece of editorial design.

**Hairlines and bars.** Hairline rules (1px, ink-faintest) separate sub-sections within a chapter. A heavy black bar (3–5px solid ink) marks major chapter breaks. Most sub-sections within a chapter use no divider at all — generous whitespace alone carries the separation. The contrast between hairline and bar IS the hierarchy. When everything separates with the same line weight, nothing reads as a chapter; the page becomes a bulleted list.

**Numbered chapter anchors.** A big "01." in the rail at the same scale as the chapter title in the main column — both 80–100px sans-serif. The numeral is the visual anchor; the eye lands on it before the prose starts. Chapters are often pre-summarized in a short table-of-contents block ("Three big takeaways" / 01–02–03) before the chapters begin, so a time-pressed reader can scan and skip to the section that matters to them. The pre-summary is editorial respect for the reader's time made structural.

**Asymmetric image rhythm.** No symmetric grids of equally-sized screenshots. Images anchor right with whitespace left, anchor left with whitespace right, or sit full-width inside a tinted brand-color band that frames them softly. Bare imagery — no drop shadows, no card frames, no glass effects, no rounded-corner mounting. The image is the artwork; let it sit. Generous vertical padding around every image moment. The whitespace IS the design — the eye registers an image more strongly when it is allowed to breathe than when it is mounted inside a container.

**Monochrome chrome, color in the work.** The page itself reads in ink, paper, and mid-grey. Brand color appears only inside the artwork — the hero band, the screenshots, the illustrations. Once the reader scrolls past the hero, they are in monochrome editorial space. The principle is "the work has color, the layout doesn't." Color in the chrome of an editorial page cheapens the work it surrounds; color confined to the work itself sells the work. Italic emphasis, pull-quote rules, and KPI numerals tint to ink, not accent.

---

## Anti-patterns (Don't)

The four named patterns below cover the most common ways editorial design fails on the web. Each appears in the wild every time someone treats a case study as a marketing landing page or a long-form essay as a fancy dashboard. Each one has a name (so it can be cited in review), a description (so it can be detected), and a replacement (so it can be fixed).

**Marketing-page cargo cult.** A case study that opens with a centered hero, a three-equal-card "Process / Discovery / Delivery" trio, mono "FIG · 04 · ADMIN" eyebrows above every image, accent-colored section dividers, and a "Why we built this" section in 14px gray on dark. The surface reads as a marketing landing wearing case-study clothing. *Replacement:* drop the centered hero (use a left-aligned title with a short subhead), drop the three-equal-card trio (use the rail-and-body grid with one chapter per section), drop the mono eyebrows (let the chapter number and title carry the section identity), drop the accent dividers (use hairlines and a heavy chapter bar), drop the dark-mode "Why we built this" (write it as the body of the first chapter).

**Card-everywhere template.** An editorial interior wrapped in elevated cards — every chapter mounted in a card, every figure mounted in a card, every quote mounted in a card with a glassmorphism effect. The card vocabulary belongs in product surfaces where content needs containment; in editorial it produces visual fragmentation that prevents the reader from settling into the prose. *Replacement:* drop the card vocabulary entirely. Use spacing, hairlines, and the rail to create separation. The empty space *is* the design. If a figure feels naked without a frame, the figure is not strong enough — strengthen the figure, do not add a frame around it.

**One font for all three jobs.** A case study where the chapter header, the body prose, and the figure caption are all set in the same sans-serif typeface, just at different sizes. The hierarchy collapses; the page feels templated; the reader cannot distinguish display from narrative from wayfinding. *Replacement:* commit to three type roles. Display sans (Inter Tight, Söhne, Neue Haas Grotesk) at 600–700 weight for chapter numerals and headers. Body serif (Source Serif 4, Lyon, Plantin, GT Sectra) at 400 weight for narrative. Small sans at 500 weight, 12–14px, often uppercase letterspaced, for rail labels and captions. Three voices, three jobs, no overlap.

**Dashboard density on a reading surface.** Treating editorial like a product surface: 14px Carbon-style row heights, 8–12px padding, dense table-of-contents grids, status pills next to chapter titles. The verb of editorial is reading; reading needs whitespace, generous line height, and breathing room around figures. Compression makes the page feel oppressive and stops being read after the first scroll. *Replacement:* invert the density. Body type at 18–20px, line height 1.5–1.6, vertical padding around figures at 56–112px (clamped responsively), max width 65ch for the body. The user is here for twenty minutes; let them feel welcomed.

---

## When to break the rules — bolder type, looser delight

Editorial gives you license that product surfaces do not. The discipline of a product is constraint and consistency over an eight-hour session; the discipline of editorial is the reader's investment in twenty minutes of attention and the writer's right to make those minutes feel like an event. Two specific loosenings apply.

**Bolder typography.** The general "type at usable scale" floor of product surfaces lifts in editorial. KPI numerals and chapter headers that would feel oversized at 80px in a dashboard read as deliberate and cinematic at 96–130px in editorial. Pull quotes can scale to 32–48px italic display serif. Drop caps, optical sizing, ligatures, and small caps — typographic moves that feel decorative on a product surface — earn their place in editorial because the type is the design. The rule from `bolder.md`'s "Typography Amplification" section applies: extreme scale (3x to 5x the base body size), strong weight contrast (a 700-weight chapter header against 400-weight body prose), and considered display fonts where the body uses a workhorse serif. Avoid the AI-default move of using a single sans-serif and scaling it; pick a real display face, even if just for the hero and chapter heads.

**Looser delight thresholds.** `delight.md`'s caution that "delight should enhance usability, never obscure it" is right for product surfaces where the user has a job. In editorial the user's "job" is reading — a small surprise (an italic pull quote that breaks the prose column, a figure that slides into view as it enters the viewport, a chapter bar that animates from full-width to its resting state) does not obscure usability; it carries the reader through the piece. The hard caps still apply: `prefers-reduced-motion: reduce` is honored, motion is under 360ms, sound is never auto-played, the surprise must be skippable. But the threshold for *what counts as appropriate delight* sits higher in editorial than in product. The reader is here for an experience; the experience can be an experience.

The two loosenings are not license. They are budget. Spend the budget on chapter heads and pull quotes; do not spend it on toast notifications and CTA hover states. Save the warmth for the moments where the reader is asking the page to deliver — the chapter break, the pull quote, the hero, the closing tribute — not for the moments where the reader is trying to read.

---

## How to use this style file

Load this file *before* `craft.md`, `grids.md`, `typography.md`, and `components.md` when the register is editorial. The rules here override the product-default rules in those files when the two conflict. Specifically:

- **Grid:** use the rail-and-body 3/9 or 4/8 split on a 12-col base. Ignore `grids.md`'s "12-col Carbon dialect" defaults; they apply to product, not editorial.
- **Type:** use three roles per the discipline above. Ignore `typography.md`'s product-register guidance for type-pairing-by-utility; in editorial the pairing is type-pairing-by-voice (display + body + label).
- **Density:** invert the product defaults in `craft.md` § Density. Editorial breathes; product compresses.
- **Components:** drop the card vocabulary, the status-pill vocabulary, the elevated-tile vocabulary in `components.md`. Editorial uses hairlines, headings, and whitespace to do the work that cards do in product.
- **Anti-slop:** apply `anti-slop.md` with the editorial-register lens. The same tells (purple gradient, three-equal-cards, centered hero) are *more* disqualifying in editorial than in brand and *much* more disqualifying than in product. See `anti-slop.md` § Color tells and § Layout tells for the named patterns.

The register is decided at brief time. `/design-expert:plan` Gate 0 (Register) asks the user explicitly. `/design-expert:build` Gate 2 reads `PRODUCT.md` and runs a confidence check; if confidence on "is this editorial?" is below 80%, the gate asks. `/design-expert:review` Step 1 (Anti-defaultism scan) reads register first and applies register-conditional verdicts. Once the register is confirmed editorial, this file is loaded and stays loaded for the remainder of the session.

---

## Case-study composition — refinements

Patterns that emerged during the spaces.html v2 build, refining the six editorial moves above. Future case studies should inherit these by default.

**Three chapters, not four.** Consolidate the typical four-chapter spine (background → approach → systems → outcome) into three (what we inherited → what we built → what changed). Four chapters read as exhaustive but punish the 8-minute scanning reader; three trade completeness for tightness. Merge "background" and "approach" into a single "what we inherited" chapter where the un-building IS the approach. Merge "systems" and "redesign" into a single "what we built" chapter.

**KPI block inside the closing chapter, not as a separate section.** Place the KPI/metric block inside the third chapter, after the outcome paragraph and the visual evidence. A separate "Outcomes" or "Results" section reads as marketing landing-page structure; embedding the KPI in the prose flow reads as editorial. The KPI block is the quantitative anchor inside the chapter that already carries the qualitative claim.

**Hero key visual + Before-tagged inherited screen as the primary contrast pair.** Open the case with the AFTER state as the hero key visual (the result, up front). Caption it with a three-beat rhythm: name → contrast → value. Inside chapter 1, place the BEFORE state — the inherited screen — with an explicit "Before" mono-uppercase chip in the caption. The hero+before pair frames the case study's argument visually before the prose has to.

**Image-rhythm with deliberate aspect-ratio variety.** Inventory the available mockups by shape at brief time (vertical, horizontal, square, ultra-wide). Distribute shapes deliberately: horizontal hero (16:9 or 21:9), vertical split (3:4 or 4:5) when imagery shows mobile or single-screen views, square detail callout (1:1) for feature highlights like Notes, ultra-wide cinematic moment (21:9) for the climactic reveal, multi-shape grid mixing all three for the closing chapter. Same content with all-square would feel monotonous; same content with all-horizontal would feel one-note. The rhythm IS part of the design.

**Layout is iterative during build.** When real mockups land at Gate 7, their actual aspect ratios may differ from filename assumptions. Re-check at Gate 10 — if shapes shift materially, return to Gate 3 and re-pick a layout candidate from `layouts.md`. Don't refuse a layout change at iteration time simply because the original Gate 3 pick has shipped a wireframe; layout serves the imagery, not the reverse.

**Cinematic break for the climactic reveal.** Editorial case studies benefit from one strategic moment that breaks the rail-and-body rhythm — typically the V2.0 reveal or the after-shot of the rebuilt surface. Use a paper-warm tinted band, an italic-mono "Version 2.0 — the reveal" label centered above, the image at natural aspect (no fixed crop), and an italic-serif caption beneath. The break reads as cinematic when the surrounding rhythm is consistent rail-and-body; without the surrounding consistency, the break is just another image.

**Drop "surface" jargon.** Use "app" or "screen" or the actual product name. "Surface" is design-school vocabulary that reads as cold to non-designers and abstract to designers; "app" is direct and concrete. (This rule is also in the voice section of `commands/write.md`; restated here for builders who load editorial.md without write.md.)

**Per-surface PRODUCT.md / DESIGN.md.** Each case study gets its own brief at `<surface>.PRODUCT.md` and `<surface>.DESIGN.md` (e.g., `projects/spaces.PRODUCT.md`). Documented in `commands/plan.md` Gate 6 as the canonical naming convention. The brief survives the build and feeds future iterations and `/design-expert:review` runs.

**Voice rules for case-study prose** live in `commands/write.md` § Case-study writing — the Lyft tone. Cross-reference there for plain-words discipline, active-voice rules, decision-walk patterns, functional stakeholder framing, numbers-inline anchoring, and the three-beat caption rhythm.

---

## See also

- `craft.md` § Composition — the rhythm-and-proportions discipline that informs the editorial build, with editorial-specific overrides cross-linked.
- `grids.md` § Brand vs. product vs. editorial — the grid-mechanics framing, with the rail-and-body specifics referenced here.
- `typography.md` § Brand vs. product vs. editorial register for type — the three-role pairing in detail, with attribution to Pentagram and Work&Co.
- `references/pentagram.md` and `references/vignelli-canon.md` — the practice-level exemplars whose discipline this file inherits.
- `design-gods/massimo-vignelli.md`, `design-gods/jan-tschichold.md`, `design-gods/muriel-cooper.md` — the voices to keep in the room when the register is editorial.
- `library/<category>/README.md` files — the surface-specific Do/Don't pairings that this file complements; surface library answers "what does this component look like," styles answer "what discipline applies because of the register."
- The project-side contract at `system.md § Pattern: editorial register for case studies` — the project-specific implementation of these rules for `projects/{spaces,favo,amway}.html`. This file is the canonical reference; system.md is the project-side mirror.
