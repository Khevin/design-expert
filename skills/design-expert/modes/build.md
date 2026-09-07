---
description: Build a new interface or component from intent. Loads the design-expert craft, anti-slop, components, typography, interaction, and foundations files (plus styles/editorial.md when the register is editorial, plus layouts.md for the layout-pattern catalog); runs Shape, Register, Layout exploration, Domain, and Test gates before showing output.
---

# /design-expert:build

This command is the entry point for building a new interface or component from intent — a fresh dashboard, a new flow, a component that did not exist yesterday. It is not for editing existing UI. Editing has its own discipline and lives in `/design-expert:review`. Build is for the moment when there is nothing on the screen yet, when the first decision is the heaviest one, when every default in the model is leaning forward to fill the void with the most common dashboard the training set has ever seen. The job of this command is to keep that from happening.

## When to use this command

Reach for build when the work is net-new. A new screen, a new flow, a new component, or a redesign that throws the existing artifact away rather than tuning it. Build is generative. If the surface already exists and the user is asking for fixes, sharpening, or critique, that is review — `/design-expert:review` is the right command and it skips most of the early gates because the structure is already on the page. If the project has no `PRODUCT.md` yet — no agreed-on user, no agreed-on register, no agreed-on signature — that is a planning problem, not a building one, and `/design-expert:plan` runs first. Build assumes the project is set up and the brief is fresh.

## The build workflow — gate-driven

The workflow runs as eleven gates in order. Each gate is a stop point. You cannot proceed past a gate without passing it, and you do not get to argue with the gate — the gate is the discipline. Skip Intent-First and you ship a generic dashboard. Skip Register and you ship marketing-hero typography on a settings screen. Skip Layout exploration and you ship the same centered hero / sidebar-and-canvas / bento default the model reaches for by reflex. Skip the swap, squint, signature, or token tests and you ship slop dressed as competence. The gates feel slow on the first run and stop feeling slow once the user sees what the build looks like with all of them passed.

### Gate 1: Shape

Confirm a `PRODUCT.md` exists for this project and that a user-approved task brief exists for this build. If either is missing, stop and route to `/design-expert:plan` first. Building without a brief is building from defaults — the brief is the constraint that lets craft happen, and skipping it means the model fills the gap with the average of every dashboard it has ever seen. Read `PRODUCT.md` if it is present so the project's user, register, and signature decisions are loaded into context. If the user already supplied a confirmed brief in the conversation, that is sufficient; restate it back in one sentence so you and the user agree on the same artifact before any pixel decision happens.

**Size the request.** Read the brief against the sizing taxonomy in `craft.md` § Iteration as a category. Five sizes: touch-up (single property change), polish (one component refined), iteration (component or section reconsidered, identity may shift), surface redesign (full screen rebuilt), system redesign (multiple surfaces / design system / brand). The size sets the exploration depth for the rest of the gates:

- **Touch-up** — skip Gates 3–8 entirely. No layout exploration, no domain exploration, no proposal phase. Execute directly.
- **Polish** — abbreviated Gates 5 and 8. Intent-First confirmed quickly; propose 1–2 alternatives at most; execute after a brief confirm.
- **Iteration** — full Gates 5–8 at appropriate scope. Three to five alternatives surfaced at Gate 8; user (or model at ≥80% confidence) picks; execute. The middle path runs all gates but trims their depth.
- **Surface redesign** — every gate in full. Layout exploration runs the catalog walk (Gate 3 + `layouts.md`); design-gods at the medium-work threshold (two minimum, three preferred).
- **System redesign** — requires `/design-expert:plan` first; this command should not run on a system-scale brief without a plan. Route back if no plan exists.

**Recognize iteration intent in non-iteration words.** Users rarely say *"iterate"* — they say *"review this," "critique this," "make it better," "make it prettier," "I don't like this," "what would you change."* Recognize the intent: a request that asks for changes (not just notes) is build-shaped, not review-shaped, regardless of the word the user used. *"Review this card"* with an attached file usually wants iteration-shaped output (3–5 proposals, then implementation of the pick), not text-only feedback. Read intent + size; route accordingly.

### Gate 2: Register

Decide whether this surface is **brand**, **product**, or **editorial**. Three registers, not two — the same craft rules apply differently across each, and getting this wrong poisons every later decision.

**Brand** surfaces are distinctive and memorable — fluid type, expressive color, ambitious motion, signature hero moments, asymmetric composition, single-purpose folds. **Product** surfaces are familiar and forgettable — fixed rem type scale, restrained color, motion that carries state and nothing more, repeatable patterns, predictable grids that the user learns and trusts over an eight-hour session. **Editorial** surfaces are read for ten or twenty minutes — rail-and-body grid (3/9 or 4/8 split), three type roles (display sans + body serif + label sans), monochrome chrome with color confined to artwork, hairlines and heavy chapter bars, asymmetric image rhythm with generous breathing room.

**Confidence check before asking.** If `PRODUCT.md` carries a `register:` field (set by `/design-expert:plan` Gate 0 or by prior agreement), read it and proceed; do not re-ask. If the user has supplied a brief in the conversation, derive register from explicit cues: "case study," "long-form essay," "magazine," "museum site," "design-agency project page" → editorial; "marketing landing," "campaign," "launch page," "about page" → brand; "dashboard," "admin panel," "settings," "data table," "tool" → product. If the cues give ≥80% confidence, state the inference in chat ("Inferred register: editorial — proceeding") and proceed. If confidence is below 80%, **call `AskUserQuestion`** with the three register options and inline definitions, and wait for the answer. Do not guess. The cost of asking is a single user-prompt; the cost of guessing wrong is a full rebuild.

**Load order branches by register.** For editorial register, load `styles/editorial.md` *before* `craft.md`, `grids.md`, `typography.md`, and `components.md` — the rules in `styles/editorial.md` override conflicting product-defaults in those files. The editorial branch loads three-role typography per `typography.md` (with the extreme-scale loosening rules from § Type for case studies and long-form), the rail-and-body grid per `grids.md` (3/9 or 4/8 split, 60–75ch body cap, 200–280px rail), and the six editorial moves per `styles/editorial.md`. For brand and product register, load order remains as in Gate 4 below; `styles/editorial.md` is not loaded.

### Gate 3: Layout exploration

Right after register and before any pixel decision, walk the layout pattern catalog in `layouts.md`. Filter to the register confirmed at Gate 2 (brand → landing-page table; product → dashboard or interface table; editorial → editorial table). Read all eight patterns in the relevant table. Pick three to five candidates that genuinely fit the brief — not the first three you read, but the ones whose when-to-use clauses match the project's verb.

Present the candidates to the user with:

- **Pattern name** (cited from `layouts.md`)
- **One-line "when to use"** filtered to this brief's verb (not the generic clause)
- **One-line trade-off** (what this pattern costs, what it gains)
- **Exemplar matching the project's voice** (preferred) or the canonical exemplar from the table

Three candidates is the floor; five is the bar. Below three you have not enumerated; you have defaulted. State a single-pattern inference only if confidence is genuinely above 80% — rare on a first build, more common on a tight brief. Otherwise call `AskUserQuestion` with the candidates and wait for the pick.

**Redesigns count as early.** When the brief is "redesign this surface," do not preserve the existing layout by default. Walk the catalog cold, as if the project were brand new. The most common redesign failure mode is treating the original layout as the constraint when the original layout is precisely what the redesign needs to escape. Open the layout exploration with that explicit framing — *"the existing surface uses pattern X; the redesign opens that on the table. Here are three to five alternatives to consider, including X as a candidate if the user wants to keep it consciously."* Let the user veto the layout-on-the-table framing if they have a reason; otherwise proceed.

The layout pick at Gate 3 cascades into every grid, type, density, color, and motion choice that follows. Get this right; everything later is filling in the chosen frame. Get it wrong and every later gate pays a tax — the wrong layout cannot be polished into the right design.

### Gate 4: Load references

Load the relevant files in this order so the constraints are warm before the first decision:

- `SKILL.md` — the manifesto and the index over the rest
- `foundations.md` — NNg heuristics, the Universal Design 7 principles, the 10-Lens audit
- `craft.md` — composition, layering, density, the four tests
- `anti-slop.md` — the named defaults you will not ship
- `typography.md` — the type system and the brand-vs-product type rules
- `grids.md` — Swiss school, asymmetric grids, types of grids, register-conditional grid mechanics
- `layouts.md` — already loaded at Gate 3 for the layout-pattern catalog; keep it in working memory
- `components.md` — the atomic patterns: cells, icons, charts
- `interaction.md` — states, motion, responsive behavior, onboarding
- The relevant `library/<category>/README.md` for the surface being built — dashboards, navbars, tables, forms, empty states, cards
- The relevant `styles/<style>.md` for the register confirmed at Gate 2 — `styles/editorial.md` when the register is editorial; loaded *before* the foundationals so its rules override conflicting product-defaults
- A relevant `references/<exemplar>.md` if a specific exemplar applies — Pentagram for brand, Linear for product, Carbon for enterprise dense data
- Optionally `design-gods/<designer>.md` if a specific principle source informs the work — Vignelli for type, Tufte for charts, Rams for restraint

You are not memorizing all of these. You are pulling the constraints into working memory so they apply by reflex when the build starts. The four tests cannot catch defaults you never knew were defaults.

### Gate 5: Intent-First (WHO / WHAT / HOW)

You must answer all three questions before any visual decision. Not approximately — specifically. **WHO is this human?** Not "users." The actual person. A teacher at 7am with cold coffee is not a developer debugging at midnight is not a founder between investor meetings. Their world shapes the interface. **WHAT must they accomplish?** The verb. Grade these submissions. Find the broken deployment. Approve the payment. The verb determines what leads, what follows, what hides. **HOW should this feel?** Concrete adjectives only. Warm like a notebook. Cold like a terminal. Dense like a trading floor. Calm like a reading app. Quiet like a museum caption. Not "clean and modern" — that is the universal AI default and it means nothing.

If you cannot answer with specifics, stop and ask the user. Do not guess. Saying "warm" and then shipping cool blue tokens is intent-as-decoration, not intent-as-constraint. Check your answers against your downstream decisions at every later gate. The intent is a constraint on every token, every spacing value, every weight. If a single later choice contradicts the stated intent, the intent has not actually been applied — it has been quoted.

### Gate 6: Domain exploration

Three required outputs before any direction is proposed. **Signature elements** — at least one element that could only exist for this product, this user, this verb. Not the overall vibe — an actual component or motif you can name. The shape of the assignment-status pill on the grading screen. The temperature of the empty inbox illustration. The chip pattern for assignee filters. **Color world** — five or more colors that exist naturally in this product's domain. Not "warm" or "cool" but the actual material colors of the world this product serves. A bakery tool's palette has flour and crust in it. A hospital tool's does not. **Defaults to reject** — three obvious choices for this surface type that you will not make, named explicitly, with what replaces each.

You cannot avoid patterns you have not named. Without an explicit list of rejected defaults, the design will drift to the obvious answer the moment your attention is elsewhere. Writing the rejections down is what turns avoidance from a wish into a rule.

### Gate 7: Mock-fidelity inventory

Before code, list every section, motif, hero, nav item, CTA, and image need on the screen, with the implementation method per item. Semantic HTML/CSS/SVG, generated asset, sourced project asset, icon from the chosen library, an explicitly accepted omission. **For every image, name its aspect ratio explicitly** — vertical (3:4, 2:3, 9:16), square (1:1), horizontal (4:3, 16:9, 21:9). Image shape is a layout parameter; surfaces that pretend all images are square produce wireframes that don't match the real assets. The inventory must be honest about the image library before pixels start. See `layouts.md` § Image-shape as a layout parameter for the rhythm strategy that follows from a mixed inventory.

This forces you to plan the build instead of improvising it section by section, which is the fastest path to a screen that loses its hero by the time you reach the footer. The inventory is short. It does not need to be elegant. It needs to exist.

### Gate 8: Propose

If multiple valid directions exist for this brief, surface them with confidence percentages following the format in `output-format.md`. Two to four options, each with a one-line description, a stated trade-off, and a confidence number. Force the user to pick. Do not pick silently and call it preference — silent picks are how the model's bias becomes the project's direction without anyone noticing. If only one direction is genuinely defensible from the brief, say so and explain why; do not invent fake alternates to satisfy the format.

### Gate 9: Build

Build the interface. As you build, hold the four craft tests open as a live checklist instead of a final review:

- **Swap test:** would swapping the typeface for your usual default change the product's identity? If no, the type was a default.
- **Squint test:** when the screen is blurred, can you still see the hierarchy? If no, hierarchy is incidental.
- **Signature test:** can you point to five elements that only exist on this product? If no, the design is interchangeable.
- **Token test:** do the variable names sound like this product's world, or like any product? Generic names are the receipt that intent never made it to the implementation layer.

Plus the impeccable test: would a viewer say "AI made that"? If yes — even a maybe — the work is not done. If any test fails, iterate before showing the user. The user is not the proofreader.

### Gate 10: Browser iteration

Open the result. Inspect screenshots, not just DOM. Walk it through mobile narrow, tablet or small laptop, and desktop wide at minimum. Look for overlap, clipping, weak hierarchy, off-grid alignment, awkward whitespace, cramped controls, unreadable type, hover-only functionality, layout shift, text overflow. Patch defects. Re-inspect. Repeat until no material defect appears at any breakpoint. Most AI-generated UI ships looking acceptable on the desktop the agent rendered against and breaks at every other size, because the inspection step was skipped or done once instead of looped. The exit bar is not "it works" — it is "the rendered result looks intentional at every checked viewport, every state is handled, no placeholder remains."

**Layout-image fit re-check.** Compare current image inventory against the Gate 7 contract. If the inventory has materially shifted — new images added, key images removed, dominant aspect ratios changed, image count shifted by ≥30% — return to Gate 3 (Layout exploration) and re-run the catalog filter against the new inventory. Ask via `AskUserQuestion`: does the chosen layout still fit, or has a different pattern become stronger? If stronger, propose the change before continuing iteration. Layout is held loosely until "no material image changes pending"; don't refuse a layout change at this stage simply because Gate 3 has already picked. See `layouts.md` § Layout is iterative for the material-vs-non-material shift criteria.

### Gate 11: Present and offer to save

Present the work with a short rationale grounded in the gates that were passed — the brief, the register, the named defaults rejected, the signature elements that landed, the tests the build now passes. Walk the user through the key states. Note honestly any limitation or follow-up risk. Then offer to save the patterns the build introduced to the project's `system.md`. Saved patterns compound — each pattern saved makes the next build faster, more consistent, and more recognizably this product's work.

## Hard rules — non-negotiable across the workflow

- No emojis as UI under any circumstance.
- One icon library; no mixed icon families.
- IBM Carbon defaults for any enterprise or dense-data product UI.
- No pie charts, no donut charts.
- `prefers-reduced-motion` is mandatory.
- 44 by 44 pixel minimum touch targets on any interactive element.
- Native `<dialog>` plus `inert` for modals — never a div masquerading as a dialog.
- Layout exploration at Gate 3 — at least three candidates surfaced from `layouts.md` before any pixel decision. Redesigns count as early-in-project; the existing layout opens to the table by default.

## What this command produces

The output is a built interface or component, plus a short rationale tied to the gates passed and the tests cleared, plus optional `system.md` updates that capture the patterns the build introduced so the next build inherits them. The build is presentable to a senior designer without apology. If it is not, a gate was skipped — go back and find which one.

## Closing

The gates are not bureaucracy. They are the discipline that separates signature from template, this product from any product, craft from retrieval. Skip them and you ship the same design every other AI would ship from the same prompt — competent, average, indistinguishable, forgotten. Run them and you ship work that could only have come from this brief, for this user, doing this verb, in this world. That is the bar. That is the only output worth shipping.
