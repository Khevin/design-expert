# Write mode

Loaded by `SKILL.md` triage when the mode is write: the visible work is the words. This mode writes or refines copy across three writing contexts. The first task is determining which context the brief belongs to; the second is loading the voice file that governs it; the third is producing the copy.

**Three writing contexts:**

1. **UX copy**: buttons, labels, errors, empty states, loading states, confirmations, form helper text, modals, tooltips. Loads `voices/ux-copy.md` plus the steps below.
2. **Long-form**: case studies, blog posts, magazine pieces, articles, journalism. Loads `voices/long-form.md` (the Work&Co tone, canonical exemplars, pattern formulae). The case-study section at the end of this file remains the canonical reference for case-study voice.
3. **Marketing**: landing-page heroes, advertising, brand work, captions, brand-launch lines, manifesto pages. Loads the matching file from `voices/marketing/`: `george-lois.md` for bold spectacle, `bill-bernbach.md` for honest restraint, `howard-gossage.md` for intimate conversation, `david-ogilvy.md` for research-led long copy.

The output is finished copy, hardened against the defaults that turn product copy into wallpaper. Strunk and White's *The Elements of Style* is the floor across all three contexts; each voice file says where the floor bends.

## When triage picks this mode

Write runs when the visible work is the words: a new flow whose copy does not exist yet, error messages that read like server logs, empty states that say "No data", helper text the user ignores, confirmations users have learned to click through, a case study that needs the Work&Co tone, a hero that needs to break through. Build mode writes the structure and calls this mode for the words when it ships new UI; write runs standalone when only the copy changes.

**Determine the writing context first.** UX copy lives in interfaces; long-form lives in editorial pieces; marketing lives in heroes and ads. Mixed surfaces (a landing page with a hero, CTAs, and a body section) compose three voices on one page rather than averaging them. The CTA stays in UX-copy voice. The hero stays in marketing voice. The body stays in long-form voice.

## The writing workflow

### Step 1: Load voice, tone, and register

Read `PRODUCT.md` if it exists. Read also the copy rules discovery recorded as mandated patterns from the system files (a `CLAUDE.md` copy-rules section, a `system.md` voice section); they are bans, and they bind before any question is asked. Extract the brand pillars (three adjectives, calm, direct, useful, never marketing abstractions like "innovative"), the bans, and the register, which triage has already confirmed. If there is no `PRODUCT.md`, ask before generating, one question per blockquote, because every line after inherits the answers; the register is already known and is not re-asked:

> 🟠 **Question**: What are the three brand pillars for this copy? Adjectives such as calm, direct, useful; not marketing abstractions such as innovative.

> 🟠 **Question**: What does this product never say? Words, tones, or moves the copy must avoid.

Register-conditional copy guidance. Editorial copy carries voice and personality: long pull quotes, italic display ems inside the prose, discursive captions, evocative chapter titles. Product copy carries clarity and brevity: labels do one job per word, errors follow WHAT, WHY, HOW strictly, buttons are verb plus object with no decoration. Brand copy carries memorability: taglines hit hard and short, hero subheads are specific to the moment, microcopy can play where the surface invites it. The error formula holds across all three; the elasticity is in everything that is not an error. See `styles/editorial.md` for the editorial voice rules.

Voice is constant across surfaces; tone shifts by user state: calm in errors, neutral in settings, warmer in empty states, quietly celebratory in successes. Never humor for failures, errors, or destructive confirmations. Save warmth for empty states and successes.

**Where the words land.** For a designer with the Figma MCP, write mode edits text in the linked file: invoke `figma:figma-use`, then replace the text nodes through `use_figma`, keeping the container's i18n slack in mind (Step 8) and never widening a frame to fit a longer string without saying so. For everyone else the output is the copy itself, in chat and in the code or brief that holds it.

### Step 2: Button labels, verb plus object

Buttons are verbs. "OK" is not a verb; "Save changes" is. Verb plus object kills the default "OK / Cancel / Submit / Continue" the model reaches for when nothing forced specificity, and it exposes the consequence: "Send invoice" beats "Submit"; "Discard draft" beats "Cancel" when the consequence is losing work; "Delete account" beats "Confirm". For destructive actions, the verb in the trigger, the confirmation, and the undo toast must match: "Delete account" → "Permanently delete account" (typed confirmation) → "Account scheduled for deletion. [Undo]". Three verbs for one action read as three actions.

### Step 3: Error messages, WHAT, WHY, HOW

Every error has three pieces. **WHAT** happened, specific and named. **WHY**, in the user's terms, not the system's: "Your session expired" beats "401 Unauthorized". **HOW** to recover, with a button or link when a click resolves it. Bad: "Invalid input." Good: "Phone number must include the area code (e.g., 11 99999-1234)." Bad: "Error 500." Good: "We couldn't save your changes; our servers had a problem. We've been notified. [Try again]." Two non-negotiables: never lose the user's data on error, and never use humor. Never blame the user, never blame their machine, never quote a stack trace.

### Step 4: Empty states, acknowledge, explain, act

Three pieces: **WHAT** will appear here, **WHY** it matters, what to do **NEXT**, as a single primary action from empty to populated. "No projects yet. Projects help you organize work and collaborate with your team. [Create your first project]." Filtered-to-empty is a different state: "No matches for 'aurora'. [Clear filter]." Never reuse the truly-empty state for the filtered case; the action is wrong.

### Step 5: Loading states, contextual copy

Match copy to duration. Under one second: nothing. One to five seconds: short verb-shaped copy ("Saving…"). Five to fifteen: contextual ("Generating your monthly report…"). Fifteen and up: contextual copy plus progress plus cancel. Never the loading jokes ("Herding pixels", "Teaching robots to dance"); they are recognizable as machine-made and erode trust within seconds.

### Step 6: Confirmations only for the irreversible

Confirmations train users to click through. Use them only for irreversible actions: delete account, delete workspace, transfer ownership. For reversible actions use an undo toast for five to eight seconds and commit when it expires. For catastrophic actions use type-to-confirm. Friction matches consequence.

### Step 7: Length discipline

Every word earns its place. Halve the copy, then halve it again. Strip "please" from system copy unless asking for effort. Strip "you can". Strip filler verbs ("be able to"). Strip warm-up clauses: "This is a list of your recent invoices" becomes "Recent invoices". Empty states and onboarding may run slightly longer because they teach; even there, halve once.

### Step 8: Translation slack

Containers do not stretch. German runs about thirty percent longer than English, Brazilian Portuguese fifteen to twenty, French fifteen to twenty, Japanese about thirty percent shorter. A button that fits "Save" at sixty pixels needs ninety for "Änderungen speichern". For a bilingual product the voice stays consistent across both languages, and UI copy is never machine-translated; each language is written separately against the same voice spec.

### Step 9: Accessibility copy

Alt text describes what the image shows and why it is there: "Revenue increased 40% in Q4" beats "Chart"; "image of" is noise; decorative images get `alt=""`. Aria-labels on icon-only buttons follow verb plus object. Asynchronous state changes announce in an aria-live region.

### Step 10: Final sweep against the tells

Before shipping, scan for the content tells and the structural and rhetorical tells in `anti-slop.md`. Placeholder names (John Doe, Jane Smith) become realistic domain names. Round numbers ($1,000, 50%, 99.99%) become specific irregular ones. AI clichés ("seamlessly", "leverage", "elevate", "unlock", "harness", "transformative", "game-changer") become concrete domain verbs. Fragment triads ("Fast. Simple. Done.") become one sentence with a verb. Reversal formulas ("It's not a tool. It's a colleague.") become the direct claim. Dash-label headers ("Commands — a shared vocabulary") become sentence-case headings that state the claim. Numbered markers and meta-labels (`01`, "SECTION 02", "ABOUT US") are deleted. Dashes as a rhythm crutch are cut to one per paragraph. Title Case On Every Header becomes sentence case unless the brand chose otherwise. Strip all of these before shipping.

## Case-study writing, the Work&Co tone

Long-form case studies sit in the editorial register and demand a specific voice: peer to peer, evidence-led, plain. The exemplars are Work&Co's client work, Pentagram's project pages, NYT Magazine long-form. Not marketing voice; journalist meets senior designer.

**Plain words, no marketing fluff.** Strike "elevate", "streamline", "unleash", "next-gen", "transformative", "redefine", "bridging the gap", "cutting-edge", "innovative". Replace with the verb that names what was done: rebuilt, redesigned, shipped, documented, tested.

**Active voice everywhere.** Case studies are claims of authorship; passive constructions read as evasion. Rewrite "X was Y'd by Z" as "Z Y'd X".

**Short declarative sentences; fragments only where they punch.** *"The tech worked. The design didn't."* Two beats, not three, and only where the rhythm carries meaning. The eight-minute reader has no time for nested clauses and no patience for a triad on every heading.

**Decision-walks visible inline.** Show the thinking: "We considered jumping straight to redesigning screens. We picked the slower path because every fix would have been local without a library underneath."

**Functional stakeholder mentions, never individual names.** "The call center", "operations", "two designers reported to me". Roles are clearer and durable.

**Numbers inline, anchored to evidence.** "The call center resolved 20% more support tickets per day after rollout." Avoid round numbers that smell fabricated and metrics that are not outcomes.

**Closing punch.** End with a short line the reader carries away; cite the real project quote when one exists.

**Title and subtitle.** Title names the client and captures the experience claim and the system claim when both are real: "We redesigned three apps for Spaces and built one shared system underneath." Subtitle introduces the company in one sentence and names what was done in the second.

**Caption discipline.** Hero and chapter-pivot captions name the artifact, the contrast it sits in, and the value it proves, as prose, not as a labeled list.

**Before tags.** When pairing inherited and redesigned imagery, tag only the "before" image with a small sentence-case chip; the prose around the "after" does the work.

**Drop "surface" jargon** in user-facing copy. Use "app", "screen", or the product's name.

Structural rules for case studies (the three-chapter spine, KPIs inside the closing chapter, image rhythm, layout iteration during build) live in `styles/editorial.md` § Case-study composition.

## What this mode produces

Refined or freshly written copy for the requested surface, in both English and Brazilian Portuguese where the product is bilingual, placed where the words live (the Figma text nodes for a designer with the MCP, otherwise the code or brief), each piece with a one-line rationale tying it to the formula applied, the bans respected, and the cuts made. When the input was a draft, the output includes a short diff.

## Closing

Copy is the part of the interface most users actually read. Visual craft makes the screen scannable; copy makes it useful. A beautifully designed error that says "Something went wrong" is a beautifully designed dead end. A plain empty state that names the surface, the value, and the next move is a working onboarding moment. Get the words right and the product earns the user's time.
