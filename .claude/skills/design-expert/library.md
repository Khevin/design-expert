# Library

A curated reference of real-world quality examples and named anti-patterns for specific UI categories. Six categories, each with its own README. Read this index for the structure; tap into a category file when a current decision touches that surface.

---

## Why a curated library

Designers reach for inspiration when they don't know what to build, and the default destinations punish them for it. Dribbble rewards aesthetic novelty over production discipline. Pinterest aggregates without criteria. "I've seen something like this somewhere" is the failure mode most designs are made of, and the result is borrowed aesthetics without borrowed discipline — a surface that looks like it could have come from the same factory as a thousand others, because it did. The job of this library is to replace "where did I see that?" with a sentence that actually teaches: here are five products that do this category well, here is the discipline that makes each of them work, here are the named patterns to avoid. Curation is the gift. Aggregation is the noise that made the problem in the first place.

The library is not exhaustive. It is opinionated. Five examples per category, plus two or three anti-patterns, intentionally chosen for the principles they demonstrate rather than the comprehensiveness of the survey. More examples would dilute into a catalog and stop teaching; fewer would read as coincidence. The number is calibrated against the same instinct that limits `design-gods.md` to thirteen voices and `references.md` to eight references — small enough to read in one sitting, dense enough that every entry earned its place by sharpening a specific decision the designer is about to make. A list that tries to cover every option has refused to take a position, and a list that has refused to take a position has refused to teach.

The library pairs with `references.md` and reports to it. The references are broad-stroke and discipline-shaped: Linear, Stripe, Carbon, Pentagram — whose practice to study at the system level. The library is surface-specific: when you are working on a dashboard, a navbar, a table, a form, an empty state, a card, what does good look like for *this surface* and what tells should refuse to ship. References tell you whose discipline to study. The library tells you what good and bad examples of this specific component look like.

## The Do/Don't framing

Each category README is split in half. The first half is "What good looks like" — four to six quality examples drawn from real production work, each with a URL and a brief justification grounded in the design-expert files. The justification is the load-bearing part: a screenshot without a sentence about *why it works* trains the eye to mimic the artifact instead of the discipline, which is exactly the failure mode `references.md` warns against. The second half is "Anti-patterns" — two or three named patterns to avoid, drawn from `anti-slop.md` and adapted to the specific surface. Each anti-pattern has a name (so it can be cited in a review), a description (so it can be detected), and a replacement (so it can be fixed).

The structure is borrowed from Material Design's documentation tradition, which made the Do/Don't pairing the standard format for guideline writing across the field. It works because it teaches by negative space as well as by example — knowing what good looks like is half the discipline; knowing what to refuse is the other half. A reference list without anti-patterns can be misread as permission to copy. A list of anti-patterns without quality examples leaves you with no positive direction. Together they map the territory.

## The categories

The library covers six surfaces, chosen because they are the components most often shipped, most often defaulted on, and most often mistaken for solved problems. Each category file follows the same internal structure — Do half, Don't half, a short paragraph on how to use the category — so that scanning across categories is fast and the discipline of reading them becomes habit.

| Category | What it covers | Path |
|---|---|---|
| Dashboards | Full-page admin, analytics, and ops dashboards | `library/dashboards/README.md` |
| Navbars | Top nav, sidebars, mega menus | `library/navbars/README.md` |
| Tables | Data tables — sorting, filtering, density | `library/components/tables/README.md` |
| Forms | Forms — input, validation, submission | `library/components/forms/README.md` |
| Empty states | Zero states, first-encounter screens | `library/components/empty-states/README.md` |
| Cards | Content cards, summary cards, list cards | `library/components/cards/README.md` |

Read whichever applies to your current decision. Do not read all six in advance — the library is a lookup, not a reading list.

## The five research sources

The curated examples in each category README were drawn from five sources, plus first-party visits to gold-standard products. The sources are listed below with what each is best for, because no single source covers the territory and the gaps between them are where the curation work happens.

1. **Awwwards** — `awwwards.com/websites/dashboard/` and similar category browsers. Agency-grade winners, strong on craft and award-caliber visual ambition, sometimes leaning expressive over production-discipline. Use Awwwards to find the upper bound of what a category can be when the design IS the product.
2. **Mobbin** — `mobbin.com/explore/web`. A curated production-app pattern library, mobile-strong and web-thinner. Use Mobbin for production patterns at the mid-range — what shipped products are actually doing, not what agencies submitted to award shows.
3. **SaaSFrame** — `saasframe.io/categories/dashboard`. SaaS-specific filtered library with Figma sources alongside many of the entries. Use SaaSFrame when the surface is SaaS and you want to study structure as well as appearance.
4. **Muzli** — `muz.li/blog/best-dashboard-design-examples-inspirations-for-2026/` and adjacent curated lists. Curated journalism rather than algorithmic feed. Use Muzli for editorial framing of what is current and which trends have crossed from "novel" into "tell."
5. **First-party gold-standard products** — Linear, Stripe, Vercel, Notion, Plaid, Figma, Pitch. Visit the product directly. The actual production state of the art lives in the products themselves, not in screenshots of them. Use first-party visits to verify that a pattern still ships, still holds at scale, and still earns its place in the live surface.

The sources cover different registers. Awwwards leans expressive, Mobbin leans production, SaaSFrame leans structural, Muzli leans editorial, and first-party visits anchor the entire stack to what is actually shipping. The curation in each category README is the work of triangulating across these sources to find the examples that hold up under all five lenses.

## How to use the library

When you are about to make a decision about a specific surface — the structure of a dashboard, the behavior of a sidebar, the density of a table — open the category README first. Read the "What good looks like" half to calibrate your sense of the upper bound. Read the "Anti-patterns" half to know what to refuse. Then return to your decision with both anchored. The library is not a checklist; it is a calibration instrument. The point is to walk into the design moment with a clear sense of what production-grade looks like for this surface and what tells would betray the work as defaulted.

The library is not a template gallery. The discipline is the same one used with `references.md` — extract the principle, never the artifact. Linear's command palette is a signature element of Linear's product, born of Linear's specific user and Linear's specific velocity; copying it verbatim into a casual consumer app is templating, even though the source is great. The justification paragraphs in each category README exist precisely so that the principle is legible separately from the pixel. Read for why, design for your own product, refuse the temptation to lift.

## v1 / v2 imagery note

For v1, the category READMEs use remote-URL markdown image embeds where possible, with text descriptions where image URLs are not reliably fetchable. The textual curation — examples, justifications, anti-patterns, and the "how to use this category" paragraph — is the load-bearing layer and ships first. v2 is the imagery layer: localized PNG and JPG screenshots with explicit Do/Don't pairings in the Material Design guideline-image style, generated either via Claude-in-Chrome screenshot capture or a Playwright scrape script. The v2 work is deferred because the textual discipline is what teaches; the images are confirmation. Ship the words first, attach the pictures later.

## Closing

The library is curated, opinionated, and small on purpose. Five examples per category and two or three anti-patterns is enough to teach the discipline of the surface without becoming a survey course. Return here when you need to calibrate your sense of what good looks like for a specific UI category, and trust the curation to have done the filtering work already. The references file tells you whose practice to study. The pantheon tells you which voices to keep in the room. The library tells you, surface by surface, what to ship and what to refuse.
