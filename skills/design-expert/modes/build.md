# Build mode

Loaded by `SKILL.md` triage when the mode is build or iterate. Build is for the moment when there is nothing on the screen yet, when the first decision is the heaviest, when every default in the model leans forward to fill the void with the most common dashboard the training set has ever seen. Iterate is for the far more common moment when something is on the screen and the user wants it changed rather than described; it enters this file at the section named for it, sized by triage, and runs the subset of gates the size deserves. The job of this mode is to keep the default from happening at either entry.

Triage has already read memory, discovered the design system, confirmed the register, sized the request, picked the output target, and set the council tier. The gates below assume those facts and cite them; where a gate used to ask, it now states.

## When triage picks this mode

Build runs for net-new work: a new screen, a new flow, a component that did not exist yesterday, or a redesign that replaces the existing artifact rather than tuning it. Iterate runs for every change request on existing work: "make it better", "what would you change", "fix this", "I don't like this". Notes without change is review mode. A project with no `PRODUCT.md` at redesign size, or any request at system size, is plan mode first; this mode routes back when it finds itself there.

## The build workflow, gate-driven

Eleven gates in order, plus the council at 8½. Each gate is a stop point. You do not argue with the gate; the gate is the discipline. Skip Intent-First and you ship a generic dashboard. Skip Layout exploration and you ship the centered hero or the sidebar-and-canvas the model reaches for by reflex. Skip the four craft tests and you ship slop dressed as competence.

### Gate 1: Shape

The size arrives from triage: touch-up, polish, iteration, surface redesign, or system redesign, per `craft.md` § Iteration as a category. It sets which gates run and how deep. Touch-up skips Gates 3 through 8 and executes. Polish runs Gate 5 quickly, proposes one or two alternatives at Gate 8, and executes. Iteration runs Gates 4 through 11 at trimmed depth with three to five alternatives, and runs Gate 3 only when the layout is on the table. Surface redesign runs every gate in full, convenes the council at Gate 8½, and shows concepts before building. System redesign requires plan mode first; route back if no plan exists.

`PRODUCT.md` and `DESIGN.md` are required at redesign sizes and read when present at any size. Below redesign, the discovered design system and a one-sentence restatement of the brief are sufficient; do not send a polish request to plan mode. Restate the brief in one sentence so you and the user agree on the artifact before any pixel decision.

### Gate 2: Register

Resolved in triage. State it ("register: product, per `leads-semanais.PRODUCT.md`") and load by register. For editorial, load `styles/editorial.md` before `craft.md`, `grids.md`, `typography.md`, and `components.md`, because its rules override conflicting product defaults: three-role typography, the rail-and-body grid with a 60–75ch body and a 200–280px rail, the six editorial moves. For brand, load `styles/expressive.md` when the brief asks for expression. For product, the foundationals govern alone. Re-ask only if the brief contradicts the stored register, and then through `AskUserQuestion` with the three options.

### Gate 3: Layout exploration

Skipped at touch-up and polish; at iteration, run only when the change shifts the layout. Otherwise, before any pixel decision, walk `layouts.md` filtered to the register. Read all eight patterns in the relevant table. Pick three to five candidates whose when-to-use clauses match the brief's verb, not the first three you read. Present each with the pattern name as cited, a one-line when-to-use filtered to this brief, a one-line trade-off, and an exemplar matching the project's voice. Three is the floor; five is the bar. Below three you have not enumerated; you have defaulted. If `PRODUCT.md` carries a `layout:` field from plan mode, that is the constraint, and the walk is skipped unless the user opens the layout on the table.

Redesigns count as early. Do not preserve the existing layout by default; walk the catalog cold and present the existing pattern as one candidate the user may keep consciously. The layout pick cascades into every grid, type, density, color, and motion choice that follows; the wrong layout cannot be polished into the right design.

### Gate 4: Load references

Load in this order so the constraints are warm before the first decision:

- The discovered design system first, per the pointer from triage: its tokens, its depth strategy, its component primitives, its mandated patterns. Everything below is read through it.
- `SKILL.md`, then `foundations.md`, `craft.md`, `anti-slop.md`, `typography.md`, `grids.md`, `layouts.md` (already loaded at Gate 3), `components.md`, `interaction.md`.
- The relevant `library/<category>/README.md` for the surface: dashboards, navbars, tables, forms, empty states, cards.
- The register's style file, loaded before the foundationals when the register has one.
- A relevant `references/<exemplar>.md` when a specific exemplar applies: Pentagram for brand, Linear for product, Carbon for enterprise dense data.
- The designer files the council or the capsule consultation names.

You are not memorizing these. You are pulling constraints into working memory so they apply by reflex. The four tests cannot catch defaults you never knew were defaults.

### Gate 5: Intent-First (WHO / WHAT / HOW)

Answer all three before any visual decision, specifically. **WHO is this human?** Not "users": the actual person, in their world. **WHAT must they accomplish?** The verb. Grade these submissions. Find the broken deployment. Approve the payment. **HOW should this feel?** Concrete adjectives only. Warm like a notebook. Cold like a terminal. Dense like a trading floor. Not "clean and modern"; that is the universal default and it means nothing. If you cannot answer with specifics, ask, with the orange marker. Check every later decision against these answers; a stated intent that a downstream token contradicts has been quoted, not applied.

### Gate 6: Domain exploration

Three outputs before any direction is proposed. **Signature elements**: at least one element that could only exist for this product, this user, this verb; an actual component or motif you can name, and one that does not collide with a primitive the design system already defines. **Color world**: five or more colors that exist in this product's domain; when a design system exists, these are its tokens first, and any new color is proposed in the system's naming dialect and marked new. **Defaults to reject**: three obvious choices for this surface type you will not make, each with its replacement. You cannot avoid patterns you have not named.

### Gate 7: Mock-fidelity inventory

Before building, list every section, motif, hero, nav item, CTA, and image need on the screen, with the implementation method per item: semantic HTML/CSS/SVG, a library component, a generated asset, a sourced project asset, an icon from the chosen library, or an explicitly accepted omission. Name every image's aspect ratio. Image shape is a layout parameter; a surface that pretends every image is square produces wireframes that fight the real assets. See `layouts.md` § Image-shape as a layout parameter.

### Gate 8: Propose

If multiple valid directions exist, surface them with confidence percentages in the `output-format.md` format: two to four options, each with a one-line description, a trade-off, and a confidence number, then make the user pick. Do not pick silently. If only one direction is genuinely defensible, say so and why; do not invent alternates to satisfy the format.

Where the alternatives are shown follows `targets.md`. At redesign size, or when an iteration shifts the layout or the user asks to see alternatives, render them on the concept surface: Figma frames through `use_figma` for a designer with the MCP, the Claude Design canvas through the `design` skill for everyone else, one artboard per alternative labeled with its name. At polish and at iterations that keep the layout, the alternatives are inline prose, then the pick. At capsule tier the consultation happens here: seat by tag from `design-gods.md` and write one sentence per seat naming the principle and the decision it shapes.

### Gate 8½: Council

Surface redesign and system redesign only, per `council.md`. Assemble the brief: mode build, size, register, the surface, two to four surface tags, the scene sentence, the artifact (the Gate 8 alternatives as a screenshot or summary, never a directory), and the decisions: the Gate 8 directions, the layout pick, the signature element, the defaults to reject. Seat the three permanent seats plus every designer whose tags intersect the surface tags, seven at minimum, in one message. Run the chair, print the table, ask about Contested decisions in one `AskUserQuestion` call, write the log in one call. Rulings are adopted before Gate 9 begins.

### Gate 9: Build

Build on the target triage chose. On the **code path**, write semantic HTML, CSS, and the repository's framework, with every color, space, radius, and type value drawn from the design system's tokens; a raw value where a token exists is a defect. On the **Figma path**, invoke `figma:figma-use` first, read the library's variables with `get_variable_defs` before creating any frame, find components with `search_design_system`, and bind every fill and gap to a variable; when the surface is a web page, render it locally, capture it with `generate_figma_design` after `figma:figma-generate-design`, and refine the capture with the library's components, deleting the capture once the built frames match it.

Hold the four craft tests open as a live checklist. **Swap test**: would swapping the typeface for your usual default change the identity? **Squint test**: blurred, does the hierarchy survive? **Signature test**: can you point to five elements that only exist on this product? **Token test**: do the variable names sound like this product's world? Plus the two-second test: would a stranger say "AI made that"? If any test fails, iterate before showing the user. The user is not the proofreader.

### Gate 10: Iteration on the rendered result

Open the result. Inspect screenshots, not just the DOM: the browser for code, `get_screenshot` for Figma. Walk mobile narrow, tablet, and desktop wide at minimum. Look for overlap, clipping, weak hierarchy, off-grid alignment, awkward whitespace, cramped controls, unreadable type, hover-only functionality, layout shift, text overflow. Patch, re-inspect, repeat until no material defect appears at any viewport. The exit bar is "the rendered result looks intentional at every checked viewport, every state is handled, no placeholder remains".

Re-check the image inventory against the Gate 7 contract. If it has shifted materially (images added or removed, dominant ratios changed, count shifted by thirty percent or more), return to Gate 3 and re-run the catalog filter; ask whether the chosen layout still fits. Layout is held loosely until no material image changes are pending. See `layouts.md` § Layout is iterative.

### Gate 11: Present, self-review, save, hand off

Run `self-review.md` at iteration size and above and present its Cuts, Holds, and Risks with the work. Present the rationale grounded in the gates passed: the brief, the register, the defaults rejected, the signature elements that landed, the tests the build now passes. Walk the user through the key states and name any limitation honestly. Offer to save the patterns the build introduced to the project's `system.md` (or the discovered system file); saved patterns compound. At redesign sizes, append a `DECISIONS.md` entry. When memory says the work is handed to someone else, produce the handoff artifact from `handoff.md` for that direction.

## Iterate entry

Iterate is a build at a size, not a separate workflow. Triage sets the size; this section names the gates.

- **Touch-up** (one property): Gate 9, then Gate 11 without self-review. No alternatives, no consultation, no concept surface. Execute directly; proposing alternatives for a touch-up signals you did not read the request.
- **Polish** (one component): Gate 5 quickly, Gate 8 with one or two alternatives inline, Gates 9 through 11. Capsule consultation of at most one seat. No concept surface.
- **Iteration** (a section reconsidered): Gates 4 through 11 at trimmed depth, Gate 4 loading the discovered system plus only the reference files the surface needs; Gate 3 only when the layout shifts; three to five alternatives at Gate 8, inline unless the layout is on the table or the user asks to see them; capsule consultation of three to five seats; self-review at Gate 11.
- **Surface redesign** and **system redesign** are builds, not iterations, and run the full gate sequence above.

Users rarely say "iterate". They say "review this" with a file attached, "make it better", "what would you change", "I don't like this". A request that asks for change is iterate-shaped regardless of the word; triage has already read it that way when it routed here.

## Hard rules across the workflow

No emojis as UI. One icon library. IBM Carbon defaults for enterprise and dense-data product UI. No pie or donut charts. `prefers-reduced-motion` mandatory. 44 by 44 pixel touch targets. Native `<dialog>` plus `inert` for modals. Tokens from the discovered system; a raw value beside an existing token is a defect. Layout exploration at redesign size with at least three candidates, the existing layout opened to the table. Figma writes preceded by their prerequisite skill. Council at Gate 8½ for redesign sizes; capsule below; none at touch-up.

## What this mode produces

A built interface or component on the target triage chose, a short rationale tied to the gates passed and the tests cleared, the self-review report at iteration size and above, optional saves to the project's system file, a `DECISIONS.md` entry at redesign sizes, and the handoff artifact when someone else receives the work. The build is presentable to a senior designer without apology. If it is not, a gate was skipped; go back and find which one.

## Closing

The gates are not bureaucracy. They are the discipline that separates signature from template, this product from any product, craft from retrieval. Skip them and you ship the same design every other model would ship from the same prompt. Run them and you ship work that could only have come from this brief, for this user, doing this verb, in this world, inside the system this project already has.
