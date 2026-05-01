# Forms

Forms are the highest-friction surface in any product because every field is a request for cognitive labor — read the label, decide what is wanted, retrieve the value, type it, trust the system will accept it. Multiply by ten fields and you have a measurable drop-off curve. Most forms in the wild fail because they default to the worst timing choices: validating on every keystroke (false errors mid-typing), validating only on submit (the user has to re-scan the whole form to find the broken field), or relying on a banner at the top instead of inline messages. The single most-skipped rule is the simplest — validate on blur, after the user finishes the field — covered in `interaction.md` and weighted by `foundations.md` under heuristic 5 (error prevention) and heuristic 9 (recognize, diagnose, recover).

## What good looks like

A good form is a conversation between the system and the user, and every field that does not earn its place is a tax on completion. The discipline starts before the visual layer — strip every field that is not strictly required, set smart defaults so the user is confirming rather than answering, and mark required fields once at the top ("All fields required unless marked optional") instead of scattering red asterisks across every label. `interaction.md` is explicit: placeholders are never a label substitute, because placeholders disappear on input and the user loses the question; use a real `<label>` always, visible, above or beside the field.

Validation timing is the first lever. Validate on blur, never on every keystroke and never only on submit. The exception is password strength, where live feedback helps because the user is constructing the value rather than recalling it. Errors live below the field they describe, connected via `aria-describedby` so screen readers announce the error when the field receives focus, and the message obeys the three-piece formula from `interaction.md`: WHAT happened, WHY (in user terms), HOW to fix it. Not "Invalid input" — instead "Phone number must include the area code (e.g., 11 99999-1234)." The example does real work: it shows the format without making the user parse a description.

Input types match the data — `email`, `tel`, `number` (with care, since native steppers fight numeric formatting), and a custom date picker rather than `<input type="date">`, which renders differently in every browser and is accessibility-thin. Preserve user input on every failure mode; nothing destroys trust faster than a submit error that wipes the form. Loading states on submit disable the button to prevent double-submission and announce what is happening. Disabled submit buttons get a tooltip explaining why — `interaction.md` is firm that "Submit (complete required fields above)" turns a wall into a signpost. `components.md` carries the icon side of the contract: pull the loading glyph from your icon library's canonical loader (e.g. `Loader2` in Lucide), never a generic spinner.

## Quality examples (Do)

### Stripe Checkout
https://stripe.com/checkout
The reference for payment forms — real-time card validation as the user finishes each field, address autocomplete that reduces six fields to one, and inline error messages that name the issue and suggest the fix without losing input. Cite `interaction.md` (validate on blur, error formula).

### Stripe Elements
https://stripe.com/docs/elements
Design-system-level form fields with accessibility, theming, and validation built in — labels wired to inputs, ARIA roles correct by default, focus rings honored, tab order preserved. The kind of field-level contract `components.md` describes for cells, applied to inputs.

### Linear's issue creation modal
https://linear.app
Minimal required input — title is the only required field — with progressive enhancement layered through keyboard shortcuts (assignee, project, cycle, labels become available via single-key shortcuts inside the modal). The form earns the user's attention by asking for almost nothing up front. Cite `interaction.md` (smart defaults, flexibility for power users).

### Vercel's project setup wizard
https://vercel.com/new
Multi-step form with clear progress, reasoned defaults (framework auto-detected from the repo, environment variables imported from a template), and the ability to skip optional steps. Each step has one job and the user always knows how many remain. Cite `interaction.md` (visibility of system status, smart defaults).

### Carbon Form pattern
https://carbondesignsystem.com/patterns/forms-pattern/
IBM Carbon documents the canonical form anatomy — label placement, required-field marking, inline validation timing, error message structure — at the design-system level, with accessibility annotations and component-level guidance. Cite `components.md` (Carbon as the enterprise baseline).

## Anti-patterns (Don't)

### The "Invalid input" error
The system says the input was invalid and stops there — no field name, no rule, no fix. The user is left to guess what they did wrong, which is the friction `foundations.md` heuristic 9 exists to prevent and which `interaction.md` resolves with the three-piece error formula (what, why, how). Replace with: "Phone number must include the area code (e.g., 11 99999-1234)."

### The validate-on-keystroke or validate-on-submit
Two mirror failures. Validate-on-keystroke fires while the user is typing the second character of their email; the message accuses them of an incomplete value they have not finished entering, and they learn to ignore errors entirely. Validate-on-submit stays silent until the worst possible moment, then dumps every error into a banner at the top and forces the user to scroll back to find the field that broke. Cite `interaction.md` (validate on blur, errors below the field) and `foundations.md` heuristic 1 (silent UI is broken UI).

### The lost-input-on-failure with no rationale on disabled submit
Submit fails for any reason — network blip, validation race, server hiccup — and the page reloads wiping every field. Or the submit button sits grayed out with no tooltip, and the user scans the entire form looking for the gap. Both signal that the system does not respect the user's effort. Cite `foundations.md` heuristic 3 (user control and freedom) and `interaction.md` (disabled state must carry rationale).

## How to use this category

When designing or reviewing a form, walk the rules in order: cut every field that does not earn its place; set smart defaults; mark required fields once at the top; use real labels above or beside inputs; validate on blur with the WHAT/WHY/HOW formula inline below the field; preserve input on every failure; show loading state on submit; explain disabled buttons. Cite `interaction.md` for timing and the error formula, `foundations.md` heuristics 5 and 9 for error prevention and recovery, and `components.md` for the field-level contract that holds the system together across surfaces.
