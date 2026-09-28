# Composition

How a screen holds together: which things read as one group, which thing reads first, what every gap means, and where every edge sits. `grids.md` argues why the grid matters and `craft.md` why rhythm matters; this file turns both into rules a build applies and a measurement checks. When another file in this skill gives a different number for spacing, alignment, or type steps, the number here governs, and the project's design system governs this file.

---

## Why builds come out loose

A reader groups a layout before reading a word of it. Things that sit close together, look alike, share a boundary, or line up on one edge are seen as belonging together, and the eye settles on whatever stands out from the rest as the figure. These are the Gestalt laws of perceptual organization (Wertheimer, 1923; Koffka, 1935; common region from Palmer, 1992; uniform connectedness from Palmer and Rock, 1994), and a screen obeys them whether or not its designer did. When spacing, alignment, and styling say one grouping and the content means another, the reader has to work the structure out alone, and the product reads as sloppy even when every component in it is well made.

Most of this skill's gates push away from the default: intent, domain, signature, alternatives, the layout catalog. None of them make the parts cohere, and a build can pass every identity test and still group wrongly. So structure is decided before the first element, built in grayscale first, and measured in the rendered page; identity is judged afterwards, on a screen that already holds together.

---

## The Gestalt principles as build rules

| Principle | What the eye does | Rule on the screen | Check |
|---|---|---|---|
| Proximity | Reads near things as one group | Space encodes relationship: the gap inside a group is smaller than the gap around it, by at least one step of the spacing scale | Audit `proximity`; the ladder below |
| Similarity | Reads things that share size, weight, color, or shape as the same kind | One role, one style. Different roles differ on at least one strong channel. No near-misses: 15px beside 16px, weight 500 beside 600, or two grays a few points apart on one screen read as mistakes, not as hierarchy | Audit `type` |
| Common region | Reads things inside one boundary as a group, more strongly than proximity | A container only when proximity cannot carry the group: a repeatable unit the user acts on, or content that must separate from unlike neighbors. One level of containment inside a region; a card never holds a card | Audit `nesting` |
| Alignment and continuity | Reads things on one line as related, and follows edges | Every block edge sits on a column line or on its container's inset. Text in a column shares one left edge. Figures right-align on tabular numerals. Rows of mixed sizes align on baselines, not on box centers | Audit `edges` |
| Figure and ground | Picks one figure and lets the rest recede | One figure per view (rank 1 below), carried by size and contrast; surfaces step by the elevation scale in `craft.md`, never by a louder border | The real squint |
| Closure and connectedness | Completes shapes; reads things joined by a line as linked | Join a sequence with a rule, a shared band, or a connecting line before boxing it; a row, a stepper, or a timeline needs no card | By eye |
| Common fate | Reads things that move together as one | A group moves as one; stagger only the siblings of one list | By eye |
| Prägnanz | Prefers the simplest structure that fits | Fewer groups, fewer edges, fewer sizes. A view with twelve distinct left edges is read as twelve things | Audit `edges` and `type` counts |

---

## Spacing: one scale, one ladder

**The scale.** Use the project's spacing tokens. When there are none, use a 4px base with the steps 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128 or 160 for brand sections. Neighboring steps differ by a third to a half. Perceived difference grows with size (Weber's law), so 8 to 12 reads as a step and 16 to 20 does not; a scale whose neighbors sit closer than a third, such as 16, 20, 24 or 40, 48, makes gaps the eye cannot tell apart, and a gap that cannot be told apart from its neighbor encodes no relationship.

**The ladder.** Every gap answers one question: how related are the two things it separates? Five levels answer it. Map each level to a token of the system in use, write the map beside the grid spec, and use no gap that is not on the ladder.

| Level | Separates | Product | Editorial and brand |
|---|---|---|---|
| inset | content from its container's edge: button, cell, and card padding | 8–16 | 16–32 |
| tight | the parts of one element: icon and label, label and value, a title and its meta | 4–8 | 4–8 |
| related | siblings in one group: fields in a group, items in a list | 12–16 | 16–24 |
| group | groups inside a section: field groups, cards, a chart and its table | 24–32 | 32–48 |
| section | sections of the page: module rows, chapters | 48–64 | 64–128 |

Four rules come with the ladder, and the audit checks the first three.

- **Inside is tighter than around.** Each level sits at least one scale step above the level inside it, and section sits at least one and a half times above group. Siblings that stand closer to each other than their own parts do read as merged.
- **Padding holds its children.** A container's inset is at least the widest gap between its children; children closer to the container's edge than to each other read loose inside it. Between unbordered groups, the gap around a group is also larger than the padding inside it. A visible border or fill separates on its own, so bordered cards may sit one step closer to each other than their own padding.
- **A heading belongs to what follows.** The space above a heading is at least twice the space below it.
- **Density swaps the ladder; it never multiplies it.** A dense surface maps each level one step down the scale and an airy one maps it one step up. A multiplier yields 9.6 and 16.8 pixels, off the scale by construction.

**Line-heights sit on the base.** 12/16, 14/20, 16/24, 18/28, 20/28, 24/32, 32/40: every text box then lands on the same 4px rhythm as the gaps around it. A 14px line at 1.5 is 21 pixels, and nothing near it lines up.

---

## Hierarchy: rank before styling

Before building, rank every element in each view. Ranks are content decisions, so they are set once, at the inventory, and every alternative keeps them; alternatives differ in how they express the ranks, never in what matters most.

- **Rank 1, the figure.** The one thing the view exists to show or to ask for. One per view. The primary action sits inside it or beside it.
- **Rank 2, support.** Two to four things that explain or qualify rank 1: the secondary figures, the section headings.
- **Rank 3, detail.** What the user reads once they have decided to: rows, descriptions, values in a list.
- **Rank 4, chrome.** Navigation, metadata, captions, and the controls that are always there.

Emphasis follows rank and nothing else. Each rank differs from the next on at least one strong channel: size by at least one step of the type scale in use (`typography.md` names 1.25 and 1.333), weight by at least 200, or text contrast by one level of the four-level scale in `typography.md`. Size, weight, and position come before color: the first pass is built in grayscale, as Refactoring UI teaches, and when the hierarchy does not read without color, color will not fix it. Color then marks meaning (state, action, identity), and the accent stays near ten percent of the visual weight.

Budgets per view on a product surface: at most four text sizes plus one display size, two text weights plus one for numerals when the system has it, one accent hue, one primary action. Editorial and brand surfaces widen the contrast between sizes (`typography.md` § Type for case studies) and keep the counts. Rank 1 sits where the reading path starts: top left on a left-to-right product view, the head of the rail or the optical center on editorial and brand. Nothing of rank 4 sits above it except persistent chrome. A signature element takes a rank like any other element; a signature that outranks the figure is ornament.

**The real squint.** Blurring your vision is something a person can do and an agent cannot, so do it to the image. Capture the view with `filter: grayscale(1) blur(6px)` applied to the root element, or scale the screenshot down to an eighth, and write down the first three regions the eye finds. They are rank 1, then rank 2. When a rank 3 or rank 4 element wins, it carries too much size, weight, contrast, or color: take emphasis away from it rather than adding more to rank 1.

---

## The grid spec

Written before the first element: in the brief's Layout section (`modes/plan.md` Gate 7), or at the top of the page component when the work has no brief, and read from the system when the system already defines it. The region map is what makes the grid a decision rather than a declaration: it says which columns each region spans at each named breakpoint.

```text
grid:
  container:   1176px max (12 columns of 76 and 11 gutters of 24)
  margin:      stack 16 · split 24 · panel 48
  columns:     stack 4 · split 8 · panel 12
  gutter:      stack 16 · split 24 · panel 24
  breakpoints: stack < 640 ≤ split < 1024 ≤ panel   (named by what changes)
  baseline:    4
regions:
  summary: panel 1–8  · split 1–8 · stack 1–4
  aside:   panel 9–12 · split 1–8, below summary · stack 1–4, below
ladder (the project's token names):
  inset space-4 · tight space-1 · related space-3 · group space-6 · section space-8
```

In code, the page and its regions use CSS Grid bound to the spec: `grid-template-columns: repeat(var(--columns), minmax(0, 1fr))` with `gap: var(--gutter)`, and children placed by span or by line from the region map. A module whose contents must keep to the page's columns uses `subgrid`. Flexbox is for one-dimensional runs inside a cell: a toolbar, a row of pills, a label and its value. `repeat(auto-fit, minmax(…, 1fr))` suits a gallery of like items inside one region, where item edges need not meet the page's columns; it never builds the page skeleton, because its tracks answer to the item's width and not to the grid. Container queries change components; viewport queries change the page grid. A deliberate break happens once per surface and is written beside the region map (`grids.md` § When to break the grid).

---

## Measure, don't eyeball

A screenshot at the size it is usually read hides two to seven pixels of drift and a 15px label beside a 16px one, and in many sessions a screenshot is not available at all. The rendered page can be measured instead. `scripts/layout-audit.js` defines one dependency-free function, `designExpertLayoutAudit(options)`, which runs inside the page, reads computed styles and boxes, changes nothing, and returns a JSON report.

| Key | What it reports |
|---|---|
| `offScale` | Computed margins, paddings, and gaps that are not on the scale, grouped by value, with the properties and sample elements. Margins that center a box or push it aside are skipped |
| `edges.nearMiss` | Lines two to seven pixels apart where one of them is shared by two or more elements, sorted by how many share it: an element almost on an established edge. Marks placed by data (inline position, size, or custom properties) are skipped |
| `edges.offColumn` | Grid items and outermost card-sized boxes whose edges miss the column lines and their grid item's inset |
| `proximity` | `merged`: neighboring siblings closer to each other than their own parts, headings excepted. `loose`: a card-sized box whose padding is smaller than the widest gap it holds |
| `headings` | Headings with less space above than below, except where the parent hands out the space (a footer pinned by `space-between`) |
| `type` | Sizes and weights in view, near-miss sizes less than ten percent apart, counts over budget, line-heights off the base, near-identical grays |
| `nesting` | Card-sized boxes inside card-sized boxes; a fixed layer or an open dialog starts again |
| `overflow` | Horizontal page overflow and elements past the viewport's edge outside any clipping or fixed layer |

**Running it in Claude Code.** Read the script, then evaluate its source followed by one call with `javascript_tool` in the Browser pane or Claude in Chrome. The Browser pane runs page scripts on web pages, not on local files, so serve the page first.

```js
/* the contents of scripts/layout-audit.js */
designExpertLayoutAudit({ grid: 'auto' })
```

Without `scale`, the audit reads the spacing tokens from `:root` and falls back to the default scale above. `grid: 'auto'` takes the widest CSS Grid of four or more columns as the page grid; a selector names one, and `null` skips the column checks. `root` narrows the audit to one region, which is how an iteration audits only what it changed. `budget` resets the per-view counts for brand and editorial work, and `text: false` keeps on-screen text out of the samples on pages that show private data. In a headless browser, add the file as a script tag or evaluate its source over the DevTools protocol, then call the function in the page. Other harnesses use the page-script tool resolved in `harnesses.md`; where none exists, read the CSS against the scale and say in the report that the audit did not run.

Run it at every viewport the region map names and one pixel either side of each breakpoint. Every finding is fixed or recorded as a deliberate exception: a documented grid break, a mandated pattern, a measured optical adjustment. Read the report from the top: the drift shared by the most elements and the off-scale values with the highest counts are the ones a reader feels. The audit measures whether the declared structure is what rendered; it cannot say whether the ranks are right. That is the squint's job, and the reader's.

On the Figma path, the same checks read the frame tree: auto-layout on every frame that holds more than one child, gaps and padding bound to spacing variables on the ladder, frames placed on the layout grid, text styles from the library, where a near-miss style is a detached one.

---

## At each size

- **Touch-up and polish.** The change takes the ladder level and the rank of what it sits in. Afterwards, audit the changed element's parent region; a new gap or a new size needs a reason.
- **Iteration.** Write the ranks and the region map for the section before proposing. Audit and squint the section at every viewport it reflows at.
- **Surface and system redesign.** The full spec before the Gate 8 proposals; the audit and the squint at every named breakpoint and one pixel either side of it, before the council sees a screenshot and again before presenting.

---

## Closing

Signature makes a screen memorable; composition makes it legible. The first without the second is a poster nobody can work in, and the second without the first is a competent template. This skill asks for both, in that order: structure decided and measured, then identity judged. Pair this file with `grids.md` for the reasons, `craft.md` for rhythm and density, `typography.md` for the type scale, and `design-gods/muller-brockmann.md` for the discipline underneath all of it.
