# Cards

Cards are the most over-used pattern in modern product UI. A `<div>` with padding and a hairline border is the cheapest unit of organization a designer can ship, so cards become the answer to every "how do I show this content" question — and the result is card soup. Every screen a grid of identically-rounded boxes, every section a container, every list item a separate surface, hierarchy replaced with borders and typography replaced with elevation. `craft.md` is explicit on the failure mode: "cards are not required, and most layouts are over-carded. Spacing and alignment create visual grouping naturally." `anti-slop.md` names the structural sibling: nested boxes inside boxes, centered KPI rows of three equal cards, the bento grid with empty corner cells. A card is not a default. It is a strong claim that the content inside it is a unit. If the content is not actually a unit, the card is lying.

## What good looks like

A card earns its container by being self-contained, repeatable, and hover-able. Self-contained means the card carries everything needed to act on it — title, status, metadata, primary action — without forcing the user to look elsewhere. Repeatable means the pattern recurs in lists or grids, so the eye learns the anatomy once and reuses the model. Hover-able means there is something to do — open, expand, edit, navigate — and the hover state communicates that affordance precisely. A card with no hover behavior on a clickable surface is broken. A card with a glowing ring on a static info surface is theater. The hover state is the contract: it tells the user this thing is interactive, and what kind of interactive.

`components.md` frames atomic patterns as agreed-upon contracts about meaning, and cards are the largest atom most products ship. The contract for a card is: this container holds a unit of work, the unit is consistent across instances, and the elevation of the surface matches its role in the layering scale. `craft.md` puts cards near the top of the surface stack — `surface-100` sitting on the canvas, with overlays climbing from there. That is exactly one step above the canvas, never two cards deep into a stack of containers. Card-on-card is almost always wrong. The inner card is a section that wanted spacing and a heading, not another border. Strip the inner container, replace it with vertical rhythm, and the outer card breathes.

Brand register and product register split here as cleanly as anywhere. A marketing card on a landing page can carry a hero illustration, a generous radius, a confident gradient — encountered briefly, encountered decoratively, the air is the voice. A product card in a working dashboard must be quiet. Compressed padding, hairline border, restrained color, content-first hierarchy. Mixing the registers — a full-bleed marketing image inside a working card, a 9999px radius on dense data — produces costume on tools. Asymmetric layouts also routinely beat the equal-grid default: a primary card spanning two columns with secondary cards stacked beside it carries hierarchy that `repeat(3, 1fr)` flattens. `anti-slop.md` flags three equal feature cards as a top-tier tell because the layout is a reflex, not a decision.

## Quality examples (Do)

### Linear's issue card in board view (linear.app)
Compact, restrained, hover-revealing. Title leads, labels and assignee sit in tertiary positions, the priority pill earns its column. Hover reveals quick actions without animating the card itself. This is the atomic-pattern discipline `components.md` asks for: every card on the board obeys the same anatomy, so the eye reads thirty issues at a glance.

### Vercel's deployment card (vercel.com)
A production-grade product card. Branch name, status pill, actor avatar, time-since metadata, all in a single horizontal rhythm. Hover reveals "Visit" and "View logs" actions; the card itself stays still. The status pill follows the semantic alphabet `components.md` defines — green for ready, yellow for building, red for error — and earns its position because state is the user's primary scanning question.

### GitHub's repo card (github.com)
Minimal almost to the point of invisibility. Repo name as the only emphasis, description in muted body, star count and language indicator in tertiary. The card barely registers as a container — most of the work is done by spacing and type weight, which is exactly the `craft.md` lesson on subtle layering. The border disappears until you need to understand structure.

### Stripe's payment summary card (stripe.com)
Financial cards demand restraint, and Stripe's dashboard pattern delivers it. Tabular numerals (`tnum` on, per `components.md`) align the figures down the column, the status pill carries one semantic state, the amount leads in display weight while the metadata sits quiet. No decorative iconography. The card communicates trust because it refuses to decorate the numbers.

### Notion's page card in database views (notion.com)
A configurable content card — page title plus selected properties, with the user choosing which properties surface. The pattern works because the anatomy is consistent regardless of configuration: title leads, properties stack in a defined order, the card height varies with content rather than being forced to a uniform grid cell. This is the rhythm-not-uniformity move from `craft.md`.

## Anti-patterns (Don't)

### The three equal metric cards
`repeat(3, 1fr)` of KPI / value / trend cards on every dashboard, every screen, every fold. `anti-slop.md` ranks this as a top-tier layout tell, and `craft.md` explains why: every metric weighted equally is no hierarchy at all. Working memory holds about four items, and hierarchy is how you spend that budget — one primary metric at display scale, two or three secondary metrics smaller, the rest in a table. Three equal cards is a reflex, not a decision.

### Card-on-card-on-card
A card containing another card containing a section box. `anti-slop.md` calls this the prison of containers — the model's instinct to compartmentalize each piece of content as its own surface. The replacement is structural: strip the inner containers, replace them with vertical rhythm and a heading. The squint test catches it instantly — blur the screen, and if hierarchy still reads with the inner boxes gone in the blur, the inner boxes were noise.

### The decorative-icon-on-every-card-title
Every card title prefixed with a Lucide topic icon — a chart icon for "Leads por canal," a clock for "Leads por horário," a bar chart for "Leads semanais." `anti-slop.md` names this directly as a project-specific cliché. The icons don't disambiguate, the stroke widths drift across cards, and the canonical Carbon dashboard pattern doesn't use them. Per `components.md`, one icon per concept and only when it carries semantic weight — a topic icon next to a title that already says "Leads" carries nothing. Drop them.

### Carbon's card component (caution)
Carbon Design System documents a card component with full anatomy guidance, and the patterns travel — semantic structure, density rules, status placement. But cards are also a candidate for "anti-overuse." Carbon's reference dashboards lean heavily on cards as the unit of dashboard composition, and a junior designer copying the pattern wholesale ends up with the card-grid problem `craft.md` warns about. Take Carbon's anatomy and density discipline; reject the reflex to wrap every section in another card. The pattern is the gift; the over-application is the trap.

## How to use this category

Reach for a card only when the content is a self-contained, repeatable, hover-able unit — and reject the reflex when it is not. For everything else, replace the container with rhythm: spacing from the 4pt scale, a heading at one weight up, a hairline rule when separation is genuinely needed. Run the squint test on any layout with three or more cards in a grid — if the cards dissolve and the hierarchy still reads, the cards were noise. If hierarchy collapses without them, you have a typography problem the cards were hiding. Either way, the card was not the answer.
