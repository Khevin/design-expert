# Typography

A manifesto. Read once, then keep it nearby.

## Why typography makes or breaks an interface

Type is the strongest single signal of craft in software. Before a user reads a sentence, before they parse a chart, before they identify a button, they have already absorbed a verdict about the product based on the shapes of its letters. A correct grid laid out with bad type reads as cheap. A loose, slightly indulgent grid carried by great type reads as confident. The grid is the skeleton; the type is the face. Faces are what people remember.

This is not a poetic flourish — it is a structural fact about interfaces. Almost every screen you ship is text. The labels on your charts carry the message; the chart only carries the shape. The numbers in your table are typography; the cells around them are negative space. The buttons in your toolbar are words first and rectangles second. Even when an interface "looks like" controls and dashboards, what users are actually reading is type, all the way down. The proportion of an interface that is, byte for byte, typography is staggering. Treat it accordingly.

Most AI-generated UI fails at type before it fails at anything else. The pattern is depressingly consistent: Inter on Inter, no second register, no measure, no rhythm, three sizes suspiciously close to each other, a hierarchy you can only perceive if you already know what it's supposed to say. The font choice is invisible because no choice was made. None of these are fatal individually. Together they produce the unmistakable smell of generated work — a screen that nobody decided. The work in this document is to teach you to actually decide.

## Classic principles

**Vertical rhythm.** Pick the line-height of your body text. That number is now the heartbeat of your entire layout. If body is 16px with a line-height of 1.5, your base rhythm is 24px, and every vertical spacing token in your system should be a multiple of 24px or a half-multiple of it. Padding, gaps between sections, margin between paragraphs, the gap between a label and its input — all of it derives from one number. This is not numerology; it is the mathematical reason a well-set page feels calm. Spaces that are mathematically related to the line of text feel deliberate. Spaces that are arbitrary feel like furniture nobody pushed flush against the wall.

**Modular scale.** The most common type-scale failure is too many sizes too close together. Designers build a scale that includes 14, 15, 16, 18, 20, 22 and wonder why the hierarchy reads as mud. The solution is to commit to a ratio and use *fewer* sizes with *more contrast* between them. The two ratios that work for almost every interface are 1.25 (the major third) and 1.333 (the perfect fourth). Pick one and commit. Don't mix them. A 1.25 ratio gives you a scale that feels orderly and product-like; 1.333 gives you a scale with more presence, suited to brand and editorial surfaces. Five sizes — caption, secondary, body, subheading, heading, plus a display register for hero moments — covers almost everything you will ever ship. The scale should be visible: each step should feel like a different role, not a slightly different opinion about the same role.

**Readability is not optional.** Body text should be at least 16px. Anything below that is a comfort tax on your users; anything below 14px is a usability bug. The ideal measure — the line length your eye can sweep without losing its place — is 65 characters, with 45 to 75 as the comfort range. Use the `ch` unit for measure: `max-width: 65ch` works directly against the font in use, so it stays correct when you switch typefaces. Line-height for body wants to live between 1.5 and 1.7. Display type wants 1.1 to 1.3 — tight, because at large sizes the letters already breathe. Light text on dark backgrounds spreads optically and needs more leading; heavy text on light backgrounds wants slightly less.

These numbers are not preferences. They emerge from a century of typography research and decades of digital reading studies — the comfortable measure for sustained reading is genuinely 65 characters, body type genuinely is unreadable below 14–16px for most adults, and line-height genuinely does need to relax as line length grows. You don't need to recite the studies. You need to internalize the band they describe and stop fighting it.

**The paragraph rhythm decision.** Pick either space between paragraphs or first-line indent. Never both. Digital interfaces almost always want space; editorial long-form can earn the indent. The rule exists because the two cues do the same job — they tell the reader where one paragraph ends and the next begins — and using both is an unforced redundancy that whispers "I didn't decide."

**The 2–3 family limit.** Three is a ceiling, not a target. The job of a type system is role clarity: this size is for headings, this is for body, this is for data, and the reader feels the difference without having to think about it. Adding a fourth or fifth family does not buy more clarity; it buys more visual noise. One sans, one display companion (sometimes the same family), and a mono for tabular data is already a complete system. Reach for a fourth only when there is a genuine register the existing three cannot carry — a serif for editorial blocks inside an otherwise technical app, for example. Never reach for a fourth because the design feels boring; that is a signal the existing three are not being used at full strength.

## The hierarchy levels — primary, secondary, tertiary, muted

"Text and gray text" is not a hierarchy. It is a duotone. A real hierarchy has at least four roles, each with a specific job, each carrying a specific portion of the visual signal. The framework is primary, secondary, tertiary, muted — and getting it right is the difference between a screen the eye can scan and a screen the eye has to wade through.

**Primary** is full-emphasis content. The headline of the page, the value of a metric, the body of a chat message, the name of an item in a list. Primary text uses the strongest foreground token — opacity 100% or whatever your brand calls full-strength — and is reserved for the content that actually answers the user's question. If everything is primary, nothing is. The discipline is to be ruthless: this surface is asking the user to read *one thing*; that thing is primary; everything else descends.

**Secondary** is supporting text. The subheading under the headline, the description under the metric, the message preview under the contact name. It exists to explain or contextualize the primary content. Visually, secondary text sits at roughly 70% opacity of the primary token — visible at a glance, clearly subordinate, comfortably readable in a paragraph. Secondary is the level most AI output skips entirely; the symptom is a screen with one giant headline and one giant body, no middle layer to bridge them.

**Tertiary** is timestamps, captions, byline-level metadata. The "2 hours ago" under a comment, the "Last updated by Marina" at the bottom of a card, the unit label on a metric. Tertiary lives at roughly 50% opacity — present, but it requires the reader to lean in. The job of tertiary is to provide context that becomes useful only when the user actively wants it. If they don't, it doesn't compete for their attention.

**Muted** is for placeholders, disabled states, ghost text, the helper hint inside an empty field. It lives at 30–40% opacity, on the edge of legibility, and that is the point. Muted text should recede until summoned. A placeholder is a polite suggestion, not a label competing with the user's typed input. A disabled link should look unavailable, not like a regular link in a quiet room.

The four levels carry different jobs in scanning. The eye locks onto primary first — that is what catches it. Secondary explains what primary just promised. Tertiary contextualizes when the user has decided to invest. Muted recedes so it doesn't interfere. When all four are working, a screen is *scannable* without conscious effort: the user's eye traces a structure that was designed for it. When only two levels are present, the screen reads as flat, and every piece of text negotiates with every other piece for the user's attention.

In code, do not encode these as raw colors. Build a foreground scale: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-muted`. Each maps to a foreground primitive at a specific opacity or alpha. When you adjust the system — say, the canvas tint changes and primary needs to step down half a percent — you change one variable, not every component. Token architecture is what lets a hierarchy survive a redesign.

## Brand vs. product register for type

Every typography decision must answer a register question first: is this a brand surface or a product surface? They want different things, and conflating them is one of the most common AI errors.

Brand surfaces — the marketing site, the landing page, the launch announcement, the pitch deck — are allowed to *speak*. Type can be loud. Display sizes can run to 96px and beyond in heroes. Fluid scaling via `clamp(min, preferred, max)` is appropriate, because the surface needs to breathe responsively across viewport sizes; the headline at 1440px wide should genuinely feel different from the same headline on a phone, and `clamp()` is how you tune that arc. A single expressive typeface used as a statement — a Bricolage Grotesque or a Clash Display carrying every heading — is legitimate, even desirable. The surface is making an argument, and type is part of the argument.

Product surfaces — the app, the dashboard, the settings page, the admin panel — are not allowed to speak the same way. Type must serve, not perform. Use a fixed `rem` scale. Body text stays a constant size across viewports because the user is in a workflow, and changing body size by viewport breaks spatial predictability in dense, container-based layouts. Headings cap around 28–32px outside genuine tentpole moments — an empty state, a celebratory milestone, a marketing card embedded in the product. Fluid typography is wrong here, because the spatial system the layout depends on cannot tolerate the type drifting under it. No major product design system — Material, Polaris, Primer, Carbon, Untitled UI — uses fluid type in product UI. They use fixed scales with optional breakpoint adjustments because that's what dense interfaces need.

Brand and product also want different family structures. A brand surface can carry a single typeface as a statement, leaning on weight and size to manufacture hierarchy. A product surface generally needs at least two families — a sans for body and labels, a mono for data and code — and often a third for display headings. The mono is not optional in product UI: numbers, timestamps, IDs, and codes all need tabular alignment, and mono is how you get it. A product surface without mono is a product surface where the financial table doesn't quite line up, and the user can feel it without knowing why.

The exception worth naming: marketing surfaces inside a product app — the upgrade-to-pro modal, the new-feature announcement banner, the empty-state illustration with a hero headline — should follow brand register, not product register. The user is in the product, but for the duration of that specific surface, the surface is selling them something. It deserves the brand voice. Switch the type scale, allow display sizes, allow expressive headings. Then the user closes the modal and lands back in the product, and the rules switch back.

This brand-vs-product split is the single most common source of confused interfaces. A landing page that looks like a dashboard reads as cold and cheap; a dashboard that looks like a landing page reads as toy software that nobody can actually work in.

## Choosing a pairing

There is a reliable framework for choosing type. Not a flowchart — those produce the average, and the average is exactly what you're trying to escape — but a sequence of questions that surface the real constraints.

**Start with the stated intent.** Not the brand brief; the *intent*. What is this product supposed to feel like when someone opens it? Is it a quiet reading app or a loud trading floor? Is it a tool for kindergarten teachers at 7am or a console for SREs at 2am? The answer shapes everything downstream. If you cannot answer this in a sentence with real adjectives, stop and ask the user. Do not guess. Defaultism almost always begins as a guess about intent.

**Then place the temperature.** Type carries warmth or coolness independent of color. Söhne, Geist, Inter, Helvetica are cool — geometric, neutral, technical. Source Serif, Crimson Pro, Newsreader, Fraunces are warm — humanist proportions, slight irregularity, residue of pen and ink. Some families are deliberately neutral — IBM Plex, Tinos, Spectral — and slot into either world. The temperature of the type should match the temperature of the product. Reaching for a warm serif on a cool technical product because it "adds personality" is a defaultism, not a craft move.

**Then place the vibe.** Inside warm and cool there are sub-registers: editorial, technical, playful, refined, monumental, intimate, retro-future, civic. A warm-editorial product might want Cormorant Garamond paired with Lato; a warm-intimate product might want Crimson Pro on its own; a cool-technical product might want Geist + Geist Mono; a cool-retro-future product might want Space Grotesk + Space Mono. The vibe is the second knob; without it you'll land on the temperature-correct default and miss the actual product.

**Then anti-defaultism.** When two pairings could fit, prefer the one that is *less common*. The most-used option is by definition the default, and defaults are how products start to look like every other product. If your warm-editorial answer is Playfair + Source Sans, ask yourself whether Newsreader + Inter would do the same job with less echo. If your cool-technical answer is Inter + Inter, ask yourself whether Geist + Geist Mono would carry more intent. Same notes, fresher voice.

A few example flows to make the framework concrete. *Wants warm and technical?* — consider IBM Plex Sans paired with JetBrains Mono; the slight humanism of IBM Plex's terminals warms the surface without softening the data feel. *Wants cold and refined?* — consider Geist + Geist Mono; both designed alongside each other, so tables read as part of the same family. *Wants playful and editorial?* — Bricolage Grotesque + Cabinet Grotesk gives headline personality without dragging long-form readability down. *Wants academic and dense?* — EB Garamond + Inter + JetBrains Mono. *Wants warm and approachable for education?* — Bree Serif + Open Sans, or Roboto Slab + Roboto for full Google-stack reliability.

These are answers, not the answers. The point of the walkthrough is to show the *thinking* — temperature, vibe, less-common alternative — not to memorize conclusions. When the framework runs cleanly, the pairing emerges from the product's actual intent. When it doesn't, you've defaulted, and the screen will tell on you.

## The 38 curated pairings

These pairings are tools, not endorsements. Each one carries a personality and a set of working assumptions. Picking one means inheriting those assumptions; picking it without thinking means inheriting them invisibly. The table below is the reference set — 38 pairings curated for product, brand, and editorial work, organized by temperature and vibe.

The columns are: number, display/heading family, body family, monospace family (when relevant), the dominant vibe of the pairing, its temperature on the warm-cool axis, and the kind of product it best serves. Almost all are free — Google Fonts, Fontshare, or open-license — with paid alternatives noted where they would outperform but aren't required. All cover Latin Extended-A and Latin Extended-B, which means they handle diacritics correctly across Latin-script languages; verify before shipping by typing a sample like "São Paulo — não há nada melhor que um espresso." If diacritics fall back to a system font, the subset is incomplete and needs to be reloaded.

| # | Display / Heading | Body | Mono | Vibe | Temperature | Best for |
|---|---|---|---|---|---|---|
| **1** | **IBM Plex Sans** | **IBM Plex Sans** | **IBM Plex Mono** | **Modern, technical, considered** | **Cool-neutral** | **Technical and engineering products; data-heavy SaaS; documentation-driven brands** |
| 2 | Source Sans 3 | Source Serif 4 | JetBrains Mono | Editorial-meets-technical | Cool-warm balance | Long-form content, blog, reports for technical brands |
| 3 | IBM Plex Sans | IBM Plex Serif | IBM Plex Mono | Premium, considered | Cool-neutral | Investor reports, white papers, reference docs |
| 4 | Playfair Display | Source Sans 3 | — | Classical, editorial, elegant | Warm | Magazine sites, real estate listings, premium e-commerce |
| 5 | Cormorant Garamond | Lato | — | Refined, literary, calm | Warm | Bookstores, luxury hospitality, wine/coffee brands |
| 6 | EB Garamond | Inter | JetBrains Mono | Academic, considered, dense | Neutral | Research tools, knowledge bases, academic SaaS |
| 7 | Libre Caslon Display | Open Sans | — | Newspaper-classical, authoritative | Warm-neutral | News, journalism, civic tools |
| 8 | Bodoni Moda | Work Sans | — | High-fashion, editorial, sharp | Cool | Fashion, beauty, art galleries |
| 9 | Inter (variable) | Inter (variable) | JetBrains Mono | Neutral, dense, scannable — **the defaultism baseline** | Cool-neutral | Generic SaaS — only if neutrality is a stated intent |
| 10 | Manrope | Inter | JetBrains Mono | Friendly-modern, slightly rounded | Cool-warm | Productivity tools, modern admin panels |
| **11** | **Geist** | **Geist** | **Geist Mono** | **Crisp, technical, geometric** | **Cool** | **Developer tools, AI products, infrastructure — the new SaaS default** |
| 12 | Plus Jakarta Sans | Inter | — | Polished, approachable | Cool-warm | Consumer SaaS, fintech mobile apps |
| 13 | Outfit | DM Sans | — | Geometric-modern, friendly | Neutral | Mobile apps, lifestyle products |
| 14 | Sora | Inter | — | Crisp, slightly playful | Cool-neutral | AI tools, B2B with personality |
| 15 | Spectral | Spectral | — | Quiet, editorial, considered | Warm-neutral | Long-form reading, newsletters, internal docs |
| 16 | Crimson Pro | Crimson Pro | — | Booklike, intimate | Warm | Reading apps, journals, content platforms |
| 17 | Frank Ruhl Libre | Lora | — | Hebrew-Latin elegant | Warm | Multilingual content, cultural sites |
| 18 | IBM Plex Sans | IBM Plex Sans | IBM Plex Mono | Engineered, neutral, complete | Cool-neutral | Enterprise dashboards, technical SaaS |
| 19 | JetBrains Mono | Inter | JetBrains Mono | Developer-first, tabular | Cool | IDEs, dev consoles, code-heavy UIs |
| **20** | **Space Grotesk** | **Space Grotesk** | **Space Mono** | **Retro-future, distinctive** | **Cool** | **Crypto, web3, design tools** |
| 21 | Roboto Slab | Roboto | Roboto Mono | Sturdy, default-Google warm | Warm-neutral | Civic tools, government, adult education |
| 22 | Bree Serif | Open Sans | — | Friendly, slightly handmade | Warm | Education, kids' apps, community tools |
| 23 | Zilla Slab | Karla | Fira Code | Mozilla-approachable, technical-friendly | Warm-cool | Open-source tools, documentation |
| 24 | Arvo | Lato | — | Practical, blue-collar warm | Warm | Trades, contractor tools, B2B SMB |
| **25** | **Bricolage Grotesque** | **Inter** | — | **Architectural, expressive variable axis** | **Cool** | **Design tools, agency sites, portfolios** |
| 26 | Fraunces | Inter | — | Soft-spirited variable serif | Warm | Modern editorial, food, hospitality |
| 27 | Tinos | Manrope | — | Times-replacement neutral, modern body | Neutral | Financial reports, structured B2B docs |
| **28** | **Clash Display** *(Fontshare)* | **Cabinet Grotesk** *(Fontshare)* | — | **Confident-modern, slightly editorial** | **Cool-warm** | **Marketing sites, founder-led brands** |
| 29 | Italianno | Cormorant Garamond | — | Wedding-luxurious, formal | Warm | Wedding planners, fine dining, jewelry |
| 30 | Allura | Montserrat | — | Boutique-script, geometric-clean | Neutral | Beauty salons, artisan brands |
| 31 | Petit Formal Script | DM Sans | — | Refined-script, modern body | Cool-warm | Premium consumer products, gift cards |
| 32 | JetBrains Mono | IBM Plex Sans | JetBrains Mono | Tabular-everywhere, ops-heavy | Cool | Trading, analytics, ops dashboards |
| **33** | **Fira Code** | **Inter** | **Fira Code** | **Code-first with ligatures** | **Cool** | **Developer-facing AI products** |
| 34 | Anton | Roboto | — | High-impact display, sturdy body | Cool-warm | Fitness, sports, urban brands |
| 35 | Bebas Neue | Open Sans | — | Posterlike, monumental | Cool | Events, streaming, entertainment |
| 36 | Archivo Black | Archivo | Archivo Mono | Editorial-bold, complete family | Cool-warm | Publications, news products |
| 37 | Newsreader | Inter | — | Variable transitional serif | Warm | Reading apps, premium content |
| 38 | Recoleta *(paid)* / alt: Tinos | Manrope | — | Soft-rounded serif, modern body | Warm | Hospitality, food, wellness |

A few of these pairings deserve more than a row.

**Pairing #1 — IBM Plex Sans + IBM Plex Mono — is the engineered default for technical and data-heavy products.** The reasoning is structural. IBM Plex Sans has a considered, modern-humanist character that carries body and headlines with authority; IBM Plex Mono completes the family for tabular data and code. The whole superfamily was designed as a unified system rather than a happy accident, which means tabular data, long-form content, and display headlines all live under one design intent. The Latin Extended coverage is complete, so diacritics render correctly out of the box across Latin-script languages. If your project has its own locked default — many do — substitute that here. The point is to lock something at the system level rather than relitigate it per surface.

**Pairing #11 — Geist + Geist Mono — is the new SaaS default.** Vercel's in-house family. Crisper than Inter, slightly geometric, hints of Helvetica without the dated feel. The mono was designed alongside the sans, so a table set in Geist Mono lives in the same family as the labels above it. Right when the product is technical and minimal; wrong when it needs warmth.

**Pairing #20 — Space Grotesk + Space Mono — is the move when the product is allowed to have an opinion.** Slightly funky terminals on the lowercase `g` and `a` give personality without tipping into novelty. The right answer for crypto, web3, design tools, and any product whose users would reject a neutral system as evidence of a missing point of view.

**Pairing #25 — Bricolage Grotesque + Inter — is the leverage choice when display needs to do real work.** Bricolage is variable on weight, width, and optical size axes simultaneously, so a single typeface can carry display, subhead, and pull-quote work without loading four weights. Pair with Inter for body when Bricolage's compressed personality would tire readers in long-form.

**Pairing #28 — Clash Display + Cabinet Grotesk — is the founder-brand choice.** Clash carries headlines with confidence, Cabinet handles body without competing. Both Fontshare-licensed and free for commercial use.

**Pairing #33 — Fira Code + Inter — is the right answer for developer-facing AI products.** Fira Code's ligatures make code blocks read like prose. The Inter body stays neutral so the code blocks visually pop without the chrome fighting them.

**Pairing #9 — Inter + Inter — is the defaultism baseline.** Name it as such. Inter is the single most-defaulted sans on the web. Use it only when neutrality is a stated, defended intent and you have explicitly rejected pairings #10, #11, #14, #20, #25, and #28 with reasons. If you reach for Inter without that argument, you have defaulted. The same critique applies to Roboto, system-ui-everywhere, and "we'll figure out fonts later." Those are not type choices. They are type avoidance.

When pairing display fonts, remember that the icon set is part of the system. A display family choice and an icon family choice are siblings — both carry the personality of the surface. Mixing your icon library with a display family that fights it (a hyper-condensed Anton with a soft chevron from a rounded icon set, for example) is a mismatch worth catching.

## Light-on-dark requires three axes

Dark mode is not "invert the colors." Dark backgrounds change the optical properties of the type sitting on them, and respecting that change is what separates a dark mode that feels considered from one that feels like a CSS toggle. The fix is on three axes — line-height, letter-spacing, and weight — and you need all three.

Light text on a dark background spreads visually. The white shapes of letterforms bleed slightly into the black surrounding them, especially at small sizes and on lower-quality displays. The eye perceives the text as heavier, looser, and more crowded than the same setting on a light background. Three coordinated adjustments correct it.

**Line-height drops by 0.05 to 0.1.** If your light-mode body line-height is 1.5, the dark-mode equivalent is 1.45 or 1.4. The reasoning: the optical bloom makes lines appear closer together than they are, so tightening leading slightly restores the perceived rhythm. Counterintuitively, tighter leading on dark feels the same as looser leading on light.

**Letter-spacing rises by about 0.005em to 0.01em.** The optical bloom also makes letters appear to crowd each other; adding a hair of tracking restores the perceived breathing room. This is small — half a percent of the em — but it is felt rather than seen, which is the right register for dark-mode tuning.

**Weight drops by 50 to 100 units.** A 500-weight semibold on light becomes a 400-weight regular on dark. A 700 bold becomes a 600. The optical perception of weight rises on dark backgrounds — the same letterforms read as one step heavier — so dropping a step keeps the perceived weight constant. This is why "bold text" on dark mode often looks aggressively bold; it isn't your imagination, it's the optics.

A short CSS sketch:

```css
:root {
  --body-leading: 1.55;
  --body-tracking: 0;
  --body-weight: 450;
}

[data-theme="dark"] {
  --body-leading: 1.5;
  --body-tracking: 0.005em;
  --body-weight: 400;
}

body {
  line-height: var(--body-leading);
  letter-spacing: var(--body-tracking);
  font-weight: var(--body-weight);
}
```

The values shift; the structure stays. Once you've internalized the three axes, dark mode stops being a separate design problem and becomes a tuning problem on a system you already understand.

## Modern web typography

A few mechanical choices separate type that ships well from type that breaks.

**`font-display: swap` versus `optional`.** Swap shows fallback text immediately and replaces it when the web font arrives — a brief flash of unstyled text, but never invisible content. Optional uses the fallback if the web font misses a small load budget (~100ms) and avoids the swap entirely. Pick `swap` when you'd rather show branded type than nothing; pick `optional` when zero layout shift matters more than seeing the branded font on slow networks. For product UI, `optional` is often right; for marketing, `swap` is. Pair either with metric-matched fallbacks — `size-adjust`, `ascent-override`, `descent-override` — to minimize the shift. Tools like Fontaine calculate these automatically.

**OpenType features.** Most developers don't know these exist; they're how you turn a serviceable font into a tuned one. `font-variant-numeric: tabular-nums` on data tables makes numbers align in columns regardless of glyph width — without this, a column of prices visibly drifts. `font-feature-settings: "ss01"` enables stylistic alternates where the typeface designer offered them (a single-story `a`, a different `g`, a curled `R`). `"calt"` enables contextual alternates — ligatures and joining behavior in scripts and hand-tuned pairs. `font-variant-caps: all-small-caps` produces real small caps for abbreviations rather than CSS-uppercased ones. None of these are decoration; each one is the difference between a font running at 80% and one running at 100%.

**Variable fonts** are usually the right answer when you need three or more weights or styles. A single variable font file is typically smaller than three static weight files combined, gives you fractional weight control (you can request weight 432 if that's what the headline needs), and pairs well with `font-optical-sizing: auto` for variable fonts that ship optical-size axes. For one or two weights, static is simpler and equally fast.

**Rendering polish** worth knowing: `text-wrap: balance` on h1, h2, h3 evens out line lengths in headings — the browser picks better break points so you don't end up with a single dangling word on the second line. `text-wrap: pretty` on paragraph copy reduces orphans. `font-kerning: normal` is usually on by default but worth declaring explicitly. All-caps headings need 5–12% letter-spacing (`letter-spacing: 0.05em` to `0.12em`) — capitals sit too close at default tracking and read as crammed.

## System architecture

Name your tokens semantically. Always. `--text-body`, `--text-display`, `--text-mono` — never `--font-size-16` or `--font-md`. The numeric or t-shirt names lock you to a value; the semantic names lock you to a role. If you decide three months from now that body should be 17px instead of 16px, the semantic name is the same; only the underlying value changes. Every component in the system follows along automatically.

The same logic applies down the stack: `--leading-body` and `--leading-display` rather than `--leading-150` and `--leading-110`. `--tracking-display`, `--tracking-body`, `--tracking-allcaps`. `--weight-body`, `--weight-strong`, `--weight-display`. Roles compose; values don't. A type system named by role is a system you can tune for years; a type system named by value is a system you can ship once.

Brand and product systems should expose different surfaces. A brand system can expose a `data-p-scale` attribute on its variants, allowing the hierarchy ratio to be tuned live — `:scope { font-size: clamp(min, calc(var(--p-scale, 1) * Npx), max); }` — and a `data-p-pairing` attribute that swaps between, say, "serif display + sans body" and "all-sans" without rewriting the CSS. Product systems should not expose those knobs, because product UI depends on stable type for spatial predictability. The system architecture is itself an expression of the brand-versus-product split.

## Latin script and diacritics support

Any project that ships in a language with diacritics — Portuguese, Spanish, French, German, Polish, Czech, Vietnamese, and many others — needs typefaces that cover Latin Extended-A — for marks like ã, õ, ç, é, í, ê, ó, á, ú — and ideally Latin Extended-B for the rarer glyphs. All 38 pairings in the table above clear this bar; verify when adding new ones. The verification is cheap: type "São Paulo — não há nada melhor que um espresso" (or an equivalent diacritic-rich phrase in your target language) in the chosen typeface and look at the marks. If they render in a system font instead — visibly different x-height, different stroke contrast, different terminals — the subset is incomplete and needs to be reloaded with the full Latin Extended glyph set, not the trimmed default.

This matters specifically because native readers in any language with diacritics are sensitive to typography that wasn't built for them. A font that handles diacritics gracefully reads as considered; a font that fakes diacritics with system fallback reads as imported. The difference is visible to native readers in a way that English-first designers consistently underestimate.

## Accessibility

Twelve pixels is the absolute floor for any text in a product. Below that, the type fails for users with mild vision impairment and most older users. Fourteen pixels is the working floor — the smallest tertiary or caption-level text should not go below 14px without a defended reason. Sixteen pixels is the body floor.

Express all type sizes in `rem`, never in `px`. The browser's user font-size preference is an accessibility setting; users who set it larger have done so for a reason. Sizing in `rem` respects that setting; sizing in `px` overrides it silently. Never set `user-scalable=no` on the viewport. If your layout breaks at 200% zoom, fix the layout — the user's right to zoom is non-negotiable.

Color-on-color contrast follows WCAG AA: 4.5:1 for body text, 3:1 for large text (18pt regular or 14pt bold and above). The four-level hierarchy — primary, secondary, tertiary, muted — must respect these ratios at every level that carries content. Muted is allowed to drop below the body ratio because it carries non-essential information by definition (placeholders, disabled states), but tertiary should clear AA for body unless the use is genuinely decorative.

All-caps headings need 5–10% letter-spacing — `letter-spacing: 0.05em` to `0.1em`. Without it the capitals crowd each other and read as harder to parse than the same words in title case. Real small caps (via `font-variant-caps`) need slightly less but still benefit from a touch of tracking.

Touch targets need padding or line-height that yields at least 44px of tappable area. A text link on a phone with no padding around it is a tiny target; build buffer into the line-height or the surrounding padding so users can hit it without aiming.

## Closing — pick one and commit

The hardest typography decision is the first one. After that, every subsequent decision is constrained, and constraints make decisions easier. Choose the pairing. Choose the scale. Choose the four hierarchy levels. Choose the rhythm. Once those are in place, the rest of the system writes itself — what weight a label takes, what leading a paragraph wants, what tracking a heading needs.

Indecision shows. A type system that's been negotiated reads as negotiated. The screens look like nobody quite committed; the hierarchy reads as approximate; the user feels the seams without seeing them. The fix is not more decisions. It is the same decisions, made firmly. Pick one and commit.
