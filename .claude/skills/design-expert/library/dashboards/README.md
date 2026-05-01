# Dashboards

A dashboard is the hardest surface in product design because it has to be three things at once that pull in opposite directions. Dense enough that a power user gets the answer in a glance, legible enough that a new user isn't lost. Signature enough to be recognizable from one screenshot, conventional enough that affordances behave the way an operator expects. It must look like work, not marketing. Most dashboards fail because they reach for the brand-page hero, the three-equal-cards composition, the purple gradient. As `craft.md` puts it, "competent is the floor of acceptable output, and the floor is now crowded." A dashboard at competent is a dashboard the user has already seen.

## What good looks like

Restraint applied at scale. Surface elevation should be whisper-quiet — `craft.md`'s subtle layering rule says each level is only a few percentage points off the level beneath it, and a sidebar shares the canvas background with a low-opacity border rather than being painted a different color. Density is contextual: an inbox earns 32-to-40-pixel rows with 13-or-14-pixel type, while a settings page in the same product breathes at 24-to-32 padding. The component is the same; the application differs.

Cells carry the system. `components.md` is unforgiving — one status pill per row, six color semantics held everywhere, no pie or donut charts ever, bar baselines at zero, tabular numerals on any column that aligns vertically. These are not preferences; they are the alphabet the surface uses to mean things. The same discipline runs through icons: pick one Lucide stroke weight and use it everywhere; drop the topic icon from card titles unless removing it loses meaning.

Register is the deciding move. Dashboards are product surfaces, not brand surfaces. `anti-slop.md` makes the asymmetry explicit — a purple gradient is fine on a landing page; on a settings panel it's slop. Working memory holds about four items at once (`foundations.md`, Cowan's cap), so above-the-fold widgets earn their slot or get cut. One primary action, two or three secondary, the rest muted.

## Quality examples (Do)

### Linear
URL: `https://linear.app`
The canonical demonstration of `craft.md`'s four tests passing simultaneously. Monochrome neutrals do the structural work, the sidebar shares the canvas, and a single restrained accent carries primary actions — the 60-30-10 distribution exactly. The signature element is the command palette plus the issue keyboard model: chrome stays quiet because the verb lives in the keyboard.

### Vercel
URL: `https://vercel.com`
An off-black product canvas — the `#09090b` replacement for pure `#000` that `anti-slop.md` names. Hierarchy comes from low-opacity borders and barely-perceptible elevation, not from shadows or glows. Typography is one committed sans (Geist) with weight contrast inside one family — `anti-slop.md`'s structural alternative to a timid two-family pair. Textbook `craft.md` subtle layering for dark mode.

### Stripe Dashboard
URL: `https://stripe.com`
The financial-grade reference for restraint with charts. Bar baselines at zero, line charts annotated at the data point that matters (the lede on the chart, not buried in a legend), tabular numerals everywhere money aligns — `components.md` made flesh. The accent stays on actions; the data stays neutral. The near-absence of motion on the working surface is itself the design move.

### Plaid
URL: `https://plaid.com`
Fintech-grade typographic discipline. Numerals tabular, scales clear, accent committed to action only. The dashboard resists the YC-deck purple-blue gradient `anti-slop.md` names as the most worn-out tell of 2022 SaaS. Plaid stays flat and trustworthy — depth from the elevation scale, not from `backdrop-filter`.

### Figma
URL: `https://figma.com`
The file browser is a high-density product surface that holds together because every cell obeys its contract. Thumbnails align on a real grid, metadata uses tabular numerals, avatars share one diameter, chrome stays at one Lucide stroke weight. Runs at the high end of `anti-slop.md`'s VISUAL_DENSITY scale without becoming hostile, because rhythm is real and the cell contracts hold.

## Anti-patterns (Don't)

### The marketing-page hero on a dashboard
A centered H1, a subhead wrapped to four lines, two equal-weight CTAs, a Lottie illustration. It looks like a landing page because it is one, pasted onto working software. `anti-slop.md` flags this as a "Layout tell": centered hero compositions belong on brand surfaces where the user is in passing, not on product surfaces where the user is in flow. The fix is a workbench frame with the actual verb the user came to do.

### The three equal metric cards
`grid-template-columns: repeat(3, 1fr)` with KPI label, big number, trend chip in each. It treats every metric as equally important, which is never true. `craft.md`'s cognitive-load section names the fix: one primary metric leading the eye, two or three secondary, the rest collapsed. Three equal cards means the designer didn't pick.

### The glassmorphic sidebar with a purple gradient
`backdrop-filter: blur(20px)` on the navigation, a violet-to-indigo gradient bleeding under it, an untinted shadow. `anti-slop.md` names this as the 2022 SaaS visual-and-CSS tell stack — the App Store aesthetic the model treats as "premium" and any working operator now reads as costume. It also tanks frame rate because blur on a scrolling container is the most expensive composite the browser does. The replacement is a canvas-shared sidebar with a one-pixel low-opacity border.

### The pie chart on a small dataset
Five categories as wedges, each a slightly different angle, asking the user to compute "is 23% bigger than 19%" by eye. `components.md` is absolute: no pie charts, no donut charts, ever — Cleveland and McGill established in 1984 that the eye reads length faster than angle or area. Wherever a pie appears in a dashboard mock, replace it with a stacked bar before review.

## How to use this category

When designing or reviewing a dashboard, open the Do half first to calibrate your sense of what good looks like at this density — cells, elevation, Lucide stroke, chart shapes, sidebar treatment. Then open the Don't half to name the AI-default patterns your draft is reaching for, so you can refuse them by name. Return to the decision with both lenses active. The signature is in the discipline, not the flourish.
