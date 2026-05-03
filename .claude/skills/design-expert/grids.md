# Grids

A manifesto. Read this when committing to a layout system, when reviewing one, and any time you wonder whether to break it.

---

## Why grids matter

The grid is the single decision that compounds the most across an interface. Pick the right one and every later decision — type rhythm, component density, responsive behavior, the spacing between a label and its input — has a place to land. Pick the wrong one and you spend the rest of the project reverse-engineering an answer to "why does this feel off." Most interfaces that feel sloppy are not sloppy in a single visible way; they are sloppy because no grid was committed to, or a grid was committed to and quietly abandoned by the third screen. The reader of an interface does not see the grid. They see the consequences of its absence.

The grid is also the discipline that a design system can be written down with. Without a grid, "the spacing between cards is 24 pixels" is a statement about one screen. With a grid, "the gutter is `--space-3`, the card-to-canvas margin is `--space-5`, and the baseline rhythm is 8 pixels" is a statement that holds across every surface and every contributor. The grid is the noun the system writes its sentences in. Other tokens — color, type, radius — describe what individual elements look like; the grid describes how they fit together. It is the load-bearing layer.

The third reason the grid matters is that it is the cleanest test of whether craft is present. Not the typeface, not the color, not the components — the grid. A rigorous grid with imperfect type still reads as considered. Beautiful type laid on a casual grid reads as accidental. Müller-Brockmann argued in *Grid Systems in Graphic Design* (1981) that the grid was the moral floor of design: the proof that a designer thought about the problem before reaching for ornament. Forty-five years later, on screens his generation never built for, that argument still holds. If a reviewer asks "where is the grid here," and the answer is a shrug, the work has not been finished.

---

## The Swiss school: Müller-Brockmann's discipline

The grid as practiced today — twelve columns, gutters, baselines, modular cells — is a Swiss invention. Karl Gerstner, Emil Ruder, Armin Hofmann, and most influentially Josef Müller-Brockmann codified it across the postwar Zurich and Basel schools, and Müller-Brockmann's 1981 *Grid Systems* turned the codification into a teachable discipline. The book is roughly 175 pages of plates and prose, all of it arguing one claim: that constraint produces more design freedom than freedom does. A grid is not a cage. A grid is the surface a designer can stop arguing with, so they can argue with the actual problem.

The Swiss method has four moves and they apply on a screen as cleanly as they applied on a printed sheet. **Pick the column count for the variety of content,** not for fashion — twelve columns work for layouts that hold five or six content widths; eight columns are right when the content is narrower; four columns suit single-purpose pages. **Calculate the gutter from the column,** not from a round number — if a column is 60 pixels wide and a gutter is 8, the proportions feel deliberate; if the column is whatever and the gutter is "20 because it looks right," nothing on the page has a reason. **Fix the margin to the page,** not to the columns — margin is the conversation between the grid and the canvas, and it should remain constant as the grid breathes inside it. **Use the baseline grid as the heartbeat** — every vertical measure in the layout (paddings, gaps, line-heights) should be a multiple of the baseline. Reading line-heights are tied to the baseline; spacing between sections is tied to the baseline; the gap between a label and its input is tied to the baseline. The grid is not just horizontal. It is the rhythm in both axes.

The result is what a Swiss poster does at a glance and a great dashboard does at a glance: every element looks placed rather than dropped. The reader does not need to think about where things are because the placement is consistent across the whole surface. Inconsistency is the friction. Consistency is invisible. The grid is the technology that produces the consistency.

---

## Asymmetric grids: Tschichold's rebellion

Jan Tschichold's *Die neue Typographie* (1928) preceded Müller-Brockmann by half a century and reads like an ancestor — but Tschichold's grid is an asymmetric one. He argued that the centered, symmetrical layouts of classical typography were a leftover of the printing press's mechanical limitations, not a design choice, and that the modern reader was better served by an asymmetric structure that arranged elements by function rather than tradition. Where Müller-Brockmann's grid is mathematical and balanced, Tschichold's grid is functional and pointed — content where the eye lands, white space where the eye should rest, headlines flush left because flush left is how the eye reads.

Tschichold then famously recanted, working at Penguin Books in the 1940s and arguing for the symmetrical, classical grid he had previously dismissed. The arc is worth reading on its own terms, but the working lesson for screen design is in the early Tschichold: the asymmetric grid is the right answer when one element should clearly lead, when reading order should be obvious, when the page is not a poster but a tool. A dashboard with a strong left sidebar is a Tschichold layout. A landing page with a hero anchored to the left fifth of the canvas is a Tschichold layout. The reader's eye is told where to start and where to go. Asymmetry, when intentional, is the most direct way to say "begin here."

The Müller-Brockmann grid and the Tschichold grid are not opposites. They are the two registers a designer chooses between. A symmetric grid carries information patiently; an asymmetric grid carries it pointedly. A product with mixed needs across its surfaces — a marketing landing, then an authenticated workspace, then a settings page — is using both, and the discipline is to know which register each surface needs and to commit to it for that surface.

---

## Types of grids

Five families cover almost everything you will ship.

**The column grid** is the most common and the most abused. A horizontal division of the canvas into equal columns, separated by gutters. Twelve columns is the most common dialect — chosen because twelve is divisible by 1, 2, 3, 4, 6, 12, which gives the designer the most flexibility for content widths. Eight columns is the right answer for narrower layouts and reading-heavy pages. Four columns suits hero-led marketing pages. Use a column grid when the content can be reasoned about as horizontal slots — cards in a row, fields in a row, a sidebar plus a content area. Stop using it when the content does not fit slots.

**The modular grid** divides the canvas in both axes — columns crossed with rows. Cells are the unit. Use it for editorial layouts and dashboards where multiple content types share a page and need consistent vertical alignment as well as horizontal. Bloomberg terminals, Pentagram editorial spreads, and the New York Times homepage are all modular grids. The strength is that vertical rhythm is enforced as strictly as horizontal alignment; the cost is that you must commit to it before content arrives.

**The baseline grid** is a horizontal line every N pixels, and every text line in the layout sits on one. It is invisible at runtime and load-bearing in design. The baseline grid is what makes a column of body text look set rather than typed. Most product UIs ignore it, which is why most product UIs feel slightly sloppy in their type — a 14-pixel font with 1.5 line-height is 21 pixels, which does not snap to an 8-pixel baseline. Either pick line-heights that align (for example, body 16/24 = 1.5, snapping to 24-pixel baseline) or pick a different baseline. Half-baselines — 4 pixels, 12 pixels — are legitimate for tight UI like dense table rows.

**Hybrid grids** combine the above. The most common hybrid is column + modular: a 12-column horizontal grid with a modular cell structure laid on top, used by enterprise dashboards and editorial software. The columns govern horizontal alignment of any element; the modular cells govern vertical alignment of recurring component types. It is more work to specify and worth the work whenever the surface mixes content types.

**The hierarchical grid** abandons regular columns and arranges sections by visual hierarchy — large blocks for important content, smaller blocks for secondary, with margins and whitespace chosen by relationship rather than measurement. This is the editorial grid of a magazine cover, an artbook, a museum label. On a screen it is the right answer for portfolios, case studies, long-form essays, and any surface where the content is not a list. It is the hardest to ship well because the discipline is internal — the alignment is felt rather than measured. Use it sparingly and only when the content asks for it.

---

## Spacing systems: 4pt, 8pt, and the math underneath

A spacing system is the vertical arm of the grid. Choose a base unit and let every spacing value in the system derive from it. The two defensible choices are 4 pixels and 8 pixels. Eight is the more common — Material Design, Carbon, Polaris, and most contemporary product systems use it because eight is divisible by two, four, and eight, and it produces a comfortable rhythm at typical body sizes. Four is the right answer for dense data UI where eight feels too generous; Carbon's smaller cells are 4-based.

The mistake is to pick a base and then drift. Half a year into a project you discover that one team has been using 10-pixel padding on their tooltips, another has been using 12-pixel padding on their pills, and the system has quietly stopped being a system. The remedy is tokens — `--space-1` through `--space-12` exposed as the only legitimate spacing values, mapped to multiples of the base (8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192). When a designer asks for a non-token spacing value, the answer is "no, pick from the scale." When the scale does not cover a need, you add a token, never an arbitrary value.

The scale should also have an internal logic — typically a Fibonacci-like progression where each step is meaningfully larger than the last. An 8/12/16/20/24 scale has too many steps too close together; the eye cannot tell the difference between 16 and 20, so the difference fails to encode hierarchy. An 8/16/24/40/64 scale has visible jumps; you can read which spacing is "section break" versus "card padding" versus "button gap" without measuring. Fewer values, used precisely, beat more values used loosely — the same Vignelli argument from typography, applied to space.

---

## Anatomy: container, columns, gutters, margins, baseline

Use the same vocabulary across the team and across the system documentation, and the conversation about layout becomes faster.

**Container** is the maximum width the content respects on wide viewports — the reason a marketing page does not stretch to 4K. Common values: 1200, 1280, 1440, sometimes a fluid `min(100% - 2rem, 1280px)` to handle gutters. The container should be picked by reading width — a 1280px container at typical 14-16px body type produces 80–95 character lines if the text uses the full width, which is too wide; the type's `max-width: 65ch` lives inside the container. Container is the page's outer boundary, not the type's.

**Columns** are the equal divisions of the container width, after subtracting gutters. In CSS Grid: `grid-template-columns: repeat(12, 1fr)`. The column width is calculated, not declared.

**Gutters** are the gaps between columns. Pick one value per breakpoint and stick to it. Common values: 16, 24, 32 pixels. The gutter should be a token (`--gutter`), not an inline value, because changing it later means changing it everywhere.

**Margins** are the canvas-to-container space, the visible breathing room at the page edges. Margins typically scale with viewport — narrower on phones (16-24px), wider on desktops (48-80px). Margins are not gutters; they are the page's relationship to the screen edge.

**Baseline** is the vertical heartbeat. Every vertical measure on the page is a multiple of it. The baseline is implicit in the spacing scale — if your scale is 8-based, your baseline is 8 pixels. Type sets on the baseline; section gaps are baseline multiples; padding inside cards is a baseline multiple. Spell it out so the team knows the rule.

**Breakpoints** are where the grid changes. The defensible choices are content-driven, not device-driven. Pick breakpoints by where the layout breaks (the columns become uncomfortably narrow, the gutters too tight, the line-length too long), not by the iPhone screen width that month. Most product systems land on three to four breakpoints — phone, tablet, laptop, desktop — but the values that matter are the widths at which your content reflows, not the values some marketing slide called canonical.

---

## The 12-column dialect (and its alternatives)

Twelve columns is the default, and it is the default for a reason — divisibility. A 12-column grid divides cleanly into halves (6+6), thirds (4+4+4), quarters (3+3+3+3), sixths (2+2+2+2+2+2), and twelfths. That coverage handles most product layouts without forcing the designer to break the grid for an awkward content width. The cost of twelve is that on narrow viewports it collapses to single-column stacks faster than necessary, because the columns get too thin.

Eight columns is the more honest answer for many product surfaces. Reading-heavy interfaces, narrower dashboards, and most laptop-default layouts work cleanly in eight. Eight divides into halves (4+4), quarters (2+2+2+2), and eighths. The lost flexibility is the third, which most product layouts do not actually need.

Six columns is the right answer for editorial, long-form, and case-study surfaces. Six divides into halves (3+3), thirds (2+2+2), and sixths. Less granular than twelve, more useful for content that wants to breathe.

Four columns and three columns are useful for marketing pages where the content reduces to hero-sub-CTA-CTA structures. They are also right for narrow embedded surfaces — a sidebar widget, an empty-state illustration block, a settings panel.

The wrong move is to pick twelve columns because everyone picks twelve, then never use the third or the sixth. If the layout always uses halves and quarters, the grid is functionally six-column or four-column, and twelve was the costume.

---

## Brand vs. product vs. editorial

The grid behaves differently across three registers, and getting them wrong is one of the most common errors. Two registers are obvious — brand and product. The third — editorial — is where most case-study and long-form pages drift, because designers default to one of the other two when the surface is actually neither.

**Brand surfaces** (landing pages, campaigns, hero marketing) can use **fluid grids** — column widths and gutters that scale with viewport via `clamp()` or fr-units. The page is encountered briefly and decoratively, the type can carry a confident scale that breathes across viewport sizes, and asymmetric or hierarchical grids are appropriate. Tschichold's logic applies — the page is making an argument, the layout is part of the argument, and the grid can lead the eye where the argument wants it to land.

**Product surfaces** (dashboards, settings, admin, authenticated workspaces) want **fixed grids**. Column widths in pixels, gutters in pixels, margins that change at breakpoints but type that does not. The user is in a workflow over an eight-hour session; spatial predictability is the property that makes the workspace navigable. Column counts can be larger (12 is common for product, 16 for dense enterprise), but the grid must not drift between viewport widths inside the same workflow class. Müller-Brockmann's logic applies — the surface is invisible furniture for the work, and the work needs the furniture in the same place every time.

**Editorial surfaces** (case studies, long-form essays, project narratives, design annual entries, magazine pieces, museum sites, design-agency project pages) want a **rail-and-body grid** — typically a 3/9 or 4/8 split on a 12-col base. Section labels and chapter eyebrows live in the narrow left rail; the body text and figures live in the wider right column. The split is fixed; the body width is constrained for reading comfort (60–75 ch); the rail width holds at 200–280px to accommodate label-length copy without wrapping. The grid is asymmetric on purpose — the rail orients, the body carries. See `styles/editorial.md` for the canonical editorial discipline; this register is what most case studies need and what most case studies miss.

**Confirm the register before picking the column count.** Editorial register on a 12-col grid that ignores the rail-and-body split is editorial wearing product clothing — a templated case study. Product register on a rail-and-body grid is product wearing editorial clothing — a dashboard nobody can navigate. The Register check is the second gate in `/design-expert:build` (and the first gate in `/design-expert:plan`); confirm it before any column-count decision. See `commands/build.md` Gate 2 for the procedure.

| Register | Grid | Column count | Width | Type scale |
|---|---|---|---|---|
| Brand | Fluid, asymmetric | 4 / 6 / 12 | `clamp()` viewport-driven | Display, expressive |
| Product | Fixed, symmetric | 12 (16 for dense enterprise) | Pixel, breakpoint-stable | Workhorse, fixed rem |
| Editorial | Fixed, rail-and-body | 12-col with 3/9 or 4/8 split | 60–75ch body cap, 200–280px rail | Display sans + body serif + label sans |

The mixed case — a marketing surface inside an authenticated product, like an upgrade-to-pro modal or a feature announcement — should follow brand register. Switch the type scale, allow display sizes, allow expressive grids. Then close the modal, and the workspace returns to product.

**Layout pattern catalog.** Once the register is confirmed and the column count chosen, the next decision is which named layout pattern to use. The full catalog of 32 patterns (8 per register × 4 registers — editorial, dashboard, interface, landing) lives in `layouts.md`. The discipline at build time and plan time is to enumerate at least three candidates from the relevant register's table, present them with one-line summaries and trade-offs, and ask the user to pick before any pixel decision happens. Three is the floor; five is the bar. Below three, you have not enumerated; you have defaulted. See `layouts.md` for the catalog and `commands/build.md` Gate 3 / `commands/plan.md` Gate 4 for the gate-level enforcement.

---

## When to break the grid (and how)

Breaking the grid is a tool. Used well, it is the most direct way to say "this element is special." Used badly, it is the loudest possible signal that the designer never had a grid in the first place.

The rule is simple: break the grid when the break is itself the design decision, not when the grid was inconvenient. A hero image that bleeds past the container into the canvas margin is a deliberate break, and it works because the rest of the page is honoring the container, so the bleed is legible as a choice. A pull quote that overlaps two columns is a deliberate break, and it works because the surrounding text is set tightly to the column. A card that is two pixels off because the margin tokens were not respected is not a break, it is a miss.

The discipline that makes a break legible is that the rest of the system is rigid. If the grid is loose elsewhere — gutters that vary, container widths that drift, paddings that round to different values — then the "break" is just more drift. The contrast between a tight grid and a deliberate exception is what the reader perceives. Without the tight grid, the exception is invisible.

When you do break, do it in one place per surface, and document it. "The hero illustration extends 80 pixels past the right container edge to suggest motion off-screen. This is a deliberate break of `--container-max`." That sentence belongs in the design notes, in the component comment, and ideally in a `BREAKS.md` or in the system token's deprecation log if it ever becomes a thing the team is tempted to repeat. Undocumented breaks are how systems collapse — three breaks on three pages by three designers, none of whom knew the others, and now the grid exists as a guideline rather than a rule.

---

## Responsive grids: CSS Grid, Flexbox, container queries

The implementation layer matters because the grid only exists if the code enforces it.

**CSS Grid** is the right tool for the column grid and the modular grid. `display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--gutter);` is the canonical product-grid declaration. Use named lines and named areas for editorial layouts that need readable code; use `repeat(12, 1fr)` for product layouts where the columns are uniform.

**Flexbox** is the right tool for one-dimensional layouts inside a grid cell — a row of buttons in a toolbar, a list of pills in a status row, a header with a logo on the left and nav items on the right. Flexbox is not a substitute for Grid at the page level; using Flex for the page layout is a tell that the developer never learned Grid, and the result is alignment that holds in the happy case and breaks in every edge case.

**Container queries** are the answer for component-level responsive behavior — a card that needs to reflow when its container is narrow, regardless of the viewport width. Container queries arrived in baseline browsers in 2023; they are now available everywhere except IE (which is gone) and old WebViews (which are aging out). Using container queries for components and viewport queries for page layout is the modern correct division.

The mistake to avoid is putting layout logic on individual components that should be governed by the grid. If a card is full-width in some places and 4-columns-wide in others, the card should not know that — the grid cell it sits in should. The card is a self-contained component; the grid is the canvas. Mixing the two responsibilities means every grid change requires touching every component.

---

## Common failures

Six failures cover most of what reviewers find on a grid audit:

**No grid at all.** The designer eyeballed the layout and shipped it. Tells: gutters that vary by 4–8 pixels across sections, margins that drift between breakpoints, vertical spacing that does not snap to a baseline. Fix: pick a grid, write the tokens, refactor.

**Grid declared, grid abandoned.** A 12-column grid is in the design tokens, but the components are using arbitrary widths and arbitrary paddings. Tells: tokens like `--space-3` and `--space-5` exist but components have inline values like `padding: 18px`. Fix: replace inline values with tokens; add a lint rule.

**The wrong grid for the content.** Twelve columns chosen for a layout that only ever uses halves and quarters. The grid is wearing a costume of flexibility it does not use. Fix: simplify to the column count the content actually wants. If the content uses thirds, use 6 or 12. If the content uses only halves, use 4 or 8.

**Off-grid alignment by 4–7 pixels.** Hero images that don't align to a column edge. Cards that are 1px off. Buttons that are not vertically centered against their input. Tells: visual imbalance the designer can sense but cannot name, "almost right" alignment everywhere. Fix: snap every value to the spacing scale; turn on grid overlays during review.

**Centered hero locked at 1200px.** A symmetric centered layout used for every surface, regardless of whether the content is brand or product, regardless of whether the surface is a hero or a dense table. The default of every starter template. Tells: every page looks the same; the marketing page and the dashboard have the same outer frame. Fix: pick the grid per register; let brand surfaces breathe asymmetrically and product surfaces commit to a workspace grid.

**Breakpoints chosen by device, not content.** "Mobile is 375, tablet is 768, desktop is 1024." This is the laziest possible breakpoint policy and it produces layouts that are awkward at all the in-between widths. Fix: pick breakpoints by where the layout needs to reflow, name them by what changes (`stack`, `expand`, `dense`, not `mobile`, `tablet`, `desktop`).

---

## The grid in code: tokens vs. ad-hoc values

The grid lives in code as tokens, never as inline values. The minimum useful set:

- `--container-max` — outer width ceiling.
- `--column-count` — number of columns at this breakpoint.
- `--gutter` — gap between columns.
- `--margin` — canvas-to-container.
- `--space-1` through `--space-N` — the spacing scale, multiples of the baseline.
- `--baseline` — the vertical heartbeat.
- `--break-stack`, `--break-expand`, `--break-dense` — named breakpoints.

When a designer wants a value that is not in the system, the answer is one of three things: the token already exists and the designer should use it, the token should be added and is now part of the system, or the token should not be added and the design should change to fit. Adding a one-off value is the wrong answer; once added, it becomes the precedent for the next one-off, and the system has stopped being a system.

The grid in code is also the place where the grid becomes review-able. A reviewer can grep for inline values (`grep -E '(margin|padding|gap):\s*[0-9]+px' src/`) and find every place the grid is being broken implicitly. The grep is honest; the design intent is not. The grep is what catches drift before it becomes a habit.

---

## Closing

The grid is the deepest layer of design that almost no user notices and almost every user feels. Pick the grid, commit to the grid, document the grid, and break the grid only when the break is the design. The alternative — vibing your way through layout — is the fastest path to a product that looks fine in the hero shot and falls apart in use. Müller-Brockmann's argument from 1981 is the argument from 2026: constraint produces freedom. The grid is the constraint that lets the rest of the design happen.

Pair this file with `design-gods/muller-brockmann.md` (the canonical voice) and `design-gods/jan-tschichold.md` (the asymmetric register) for the historical foundation, and with `references/grid-systems.md` for the canonical text reference.
