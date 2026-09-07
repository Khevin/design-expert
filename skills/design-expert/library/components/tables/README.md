# Tables

Tables are the densest signal in any product UI. A single screen can carry a thousand rows, a dozen columns, six status states, four filter dimensions, and a bulk-action bar — all competing for the same eye, all rendered in the same square inch of pixels. Most fail at scale. They fail because the team treated the table as a layout problem instead of a craft problem: equal column widths, status crammed into the title cell, proportional digits that wobble down a numeric column, a horizontal scrollbar that orphans the user three columns from where they started. Table craft is the test of whether a designer understands density. If the cells, pills, icons, and numbers from `components.md` cannot survive a thirty-row inbox, the system isn't a system — it is decoration that hasn't been stress-tested. And the discipline `craft.md` calls density (context-specific, tunable, matched to the verb) lives or dies inside the table row.

## What good looks like

Good tables start with tabular numerals. Every number that aligns vertically — totals, dates, counts, currencies, durations — must be set with `font-feature-settings: "tnum" 1`. Without it, a `1` and a `4` have different widths, and a column of vertically stacked numbers becomes visual jitter. The user reads jitter as "something is off" before they read the values. `components.md` makes this non-negotiable for charts; the rule is identical for tables, and arguably more important, because a table is a chart with the geometry stripped away. The numbers *are* the picture.

Good tables put status in its own column. One status pill per row, sized between four and six pixels of vertical padding and eight to twelve horizontal, twelve-to-fourteen-pixel type, four-to-six-pixel radius. Never crammed next to the title. Never two pills stacked in one cell — that is a data-model problem disguised as a UI problem, and `components.md` is explicit: pick the dominant state, send the secondary one to a tooltip. Status earns its column because the user's first scanning question is almost always "what is the state of this thing?" An isolated status column lets the eye answer the question down the column without reading any other field. The first column is frozen on horizontal scroll — usually the row name or identifier — so the user never loses orientation when the table is wider than the viewport. Row hover is subtle (a few percent of lightness, never a dramatic fill); selection is distinct from hover and uses an active-row treatment, not a checkbox color flip masquerading as state. Sortable columns carry a visible sort indicator, not a hidden one revealed on hover. Filters live above the table as chips or dropdowns the user can see — not inside a "Filters" modal that hides what is already applied.

Density is a tunable, not a constant. `craft.md`'s slider — `--p-density` from 0.6 (packed) to 1.4 (airy) — applies first to tables. A user processing a hundred submissions an hour wants a thirty-two-pixel row; a user reviewing three contracts a day can tolerate forty-eight. The component is the same; the application differs. Loading states are skeletons shaped like rows, not centered spinners. Empty states inside the table speak two dialects: no-data-yet ("Add your first invoice") and filtered-to-empty ("No results match these filters — clear filters"). Bulk-action UI appears only when rows are selected, hovers above the table head, and exposes one primary action plus a small overflow menu. Brand surfaces and product surfaces split sharply here: tables are product, period. There is no editorial register for a thousand-row deployment list.

## Quality examples (Do)

### Linear's issue list

`https://linear.app`

The exemplar of compact dense list design. Each row carries identifier, title, status, priority, assignee, project, cycle, and labels — eight fields in roughly thirty-two pixels of vertical real estate, no field cramped, every field scannable. Status sits in its own column with a single icon-pill pattern. Priority uses a positional indicator rather than a verbose label. Cites `components.md` (one-pill-per-row, status earns its column) and `craft.md` (density discipline matched to the verb of "triage issues fast").

### GitHub's pull request list

`https://github.com/pulls`

Production-grade row design under load. Each PR carries author avatar, title, repo, branch, CI signal, review state, comment count, and timestamp. The CI signal is a six-pixel dot in semantic color — green, yellow, red — not a verbose badge. Review state pairs an icon with a count. The row is dense without being cramped because the typographic hierarchy does the work: title at the dominant weight, metadata at a muted secondary, CI status as a single non-textual mark. Cites `components.md` (status semantics, one mark per concept).

### Stripe Dashboard payments table

`https://stripe.com/docs/dashboard`

Financial-grade table with tabular numerals, frozen first column (date or payment ID), and status pills that obey strict semantic color. Every digit aligns vertically; every currency cell right-aligns; every status uses the same green-yellow-red-blue-gray alphabet across the entire dashboard. The column for amount is positioned consistently row to row so the eye can scan a single column down without horizontal saccades. Cites `components.md` (tabular numerals, status alphabet) and `foundations.md` heuristic 1 (visibility of system status — every payment's state is unambiguous at a glance).

### Carbon Data Table component

`https://carbondesignsystem.com/components/data-table/usage/`

The design-system documented baseline. Carbon's data table ships with density variants (compact, short, medium, tall, extra-large), built-in keyboard navigation, accessible sort indicators, and one-pill-per-row status structure. The documentation is the closest thing to a written-down contract for what a serious data table is. Cites `components.md` (Carbon as the right starting point for enterprise-density UI; adapt patterns, not colors).

### Vercel deployment list

`https://vercel.com/dashboard`

Runtime-status-heavy list. Each deployment row carries a status indicator (Ready, Building, Error), branch, commit hash, actor, environment, and a relative timestamp. Timestamps are tabular ("3m ago," "2h ago") and right-aligned. The status indicator is a pill in its own column, never inline with the deployment name. Cites `components.md` (status earns its column) and `craft.md` (subtle layering — the row hover is whisper-quiet, not dramatic).

## Anti-patterns (Don't)

### The proportional-font numbers

Numbers set in a font without `tnum` enabled, so a column of stacked digits wobbles vertically. The user perceives misalignment as "something is wrong with the values" even when the values are correct. Cites `components.md` (tabular numerals are mandatory) and the typographic discipline `craft.md` demands at the token layer.

### The status badge in the title cell

Status crammed next to the row name with a small colored dot or a parenthetical "(active)." Forces the user to read each title to find the state. Defeats the entire reason status exists as a category. Cites `components.md` (one status pill per row, status earns its column).

### The horizontal-scroll table without a frozen first column

Table wider than the viewport, no frozen column, so the user scrolls right and immediately loses track of which row they were reading. Three columns in, they are looking at numbers attached to no name. Cites `foundations.md` heuristic 1 (visibility of system status — the user must always know where they are in the data).

### The pie chart in a table cell

A micro-pie or donut sparkline crammed into a row to "show composition at a glance." It does the opposite. The same no-pie-no-donut rule from `components.md` applies at table scale, made worse by the cell-sized rendering that compresses already-poor angle perception into ten pixels of nothing. Replace with a horizontal stacked bar or a single percentage value in tabular numerals.

### No skeleton loading; spinner instead

A centered spinner where a row-shaped skeleton would communicate "rows are coming, here is their shape." Spinners hide the structure of the page; skeletons preserve it. Cites `foundations.md` heuristic 1 (loading states are status, and status must be visible) and `craft.md` (subtle layering applies to absent content as much as present content).

## How to use this category

When designing or reviewing a table, calibrate against the Do half first — does your table sit in the same register as Linear's issue list, GitHub's PR list, or Stripe's payments table? Does it earn the same scanning verbs? Then run the Don't half as a checklist: tabular numerals on, status in its own column, first column frozen, skeleton loading, no pie cells, no badge-in-title-cell. If any item fails, the table is not yet shipping-ready.
