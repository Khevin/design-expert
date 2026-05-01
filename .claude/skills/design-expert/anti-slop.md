# Anti-Slop

A manifesto on detecting and replacing AI-generated design defaults.

---

## Why AI generates slop

AI doesn't produce slop because it's stupid. It produces slop because of structural pressures baked into how the model was trained, served, and routed. Knowing the cause matters because prompting harder doesn't fix it. The fix is detection plus replacement, applied as discipline at write time and again at review time.

The first pressure is RLHF and compute economics. Every generated token costs GPU time, so providers train a brevity bias into the alignment layer. The model is rewarded for short, confident summaries instead of exhaustive work. Autoregressive models also have learned "stopping pressure" — a tendency to wrap up, calibrated aggressively to save compute, which surfaces as "let me know if you want me to continue" mid-task. Under peak demand, providers throttle dynamically, and the same model gives shorter answers. Treat brevity as the fingerprint, not the goal. When an output trails into "and so on," that's stopping pressure firing — push back with explicit continuation, don't accept it as the answer.

The second pressure is training-data normalization of placeholder code. Stack Overflow, GitHub, tutorials, and blog posts are dense with skeletons — `# implement auth here`, `// TODO`, `// similar to above`, `// rest of code`. The model learns these are professional, expected formats, not laziness. Without aggressive prompting, tutorial-shaped tokens win on probability. Audit any AI output for tutorial scars: ellipses, "similar to above," `// rest of code`, bare `...`. Treat them as failure conditions, not stylistic choices. The placeholder propagation extends to design — every reference dashboard the model trained on had a centered hero, three equal cards, an Inter headline, and a purple gradient. Those compositions feel "professional" to the model the same way `// TODO` feels "professional."

The third pressure is cognitive shortcutting. The LazyBench finding is that frontier models actively pick shortcuts when perceived effort exceeds an internal threshold. The model has the information; it just chooses not to process it deeply. Long outputs also raise compounding-error risk, so brevity is also a hallucination-avoidance strategy. For complex reviews, force the model into evidence-first mode — cite the exact line, paste the raw token, quote the file before summarizing. If the perceived effort feels high, break the request into discrete steps so the shortcut threshold never trips.

The fourth pressure is output-window asymmetry plus consumer middleware. Models often have huge input contexts but small output budgets — eight thousand tokens is common. Consumer interfaces add silent middleware truncation on top: history caps near 32k, retrieval-injected context that drops earlier instructions, "thinking" trimmed before it reaches the canvas. Direct API and CLI tools bypass that layer; consumer chat UIs do not. For large generations, prefer API/CLI contexts and assume the consumer surface is silently pruning your conversation. Plan for output-budget exhaustion with a checkpoint format up front.

These pressures explain why slop survives prompts that explicitly ask for distinctive work. Intent lives in prose, but code generation pulls from patterns. The gap between intent and pattern is where defaults win. The rest of this document closes that gap with named tells and named replacements.

---

## The "would a viewer say AI made that?" test

The practical detection test is a stranger's glance. If someone could look at the design for two seconds and say "AI made this" without hesitation, the design has failed regardless of polish. That's the bar. Not "is it accessible," not "does it follow the system" — would a real human, walking past your screen at a coffee shop, register the work as machine-shaped before they registered the product?

The triggers are concrete and ranked. Purple-blue gradients on a hero. Glassmorphism panels stacked on a dashboard with no functional reason. Hero metric cards with italic inverted-comma quotes pretending to be testimonials. Neon accents on dense data UI. Sparkle icons on every AI feature. A centered H1 wrapped to six lines because the container was too narrow. Three equal feature cards with a Lucide icon, a sentence-case headline, and a "Learn more" link. An "Acme" or "Nexus" placeholder brand name. The same Lucide rocket icon for "launch" and shield for "security." Each of these is a ratchet click toward "AI made that." Three or four together and the verdict is automatic.

The test cuts harder for product surfaces than for brand. A purple gradient is fine on a landing page; on a settings panel it's slop. A hero illustration is fine for a portfolio; on an admin dashboard it's costume. The same default can be acceptable for brand and disqualifying for product. Apply the test with that asymmetry in mind: the question isn't "is this a default" but "is this default load-bearing for THIS register."

---

## The six detectable tells

### Visual and CSS tells

These exist because every "modern" reference page in the model's training set was a Stripe-adjacent SaaS landing page from 2021–2024, and that aesthetic family normalized a specific stack of effects. Glassmorphism saturated the App Store featured pages. Purple-blue gradients spread from Linear's brand into every YC-deck-shaped interface. Pure `#000000` on dark mode became Vercel's signature, then everyone's signature. The model treats these as the look of "premium." They aren't. They're the look of 2022.

Detect them by signature. `background: #000` or `background-color: #000000` on body or a primary surface. `backdrop-filter: blur(...)` on anything that isn't a fixed-position overlay. `linear-gradient(135deg, #6366f1, #8b5cf6)` or any variant where the two stops are a violet and a blue. `box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5)` — the neon outer glow. `border-radius: 9999px` on a card that holds dense data. Bevel-style shadows with positive `y` and large blur, untinted. Gradient backgrounds on every card. The grep one-liners in section seven catch each of these in seconds.

Replacements are named, not vague. Pure black becomes off-black: `#09090b` (zinc-950), `#0a0a0a`, or a warm charcoal tinted toward the brand. The shadow gets tinted toward the background hue — if the background is warm cream, the shadow has a touch of brown; if the background is cool slate, the shadow has a touch of blue. `box-shadow: 0 1px 2px rgba(20, 20, 30, 0.06), 0 4px 12px rgba(20, 20, 30, 0.04)` reads as craft; `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)` reads as default. Glassmorphism only earns its place when the surface is genuinely fixed and there's content scrolling underneath it — a sticky nav, a modal scrim. On a static card, it's costume. Purple-blue gradients lose to one committed accent: an emerald, an electric blue, a deep rose, a rust orange, used at one or two stops with neutrals doing the structural work. Border-radius scales: small (4–6px) for inputs and buttons, medium (8–12px) for cards, large (16–24px) for modals. A 9999px-rounded card with a five-line table inside is the visual equivalent of a sweatpants tuxedo.

For dashboards specifically, surface elevation is whisper-quiet. A dropdown sits one level above its parent card; a card sits one level above the canvas. In light mode, each step is one to three percentage points lighter; in dark mode, the same. You barely see the difference in isolation, but when surfaces stack, hierarchy emerges. A sidebar that's a different color from the canvas fragments the visual space into "sidebar world" and "content world" and signals template — same background with a low-opacity border is enough.

### Typography tells

The model defaults to Inter for sans and a generic serif (Times, Georgia, Playfair) when something needs to feel "premium." Inter is everywhere because Rauno Freiberg, Vercel, and Linear made it the de facto font of the React generation, and the training data canonized it. Playfair Display is the visual equivalent of an italic Cormorant drop cap — a costume serif that signals "editorial" without committing to a specific editorial voice. Both are reflex defaults. They are not wrong, but they are *unchosen*. If your final pick lines up with the original reflex, start over.

Detect them by signature. `font-family: 'Inter', ...` on a brief that called for personality. `font-family: 'Playfair Display'` or `'Cormorant'` or `'Fraunces'` on a brief that didn't ask for editorial. Generic serifs anywhere — Times New Roman, Georgia, Garamond, Palatino. An H1 that wraps to four, five, or six lines because the container is `max-w-md`. All-caps eyebrows with `letter-spacing: 0.04em` to `0.06em` paired with a brand color — the most overused structural device in 2023–2024 SaaS. Gradient text on display headers (`background-clip: text` with a purple-blue stop pair) used as a shortcut to "premium." Mismatched stroke weights between display (often 700) and body (often 400) without intermediate steps — the model picks the extremes and leaves the middle empty. Title Case On Every Header rather than sentence case.

Replacements depend on register. For tech and dev tool brands, reach for Geist, Cabinet Grotesk, Satoshi, or a single committed sans with strong weight contrast inside one family — 200/400/700 from the same family beats a timid two-family pair every time. For editorial and luxury, distinctive modern serifs: Fraunces, Gambarino, Editorial New, Instrument Serif, Lyon Text, Newsreader. For consumer and food and travel, warmer humanist sans plus a script or display serif. For Lastro and Lais brand surfaces specifically, Red Hat Display + Red Hat Text + Red Hat Mono is the brand-locked default — the bans above stay in effect, and Red Hat sits where Geist or Satoshi would otherwise. The H1 fix is structural: widen the container to `max-w-4xl` or `max-w-5xl` and use `clamp(3rem, 5vw, 5.5rem)` for fluid sizing. Two to three lines max. Use `text-wrap: balance` or `text-wrap: pretty` to kill orphaned single words on the last line.

The eyebrow problem is a positioning problem. Uppercase + tight tracking + brand color shouts "this is a feature category." When you actually need a category label, sentence case in a muted gray with normal tracking does the job without screaming. The all-caps treatment should be reserved for short labels (status chips, table headers) where the form follows a function — never for "OUR FEATURES" or "WHY US" hero scaffolding. Gradient text dies the same death: pick one weight, one color, one size that's earned its scale, and let the words carry the meaning.

Scale is a tell when it's flat. Steps less than 1.25× apart read as uncommitted — the model picked from the middle of the distribution and shipped the average. Build a modular scale with at least 1.25× between adjacent display steps, and use `clamp()` on display sizes for fluid scaling. Tracking matters too: editorial display type wants `letter-spacing: -0.02em` to `-0.04em` to feel typographic; body wants `1.6` line-height; light text on dark backgrounds wants `+0.05–0.1` line-height because light type reads as lighter weight and needs more breathing room. None of this shows up in the model's defaults because none of it is in the most-copied snippet — the most-copied snippet has `font-size: 16px; line-height: 1.5;` and stops there.

### Layout tells

Every dashboard the model has ever seen has a left sidebar and a top app bar. Every landing page has a centered hero with an H1, a subhead, and two CTAs. Every "features" section has three equal cards. These compositions are reflexes, and they're the reason your fifth dashboard looks like your first.

Detect them by signature. `grid-template-columns: repeat(3, 1fr)` repeated four times down a page. A centered hero — `text-align: center` plus `mx-auto` plus `max-w-3xl` — on a product surface that should feel like work, not marketing. Cards inside cards inside cards (the model's instinct to "compartmentalize" each piece of content as a distinct surface, building a prison of containers). Bento grids with empty corner cells because the col-spans don't interlock. A sidebar in a different color from the canvas. Full-width primary buttons in product UI where they should be content-width. Symmetric vertical padding on every section. Equal-height cards forced by flexbox even when content varies wildly. A `h-screen` hero that breaks on mobile Safari because it should be `min-h-[100dvh]`.

Replacements are structural moves. For three feature items, default-reject the equal-column row. Try a zig-zag: image-left + text-right, then image-right + text-left, then image-left + text-right, with generous vertical separation. Try an asymmetric grid where the first card is twice the width of the other two. Try horizontal scroll if the items are genuinely a sequence. For Bento grids, apply `grid-auto-flow: dense` and verify every col-span and row-span mathematically interlocks — three to five cards, not eight messy ones. For the centered hero, use a split-screen, asymmetric whitespace, or right-aligned asset composition; left-aligned with negative space on the right reads as designed where centered reads as template. For dashboards, try a top nav, a command palette, or a collapsible panel before reflexively building a left sidebar — and when you do build the sidebar, give it the same background as the canvas with a low-opacity border separating them.

The nested-box problem is solved by spacing, not containers. If you have a card and inside it a "section" and inside that a "subsection," ask whether the inner boxes are doing real work or just rendering hierarchy that whitespace and type weight could carry. Most often they're not. Strip the inner containers, replace them with vertical rhythm, and the page breathes. The squint test catches this: blur your eyes and check if hierarchy still reads. If it does and the boxes are gone in your blur, the boxes were noise.

### Motion tells

The model defaults to `transition: all 0.3s ease` because that's the most-copied snippet in the training set. It defaults to `linear` for repeat animations and `ease-in-out` for everything else. It animates `top`, `left`, `width`, and `height` because the tutorials it learned from did. It uses `window.addEventListener('scroll')` instead of `IntersectionObserver`. It adds spring/bounce to button hovers in professional interfaces where bounce is theatrical. It fades in every section on scroll because that's the AOS library default. None of these are choices. They're inherited.

Detect them by signature. `transition: all 0.3s` anywhere. `linear` or `ease-in-out` as the only easing function in the file. Animations on `top`/`left`/`width`/`height`/`margin` instead of `transform` and `opacity`. `addEventListener('scroll', ...)` in any component file. Spring or bounce easing on buttons, dropdowns, or any tight micro-interaction. A `whileInView` or fade-in-on-scroll wrapper around every section, regardless of whether the content benefits.

Replacements are named curves and named profiles. For micro-interactions (hovers, clicks, state changes): 120–180ms with a deceleration ease — `cubic-bezier(0.32, 0.72, 0, 1)` or `cubic-bezier(0.16, 1, 0.3, 1)`. For larger transitions (modal in, drawer slide, page fade): 240–360ms with the same families. For brand-surface choreography where motion is the voice: spring physics with `stiffness: 100, damping: 20`, staggered children at `50–100ms` delays, custom orchestration. The principle: animate `transform` and `opacity` only — they're GPU-composited and don't trigger layout. Use `IntersectionObserver` or framer's `whileInView` for scroll triggers. Reserve spring/bounce for surfaces where playfulness is the brief; on a financial dashboard, bounce cheapens trust.

Loading, empty, and error states are part of motion craft. A static success state without its three counterparts is incomplete, and the absence reads as AI-shaped because the model writes the happy path and stops. Skeleton loaders matched to the layout shape beat generic circular spinners. Empty states composed as onboarding views beat "No data available" centered in a card. These are not optional polish; they're the visible difference between a demo and a product.

Performance is a craft tell of its own. `backdrop-blur` only on fixed or sticky elements, never on scrolling containers — it tanks frame rate and the user feels it before they see it. Grain and noise overlays only on fixed `pointer-events-none` pseudo-elements. Z-index reserved for systemic layers (sticky nav, modals, overlays); arbitrary `z-50` and `z-[9999]` are signs nobody owns the stacking system. `useEffect` animations need cleanup functions or they leak across navigations. Perpetual motion components — pulses, shimmers, marquee loops — must be `React.memo`-wrapped and isolated as leaf Client Components so they don't trigger parent re-renders. The motion that ships smoothly looks designed; the motion that drops frames looks broken regardless of how tasteful the curve was on paper.

### Content tells

Slop in the copy is louder than slop in the pixels. The model fills text fields with John Doe, Jane Smith, Sarah Chan, Jack Su. It fills numbers with $1,000, 100 users, 50% increase, 99.99% uptime. It picks brand names from a small bag: Acme, Nexus, SmartFlow, Flowbit, Quantumly, NovaCore. It writes headlines with Elevate, Seamless, Unleash, Next-Gen, Game-changer, Delve, Tapestry, Revolutionize. It pads UI with "Scroll to explore," "Swipe down," bouncing chevrons, "SECTION 01" eyebrows. It writes Lorem Ipsum when in doubt. It em-dashes every sentence into submission. Each of these is a tell, and stacked they make the design feel auto-generated even when the layout is fine.

Detect them by substring. Search for any of the placeholder names verbatim. Search for `99\.99`, `\$1,000\.00`, `1234567`, repeating-digit phone numbers. Search for the cliché verbs in any heading. Search for `Lorem ipsum`. Search for the AI tipoff phrases: "in the world of," "tapestry of," "transformative platform," "powerful solution." Search for filler UI: "Scroll to explore," "Swipe down," "Learn more," "Get started" used without any specific verb attached.

Replacements are domain-specific, not generic. For Lais and Lastro, Lais's voice rules forbid "Elevate" and prefer specific verbs from the corretora's daily workflow — "responder," "qualificar," "remarketing," "cadastrar." For numbers, require non-uniform last digits and at least one organic decimal: `47.2%` beats `50%`, `R$ 14.382,90` beats `R$ 15.000,00`, `+1 (312) 847-1928` beats `+1 (555) 123-4567`. For names, require diversity and no obvious template stems — pick from a real-name corpus, not "Jane Smith." For brand names in mocks, use the actual customer name when shipping for a customer; for generic mocks, pick something idiosyncratic enough to not appear in another portfolio (a real city, a real species, an inside reference) rather than reach for Acme. For UI filler, the rule is brutal: if a string doesn't carry information, delete it. "Scroll to explore" is a chevron arrow's job, and a chevron arrow is usually wrong too. The em-dash is a legitimate tool, but using it three times per paragraph as a rhythm crutch is a tell. Replace with periods, semicolons, or sentence rewrites.

For copy that's specifically AI-attribution — "Sugestão da IA," "INSIGHT," "AI suggestion" — the replacement is editorial framing, covered in detail in the project-specific clichés section below.

### Iconography tells

Hard rules first. No emojis as UI. Lucide is the icon library across all surfaces in this skill (its open-source coverage and consistent stroke make it the deliberate choice; the caution is against cliché *metaphors*, not Lucide as a library). Carbon for enterprise dashboard patterns. Red Hat for Lais and Lastro brand surfaces. These are not negotiable, and they're listed once here so they don't have to be repeated below.

Detect cliché metaphors by signature. A rocket icon next to anything labeled "Launch" or "Get started." A shield icon next to anything labeled "Security." A sparkle, star, or wand icon next to anything labeled "AI" — this is the most worn-out icon in the 2023–2026 SaaS visual vocabulary. Inconsistent stroke widths across the same set (some icons at 1.5, others at 2.0). Decorative topic icons placed to the left of every card title in a dashboard, where they consume horizontal space and don't disambiguate the title.

Replacements are less obvious metaphors. Bolt or spark for launch instead of rocket. Fingerprint or vault or key for security instead of shield. For AI features specifically, drop the icon entirely and use editorial framing — the brand name in the lede ("Lais notou:") carries the attribution, no sparkle required. Standardize stroke width across the entire icon set: pick 1.5 or 2.0 and enforce it. For dashboard card titles, drop the topic icon. The rule is: if removing an icon loses no meaning, remove it. "Leads por canal" with a chart icon means the same thing as "Leads por canal" without one. Carbon's enterprise dashboard pattern, the canonical reference, doesn't put topic icons on card titles — it uses title text alone, with an optional `(i)` info tooltip when there's a real explanatory tooltip to attach. Standalone icons (a search field's magnifier, a button's trailing arrow) get presence with a subtle background container or by sitting at the right size; topic icons get deleted.

---

## Project-specific clichés

### The AI assistant card pattern

Every AI feature shipped between 2023 and 2026 — Notion AI, Linear AI, Stripe Atlas suggestions, Slack AI, GitHub Copilot panels, Intercom Fin, Pipedrive AI insights, HubSpot Breeze — converged on the same composition. A 3px purple or violet left stroke. A square colored icon tile holding a white sparkle, star, or wand. An uppercase eyebrow label with letter-spacing 0.04–0.06em ("SUGESTÃO DA IA," "AI SUGGESTION," "INSIGHT"). A semibold black headline. A gray detail line. A brand-colored CTA button on the right. Five components, each individually defensible, that combined are now an instant tell.

```
┌─[3px purple/violet left stroke]─────────────────────┐
│ ╔═══╗  SUGESTÃO DA IA                               │
│ ║ * ║  Headline in semibold black                   │
│ ╚═══╝  Detail line in gray.                         │
│  (purple icon tile, sparkle/star/wand icon)         │
│                                          [Ver tudo →]│
└──────────────────────────────────────────────────────┘
```

The pattern won because it solved a real product problem in 2023: users didn't trust AI features, so designers wrapped them in unmissable affordances that screamed "this is the new AI thing." It worked. Then everyone copied it. Now it's a tell — a card that signals "AI feature" via decoration instead of building trust through editorial framing. It positions the AI as a *feature*, not a colleague. For Lais specifically, the brand voice is "Lais is a colleague" — the cliché treatment frames her as a chatbot button. Users have learned to ignore these strips because they're nearly always selling something.

The replacement is editorial framing with byline-style attribution. Drop the icon tile. Drop the left stroke. Drop the uppercase eyebrow. Drop the brand-colored CTA. Use type hierarchy and journalism-style attribution.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Lais notou: 7 leads qualificados sem retorno        │
│  há mais de 24h.                                     │
│                                                      │
│  A maioria entrou pelo WhatsApp direto. Vale uma     │
│  campanha de remarketing rápida para reaquecer       │
│  esses contatos.                                     │
│                                                      │
│  — análise de hoje, 09:42         [ Ver leads → ]    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The card now uses the same border treatment as every other card on the page. White background. No left stroke. The lede prefix ("Lais notou:") functions like a newspaper byline — sentence case, not title case. The headline quotes the actual finding instead of framing it as a "feature." A body paragraph carries the reasoning. An attribution byline at the bottom dates the insight, addressing trust. One CTA with the actual verb the user would do, not "Ver tudo."

The editorial frame works because it implies a person, not a feature. A byline says "someone wrote this and they stand behind it." A sparkle icon in a tile says "the system generated this and you're free to ignore it." The same insight, framed two ways, lands as either a colleague's note or marketing copy. The byline framing is what changes the affordance from "feature to dismiss" to "colleague to read." For multi-suggestion stacks, use a single suggestions queue with a stack visual — one front card with full content, one or two ghost cards peeking from behind, pagination dots — never a column of N consecutive banner cards down the page, which multiplies the cliché and turns the surface into AI noise.

Other acceptable AI-attribution patterns: inline within the page header ("Imovy Corretora · Lais notou: 7 leads parados há +24h"); speech-bubble framing with a small avatar and message-bubble shape; annotation directly on the chart when the insight is about a specific data point. Each one frames Lais as a colleague rather than a feature. Tone encoding goes on a small dot plus sentence-case word ("Atenção," "Aviso," "Crescimento") — never as a full-card colored stroke.

### Decorative card-title icons

A second project-specific cliché: putting a Lucide topic icon to the left of every dashboard card title. "[chart] Leads por canal." "[clock] Leads por horário." "[bar] Leads semanais." "[trend] Leads nos últimos 6 meses." This is the dashboard equivalent of the bouncing chevron — a decoration the model adds because every reference image had one. The icons don't disambiguate, the stroke widths and sizes drift across cards, and Carbon's reference dashboard pattern doesn't use them. Drop the topic icons. Keep title text (font-display, 16px, weight 600), an optional `(i)` tooltip glyph at 12px when there's a real tooltip, and an optional action link on the right.

---

## The numeric dials

The point of a dial is to force a deliberate choice. "Looks good" is not a choice. "DESIGN_VARIANCE 7, MOTION_INTENSITY 3, VISUAL_DENSITY 8" is a choice. The dials externalize the decision so it can be audited, contested, and matched against the brief. Without them, the model picks from the middle of every distribution and ships average.

DESIGN_VARIANCE measures how unusual the visual composition is, on a scale of 0 to 10. Zero is "looks like every dashboard since 2018." Ten is "no one will mistake this for a template, and the user might not recognize it as a dashboard at all." Crank it up for brand surfaces, portfolios, marketing, anything where the design IS the product — landing pages can afford 7–9. Crank it down for product surfaces where users are doing work and need familiar affordances — settings panels, data tables, admin tools should usually run 2–4. A trading terminal at variance 9 fights the user. A boutique hotel landing page at variance 3 disappears.

MOTION_INTENSITY measures how aggressive transitions and animations are, on the same scale. Zero is a static page with no animation. Ten is staggered choreography, scroll-triggered sequences, parallax, magnetic hover physics. Brand surfaces can run 5–8 if motion is the voice; tech-minimal brands often skip entrance motion entirely and let restraint be the voice (motion at 1–2). Product surfaces should run 1–3 — micro-interactions on hover and focus, smooth state transitions, but no choreography. A finance dashboard with bouncing entrance animations on every card cheapens the trust that's the whole point of the surface.

VISUAL_DENSITY measures how much information lives per square inch. Zero is brand-page levels of breathing room — `py-48` sections, single ideas per fold. Ten is trading-floor levels — tabular numbers, monospace for alignment, no card boxes, every pixel earning its keep. Brand typically runs 1–3; product typically runs 6–9. The combination matters. A dashboard at variance 2 / motion 2 / density 8 is Carbon-style enterprise — exactly right for a real estate operator's daily workflow. A landing page at variance 8 / motion 6 / density 2 is a brand surface — exactly right for a hero page that has to communicate, not transact. The combinations to avoid are the ones that fight: a marketing page asking for density 9 (information overload where a brand voice should be), a settings page asking for variance 9 (chaos where the user expects familiar affordances).

Write the three numbers down before generating. If you can't, the brief is under-specified and you should stop and ask. If the numbers and content disagree, that's a spec error — flag it. The dials are a forcing function for the conversation that should have happened before the design started.

---

## Self-audit grep recipes

Run these substring scans against generated CSS, HTML, and JSX before claiming a build is done. Each match deserves a one-sentence justification or a fix. If you can't justify it pointing to user goal, data semantics, or brand register, it's a default.

- `grep -E "background.*#000(000)?[^0-9a-f]" file.css` — Pure black background. Replace with off-black (`#09090b`, zinc-950, or warm charcoal).
- `grep -E "linear-gradient.*(purple|violet|indigo|#6[0-9a-f]{2}.*#[8-9a-f][0-9a-f]{2})" file.css` — Purple-blue gradient. Replace with one committed accent or remove.
- `grep -E "backdrop-filter.*blur" file.css` — Glassmorphism. Verify the surface is actually fixed/sticky over scrolling content; otherwise remove.
- `grep -E "border-left:.*3px.*(purple|violet|#[5-7][0-9a-f]{2})" file.css` — AI assistant card cliché left stroke. Replace with editorial framing.
- `grep -E "text-transform: ?uppercase" file.css | grep -E "letter-spacing: ?0\.0[3-6]"` — All-caps eyebrow with tight tracking. Replace with sentence case in muted gray, or delete.
- `grep -E "background-clip: ?text" file.css` — Gradient text on display headers. Pick one weight, one color, one earned scale.
- `grep -E "transition: ?all" file.css` — Generic linear transition. Replace with named cubic-bezier or spring profile, scoped to specific properties.
- `grep -E "(top|left|width|height|margin): ?[0-9].*animation|@keyframes.*\\b(top|left|width|height|margin)\\b" file.css` — Animations on layout-triggering properties. Switch to `transform` and `opacity`.
- `grep -E "addEventListener\\(['\"]scroll" file.js` — Scroll listener instead of IntersectionObserver. Replace.
- `grep -E "grid-template-columns: ?repeat\\(3, ?1fr\\)" file.css` — Three equal feature cards. Try zig-zag, asymmetric grid, or horizontal scroll first.
- `grep -E "h-screen|height: ?100vh" file.css` — Breaks on iOS Safari. Replace with `min-h-[100dvh]` or `100dvh`.
- `grep -E "(John Doe|Jane Smith|Sarah Chan|Jack Su|Lorem ipsum)" file` — Placeholder names and Lorem Ipsum. Replace with domain-real content.
- `grep -E "(Acme|Nexus|SmartFlow|Flowbit|Quantumly|NovaCore)" file` — Slop brand names. Replace.
- `grep -iE "(elevate|seamless|unleash|next-gen|game-changer|revolutionize|transformative platform|powerful solution|tapestry of|in the world of)" file` — AI copywriting clichés. Rewrite with concrete verbs from the domain.
- `grep -E "(99\\.99|\\$1,?000\\.00|\\b1234567\\b|\\b50\\.0?%)" file` — Round-number tells. Replace with organic data.
- `grep -E "(Scroll to explore|Swipe down|Learn more|Get started)\\b" file` — Filler UI copy. Delete or replace with a real verb.
- `grep -E "(SECTION 0[0-9]|QUESTION 0[0-9]|ABOUT US)" file` — Cheap meta-labels. Delete.
- `grep -E "<svg[^>]*>.*(sparkle|wand|stars).*</svg>" file` — Sparkle icon as AI metaphor. Replace with editorial attribution.
- `grep -E "// (TODO|rest of code|implement here|similar to above|continue pattern)|/\\* \\.\\.\\. \\*/" file` — Truncation scars. Complete the implementation.

The greps don't catch everything — perceptual tells (the squint test, the swap test, the section-rhythm check) still need a human eye. But the greps catch the substring-falsifiable defaults faster than any review pass, and they should run before you ever ask a teammate to look.

---

## The two replacements that win

Two replacements do most of the work. The first is **editorial framing instead of branded-feature framing**: bylines instead of badges, sentence-case ledes instead of uppercase eyebrows, attribution dates instead of brand-colored strokes, the brand's name in the copy instead of in a colored tile. Editorial framing implies a person stands behind the work, and a person carries trust that a feature treatment can't. Apply it to AI suggestions, system notifications, empty states, error messages, anywhere the surface is speaking to the user — frame the speaker as a colleague, not as a UI element.

The second is **signature elements instead of decorative ornament**: one component, one type move, one color move, one motion move that could only exist for THIS product, applied consistently across the surfaces where it earns its place. Decorative ornament is the gradient added to the hero because the hero felt empty; the icon tile added because the card felt plain; the chevron added because the section felt static. Signature is the move that emerged from the product's specific world and says "this is mine." If you can't point to five places where your signature lives in the build, it doesn't exist. If you can, the rest of the slop falls away because the surface is no longer competing with itself for personality. The work is to find the signature. Everything else is restraint.
