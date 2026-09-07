# Layouts

A catalog of 32 named layout patterns, organized by intent register — editorial, dashboard, interface, landing. Each pattern has a name (so it can be cited), a when-to-use clause (so it can be picked), a structural description (so it can be built), an exemplar (so it can be studied), and a refusal-condition (so it can be ruled out). The catalog exists because layout is one of the highest-leverage decisions in any design and the failure mode is reaching for the most-default option without enumerating the alternatives — and an LLM is uniquely well-suited to enumerate alternatives where a human reviewer often finds 32 options paralyzing.

---

## Why a catalog

Layout decisions cascade. Pick the wrong layout for an editorial page and the type rules, the image rhythm, the whitespace strategy, and the grid all inherit the wrong constraint. Pick the right layout and the rest of the design feels inevitable, because every later decision is being made *inside* a structure that already serves the brief. The cost of reaching for the default layout (centered hero, three equal cards, sidebar-and-canvas) without enumeration is the cost the rest of the design has to pay later — usually as polish that can't quite cover the structural mismatch.

For an LLM, enumeration is cheap. Loading 32 patterns and surfacing the 4–6 that fit the brief takes a few hundred tokens; the user picks one and the design begins inside a defensible frame. For a human, enumeration is expensive — 32 options is overwhelming, and the human reviewer often defaults to "what I've seen before" because the search space is too big. This is exactly the asymmetry where the LLM's value compounds: enumerate widely, propose narrowly, let the human pick.

The discipline is: **enumerate at least three candidates from the relevant register, present them with the brief's verb in mind, ask the user to pick before any pixel decision happens.** Redesigns count as early-in-project — the layout decision is the first decision, not the last. Treating a redesign as "we'll just adjust what's there" is how redesigns drift back to the original layout; the only way out of a poor original layout is to walk the catalog cold, as if the project were brand new.

---

## How to use this catalog

Load this file at `commands/build.md` Gate 3 (Layout exploration) and `commands/plan.md` Gate 4 (Layout exploration). Filter to the register confirmed at the prior gate (brand → landing-page table; product → dashboard or interface table; editorial → editorial table). Read the eight patterns in that register. Pick three to five candidates that genuinely fit the brief — not the first three you read, but the ones whose when-to-use clauses match the project's verb. Present them to the user with one-line summaries and trade-offs. Wait for the pick before proceeding.

The catalog is opinionated. Eight patterns per register is calibrated to the same instinct that limits the design-gods to thirteen and references to eight: small enough to read in one sitting, dense enough that every entry earned its place. Patterns appear in this catalog because they recur across well-made shipping work AND because they are distinguishable from each other in structure — patterns that are minor variants of one another are folded into the same entry. If a brief asks for a layout that is not in the catalog, the answer is one of two things: the catalog should be extended (rare), or the brief is reaching for novelty instead of fit (common).

Pair the catalog with `grids.md` for the grid mechanics (column counts, gutter tokens, breakpoints, container widths) and with the relevant `styles/<style>.md` (today: `styles/editorial.md`) for the register-specific discipline that overrides product defaults. Layout sets the overall composition; grid mechanics and style discipline fill it in.

---

## Editorial — long-form, case studies, magazines, museum pieces

Editorial layouts make scrolling slow on purpose. The reader's pace is the design. The eight patterns below cover the discipline from print-derived (manuscript, two-up spread) to web-native (chapter-scroll, asymmetric split). Pick the pattern that fits the piece — a 12-minute case study and a 30-minute museum essay want different shapes.

| Pattern | When to use | Structure | Exemplar | Refuse when |
|---|---|---|---|---|
| **Rail-and-body** | Case studies with chapter structure; long-form with section labels | 3/9 or 4/8 split on a 12-col grid; small sans labels in narrow rail; body+figures in wide column | Work&Co/Lyft client work; Pentagram project pages | Piece is a single unbroken essay (no chapters) |
| **Single-column long-form** | Magazine essays, journalism, opinion pieces | Centered column at 60–75ch; figures break full-bleed; pull quotes break out laterally | NYT Magazine; The Atlantic features | Piece needs persistent navigation or KPI surfaces |
| **Asymmetric split** | Project narratives with strong hero imagery per chapter | 40/60 or 30/70 alternating; image-left text-right, then reverse for rhythm | Pentagram; Frog; Method | Piece is text-heavy with sparse imagery — the splits expose the missing imagery |
| **Magazine multi-column** | Print-derived web translations; dense narrative + figure rivers | 2 or 3-column body grid; figures span columns; pull quotes set in rules | Wired feature pieces; Eye magazine; CJR | Reading on mobile is a primary case (multi-col fights small screens hard) |
| **Manuscript grid** | Quiet, monumental long-form; book-like prose | Single block of body, near-full-width margins, oversized type, classical proportions | The Atlantic long-reads; Aeon; Granta | Piece needs structure markers (chapters, KPIs, navigation) |
| **Modular asymmetric** | Editorial pieces with mixed content rhythms (text + visuals + quotes + data) | Tschichold-style: mixed column counts per row, hierarchical, asymmetric | Eye magazine; It's Nice That; AIGA Eye on Design | Piece is uniform in its content shape — modularity adds noise without payoff |
| **Chapter-scroll** | Pieces with strong per-chapter hero imagery; case studies with milestone imagery | One viewport-height chapter; pinned hero image during scroll; body unfurls beneath | Apple Newsroom long-form; NYT projects; Bloomberg features | Piece is short (under five chapters) — pinning feels theatrical |
| **Two-up spread** | Print-edition translations; design annual entries | Two facing pages per scroll-snap; horizontal pagination; print-reader feel | Online editions of print magazines (Apartamento, T, Cabinet) | Piece is read on mobile primarily — two-up fights small screens |

The editorial catalog pairs with `styles/editorial.md` for the per-pattern type rules (three roles), color discipline (monochrome chrome), and density inversion. Layout sets the shape; the editorial style file fills it in.

---

## Dashboard — admin, analytics, ops, monitoring

Dashboards balance **density** against **scannability**. The eight patterns below cover the spectrum from rigid (Carbon 12-col) to fluid (zero-chrome canvas) and from list-first (split-panel) to overview-first (bento). Pick by the user's daily verb — "scanning for anomalies" wants a different shape than "completing a task queue" or "navigating a hierarchy."

| Pattern | When to use | Structure | Exemplar | Refuse when |
|---|---|---|---|---|
| **Bento grid** | Overview dashboards with mixed-weight metrics and content | Modular grid with mixed-size cells; col-spans/row-spans interlock; 3–5 hero cells | Notion home; Linear inbox overview; Apple Watch faces | All content is uniform weight — the grid degrades to a regular grid pretending to be a bento |
| **Carbon 12-col rigid** | Enterprise dense-data dashboards with persistent navigation | Left sidebar + top app bar + main 12-col content; symmetric, fixed-pixel | IBM Carbon; SAP Fiori; many financial-ops dashboards | Surface is read for under five minutes — Carbon is invisible furniture for long sessions, overkill for brief views |
| **Split-panel master-detail** | Inbox-style work; list-and-edit flows | Persistent list left (240–320px) + detail panel right (remainder); selection is the navigation | Apple Mail; Linear inbox; Stripe customers; Hey | Detail is shorter than one viewport — the split wastes the right panel |
| **Three-zone** | Deep authoring or inspector-driven tools | Left nav + main canvas + right inspector; all three persistent | Figma; Linear; many DAW interfaces; Notion's full editor with sidebars | User does one thing at a time — the inspector is dead weight |
| **Tabular workbench** | Data tables as the primary surface | Filters above; table fills width; row-click opens drawer or in-place expand | Stripe transactions; Snowflake worksheets; Retool grids | Cells are content rather than data (use card grid instead) |
| **Card grid auto-fit** | Mid-density overview where cards are equally weighted | `repeat(auto-fit, minmax(280px, 1fr))`; equal cards reflow by viewport | Vercel projects; GitHub explore; Notion gallery views | Cards have hierarchy (use bento instead) |
| **Zero-chrome canvas** | Authoring tools where the document is the surface | Whitespace-first; tools appear contextually on hover/selection; minimal persistent UI | Notion editor; Bear; iA Writer; Craft | Multiple parallel views are needed — canvas pattern fights split-panel needs |
| **Command-palette-first** | Power-user tools with deep keyboard navigation | Minimal top nav + main canvas; cmd+K palette is primary nav; sidebars on demand | Linear; Raycast; Superhuman; Arc | Users are first-time or infrequent — palette presumes muscle memory the user does not have |

---

## Interface — settings, forms, flows, in-app screens

Interface layouts cover the rest of product surfaces — settings, multi-step flows, lists, chronologies, geographic interfaces. The eight patterns below cover the most common interface compositions. Pick by the verb: "completing a single decision" wants a wizard; "configuring many properties" wants sidebar settings; "comparing across status columns" wants kanban.

| Pattern | When to use | Structure | Exemplar | Refuse when |
|---|---|---|---|---|
| **Wizard / step-by-step** | Linear flows with one decision per screen | Progress indicator + one decision + back/next; minimal context bleed | Stripe Checkout; passport-renewal flows; banking onboarding | User needs to compare across steps — wizard hides context |
| **Single-column form** | Short forms (5–15 fields); simple sequential entry | Stack of fields top-to-bottom; one column; submit at bottom | Stripe Checkout (signup); login flows; contact forms | Form has 30+ fields — single column becomes a scroll death-march |
| **Multi-column form** | Settings details with related fields paired | 2-column grid; related fields sit horizontally; submit at bottom | Apple System Preferences detail panes; GitHub repo settings; Notion property editor | Fields don't have natural pairings — pairs feel forced |
| **Sidebar settings** | Navigation across many setting categories | Categories list left + content panel right; URL routes per category | Apple System Preferences; GitHub Settings; Slack preferences; Linear settings | Categories are fewer than five (use tabs or single-page) |
| **Inbox / list-detail** | Flows where each item is read or acted on independently | List left or top; detail right or below; selection drives detail | Gmail; Linear inbox; Hey; Spark | Items are summary-only and never opened (use card grid instead) |
| **Kanban board** | Flow with discrete status columns | Columns per status; cards drag between; vertical scroll inside columns | Trello; Linear projects; Jira; GitHub Projects | Status is not the primary axis — kanban distorts the work |
| **Timeline** | Chronological work; activity feeds; project plans | Vertical (typical) or horizontal axis; events anchored to dates | Linear cycles; GitHub PR activity; Calendly; many Gantt views | Time is not the primary axis — timeline imposes a frame the work doesn't want |
| **Map + detail** | Geographic context as primary axis | Persistent map + overlay/sheet detail; selection on map drives detail | Airbnb search; DoorDash; Strava; Citymapper | Geography is incidental — map is decoration |

---

## Landing — marketing, campaigns, brand surfaces

Landing pages live in the brand register. The eight patterns below cover compositions from the AI default (centered hero, flagged for what it is) to genuinely earned alternatives. The discipline: never reach for centered hero by default. Walk the catalog; pick the pattern that matches the campaign's argument.

| Pattern | When to use | Structure | Exemplar | Refuse when |
|---|---|---|---|---|
| **Centered hero** | Restraint-as-statement brands; minimalist briefs that earn the symmetry | Centered headline + subhead + 1–2 CTAs; max-w-3xl; no asset OR centered asset below | Apple homepage (iconic); Linear (early product); Anthropic | Brief asks for personality — centered is the AI default, the most-templated landing pattern in 2023–2026 |
| **Asymmetric hero** | Most landing briefs that aren't restraint-as-statement | Text-left + asset-right (or reverse); off-center; 60/40 or 50/50 | Vercel; Cloudflare; Notion; Mercury | Asset is weak — asymmetric exposes the weak asset rather than masking it |
| **Split-screen 50/50** | Landings where the asset and the message share equal weight | Two equal halves stretching full viewport; statement + asset; sometimes interactive | Shopify; Stripe; some Apple product launches | One side is significantly weaker than the other — equal weighting forces equal weight that doesn't exist |
| **Full-bleed cinematic** | Product reveals; launches; emotional tentpole moments | Hero image or video fills viewport; copy overlaid or beneath; CTA below the fold | Apple product pages; Tesla; Rivian; Patagonia campaigns | Brand voice is restrained or technical — cinematic feels overcorrected |
| **Editorial scroll** | Manifesto landings; long-form opinion-as-positioning | Long-form prose-style scroll; chapter-style sections; large quotes; argumentative voice | Stripe Atlas; Cloudflare's principles pages; Mercury blog as landing; Anthropic Acceptable Use | Brand wants "above the fold" sales — editorial is patient, sales-impatient brands lose readers |
| **Card-led** | Multi-faceted offers; SaaS with 3–5 distinct value props | Hero + 3–5 cards (problem/solution/proof) above the fold; further detail beneath | Most B2B SaaS landings; HubSpot pricing; Pipedrive | Brief asks for one bold claim — card-led dilutes a strong message |
| **Story scroll** | Narrative product reveals; stepped-message campaigns | Sequential viewport-height vignettes; pinned scroll moments; choreographed transitions | Apple AirPods Pro page; Airbnb hosting; Stripe Atlas | Story is short (three vignettes or fewer) — pinning feels theatrical |
| **Minimal-statement** | Confident brands with one big claim and one CTA | One claim (often single sentence at large scale); one CTA; optional asset; lots of space | Linear's old hero; Notion's hero; Anthropic homepage | Brand needs to support multiple value props — minimal-statement only carries one |

---

## The layout-exploration discipline

The catalog exists to be enumerated. The discipline at build time and plan time is **always present at least three candidates**, with one-line summaries and trade-offs, before picking one. The candidates are filtered to the active register and selected for fit against the brief's verb. Three is the floor; five is the bar. Below three, you have not enumerated; you have defaulted.

For each candidate, present:

- **Pattern name** (cited from this catalog)
- **One-line "when to use"** filtered to this brief's verb (not the generic clause)
- **One-line trade-off** (what this pattern costs, what it gains)
- **Exemplar matching the project's voice** (preferred) or the canonical exemplar from the table

Then ask the user to pick. State the inference if confidence on a single pattern is genuinely above 80% (rare on first build); ask via `AskUserQuestion` otherwise. Once the pattern is picked, the entire grid + composition + density discipline downstream is constrained by the choice, which is exactly the point. The cost of asking is one user-prompt; the cost of building inside the wrong layout is the cost of the rebuild.

**Redesigns count as early.** When the brief is "redesign this surface," do not preserve the existing layout by default. Walk the catalog cold, as if the project were brand new. The most common redesign failure mode is treating the original layout as the constraint when the original layout is precisely what the redesign needs to escape. If the user wants to keep the existing layout, they will say so explicitly; otherwise, the layout is on the table — and the LLM should make this explicit at the start of the redesign so the user can confirm or veto.

The catalog is also the source for the grid lens in `commands/review.md`. When reviewing existing work, identify which catalog pattern the surface is closest to, then ask: is this the right pattern for the register and the verb? Layout audits root in pattern fit, not in pixel-level alignment — the alignment is correct or wrong relative to the pattern, and the pattern is correct or wrong relative to the brief.

---

## Cross-pattern combinations

Some surfaces use one pattern at the page level and another at the section level. A landing page can use **asymmetric hero** at the top and **card-led** below the fold; a case study can use **rail-and-body** at the page level and a **two-up spread** for a particular comparison section; a dashboard can be **three-zone** at the canvas level and **bento grid** in the main panel. Cross-pattern combinations are valid when each pattern is doing a different job — the page-level pattern defines the chrome, the section-level pattern fills it. Cross-pattern combinations are slop when patterns are mixed because the designer couldn't pick one — the surface fragments and the user can't read the structure.

The discipline: pick the page-level pattern first. Walk the catalog at the page level, pick from three candidates, commit. Then, for each major section, ask whether a sub-pattern from the catalog fits — and only adopt a sub-pattern when the section's content asks for a different shape than the page-level pattern provides. Section-level patterns inherit the page-level grid; they don't introduce a competing grid.

---

## Image-shape as a layout parameter

Layout patterns interact with image shapes. The same pattern reads differently depending on whether the project's images are predominantly vertical (phone screens, full-page mockups), horizontal (desktop screenshots, panoramic shots), or square (feature details, balanced compositions). A `chapter-scroll` pattern with horizontal heroes feels cinematic; with vertical heroes it feels mobile-first and downward-driving. A `rail-and-body` pattern with square inline images feels balanced and modular; with mixed shapes it feels editorial and varied.

The image inventory at brief time should include not just *what* the images are but *what shape* they are. Three buckets — vertical, horizontal, square — and roughly how many of each. The layout pick at Gate 4 should be informed by that inventory, and the rhythm of shapes inside the chosen pattern should be a deliberate decision, not a default.

Pattern-by-shape pairings:

- **Mostly horizontal** images → patterns that reward wide heroes: `chapter-scroll`, `single-column long-form` with full-bleed breakouts, `rail-and-body` with horizontal fig moments
- **Mostly vertical** images → patterns that anchor vertical imagery: `asymmetric split` (image-left or image-right), twin-column with supplements (Pentagram-style), `rail-and-body` with vertical pull-outs alongside prose
- **Mostly square** images → patterns that benefit from balanced grids: `bento grid` (dashboards), `modular asymmetric` (editorial), `card grid auto-fit`
- **Mixed shapes** → patterns that rhythm across shapes: hybrid (`rail-and-body` with cinematic break), `modular asymmetric`, `magazine multi-column`

The discipline: don't force a horizontal-image project into a vertical-image layout, and don't force a vertical-image project into a horizontal-image layout. The layout serves the imagery, not the other way around. Where the inventory is mixed, the layout pattern should *consciously alternate* — image-shape variation becomes part of the design's rhythm, not a constraint to fight. Square images for balanced details, vertical images for mobile or hierarchy emphasis, horizontal images for cinematic moments. The contrast between shapes within a single piece is what gives the page its visual cadence.

When proposing layout candidates at Gate 4, also propose an *image-rhythm strategy* — which sections take horizontal heroes, which take vertical splits, which take square details, where the cinematic ultra-wide break lands. Without the rhythm strategy, the layout walks the catalog without committing to how the actual imagery lives inside it.

---

## Layout is iterative, not one-shot

The catalog walk at Gate 4 (plan) or Gate 3 (build) picks an *initial* layout, but image inventory shifts during a real project — assets get added, removed, swapped for substantially different shapes, or revealed to be lower-quality than first assumed. Each material shift is a signal to re-run the layout exploration. Skipping the re-check is how layouts drift out of fit with their actual imagery, and the failure mode is brutal: a layout that worked in the wireframe phase looks wrong when real assets land, and the build is rebuilt under deadline instead of being designed-around-the-imagery from the start.

The cycle:

1. **Initial pick** at Gate 4 (plan) or Gate 3 (build), based on the inventory at brief time
2. **Mock-fidelity inventory** at Gate 7 (build), logging the actual aspect ratios and counts as the contract
3. **First build** at Gate 9 (build), placing real images into the chosen pattern
4. **Iteration re-check** at Gate 10 (build) — has the inventory drifted from the Gate 7 contract? If yes, return to Gate 3 with the new inventory and re-run the catalog filter
5. **Review-time lens** at `/design-expert:review` — pattern-fit-to-imagery is a review check

The discipline: treat the layout pattern as **held loosely** until the build reaches "no material image changes pending" status. Don't refuse layout changes after Gate 9 simply because Gate 3 has already picked. Don't change layout impulsively either — the re-check happens when imagery has materially shifted, not when the model second-guesses itself.

**Material shifts that warrant a re-check (return to Gate 3):**

- An image's dominant aspect ratio changes (vertical → horizontal, square → vertical, etc.)
- The image count shifts by ≥30% (e.g., 6 images become 9, or 4 images become 2)
- A hero image is added or removed
- The quality tier of a key image changes (top-quality lost, mid-quality elevated to lead)

**Non-material shifts (don't re-check):**

- A vertical image swaps for another vertical image of similar dimensions
- A 16:9 hero swaps for a 3:2 hero (close enough that the layout absorbs it)
- Image content or color changes without aspect ratio changing
- Images get color-corrected, sharpened, or otherwise refined without resizing

The principle: imagery is the load-bearing input. Layout is a function of imagery, not the other way around. When the input changes materially, the function re-runs. When the input is stable, the function holds.

---

## Closing

Layout is the high-leverage decision because every later decision is constrained by it. Picking the right layout once means every grid, type, density, color, and motion decision downstream is being made inside a frame that already serves the brief. Picking the wrong layout means every later decision pays a tax — usually as polish that can't quite cover the structural mismatch. The catalog is the tool that turns layout choice from "what I've seen before" into "what fits this brief, picked from a survey of options." The discipline is the gate that makes sure the survey actually happens. When in doubt, walk the catalog cold. The model that surveys widely picks better than the model that defaults silently.
