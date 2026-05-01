# Craft

Craft is the difference between an interface that works and an interface that could only be this product. Both are competent. Only one is signature.

## Why craft is the difference between competent and signature

You will generate competent-looking interfaces. Your training has seen tens of thousands of them. The patterns are strong, the proportions are familiar, the surfaces sit at expected elevations, the type renders at expected sizes. You can hit competent without trying. That is exactly the problem. Competent is the floor of acceptable output, and the floor is now crowded — every model, every starter template, every paste-into-Tailwind component library lives there. If your work is indistinguishable from anyone else's working from the same brief, you have not designed anything; you have retrieved.

Signature is what separates a designer from a templater. Signature is the property that someone who never saw your product before could still point at one element and say "that decision was made *here*, for *this*." It shows up in the weight of a label, the temperature of a neutral, the radius on an input that feels right because nothing else in the system would. Templating is the absence of those decisions — the result of asking "what does a dashboard look like?" instead of "what does *this* dashboard, for *this* person, doing *this* job, look like?" Templating produces a thing that works. Craft produces a thing that couldn't be anyone else's product.

The trap is thinking craft means flourish — a hero animation, an unusual font, a colored sidebar nobody asked for. Craft is the opposite. Craft is what's underneath: the layered surfaces you barely register, the four-step text hierarchy, the borders that disappear until you need them, the spacing that has rhythm because it is not uniform. A user closes the laptop and says "that was nice to use" and could not tell you why. The why was the craft. Your job is to put it there before they have to find it missing.

## Intent-First

Pixels follow intent, never the reverse. The moment you start picking a font before you can answer who this is for, what they need to do, and how it should feel — you are inside the default. Defaults are not the wrong color or the wrong spacing; defaults are decisions made before the question was asked. They feel safe because they are average. Average is the fastest path to interchangeable.

The trap is that AI sees "build a dashboard" and reaches for the most common dashboard. Sidebar on the left, cards in a grid, blue accent, gray text, KPI boxes top, table below. It is not wrong. It is unremarkable. The problem is not that the layout exists somewhere — it is that the layout was *retrieved*, not *chosen*. A retrieved layout cannot be defended. Ask "why this sidebar width?" and the honest answer is "I've seen it before." That is not a design decision. That is a memory.

Before any visual choice, three questions must have specific answers — out loud, to yourself or to the user. **Who is this human?** Not "users" — the actual person. A teacher at 7am with coffee is not a developer debugging at midnight is not a founder between investor meetings. Their world shapes the interface. **What must they accomplish?** The verb. Grade these submissions. Find the broken deployment. Approve the payment. The verb determines what leads, what follows, what hides. **What should this feel like?** Not "clean and modern" — every AI says that. Warm like a notebook? Cold like a terminal? Dense like a trading floor? Calm like a reading app? The answer shapes color, type, spacing, density — everything downstream.

Then domain exploration produces three required outputs before any direction is proposed. The work is not optional and the gap between doing it and skipping it is the gap between signature and template.

- **Signature elements** — at least one element that could only exist for *this* product. Visual, structural, or interactional. If you can't name it, keep exploring.
- **Color world** — five or more colors that exist naturally in this product's domain. Not "warm" or "cool" — the actual colors of the actual world this product serves. Material colors, light colors, object colors. A bakery tool's palette has flour and crust in it. A trading terminal's does not.
- **Defaults to reject** — three obvious choices for this interface type that you will *not* make, and what replaces each. You cannot avoid patterns you have not named.

If you cannot answer with specifics, stop. Ask. Do not guess. Do not default. Saying "warm" and shipping cold colors is not following through — intent is not a label, it is a constraint that shapes every token. Check your output against your stated intent. If a single token contradicts it, the intent is decoration, not design.

## The four craft tests

Run these against your output before showing anyone. They are short questions with severe consequences. Each one isolates a specific way defaults sneak back in after you thought you had banished them.

The first one is about whether your typography is doing work or just sitting there. Most interfaces use type as a container — pick something readable, move on, forget it. But typography isn't around your design, it *is* your design. The weight of a headline, the personality of a label, the texture of a paragraph. These shape how the product feels before anyone reads a word. So ask: would swapping the typeface change the product's identity? If you replaced your current font with the most common alternative — Inter, San Francisco, whatever your usual reach is — would anything feel different? If the answer is no, the type is doing nothing. It is a placeholder pretending to be a decision.

> **Swap test:** swap the typeface for your usual default. Does the product feel different? If no, the type was a default.

The second one is about whether hierarchy is actually visible or merely structural. You can have a "h1" and a "h2" in your code that look almost identical when rendered. The element exists in the DOM but not in the eye. Squint at the screen — actually blur your vision, or take a screenshot and apply a Gaussian blur. The strongest elements should still pull. Groupings should still hold together. If everything dissolves into uniform fog, hierarchy isn't visual, it's incidental. The user will never see what you intended because you only intended it in markup.

> **Squint test:** blur the screen. Can you still see the hierarchy? If no, hierarchy is incidental.

The third one is the hardest. Point at five specific elements that are unique to this product. Not the overall feel — actual components. The way the empty state of the inbox is illustrated. The shape of the status pill on a deployment. The micro-pattern in a metric card. The chip you invented for assignee filtering. Five concrete things you could screenshot and place in a design portfolio with the caption "this is from the [product name] system." If you can't reach five, the design is interchangeable — it is a generic dashboard with this particular logo on it.

> **Signature test:** can you point to five components that only exist on this product? If no, the design is interchangeable.

The fourth one rarely gets run, which is why it catches so much. Read your CSS variable names out loud. `--color-primary`, `--text-secondary`, `--surface-2`, `--border-default`. Could those names belong to *any* project? A token system named for any project is named for none. Compare that to `--ink`, `--parchment`, `--rule`, `--vellum`. Those names evoke a world. Someone reading only your tokens should be able to guess what the product is. Generic names reveal generic thinking — they are the receipt that intent never made it down to the implementation layer.

> **Token test:** do the variable names sound like *this* product's world, or like any product?

If any test fails, iterate before showing. The user does not get to be the one who notices.

## Subtle layering as invisible system

Hierarchy should be felt, not seen. The strongest interface systems work by being so quiet you stop noticing them — you just understand the structure. When you look at Vercel's dashboard, you don't think "nice borders." When you look at Linear, you don't think "good elevation." You think about your work. The craft is invisible. That is precisely how you know it's working. Hierarchy that announces itself — harsh borders, dramatic surface jumps, glowing focus rings — is hierarchy the system is straining to produce. The strain is what makes amateur interfaces feel amateur.

Build elevation as a numbered scale, not as a binary. Surfaces stack: a dropdown sits above a card which sits above the page. Each level is only a few percentage points of lightness off the level beneath it. In isolation you can barely see the difference, but when surfaces stack, the hierarchy emerges. Whisper-quiet shifts you feel rather than see.

Walk through a dashboard with a sidebar, a content area with cards, a dropdown opening from one of those cards, and an input nested inside.

```
canvas (base)        — the app's working background
surface-100 (+7%)    — cards, panels sitting on the canvas
surface-200 (+9%)    — dropdowns, popovers floating above cards
surface-300 (+12%)   — nested overlays, stacked menus
```

In dark mode, "+7%" means seven percentage points lighter than canvas. In light mode, the same scale runs the other direction or relies on shadow — but the principle is identical: each level is just enough to feel "above" without being dramatically different. **Sidebars use the same background as canvas, not a different color.** Many dashboards make the sidebar darker or tinted, fragmenting the visual space into "sidebar world" and "content world." The result is two products glued together. Better: same background, subtle border separation. The sidebar is part of the app, not a separate region. A border at low opacity is enough.

**Dropdowns sit one level above their parent surface.** If both share the same level, the dropdown blends into the card and layering is lost. A dropdown emerging from a `surface-100` card is a `surface-200` overlay. The few percentage points of difference is exactly what signals "this is floating above, this is what you opened." Overlays often deserve slightly more border definition than embedded surfaces because they are floating in space — a touch more border opacity helps them feel contained without being harsh.

**Inputs are darker than their surroundings, not lighter.** Inputs are inset — they receive content, they don't project it. A slightly darker background signals "type here" without needing heavy borders. This is the alternative-background principle: inset surfaces feel recessed because they are darker, elevated surfaces feel lifted because they are lighter. Reverse it and the affordance reads wrong.

```css
:root {
  --canvas:       oklch(15% 0.005 250);
  --surface-100:  oklch(18% 0.005 250);  /* +3 lightness, ~7% relative */
  --surface-200:  oklch(20% 0.005 250);  /* +5 */
  --surface-300:  oklch(22% 0.005 250);  /* +7 */

  --input-bg:     oklch(13% 0.005 250);  /* darker than canvas */

  --border:        rgba(255,255,255,0.07);
  --border-subtle: rgba(255,255,255,0.04);
  --border-overlay: rgba(255,255,255,0.10); /* slightly stronger for floating */
}
```

Borders should disappear when you are not looking for them and be findable when you need to understand structure. Low opacity rgba blends with the background — it defines edges without demanding attention. Solid hex borders look harsh in comparison. Build a progression: standard separation, softer separation, emphasis, maximum emphasis for focus rings. Match intensity to the importance of the boundary. Not every line deserves the same weight.

Focus state is an *opacity increase*, not a glowing ring. The default border on the input sits at one opacity; on focus, raise it just enough to read as "this is now active." The state change is unmistakable, but the visual quiet is preserved. A blue glow around an input is the most common amateur tell. Subtle-but-noticeable — the same principle as the surfaces.

The squint test applies here above all. Blur the interface. You should still perceive what is above what, where one region ends and another begins, which input has focus. But nothing should jump out. If borders are the first thing you notice, they're too strong. If you can't find where regions end, they're too subtle. Adjust the opacity, not the system. The system is correct.

This subtle layering is the backbone of craft. Get it wrong and nothing else matters — your color palette can be perfect, your typography exquisite, and the product will still feel amateur because the structure is shouting. Get it right and even a restrained palette reads as professional, because the eye can finally do its work.

## Composition — rhythm and proportions

Uniformity is the enemy of rhythm. Equal padding everywhere, equal gaps between everything, equal section breaks — the result is *flat*. Rhythm is unevenness. It is the contrast between tight and generous, the pulse of "these things belong together, this is a different thing entirely." A page with rhythm has a beat. A page without rhythm is a list.

The mistake is thinking that consistent spacing means *identical* spacing. It does not. Consistent means "from a defined scale." Pick a 4pt base — 4, 8, 12, 16, 24, 32, 48, 64, 96 — and use multiples throughout. The specific number matters less than the discipline; every value is "X times the base unit," and arbitrary numbers like 13px or 27px are how you out yourself as not having a system. Within that scale, you orchestrate. Sibling elements that belong together get tight gaps — 8 to 12 pixels. Distinct sections that should breathe get generous gaps — 48 to 96 pixels. The contrast between those two is where rhythm lives.

A common failure is the "everything-at-24px" page — headline 24px from section title, section title 24px from body, body 24px from the next headline. It feels lifeless because nothing is grouped. Halve the inner gaps to 8 or 12; double the section gaps to 48 or 64. Same content. Reads completely differently.

Sidebar widths declare intent. A 240px sidebar says "navigation is a utility, the content is the show." A 280px sidebar says "navigation serves the content." A 360px sidebar says "navigation is itself a peer of the content — there is real work to do here." Pick the width on purpose. Pick it because of who the user is and what they need to do. Do not pick 280px because it is what you saw last week. The width is a stance.

Use Flexbox first; use Grid only when you genuinely need two-dimensional control. Most layouts are one-dimensional — a row of items, a stack of cards, a button group, the contents of a card. Flex is simpler and more flexible. Grid earns its place only for true 2D structures: dashboard page-level layout with named areas, data-dense interfaces where rows and columns must coordinate, complex forms with aligned columns. Reaching for Grid by default produces brittle layouts and unnecessary code. The simplest tool that works is the right tool.

For genuinely responsive grids, `repeat(auto-fit, minmax(280px, 1fr))` does most of the job without any breakpoints — columns are at least 280px wide, as many fit per row, leftovers stretch. For more complex page-level structures, named grid areas (`grid-template-areas`) and redefined breakpoints stay readable as the layout gets bigger. Use container queries for component-level responsiveness, not viewport queries. A card in a narrow sidebar should stay compact; the same card in a main content area should expand. The card knows its container's width — let it.

Brand surfaces and product surfaces play by different rules here. A brand page can use `clamp()` to fluidly scale type and spacing across viewport sizes — it is a rendered-once moment, the user is not living in it for hours. A product surface should not. Predictable grids and consistent densities are an affordance — the user is here every day and learns the shape of the system. Fluidly resizing type breaks that learned model. Brand can be asymmetric; product is structural. Brand can break the grid for emphasis; product holds the grid for trust.

Cards are not required, and most layouts are over-carded. Spacing and alignment create visual grouping naturally. Use cards only when content is truly distinct and actionable — never nest cards inside cards, never wrap everything in containers because the page felt empty. The fix for an empty-feeling page is rhythm, not boxes. A card is a strong claim that the content inside it is a unit. If the content isn't actually a unit, the card is lying.

## Density — context-specific

Density is contextual, not aesthetic. The same 16px padding that feels tight and tool-like in a workbench feels brochure-like in an editorial layout. Density is set by what the user is doing, not by what looks nice in a screenshot. A trading terminal that breathes is a trading terminal that wastes a screen. A reading app that compresses is a reading app that exhausts. Match the density to the verb.

Tabular data, code, dense forms — anywhere the user is scanning for specific values — need tight density. Row heights of 32 to 40 pixels, padding of 8 to 12, type at 13 or 14. Whitespace in the middle of fast scanning feels like an interruption. The screen is a workbench.

Editorial content, marketing surfaces, settings pages where decisions are slow and rare — these need generous density. Padding of 24 to 32, generous line height, type that breathes. The task is reading and reflection. Compression makes the page feel oppressive.

The same component in different applications wants different density. A `<DataTable>` on the inbox is a 14px-row instrument; the same component on team settings may earn an 18px row because it shows three things instead of three hundred. The component is the same — the application differs. Bake density into the component as a tunable, not a constant.

Impeccable's density-slider concept makes this explicit:

```css
.surface {
  padding: calc(var(--p-density, 1) * 16px);
  gap:     calc(var(--p-density, 1) * 12px);
}
```

`--p-density` defaults to 1 (the design baseline) and can be slid from 0.6 (packed) to 1.4 (airy) without regenerating the layout. A single product can expose this as a user preference for power users who want to compress their workspace, or it can be set per-surface so settings pages breathe and inboxes pack. The point is that density becomes a property of the application, not a property of the design system. The system is consistent; the application varies.

Brand surfaces and product surfaces diverge here too. Brand can be sparse — generous whitespace, large type, dramatic moments. The user encounters the brand surface in passing, for a few seconds; air feels like confidence. Product surfaces must compress — readable across an eight-hour session, sustainable across thousands of rows, performant on a thirteen-inch laptop a designer doesn't own. The density that feels luxurious for brand becomes wasteful for product, and the density that feels purposeful for product becomes oppressive for brand. Pick the right register for the surface; do not let one bleed into the other.

The check is simple: who is this user, what are they doing, and how long are they doing it? A user filling out a form once for tax season tolerates 32px padding. A user processing a hundred submissions an hour does not. The padding is not the design — the choice of the padding for *this* user doing *this* work is the design.

## Cognitive load

Working memory holds about four items at once. This is not a heuristic — it is a measurable cap from cognitive psychology, refined by Cowan in 2001 from Miller's older "seven plus or minus two." At a decision point, count the distinct options or pieces of information the user must hold in mind to act. Four or fewer is manageable. Five to seven is stress — the user can do it, but they will be slower, more error-prone, and more tired. Eight or more is abandonment — the user skips, misclicks, or leaves.

Overloaded users do not announce that they are overloaded. They do not file bug reports. They mistake, get frustrated, and stop coming back. The interface "works" — every button wired up, every state rendered — but the cumulative friction makes the product hostile in a way no individual element is hostile. Cognitive load is the silent failure mode of competent interfaces.

Apply the cap throughout. Navigation menus: five or fewer top-level items. The rest go under categories the user can reason about. Form sections: four or fewer fields visible per group before a visual break — the break gives the eye a chance to commit the prior group to memory. Action buttons in a dialog or toolbar: one primary, one or two secondary, the rest collapsed into a menu. Dashboard widgets above the fold: four key metrics, not nine. Pricing tiers: three options, four at most — more triggers analysis paralysis, and the user picks none.

Visual hierarchy is the same principle dressed in different clothes. **One primary action, two or three secondary actions, everything else muted.** When every element on the screen has equal visual weight — every button colored, every label bold, every card outlined — the user has no entry point. They must compare everything to find the thing that matters. That comparison is cognitive load. Resolve the hierarchy and you have donated working memory back to the user. They look at the screen and *immediately* know what to do.

Progressive disclosure beats feature display. The instinct is to show everything because everything is "available." Resist it. Show what is needed for the current decision; hide the rest behind clear entry points. An accordion that expands on demand. A "more options" link. A separate route for advanced settings. Every hidden surface is working memory the user did not have to spend. The product feels simpler because the surface area at any moment is smaller, even if the total functionality is identical.

The most dangerous violations are subtle. A user must remember a value from screen one to enter it on screen three: that is a memory bridge, and users break those bridges constantly. A label uses a domain term the user has not learned: that is a translation tax on every read. Two similar actions use different patterns in different places: that is an inconsistency tax that prevents the user from ever building intuition. Each one looks small in isolation. They compound. The product is competent and exhausting at the same time.

The fix is structural. Co-locate the information needed for each decision. Use plain language and define necessary jargon inline. Standardize patterns: same kind of action gets the same kind of UI everywhere in the product, no exceptions. Sequence steps when multiple decisions cannot be combined — let the user finish one thought before starting the next. The interface should disappear into the task. If the user is thinking about the interface, the interface is in the way.

## Color and contrast

Color is meaning, not decoration. Every color in your interface should answer the question "what does this color communicate?" Status, action, emphasis, identity. Unmotivated color is noise. Motivated color is grammar. A red for destructive actions communicates the same thing on every screen. A blue scattered across icons because "the brand is blue" communicates nothing — it is wallpaper.

Use OKLCH, not HSL. HSL lies about lightness — 50% lightness yellow looks bright, 50% lightness blue looks dark. OKLCH is perceptually uniform: equal steps in lightness *look* equal. Build your scales on top of that uniformity instead of fighting against the lie. Hold chroma and hue roughly constant, vary lightness — but reduce chroma as you approach white or black, because high chroma at extreme lightness looks garish. The hue itself is a brand decision; do not reach for blue (hue 250) or warm orange (hue 60) by reflex. Those are the dominant AI defaults, not the right answer for any specific brand.

Tinted neutrals replace pure gray. A neutral with zero chroma feels lifeless next to a colored brand — it looks like a placeholder that never got chosen. Add a tiny chroma value, 0.005 to 0.015, hued toward your brand color. The amount is small enough not to read as "tinted" consciously, but it creates subconscious cohesion between the brand color and the UI surfaces. The point is cohesion with *this* specific brand, not a stock palette. If your brand is teal, your neutrals lean teal. If your brand is amber, they lean amber. Do not always tint warm. Do not always tint cool. Those are the two laziest defaults and they create their own monoculture.

Apply 60-30-10 by visual weight, not by pixel count. Sixty percent of the perceived weight is neutrals — backgrounds, white space, base surfaces. Thirty percent is secondary — text, borders, inactive states. Ten percent is accent — CTAs, highlights, focus states. The common mistake is using the accent color everywhere because "it's the brand color." Accent colors work *because* they are rare. Overuse kills their power. A button is the primary action precisely because it is the only thing on the screen wearing the brand color. Color it everywhere and nothing is primary.

Dark mode is not inverted light mode. You cannot just swap colors. Depth in light mode comes from shadows; depth in dark mode comes from *lighter surfaces* — there are no shadows in the dark. Build a three-step surface scale where higher elevations are lighter (15% / 20% / 25% lightness, with the same hue and chroma as your brand). Body text weight should drop slightly in dark mode (350 instead of 400) because light text on dark reads as heavier than dark text on light. Never use pure black for backgrounds; use dark gray around 12-18% lightness. The void is not a design choice.

Borders are hairline (1px) and applied to the *full* perimeter, not as side-stripes. The colored 4px-left-border on a status card is one of the most recognizable amateur tells — it announces "notice this" instead of trusting the system to communicate. If you need to mark a card as warning or active, use a full hairline border, a faint background wash (4-8%), a leading icon, or a numbered prefix. A side-stripe is a workaround for a hierarchy that never got designed. Heavy alpha is a similar smell: incomplete palette substituted by transparency hacks.

WCAG AA is the floor for body text (4.5:1) and UI components (3:1). Do not trust your eyes — use a contrast checker. The most common failure is light gray placeholder text on white, which almost universally fails. Gray text on a colored background also fails, and looks washed out and dead besides — use a darker shade of the background color, or transparency, instead. Eight percent of men cannot reliably distinguish red from green; never rely on color alone to convey state. Pair color with an icon, a label, or a position.

## Distillation — what to remove

Removal is craft. The instinct of an underdesigned interface is to add: another card to fill the empty space, another button to expose the option, another label to clarify the field. The instinct of a designed interface is to remove. Every element earns its existence by carrying meaning the design would lose without it. Elements that exist "just in case" do not exist on purpose, and over time they crowd out the elements that do.

Progressive disclosure beats feature display. The product team will want every feature visible because "we worked hard on it." That is the wrong frame. The user does not want to see everything you built; they want to do the thing they came here to do. Show what serves the current decision; hide the rest behind clear entry points. An accordion. A "more options" link. A separate route. The features still exist. They do not need to be in the user's face every second.

One primary CTA, never two. The moment you have two equally weighted buttons, you have asked the user to make a choice that should not exist. Pick which is primary. Make the other secondary — same shape, different weight, lower contrast. If both genuinely deserve equal weight, the screen has two purposes and should be two screens. The discipline of "one primary action" is what makes a flow feel decisive instead of bureaucratic.

Use one or two colors plus neutrals — not five. A palette of seven brand colors does not signal richness; it signals indecision. Most products work fine with one accent. Add a second only when it earns its place — typically a semantic role that the primary cannot serve (a destructive red against an action blue). Beyond two, you have decision fatigue masquerading as expressiveness.

Halve the copy, then halve it again. Microcopy is where craft is most often missing because it feels not-design. It is the most design. "Are you sure you want to permanently delete this item? This action cannot be undone." becomes "Delete this item? This can't be undone." becomes "Delete this item?" — placed next to a button that says "Delete." The meaning is preserved. The friction is gone. Active voice over passive: "Save changes" not "Changes will be saved." Plain language over jargon. Say it once, where the user is, in the words they would use.

The Eames principle: "the details are not the details, they make the design." Every detail must be intentional, which means many details should not exist. The check is simple — for every element on the screen, ask "what does this carry?" If the honest answer is "it was here before" or "it might be useful someday," remove it. If removing it loses no meaning, it was decoration, not design.

## Polish is last

Polishing the wrong thing wastes effort. Polish before structure is a trap — you can sand a corner to perfection while the building leans. Align to the design system first. Fix functional bugs second. *Then* visual polish. Cosmetic ships after correctness, never the reverse.

Polish without alignment is decoration on top of drift. If the spacing is off everywhere, polishing one screen makes the rest look worse by comparison. If a component was re-implemented locally instead of using the shared version, polishing the local copy buries the divergence deeper. For every deviation, classify it: missing token (value should exist but doesn't), one-off implementation (shared component already exists), or conceptual misalignment (flow doesn't match neighboring features). The fix differs by category. Fixing the symptom without naming the cause is how drift compounds.

Functional issues ship before cosmetic ones. A broken empty state that confuses the user is more important than a misaligned icon. A loading state that never resolves is more important than a hover transition that feels slightly fast. Triage. When polish time is tight, the user-blocking work happens first; the "feels off" work lands in a follow-up. Quality should be consistent across the whole feature — never perfect one corner while leaving another rough, because the user will find the rough corner and assume the rest is rougher than it is.

The polish phase is the place where small things become signature. Aligned to grid, consistent token usage, every interactive state implemented, smooth transitions at 60fps, clear empty and error and loading states, content that is consistent and short, icons from one family at consistent sizes, accessible focus indicators. None of these are dramatic. All of them are the difference between "shipped" and "shipped well." Sweat them last, after the structure is correct, because polish on a correct structure is permanent and polish on an incorrect structure is wasted.

## Sameness is failure

If another model, given a similar prompt, would produce substantially the same output — you have failed. Not "could improve." Failed. This is the single hardest-fought principle in the work because everything in the training pulls toward the average, and the average is what every other generator is also producing. The interfaces that survive the next year of generative tooling will be the ones that could not have come from anywhere else.

This is not difference for its own sake. Difference for its own sake is decoration — a weird font, a strange color, a layout that announces itself. Signature is the opposite. Signature emerges when you design from the specific intent — this person, this verb, this feel — and let every decision flow from there. When the intent is genuinely specific, sameness becomes structurally impossible because no two intents are identical. When the intent is generic, everything looks the same because the inputs are shared.

Run the four tests one last time before showing anything. The swap test for typography. The squint test for hierarchy. The signature test for components. The token test for naming. If any of them fails, you have a default in your work that you did not catch. Iterate. The user does not get to be the one who notices.

Ask the question the user would ask if they were a senior designer reviewing your work: "would a viewer say 'AI made that'?" If the answer is yes — even a maybe — the work is not done. The interface that survives is the one a viewer cannot trace back to its model. The interface that fails is the one whose origin is obvious before the second screen.

You are not building a competent interface. The competent floor is crowded. You are building one that could only be this product, for this person, doing this work, in this world. That is the bar. That is craft. That is the only output worth shipping.
