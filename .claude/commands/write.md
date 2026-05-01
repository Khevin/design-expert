---
description: Write or refine UX copy for product surfaces — button labels, error messages, empty states, loading states, confirmations, form helper text. Applies brand voice from PRODUCT.md, follows the WHAT/WHY/HOW error formula, never uses humor for failures.
---

# /design-expert:write

This command writes or refines UX copy for product surfaces — button labels, error messages, empty states, loading states, confirmations, form helper text, modals, tooltips. It loads `PRODUCT.md` for brand voice and the relevant design-expert reference files (`interaction.md` and `anti-slop.md`) for surface-specific patterns. The output is finished copy — the design-expert evolution of impeccable's `ux-writing` plus `clarify`, hardened against the AI defaults that turn product copy into wallpaper.

## When to use this command

Reach for this command when the visible work is the words. New flow with copy that doesn't exist yet, error messages that read like server logs, empty states that say "No data," form helper text the user is ignoring, modal confirmations users have learned to click through. Pair with `/design-expert:build` when shipping new UI — that command writes the structure, this one writes the words. Run standalone when only the copy is changing.

## The writing workflow

### Step 1: Load voice and tone

Read `PRODUCT.md` if it exists. Extract the brand pillars (three adjectives — calm, direct, useful — never marketing abstractions like "innovative") and the bans (words and patterns the brand will not use). If `PRODUCT.md` doesn't exist, ask the user for both before generating, because every line after this one inherits that decision.

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

## What this command produces

Refined or freshly-written UX copy for the requested surface, in both English and Brazilian Portuguese where the product is bilingual, ready to drop into the build. Each piece comes with a one-line rationale tying it to the gates passed (which formula, which bans respected, which cuts made). When the input was a draft, the output includes a short diff.

## Closing

Copy is the part of the interface most users actually read. Visual craft makes the screen scannable; copy makes the screen useful. A beautifully-designed error that says "Something went wrong" is a beautifully-designed dead end. A plain empty state that names the surface, names the value, and offers the next move is a working onboarding moment. Get the copy layer right and the product earns the user's time.
