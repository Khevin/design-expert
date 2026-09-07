---
description: Write or refine copy across three writing contexts — UX micro-copy, long-form editorial, marketing / ad-shaped work. Loads the matching voice file from voices/, applies brand voice from PRODUCT.md, follows the WHAT/WHY/HOW error formula for UX copy, never uses humor for failures.
---

# /design-expert:write

This command writes or refines copy across three writing contexts. The first task is determining which context the brief belongs to; the second is loading the voice file that governs that context; the third is producing the copy.

**Three writing contexts:**

1. **UX copy** — buttons, labels, errors, empty states, loading states, confirmations, form helper text, modals, tooltips. Loads `voices/ux-copy.md` plus the Steps workflow below.
2. **Long-form** — case studies, blog posts, magazine pieces, articles, journalism. Loads `voices/long-form.md` (Work&Co tone + canonical exemplars + pattern-formulae). The case-study writing section in this file remains as the canonical reference for case-study-specific voice patterns.
3. **Marketing** — landing-page heroes, advertising, brand work, captions, puns, brand-launch lines, manifesto pages. Loads the appropriate file from `voices/marketing/` based on the brief: `george-lois.md` for bold spectacle, `bill-bernbach.md` for honest restraint, `howard-gossage.md` for intimate conversation, `david-ogilvy.md` for research-led long-copy.

The output is finished copy — the design-expert evolution of impeccable's `ux-writing` plus `clarify`, hardened against the AI defaults that turn product copy into wallpaper. Strunk and White's *The Elements of Style* applies as the floor across all three contexts; each voice file calls out where the floor bends for that context.

## When to use this command

Reach for this command when the visible work is the words. New flow with copy that doesn't exist yet, error messages that read like server logs, empty states that say *"No data,"* form helper text the user is ignoring, modal confirmations users have learned to click through. New case study that needs the Work&Co tone. New landing-page hero that needs to break through. Pair with `/design-expert:build` when shipping new UI — that command writes the structure, this one writes the words. Run standalone when only the copy is changing.

**Determine the writing context first.** Before applying any pattern, identify which of the three contexts the brief belongs to. UX copy lives in interfaces; long-form lives in editorial pieces; marketing lives in heroes and ads. Mixed-context surfaces (a landing page with a hero + CTAs + a body section) compose three voices on one page rather than averaging them. The CTA stays in UX-copy voice. The hero stays in marketing voice. The body stays in long-form voice. Do not let one voice contaminate the others.

## The writing workflow

### Step 1: Load voice and tone

Read `PRODUCT.md` if it exists. Extract the brand pillars (three adjectives — calm, direct, useful — never marketing abstractions like "innovative"), the bans (words and patterns the brand will not use), and the **register** (brand, product, or editorial). If `PRODUCT.md` doesn't exist, ask the user for all three before generating, because every line after this one inherits those decisions.

**Register-conditional copy guidance.** Editorial copy carries voice and personality — pull quotes can be long, italic display ems can carry weight inside the prose, figure captions can be discursive italic serif rather than mono labels, chapter titles can be evocative ("Almost a blank slate" instead of "Background"). Product copy carries clarity and brevity — labels do one job per word, error messages follow WHAT/WHY/HOW strictly, button labels are verb-plus-object with no decoration. Brand copy carries memorability — taglines hit hard and short, hero subheads are specific to the campaign and the moment, microcopy can be playful where the surface invites it. The same WHAT/WHY/HOW formula applies to errors across all three registers; the elasticity is in everything that isn't an error. See `styles/editorial.md` for the editorial-specific voice rules (long-form pull quotes, oversized italicized ems, captioned figures as prose).

Voice is constant — the product's personality across every surface. Tone shifts by user state: calm in errors, neutral in settings, warmer in empty states, quietly celebratory in successes. Never use humor for failures, errors, or destructive confirmations — humor compounds frustration. Save warmth for empty states (where the user is exploring) and successes (where small wit amplifies the moment). The voice in the error and the voice in the empty state are the same person; only the tone changes.

### Step 2: Button labels — verb plus object

Buttons are verbs. "OK" is not a verb; "Save changes" is. The verb-plus-object pattern kills the AI default — "OK / Cancel / Submit / Continue" — that the model reaches for when nothing forced specificity. Generic verbs hide the consequence; specific verb-plus-object labels expose it. "Save changes" beats "Save." "Send invoice" beats "Submit." "Discard draft" beats "Cancel" when the consequence is losing work. "Delete account" beats "Confirm." "Create your first project" beats "Get started."

For destructive actions, the verb in the trigger button must match the verb in the confirmation modal and the verb in the undo toast: "Delete account" → "Permanently delete account" (typed-confirmation modal) → "Account scheduled for deletion. [Undo]" (toast). Three different verbs for the same action read as three different actions.

### Step 3: Error messages — WHAT / WHY / HOW

Every error message has three required pieces. **WHAT** happened, specific and named — not "Error" and not "Something went wrong." **WHY**, in user terms, not system terms — "Your session expired" beats "401 Unauthorized." **HOW** to recover — a path forward, with a button or link if a click resolves it. Missing any one piece is an incomplete error.

Concrete swaps. Bad: "Invalid input." Good: "Phone number must include the area code (e.g., 11 99999-1234)." The good version names the field, names the rule, and shows the format with a real example. Bad: "Error 500." Good: "We couldn't save your changes — our servers had a problem. We've been notified. [Try again]." Names what failed, says it in user terms, removes blame, offers one action.

Two non-negotiables. Never lose the user's data on error — every field stays filled. And never use humor. "Oops, our hamsters fell off the wheel" reads as condescending when the user is trying to recover work. Calm, direct, useful. Never blame the user, never blame the user's machine, never quote a stack trace.

### Step 4: Empty states — acknowledge / explain / act

Three required pieces. **WHAT** will appear here. **WHY** it matters. What to do **NEXT** — a single primary action that takes the user from empty to populated. "No projects yet. Projects help you organize work and collaborate with your team. [Create your first project]" — surface, value, action. "All caught up. New issues will appear here when you're tagged in. [Browse all issues]" — same shape, calmer tone because nothing's wrong.

Filtered-to-empty needs a different state — "No matches for 'aurora'. [Clear filter]" — because the surface isn't empty by nature; the filter made it empty, and the user needs the path to undo that. Never reuse the truly-empty state for the filtered case; the action is wrong.

### Step 5: Loading states — contextual copy

A generic spinner with no text fails because the user can't distinguish "working" from "stuck." Match the copy to the duration. Under one second: no message. One to five seconds: short verb-shaped copy ("Saving..." or "Sending invoice..."). Five to fifteen seconds: contextual ("Generating your monthly report..."). Fifteen seconds and up: contextual copy plus a progress indicator plus a cancel option, because at that scale the user needs to know it's still working, how far along, and that they can bail out. Never use AI-slop loading copy — "Herding pixels," "Teaching robots to dance" — those are recognizable as machine-generated and erode trust within seconds.

### Step 6: Confirmations — only for irreversible

Confirmations train users to click through. "Are you sure?" "Yes." Three dialogs in, the user has stopped reading. Use confirmations only for irreversible actions — delete account, delete a workspace, transfer ownership. For reversible actions — delete a single item, archive a project — skip the confirmation and use an undo-toast: the action runs immediately, a toast appears for five to eight seconds with "Undo," and the destructive operation only commits when the toast expires. For catastrophic actions, use type-to-confirm — "Type the project name to delete it" — instead of "Are you sure?" The friction must match the consequence.

### Step 7: Length discipline

Every word earns its place. Halve the copy, then halve it again. Strip "please" from system copy unless asking the user to do something effortful. Strip "you can" — "You can delete this anytime" becomes "Delete anytime." Strip filler verbs ("be able to," "have the ability to") and replace with "can" or nothing. Strip warm-up clauses — "This is a list of your recent invoices" becomes "Recent invoices." The exception is empty states and onboarding, which can run slightly longer because they're teaching, not labeling. Even there, halve once.

### Step 8: Translation slack and bilingual considerations

Copy ships in containers, and containers don't stretch. German runs roughly +30% longer than English (long compound words). Brazilian Portuguese runs +15–20% (longer adjectives, formal address). French runs +15–20%. Japanese runs ~–30%. A button that fits "Save" at sixty pixels needs ninety for German "Änderungen speichern." For any bilingual product, brand voice must stay consistent across both languages. Never machine-translate UI copy — the rhythm dies, the bans get violated, and the result reads like two different products. Have a human, or a model with explicit expertise in the target language, write each language separately against the same voice spec.

### Step 9: Accessibility copy

Alt text describes what the image shows AND why it's there — "Revenue increased 40% in Q4" beats "Chart"; "image of" prefixes are noise. Decorative images get `alt=""`. Aria-labels for icon-only buttons follow the same verb-plus-object rule as visible labels — `aria-label="Delete invoice"` beats `aria-label="Delete"`. Screen-reader announcements for asynchronous events go in an aria-live region — "Saved successfully," "Couldn't save — connection lost" — so users hear state changes without having to find them visually.

### Step 10: Final sweep against anti-slop

Before shipping, scan for the content tells from `anti-slop.md`. **Placeholder names** (John Doe, Jane Smith, Sarah Chan, Jack Su) — replace with realistic, varied names from the actual domain. **Round numbers** ($1,000 / 100 users / 50% / 99.99% uptime) — use specific irregular numbers (R$ 14.382,90 beats R$ 15.000,00; 47.2% beats 50%). **AI clichés** ("seamlessly," "leverage," "elevate," "unlock," "harness," "tapestry of," "transformative," "next-gen," "game-changer") — rewrite with concrete verbs from the domain. **Em-dash overuse** as a rhythm crutch — replace with periods, semicolons, or rewrites; one per paragraph max. **Title Case On Every Header** — switch to sentence case unless the brand explicitly chose Title Case. Strip these before shipping.

## Case-study writing — the Work&Co tone

Long-form case studies on a portfolio site sit in the editorial register and demand a specific voice — peer-to-peer, evidence-led, plain. The exemplars are Work&Co's client work (`work.co/clients/lyft`, `pga-tour`, `ikea`, `gatorade`, `apple`), Pentagram's project pages, NYT Magazine long-form. Decidedly NOT marketing-page voice; it is journalist-meets-senior-designer voice. The discipline below carries learnings from the spaces.html v2 build into a reusable contract.

**Plain words, no marketing fluff.** Strike from the vocabulary: "elevate," "streamline," "unleash," "next-gen," "transformative," "redefine," "bridging the gap," "cutting-edge," "innovative." Replace with the specific verb that names what was done: "rebuilt," "redesigned," "shipped," "documented," "tested." Marketing words signal that the writer didn't trust the work; plain words let the work carry the weight.

**Active voice everywhere.** Every chapter h2, every body paragraph, every figure caption, every KPI label uses an active subject doing an active verb. Passive constructions ("the flows were deeply integrated," "process started with research") read as evasion of authorship — case studies are claims of authorship and the voice should match. Rewrite "X was Y'd by Z" as "Z Y'd X."

**Short declarative sentences. Fragments where they punch.** *"The tech worked. The design didn't."* The Lyft-style rhythm trades complex sentence structures for short beats the reader can absorb at scanning speed. The 8-minute reader does not have time for nested clauses.

**Decision-walks visible inline.** Don't just state outcomes; show the thinking. *"We considered jumping straight to redesigning screens. We picked the slower path because every fix would have been local without a library underneath."* Naming the trade-off makes the discipline visible to a peer-designer reader and a junior-designer reader simultaneously, without lecturing either.

**Functional stakeholder mentions; never individual names.** Refer to "the call center," "operations," "the business-analysis team," "two designers reported to me," "the engineering team." Do not name individuals (Felipe, Iara, Bruno, Accalia) — names are noise to readers who don't know them, and naming risks attributing credit unevenly. Roles are clearer and durable.

**Numbers inline, anchored to evidence.** *"The call center resolved 20% more support tickets per day after rollout."* Specific, measured, named. Avoid round numbers that smell fabricated (50%, 99.99%). Avoid metrics that aren't real outcomes ("0 → 1 documented design system" reads as filler).

**Closing punch.** End with a short rhythmic line the reader carries away. *"Sit down. Do the work. The rest follows."* Cite the actual project quote if one exists; otherwise let three short clauses do it.

**Title and subtitle patterns.**

- *Title:* mention the client by name. Capture both the experience claim and the system claim if both are real. Lead with active voice. Example: "We redesigned three apps for Spaces and built one shared system underneath."
- *Subtitle:* introduce the company in one sentence, name what we did in the second. "Spaces runs contactless parking from New York to Texas to the West Coast. We redesigned its three apps — admin, operator, parker — and the design system underneath them."

**Caption discipline (three-beat rhythm).** Hero key-visual and chapter-pivot captions follow: name what the figure is, name the contrast it sits in, name the value/state the figure proves. *"Admin V2.0 in dark mode. The inherited screens had crammed five years of features into cluttered light-mode cards. This one breathes — one library, multi-region data, work that scans."* Three beats: artifact, contrast, value.

**Before / After tag pattern.** When pairing inherited-vs-redesigned imagery, tag the "before" image with a small mono-uppercase chip ("Before"). The "after" rarely needs an "After" tag — the prose around it does the work. Tagging only the inherited side preserves visual restraint.

**Drop "surface" jargon.** Use "app" or "screen" or the actual product name. "Surface" is design-school vocabulary that reads as cold to non-designers and abstract to designers; "app" is direct and concrete.

The structural composition rules (3-chapter spine, KPI-inside-closing-chapter, image-rhythm strategy, layout-iteration during build) live in `styles/editorial.md` § Case-study composition — refinements. Cross-reference there for the structural patterns; the rules above are the voice patterns that fill the structure.

## What this command produces

Refined or freshly-written UX copy for the requested surface, in both English and Brazilian Portuguese where the product is bilingual, ready to drop into the build. Each piece comes with a one-line rationale tying it to the gates passed (which formula, which bans respected, which cuts made). When the input was a draft, the output includes a short diff.

## Closing

Copy is the part of the interface most users actually read. Visual craft makes the screen scannable; copy makes the screen useful. A beautifully-designed error that says "Something went wrong" is a beautifully-designed dead end. A plain empty state that names the surface, names the value, and offers the next move is a working onboarding moment. Get the copy layer right and the product earns the user's time.
