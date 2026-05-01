# Components

Atomic patterns are the unit of consistency. Get the small contracts right and the system holds; let them drift and the product fragments one cell at a time.

## Why atomic patterns are the unit of consistency

The user does not perceive your design system as a system. They perceive it as repetition. A status pill that means "warning" must mean exactly the same thing on every screen — same yellow, same padding, same icon, same text weight, same hit area, same behavior on hover. The user is not consciously cataloging this. They are absorbing a pattern and using it to predict the next encounter. The first time they see the pill, it teaches. The second time, it confirms. By the tenth time, the pill has become a word in their working vocabulary of your product. When the eleventh pill is slightly off — a subtly different yellow, four pixels of extra padding, an icon that wasn't there before — the word breaks. The user cannot articulate what changed, but their model of the product fragments. Trust evaporates without ever surfacing as a complaint.

This is why components are not "reusable code." They are agreed-upon contracts about meaning. The contract for a status pill is: this color, paired with this icon and this label, means exactly this thing. The contract for a Lucide icon is: this glyph, at this size and stroke weight, means exactly this concept across the product. The contract for a chart is: this shape carries this question; if your data is a different shape, this is the wrong chart. The smaller the contract's surface area, the more important the precision — because the smaller it is, the more often it repeats, and repetition is where drift compounds. The trap is treating these atoms as cosmetic. The user spends seconds on your page layout and minutes on your status pills, your icons, your numbers. Get the layout slightly wrong and the user adjusts. Get the atoms wrong, repeatedly, and the user concludes your product is sloppy without ever knowing why.

## Cells: status, pills, tags, badges, notifications

Cells are the densest signal in any data interface. A single dashboard view can carry thirty status pills, forty tags, a dozen inline notifications, and a sidebar of badge counts — all on one screen, all at once, all competing for the same eye. If each one is slightly different, the screen becomes noise. If each one obeys the same contract, the screen becomes legible. This layer is where the system either delivers its promise or quietly betrays it. There is no middle ground in dense UI; either the cells are coherent and the user reads the dashboard at a glance, or they are incoherent and the user reads each cell one at a time, slowly, while the cognitive cost stacks.

A status pill has a small, fixed anatomy. Vertical padding sits between four and six pixels; horizontal padding sits between eight and twelve. Type is twelve to fourteen pixels — small enough to live inside a row, large enough to read at a glance. Border radius is four to six pixels for tags and badges; a fully pill-shaped `9999px` radius is wrong for dense data because it eats horizontal space and reads as marketing rather than tooling. An icon, when present, sits to the left at twelve to fourteen pixels, never decorative — only when it carries semantic weight (a check for success, a triangle for warning). No drop shadows. No gradients. No borders thicker than one pixel. The pill is a mark, not an object. The moment a pill starts looking like a button, the user starts trying to click it.

The tag shares the anatomy with a different job: it labels a thing categorically rather than communicating state. Tags are interactive (clickable, removable) where pills are informational. A removable tag carries a small `X` icon to the right at twelve pixels, with a hit area that exceeds the visible bounds. Badges are smaller — a count or single character on a parent like a navigation item — sixteen to eighteen pixels diameter, type at ten to twelve. Inline notifications are the largest in this family — a banner padded sixteen pixels, carrying icon, title, body, and optional action. They are louder because they must interrupt; everything else in this family must blend.

Status color semantics are not negotiable. They are the alphabet of the system. State the meanings explicitly, in prose, and never let a designer or engineer "borrow" a color for the wrong meaning because it looks nice on a particular screen.

| Color | Meaning |
|---|---|
| Red | Critical, error, blocking, destructive |
| Yellow / amber | Warning, caution, pending action, attention required |
| Green | Success, active, healthy, complete |
| Blue | Info, neutral-positive, in-progress |
| Gray | Neutral, inactive, archived, disabled |
| Purple | One product-specific state — reserved for "this is special" |

Purple is the reserved slot. It does not mean "category five" or "another team's status." It means one specific thing in your product — perhaps "AI-generated" or "premium" or "experimental" — and it means that thing everywhere. The temptation to use purple as a generic seventh color is how systems collapse. If you have more than six categorical states, you do not have a status system; you have a taxonomy problem, and you should use tags or labels instead.

Density rules govern how cells coexist. One status pill per row in a table — the pill goes in its own column, not crammed next to the title or floating in the metadata. Status earns its column because the user's primary scanning question is often "what is the state of this thing?", and an isolated column lets the eye answer the question down the column without reading any other field. Pills do not stack vertically inside a single cell; if a thing has two states, you have a data model problem disguised as a UI problem — pick the dominant state and let the secondary one live in a tooltip or detail view. Tags can stack horizontally, but cap at three visible with a `+N` overflow indicator; rows that wrap to a second line break the rhythm of the table.

Carbon's status semantics, drawn from IBM's Carbon Design System, are the right starting point for enterprise and dense-data UI: an inbox, an admin console, a deployment dashboard, a case management tool. Carbon was built for that register — high information density, professional users, eight-hour sessions, high stakes. It is the wrong starting point for marketing pages, consumer apps, lifestyle products, or anywhere expressiveness matters more than density. A meditation app borrowing Carbon's grays will feel sterile. A trading terminal borrowing a consumer app's pastels will feel unserious. Adapt Carbon's *patterns* — its semantic structure, its discipline around one-pill-per-row, its anatomy — to your own tokens. Never blind-copy Carbon's grays and call it design. The patterns are the gift; the colors must be yours.

Brand surfaces and product surfaces play differently here. Product surfaces — dashboards, inboxes, settings, anything the user lives in — should hold tightly to the six-color status semantic system above. Brand surfaces — landing pages, marketing campaigns, pitch decks — can use wider, more expressive color systems because they are encountered briefly and decoratively. A brand page can have a teal "this is interesting" pill that does not need to participate in the product's status alphabet. The discipline is keeping the registers separate: never let a brand color leak into the product's semantic system, and never let the product's semantic system flatten the brand's expressiveness.

## Lucide icons — and the no-emoji mandate

Emojis are not UI. State this once and refuse to revisit it. The reasons are mechanical, not aesthetic. An emoji renders differently on every operating system, browser, and font — a fire emoji on macOS is not the same glyph as the fire on Android, Windows, Twemoji, or Noto Emoji. The icon you carefully placed in a button is now sometimes a flame, sometimes a candle-flame, sometimes a cartoon, sometimes a pixel sprite, depending on the user's device. You cannot tint an emoji. You cannot change its stroke weight. You cannot match it to your brand. Its visual weight relative to surrounding text varies because emoji fonts ship their own metrics that fight your typography. Screen readers announce emojis by their CLDR name — "fire," "warning sign," "white heavy check mark" — which may not match the meaning you intended. The result fragments across users, fights your brand, defies your typography, and sometimes communicates the wrong thing to assistive tech. There is no version of "we use emojis as UI" that is professional. Drop them. Use icons.

Lucide is the chosen icon library. It is open-source, comprehensive — over a thousand icons, still growing — consistent in stroke construction, well-named, and ships with first-class support across React, Vue, Svelte, Solid, and vanilla web components. Pick Lucide once at the system level and use it everywhere. Do not mix Lucide with Phosphor or Heroicons or Material Symbols on the same product — the visual rhythm of the system depends on every icon coming from the same hand.

Sizing is a scale, not a guess. Every icon in the product picks a tier from this scale and sticks to it; nobody picks `17px` because it looked right that day.

| Size | Use |
|---|---|
| 12–14px | Inline with text, dense table cells, tight chips |
| 16px | Buttons, form labels with icon-left, navigation items |
| 18–20px | Primary navigation, sidebar items, page-level headers |
| 24–28px | Feature cards, empty-state thumbnails (still small) |
| 32–48px | Empty-state illustrations, large feature highlights (use sparingly) |

The two-pixel gap between sizes — twelve to fourteen, eighteen to twenty — exists for context: the smaller value sits in dense data, the larger where the icon must register at a glance. Icons larger than forty-eight pixels belong in brand surfaces or empty states, not in the working interface.

Stroke weight is the parameter most teams ignore and the one that most defines the product's feeling. Lucide ships with a default stroke of two pixels. The full system runs from 1.5 to 2.5 in quarter-pixel increments, and each weight carries a register.

A 1.5 stroke is refined and editorial — light, considered, magazine-like. Right for content-driven products, brand surfaces, reading apps. A 2.0 stroke is the default for general SaaS — clear, neutral, hard-working. Most product UI lives here. A 2.5 stroke is technical and assertive — right for developer tools, terminals, dense engineering UIs where icons must read against high information density. **For Lais and Lastro, the forced default is 1.75.** This is not a compromise between 1.5 and 2.0; it is a specific choice that matches Red Hat's stroke weight in our typographic system. The icons must visually rhyme with the type. A 2.0 stroke against Red Hat reads as heavier than it should; 1.75 sits in register. Within a single product, pick one weight and use it everywhere. Flipping between weights mid-product is the icon equivalent of flipping fonts mid-paragraph.

Semantic mappings are where most icon systems decay. The discipline: one canonical icon per concept, across the entire product, forever. Do not flip between `Trash` and `Trash2` mid-feature. Do not let one engineer pick `Pencil` for "edit" while another picks `Edit3` on a different screen. Maintain the mapping in a project file and treat additions as a deliberate decision, not a casual import.

| Concept | Icon |
|---|---|
| Edit | `Pencil` |
| Delete | `Trash2` |
| More actions | `MoreHorizontal` |
| Search | `Search` |
| Filter | `Filter` |
| Settings | `Settings` |
| User | `User` |
| Notifications | `Bell` |
| Calendar | `Calendar` |
| Check / confirm | `Check` |
| Close / dismiss | `X` |
| Navigate back | `ArrowLeft` |
| Navigate forward | `ArrowRight` |
| Move up | `ArrowUp` |
| Move down | `ArrowDown` |
| Link | `Link` |
| Download | `Download` |
| Upload | `Upload` |
| Copy | `Copy` |
| Share | `Share2` |
| Info | `Info` |
| Warning | `AlertTriangle` |
| Error | `AlertCircle` |
| Success | `CheckCircle2` |
| Loading | `Loader2` |
| Expand | `ChevronDown` |
| External link | `ExternalLink` |
| Home | `Home` |
| Inbox | `Inbox` |
| Grid view | `LayoutGrid` |
| List view | `List` |
| Favorite (utility) | `Star` |
| Favorite (emotional) | `Heart` |

The rule: pick from this canonical mapping; if you need a concept not on the list, add it to the project's mapping file before using it. Never `import { Trash } from 'lucide-react'` directly in a feature — import from a project-level icon file that re-exports the canonical choices. This makes the contract enforceable in code review and renders future migration trivial.

Accessibility is not optional. Every icon used as UI gets either a visible label or an `aria-label`. An icon button with no text needs `aria-label="Delete row"`; an icon paired with text inside a button needs `aria-hidden="true"` so the screen reader doesn't read it twice. Truly decorative icons — rarer than teams think — get both `aria-hidden="true"` and `role="presentation"`. Touch targets are forty-four pixels by forty-four pixels minimum, per WCAG 2.5.5 (Target Size). A sixteen-pixel icon button has fourteen pixels of padding around it; the icon is small but the hit area is large. Skipping this is the most common accessibility failure in otherwise well-designed products.

Stroke weight can flex by register, the same way density does. A brand-editorial surface can adopt 1.5 stroke icons even inside a product whose interior runs 1.75. A developer-tools section nested in the product can run 2.5 if the surrounding density justifies it. The whole product picks one default; deviations are deliberate moves into a different register, never accidents.

## Charts and data visualization

Most data visualization is wrong. Not aesthetically wrong — mechanically wrong. The chart answers a different question than the user asked, or it answers the right question with a shape that fights perception. Choosing a chart is not taste; it is matching shape to data and question. When the match is right, the chart is transparent — the user sees the answer, not the chart. When wrong, the user has to compute the answer in their head while looking at decorative geometry. Almost every "this chart looks good but I cannot figure out what it's saying" moment is a type-mismatch problem.

Walk the decision tree mechanically. Continuous time series, one or a few series, focus on shape of change — line. Continuous time with accumulation or volume — area, line filled below. Discrete categories compared — bar, vertical when categories have time-like ordering, horizontal when labels are long or order is arbitrary. Discrete categories composing a whole — stacked bar, never pie or donut. Two continuous variables, "is there a relationship" — scatter. Distribution of a single variable — histogram for shape, box plot for summary. Geographic — choropleth or symbol map. Hierarchies of magnitude — tree map, sparingly.

| Data shape | Chart |
|---|---|
| Continuous time, one or few series | Line |
| Continuous time, accumulation | Area |
| Discrete categories, comparison | Bar (vertical or horizontal) |
| Discrete categories, parts of whole | Stacked bar — NOT pie, NOT donut |
| Two continuous variables, relationship | Scatter |
| Distribution | Histogram or box plot |
| Geographic | Choropleth or symbol map |
| Hierarchy of magnitude | Tree map (sparingly) |

**No pie charts. No donut charts. Ever.** This is a hard rule. Cleveland and McGill's 1984 work on graphical perception — the foundational study of how humans read chart shapes — established that the eye is dramatically better at judging length than angle or area. Bars present differences as length, the easiest visual encoding humans process. Pies present the same data as angles, several steps lower in the perceptual hierarchy. Donuts strip out the center, which gave even the pie a faint length cue. Every comparison a user makes on a pie chart, they could make faster and more accurately on a bar chart with the same data. The defense of pies is always aesthetic; aesthetic is not a serious argument when the user is trying to read a number. Stacked bars do the parts-of-a-whole job with the perceptual advantage intact.

Bar chart Y-axis baseline is zero. Non-negotiable. The whole reason bars are easy to read is that the eye uses length as a proxy for value, and length only proxies value when bars start at zero. A truncated baseline — starting at 80 instead of 0 — makes a bar that should be twice as tall look six times as tall. The chart is lying, regardless of intent. Line charts are different: the user reads slope, not absolute height, so a labeled non-zero baseline is acceptable when change matters more than magnitude. Even then, label the truncation visibly.

Stacked area is right for continuous, additive data over time. It is wrong for monthly buckets. Monthly data is discrete — twelve points, not a continuous curve — and stacked area implies values flow across month boundaries. Use stacked bar for monthly buckets. The shape change forces the chart to tell the truth about the data's discreteness.

The insight is the annotation. The chart is the evidence. Most charts in real products bury the lede: a beautiful line plot of revenue, a legend in the corner, no callouts. The user has to find the moment that matters alone. The fix is to label directly on the chart at the relevant point — "Q3 launch — 32% week-over-week increase" written as a small text label tied to the data point with a thin leader line. The annotation is the message; the line is proof. A separate legend panel is the worst version of this because it forces the eye to bounce between two regions of the screen, holding labels in working memory while comparing them to the chart.

Tufte's principle on chart junk applies above all. Every pixel that does not encode data must justify itself. Gridlines the eye doesn't need — gone. Axis tick marks duplicating gridlines — gone. Drop shadows on bars, 3D extrusion, background gradients in the plot area — never. The data-ink ratio should be high; the chart should look almost spare. Sparse charts are not undesigned. They are designed to disappear so the data can speak.

Tabular numerals are mandatory for axis labels, data labels, and any number that aligns vertically. Use `font-feature-settings: "tnum" 1`. Without tabular numerals, the digits 1 and 4 have different widths, and a column of vertically stacked numbers becomes visual jitter that reads as misalignment even when values are correct.

The literature behind these rules is the foundation. Cleveland and McGill's "Graphical Perception" (1984) established the perceptual hierarchy — length, position, slope, angle, area — that explains why bars beat pies. Edward Tufte's *The Visual Display of Quantitative Information* (2001) codified data ink, chart junk, small multiples, and graphical integrity. IBM's Carbon Charts library is a strong starting point for component implementations, but a starting point, not a binding choice — the principles travel; the implementation should match your system's tokens.

Brand and product split here too. Almost all real charts live in the product. A landing page that wants to communicate growth can use a chart shape, but it can also use a single big number with a delta, a hero photograph, or a structural visualization that is not a chart at all. Brand surfaces have permission to be expressive — a stylized chart shape that compresses or exaggerates for emotional effect is acceptable when the goal is to make a point, not enable analysis. Product charts must enable analysis. Mixing the registers — a brand-style chart inside a working dashboard — produces something decorative where it should be analytic, and the user pays for the confusion in mistakes.

## The integration rule

These three layers — cells, icons, charts — are where the user actually sees the system. The button that combines a Lucide icon with a status semantic, the table cell that pairs a pill with a sparkline, the empty state that combines an icon with a single sentence and a primary CTA — these compositions are where the system either holds together or fragments. Each is a tiny contract, and the product is the sum of the contracts kept.

The discipline is short and unforgiving. Pick once and apply everywhere. Let semantic meaning travel intact — red means error here, red means error there, red never means "highlight this fun thing" because it looked good in a single screenshot. Never let cosmetic preference override the contracts the components carry. When someone says "this color isn't quite right for this case, let me adjust just this one," the system is one step closer to average. The case where the contract feels wrong is almost always a case where the data model is wrong or the screen is asking the wrong question — fix that, not the cell. Components are how the system survives growth. Either they hold, or the product becomes another competent-looking thing the user has seen before.
