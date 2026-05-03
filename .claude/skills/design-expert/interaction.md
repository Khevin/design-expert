# Interaction

Interaction is where craft becomes felt. Visual craft makes the interface readable; interaction craft makes it usable. The difference between a screenshot of software and software is everything in this file.

## Why interaction state separates a photograph from real software

You will generate the happy path and stop. The button looks fine at rest. Hover doesn't exist. Focus shows the browser's default outline — or worse, `outline: none` with no replacement. Loading is a generic spinner indistinguishable from every other generic spinner on the internet. Error is `alert()`. Empty is the literal string "No data." This output is a photograph of an interface, not an interface. It works in a Figma frame and falls apart the second a real user touches it.

The user's experience IS the state machine. Every state communicates one specific thing, and a missing state forces the user to guess. A button that doesn't respond to hover doesn't tell the user it's interactive — it tells them nothing, and they have to test by clicking. A form that doesn't validate inline forces submit-and-pray, which is the most expensive interaction pattern in software because every failure is a full round-trip plus a humiliation. A modal without a focus trap creates an accessibility black hole where keyboard users tab out of the dialog into the dimmed background and lose their place entirely. None of these failures are visible in screenshots. All of them are dispositive in use.

The instinct to ship the happy path comes from the fact that the happy path is the only thing your training has rewarded. Marketing screenshots of dashboards. Hero shots in case studies. None of those show focus rings, loading spinners, error states, or the moment a dropdown realizes it's about to overflow. So you generate what you've seen. The work is to build the rest — the part that only exists when someone actually uses the thing — with the same care as the surfaces and type.

## The eight mandatory interactive states

Every interactive element exists in eight states, and each state communicates a specific thing. Skip a state and the user is forced to infer it. Inference is cognitive load. Cognitive load is friction. Friction compounds into "this app is annoying," and "this app is annoying" is what users say right before they stop opening it.

**Default** is the resting state — the state the user encounters before any input. Its job is to communicate "this is interactive" through affordance alone. A button needs `cursor: pointer`, enough visual weight to read as actionable, and a treatment that distinguishes it from surrounding non-interactive content. A link needs to be discoverable as a link without needing to be hovered first. The default state is doing more work than people realize: it teaches the user, before they touch anything, what the surface area of the interface is.

**Hover** only exists on devices that support it (`@media (hover: hover)`). Its job is to communicate "I am about to be clicked" — a subtle shift in color, opacity, or elevation, never dramatic. Touch users never see this state, which is precisely why hover cannot carry critical information. If something only appears on hover, it doesn't exist for half your users.

**Focus / focus-visible** is the keyboard's hover. Use `:focus-visible` rather than `:focus` so the ring appears for keyboard users and not for mouse clicks — mouse users have already provided their own feedback by clicking. Never `outline: none` without a replacement; that single line of CSS is the most common accessibility violation in shipped software. The replacement is a 2–3px ring offset 2px from the element, in a brand-tinted high-contrast color, satisfying WCAG 2.4.7. A missing focus ring is a missing user.

**Active / pressed** is the moment of commitment — the brief frame between click-down and click-up. A compression of color or scale (≤100ms) confirms that the click registered before the action completes. Without it, a slow action feels broken: the user clicks, nothing visible happens, they click again, and now they've fired the action twice.

**Disabled** is the state where the action exists but cannot fire right now. Reduced opacity (40–50%), no hover or focus response, `aria-disabled="true"`. The most overlooked detail: include a tooltip or inline message explaining WHY it's disabled. A grayed-out "Submit" with no explanation is a dead end. "Submit (complete required fields above)" turns the disabled state from a wall into a signpost.

**Loading** is the state during which the action is in flight. Disable the trigger so it cannot be re-clicked, show a progress indicator, and keep the user oriented with copy that names what is happening. "Saving..." is fine. "Creating your invoice..." is better. What never works is a generic spinner with no text, because the user has no way to know whether the system is working or stuck.

**Empty** is not "No data available." Empty is an onboarding moment dressed as an absence. Three things must be present: what will appear here, why it matters, and a clear primary action. "No projects yet. Projects help you organize work and collaborate with your team. [Create your first project]" — the user understands what they're looking at, what value it brings, and exactly what to do next. A blank panel with "No data" trains the user to leave.

**Error** has three required pieces: WHAT happened (specific, named), WHY (in user terms, not system terms), and HOW to recover (a path forward). "Error 500" is none of those. "We couldn't save your changes — your session expired. [Sign in to retry]" is all three. Add a visual signal (icon plus semantic color), keep the user's data on screen so they don't lose work, and make the recovery action obvious. Error states are where trust is won or lost; they are where most products fail because they're the part nobody designs until production.

**Success** lives alongside these eight as the closing state of an action — a green check, a moment of confirmation, a transition from loading to done. What's not fine is a successful action that gives no signal — the user has no way to know whether the work landed, and so they either repeat it or worry about it.

## Focus rings done right

Focus rings are the most argued-about and least-understood detail in interface accessibility. The argument is "they're ugly." The truth is the browser's default ring is ugly — a thick outline that doesn't match any brand and reads as a bug. So developers ship `outline: none` with no replacement, and keyboard users disappear from the experience.

The replacement is short. A 2–3px solid ring, offset 2px from the element, in a brand-tinted color with at least 3:1 contrast against adjacent surfaces. On dark elements, a light or saturated ring; on light elements, a dark or saturated ring. The color comes from your token system — `var(--focus-ring)` — never an arbitrary hex.

```css
:focus { outline: none; }
:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
  border-radius: inherit; /* match the element */
}
```

`:focus-visible` instead of `:focus` is the pivot. Mouse users clicking a button never wanted a ring; keyboard users tabbing always need one. The browser already knows which input method moved focus. Test by tabbing through the entire interface — every interactive element should show a visible ring. If anything is unreachable or invisible during a tab pass, the keyboard experience is broken regardless of how the mouse experience reads.

## Forms — states, validation, and the error formula

Forms are the highest-friction surfaces in any product because every field is a request for cognitive labor. The user has to read the label, decide what's wanted, retrieve the value, type it, and trust that the system will accept it. Multiply by ten fields and you have a measurable drop-off curve. Form design is the discipline of reducing every one of those steps.

Validation timing is the first lever. Validate on blur — after the user finishes a field — not on every keystroke (annoying, false positives mid-typing) and not on submit (forces a re-scan of the whole form to find the one field that broke). The exception is password strength, where live feedback helps because the user is constructing the value rather than recalling it.

Errors live below the field they describe, connected via `aria-describedby` so screen readers announce the error when the field receives focus. Never put errors in a banner at the top — the user has to scroll back, find which field broke, and remember the rule on the way down. The error formula is three pieces: WHAT (the field name and what's wrong), WHY (the rule violated, in user terms), and HOW (the fix). Not "Invalid input" — instead "Phone number must include the area code (e.g., 11 99999-1234)." The example does real work: it shows the format without making the user parse a description.

Required fields get marked once at the top — "All fields required unless marked optional" — rather than asterisks scattered across every label. Placeholder text is never a label substitute; placeholders disappear on input and the user loses the question. Use `<label>` elements always, visible, above or beside the field. Smart defaults wherever possible — every default is a question the user doesn't have to answer.

Optimistic updates handle the success path: assume success, update the UI immediately, roll back on failure. This works for low-stakes actions — likes, toggles, naming things — and is wrong for payments, destructive actions, or anything where rollback is visible to other users.

## Motion — purpose and timing

Motion exists in interfaces for three reasons: to communicate state change, to direct attention, and to provide feedback. Motion that doesn't do one of those is decoration, and decoration in motion is the most annoying kind of decoration there is. A page that animates everything feels like a page that doesn't trust the user to follow what's happening — and the user, wisely, stops following.

The 100/300/500 rule is the timing scaffold. Micro-interactions — button presses, hover transitions, focus rings appearing, toggles flipping — at **100–150ms**. Larger state transitions — modals appearing, drawers sliding, tabs switching, accordions expanding — at **200–300ms**. Choreographed sequences — multi-step animations, staggered reveals, hero entrances — capped at **500ms total**. Anything longer feels broken; the user perceives it as slow rather than deliberate.

Easing matters more than duration once duration is in range. Use deceleration easing for entrances — `cubic-bezier(0.25, 1, 0.5, 1)` is the recommended default — content arrives quickly and settles, the way real objects move. Use acceleration easing for exits — `cubic-bezier(0.5, 0, 0.75, 0)` — content leaves and is gone. Exits should be roughly 75% of entrance duration, so the round-trip reads as a single transition rather than a back-and-forth. The browser's default `ease` is a compromise that's optimal for nothing; replace it.

NEVER use spring or bounce easing on professional interfaces. Bounce was trendy in 2015 and now reads as cheap and unserious. A financial dashboard that bounces is a financial dashboard nobody trusts. Real objects don't bounce when they stop — they decelerate. Save bounce for character moments in consumer products that have explicitly chosen to be playful, and even then use it once, deliberately, never as a default.

Animate `transform` and `opacity` for motion-driven effects. They're GPU-composited and don't trigger layout. Animating `width`, `height`, `top`, `left`, `margin`, or `padding` forces layout reflow on every frame, and the result jitters on anything but the fastest hardware. The exception is genuinely premium effects — blur, backdrop-filter, mask, clip-path, color shifts — when they materially improve the moment and stay smooth. The hard rule: don't animate layout-driving properties casually, and verify that anything heavier stays at 60fps in the actual browser.

One signature hero moment per surface. A celebratory checkmark on order completion, a smooth chart entry on dashboard load, a subtle parallax on a marketing hero, the way a search field expands when focused — one orchestrated moment that signals craft. You earn it by being restrained everywhere else. Brand surfaces get a louder hero (it's part of the voice; users encounter it briefly). Product surfaces get a quieter hero (users live in the surface for hours; loud motion becomes irritating by the second hour). Pick the register, commit, don't let one bleed into the other.

`prefers-reduced-motion: reduce` is mandatory. Vestibular disorders affect roughly 35% of adults over 40 — not a niche audience. Wrap non-essential animation in `@media (prefers-reduced-motion: no-preference)` and provide an instant alternative. The modal still appears — without the slide-in. The toast still shows — fading in place rather than translating up. Functional motion (progress bars, focus indicators, loading spinners) stays in some form; spatial motion goes away.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

The 80ms threshold is the perceptual floor — interactions under 80ms feel instant. This is the target for micro-feedback. Used on the right interactions, optimistic UI makes the product feel materially faster than it is, because perceived performance is the only kind of performance the user actually experiences.

## Modals, overlays, and destructive actions

Modals are dangerous. They trap focus, interrupt flow, and have a long history of accessibility failures — focus escaping into the dimmed background, escape-to-close not working, keyboard users unable to dismiss. The modern answer is the native `<dialog>` element with `showModal()` plus the `inert` attribute on background content. `<dialog>` handles focus trapping, escape-to-close, and `::backdrop` styling for free. You no longer need a thousand-line focus-trap library; the platform now ships it.

```html
<main inert>...background content...</main>
<dialog open>
  <h2>Confirm</h2>
  <button autofocus>Cancel</button>
  <button>Continue</button>
</dialog>
```

Dropdowns and overlays should use CSS Anchor Positioning where supported — `anchor-name`, `position-anchor`, `position-area` — for edge-aware placement that flips automatically if the dropdown would overflow. Combine with the Popover API (`popover`, `popovertarget`) for non-modal overlays that get top-layer stacking, light-dismiss, and accessibility for free. The classic dropdown bug — `position: absolute` clipped by an ancestor's `overflow: hidden` — disappears when the overlay sits in the top layer. For unsupported browsers, fall back to `position: fixed` with coordinates from `getBoundingClientRect()`, recalculating on scroll and resize.

Destructive actions have a counter-intuitive rule: undo-toast beats confirm dialog for almost every case. Confirm dialogs train users to click through them — "Are you sure?" "Yes" — without reading. The dialog feels protective and isn't, because the answer is always "yes" by the third dialog. Undo-toast inverts the model: the action happens immediately, a toast appears for 5–8 seconds with an "Undo" button, and the actual destructive operation runs only after the toast expires.

The exception is truly catastrophic actions — delete account, delete an entire workspace, transfer ownership, anything where undo is impossible. For those, use a type-to-confirm pattern: "Type the project name to delete it." This is ungameable by muscle memory because the user has to actively transcribe the value, and that transcription is the friction that prevents accident.

## Keyboard navigation

Keyboard navigation matters because power users move faster with the keyboard than the mouse, because accessibility-dependent users have no other option, and because every interaction reachable without a pointing device is what separates an interface that respects its users from one that breaks for everyone else.

The roving-tabindex pattern handles grouped controls — a toolbar of buttons, a list of cards, a tab strip, a menu. Only one element in the group has `tabindex="0"` at a time; arrow keys move focus to the next element, which becomes `tabindex="0"` while the previous becomes `tabindex="-1"`. The whole group is one tab stop in the document's tab order. Without roving-tabindex, a toolbar with twelve buttons creates twelve tab stops, and the user has to tab through every one to escape the group.

```html
<div role="tablist">
  <button role="tab" tabindex="0">Inbox</button>
  <button role="tab" tabindex="-1">Drafts</button>
  <button role="tab" tabindex="-1">Sent</button>
</div>
```

Standard shortcuts users expect: `?` opens shortcut help; `cmd/ctrl+k` opens a command palette; `escape` closes overlays; `enter` activates; `space` toggles; arrow keys navigate within groups; `tab` moves between groups. Skip links — `<a href="#main-content">Skip to main content</a>`, hidden until focused — let keyboard users bypass repetitive navigation.

Custom controls (custom selects, date pickers, comboboxes) require ARIA roles and full keyboard support. Native elements get this for free; the moment you replace `<select>` with a styled trigger and a positioned dropdown, you take on responsibility for arrow-key navigation, type-ahead search, escape-to-close, and screen reader announcements. A styled element that looks right but doesn't navigate by keyboard fails accessibility audits and excludes users.

## Onboarding and empty states

Onboarding is part of interaction. The first 60 seconds determine whether the user comes back. The product's value has to be visible — not described, visible — in that window. Time-to-value is the only onboarding metric that matters.

The empty state is the clearest onboarding surface in the product, and most teams treat it as an afterthought. The template is three pieces: (a) what appears here, (b) why it matters, (c) what to do. An empty inbox: "No messages yet. When teammates send you something, it'll appear here. [Invite a teammate]." The user understands the surface, sees the value, knows the next move. A blank panel with "No data" wastes the most teachable moment in the experience.

Contextual tooltips on first encounter — shown once per feature, dismissed permanently after, tracked in `localStorage`. Don't repeat tooltips the user has dismissed; that teaches the user the system doesn't listen. Tooltips appear at the moment the feature becomes relevant, point at the specific element, give one sentence plus one benefit, and offer a "Don't show again" exit.

Spotlight tours capped at 3–7 steps. More than seven and the user skips. Tours run on the REAL product, not on demo data — the user is learning their actual workspace. Each step highlights one element, gives one sentence, and offers one action. Track completion, skip, and time-to-value in analytics so the team can iterate on the steps that lose the most users.

Sandbox tutorials with checkpoints work for genuinely complex products — data analysis tools, video editors, design tools — where the user needs to practice without consequences. An isolated tutorial with sample data, clear objectives, validated steps, and a graduation moment beats a real-product tour because the user can experiment freely. Mitigate the disconnect by making the sandbox visually identical to the real product.

Brand onboarding can be theatrical — the user is encountering the brand briefly, and voice-led storytelling fits. Product onboarding must be efficient — the user is here to do work, not admire the welcome video. The product onboarding that wants to be theatrical is the one users skip first.

## Responsive design as content reflow

Responsive design is not breakpoint juggling. It's content reflow — the same content arranged differently to suit input method, screen size, and context. Mobile-first means writing the small layout first and scaling up; desktop-first means writing the large layout and "making it responsive," which produces awkward intermediate sizes. Responsive design is the grid behaving across breakpoints; pick the breakpoints by where the content reflows, not by canonical device widths. Depth on this lives in `grids.md` § Responsive grids.

Container queries (`@container`) handle component-level responsiveness; viewport queries handle page-level responsiveness. A card in a sidebar should stay compact; the same card in a main content area should expand. Container queries let the card respond to its container's width without knowing the viewport — the only way to build truly reusable components. Viewport queries handle layout-level decisions: single column on mobile, two-column tablet, multi-column desktop.

Detect input method, not just screen size. `@media (pointer: coarse)` and `@media (hover: none)` tell you the user is on touch; `@media (pointer: fine)` and `@media (hover: hover)` tell you mouse or trackpad. A laptop with a touchscreen and a tablet with a keyboard both confound naive size logic; pointer queries get it right. Do not rely on hover for functionality — touch users cannot hover.

Safe areas matter on every modern phone. `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`, etc., combined with `viewport-fit=cover` in the meta tag, pin critical UI inside the safe area. Without this, controls vanish under the home indicator or behind the notch.

Touch targets are 44×44px minimum on mobile. Apple HIG, WCAG 2.5.5, hard floor. Even an icon-only button needs padding to reach 44px, even if the visible icon is 20px. The fix is always padding, not making the icon larger. Real-device testing matters because `:hover` behaves differently on touch, scrolling feels different, the keyboard appears differently, and DevTools' simulated mobile rarely catches these. Test on at least one real iPhone and one real Android.

Responsive images use `srcset` with width descriptors and the `sizes` attribute — not `<picture>` for resolution alone. Use `<picture>` only for art direction — different crops at different sizes. WebP is the modern default; AVIF where supported. Set explicit dimensions or `aspect-ratio` on every image to prevent layout shift.

```html
<img
  src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="..."
  loading="lazy"
/>
```

## Delight without sparkle

Delight is risky. One tasteful moment of motion is signature; ten tasteful moments is exhausting. The threshold is whether motion adds meaning or adds noise. The animated checkmark on completion adds meaning — the user did a thing, the system confirms it. Confetti on every action adds noise — by the third burst, the user has stopped feeling celebrated and started feeling patronized.

Use animated checkmarks on completion — a quick draw-on stroke, 200–300ms, ease-out, ending with a subtle scale settle. Use confetti only for genuinely significant milestones — first deal closed, first project shipped, anniversary moments — never on routine actions. Use contextual loading copy that explains what's happening: "Crunching the numbers..." for analysis, "Loading your invoices..." for a list. The copy gives the user a reason to wait. Avoid AI-slop loading copy — "Herding pixels," "Teaching robots to dance" — those are instantly recognizable as machine-generated and erode trust within seconds.

Lift-and-undo on drag-and-drop: when an item is dragged, raise it slightly with a subtle shadow and a micro scale-up; when it lands, animate the drop and offer an immediate undo toast. The lift makes the interaction feel physical; the undo makes it forgiving. Custom error illustrations with empathetic copy beat the default browser alert every time — a simple line illustration plus "Hmm, that didn't work. We're looking into it. Try again or contact support if it persists" turns friction into care.

Progressive easter eggs are unlocked over time — the 10th project earns a small flourish; the 1-year anniversary earns a moment of recognition. Reward depth, never gate utility.

NEVER use humor for failures, errors, or destructive confirmations. The user is frustrated. Humor compounds frustration. "Oops, looks like the internet took a coffee break!" reads as condescending when the user is trying to recover work they may have just lost. Save warmth for empty states (where the user is exploring) and for celebrations (where humor amplifies the moment). At failure surfaces, the right register is calm, specific, competent.

Brand delight can be louder — brand surfaces are encountered briefly; a moment of voice-forward whimsy in a marketing hero fits. Product delight must be subtler. Product surfaces are lived in for hours, and what reads as charming once reads as exhausting on repeat. Pick the register, commit, don't bleed.

## Performance is a feature

Nobody cares how fast your site is — only how fast it feels. A site that loads in 800ms but feels like 1500ms because of a single jarring layout shift is, to the user, a 1500ms site. The work is on perception, anchored to measurement.

Core Web Vitals are the priority. **LCP** (Largest Contentful Paint) targets under 2.5 seconds — the moment the user sees the largest visible element painted. Optimize the hero image, inline critical CSS, preload key fonts. **INP** (Interaction to Next Paint) targets under 200ms — the time from a user action to the next visual update. Break up long JavaScript tasks, defer non-critical scripts, push heavy computation to web workers. **CLS** (Cumulative Layout Shift) targets under 0.1. Set explicit dimensions on every image, video, and embed; use `aspect-ratio` to prevent reflow.

Image strategy: WebP or AVIF with responsive `srcset` and width descriptors. Route splitting and component-level code splitting at logical boundaries. Lazy-load below-fold content. Batch DOM reads and writes — read all measurements first, then write all updates, never interleave, because alternating reads and writes forces layout on every read. Use `requestAnimationFrame` for JavaScript animation; use Intersection Observer for scroll-triggered effects rather than scroll handlers.

Measure before optimizing. Premature optimization on the wrong target wastes time. Run the baseline, find the actual bottleneck, optimize that, measure again. The answer is rarely where the team thinks it is, which is exactly why measuring first is non-negotiable.

## Closing — interaction is the felt layer of craft

Visual craft makes the interface readable. Interaction craft makes it usable. Together they make a product the user closes with the feeling "that was nice to use" without being able to say why. The why is in the eight states, the timing of the motion, the focus rings, the empty state copy, the safe areas, the keyboard shortcuts, the undo toast, the disabled-state tooltip, the responsive image with explicit dimensions, the dialog that traps focus, the validation that fires on blur and not on keystroke, the touch targets that are 44px even when the icon is 20.

None of these are dramatic. Each one is invisible when done right and conspicuous when done wrong. Polish there, before any visual flourish elsewhere — because a beautiful interface that fails on focus, fails on motion, fails on touch, fails on keyboard, is a beautiful screenshot of software, not software. The user does not get to be the one who finds the missing state. You catch it first. That is the bar. That is interaction craft. That is what gets shipped.
