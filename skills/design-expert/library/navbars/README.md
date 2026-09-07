# Navbars

A navbar is the user's spatial map of the product — a persistent answer to "what is here, and where am I in it." When it works, the user finds what they need and forgets the nav existed; when it fails, they spend their cognitive budget figuring out where to click before any of it goes to the actual job. Most defaults fail because they hide categories the user could have recognized at a glance, forcing recall instead — a direct violation of `foundations.md` heuristic 6. The modern answer for power-user products is the command palette: `cmd+k` reaches anywhere, and the visible nav can stay quiet because the keyboard carries the load. Craft, in `craft.md`'s terms, is the layered structure you barely register — and nowhere does that show up faster than in a nav that doesn't shout.

## What good looks like

Recognition over recall is the first principle. A great nav shows the categories the user can pick from instead of asking them to remember what's there — visible top-level items, clear active state, predictable grouping (`foundations.md` heuristic 6, applied at the spatial level of the product). The trade-off is the working-memory cap of about four items (`craft.md`, "Cognitive load"); top-level should aim for five or fewer, with deeper hierarchy moved into grouping or progressive disclosure rather than crammed into the bar.

The brand-versus-product split is the second principle. A brand nav can be expressive — encountered briefly, memorability outranks efficiency. A product nav must compress: the user lives in it for hours, and the same flourish that delights once becomes irritating by the second hour. Mega menus belong to brand register; product surfaces want sidebars and command palettes. `craft.md`'s sidebar rule is non-negotiable — same background as canvas with a low-opacity border, never a darker tone or a brand color, because the alternative fragments the space into "sidebar world" and "content world."

The third principle is keyboard. Every frequent action gets a keyboard path, and `cmd+k` should reach anywhere — `interaction.md` names this as the standard expectation. Active state must be visible without thought (the user should never need to read the URL to know where they are), focus rings must be present on every interactive item (`interaction.md`, "Focus rings done right"), and the nav should have a signature pattern that's clearly *this* product's nav (`craft.md`'s signature test — five components a viewer could caption with the product's name).

## Quality examples (Do)

### Linear's left sidebar + cmd+k

URL: https://linear.app

The exemplar of the modern SaaS pattern. The left sidebar carries cycles, views, and projects with restrained type and same-canvas background; primary navigation is actually the command palette via `cmd+k`. The sidebar stays a quiet utility because the keyboard does the heavy lifting — the keyboard-first stance `interaction.md` advocates, and a signature move (`craft.md`) you couldn't mistake for anyone else.

### Vercel's top nav

URL: https://vercel.com

Minimal, monochrome, role-clear. No purple-blue gradient, no glassmorphism, no decorative iconography. The off-black surface and whisper-quiet borders are precisely the subtle layering `craft.md` describes, and the absence of the 2022 effects stack is what `anti-slop.md` names as the replacement for default "premium" treatments.

### GitHub's nav

URL: https://github.com

GitHub survives massive feature scope through grouped dropdowns and a search field that doubles as navigation. A top bar with a few high-level entries; depth lives behind dropdowns and omnipresent search. Recognition wins over recall (`foundations.md` heuristic 6) — the user picks a category and the system shows the rest.

### Stripe's docs sidebar

URL: https://stripe.com/docs

Documentation nav at scale without disorientation. Collapsible sections, a clear current-page indicator, and consistent typographic rhythm let the user move through hundreds of pages without losing context. Cite `craft.md` "Composition" — tight intra-group gaps against generous section breaks keep the long list readable.

### Raycast

URL: https://raycast.com

Collapses the entire navigation into a command palette. Everything is one keystroke away; there's no traditional nav bar. The radical extension of `interaction.md`'s keyboard-navigation principle — the search field IS the UI, and the result is the fastest navigation in any product its users have used.

## Anti-patterns (Don't)

### The 12-item top nav

Top horizontal nav with eight to twelve items, no grouping, no overflow. The user reads every label every time because there's no scaffolding for them to skip past. This violates `foundations.md` heuristic 6 (Recognition Rather Than Recall) by overflowing the working-memory cap (`craft.md`, "Cognitive load") — five or fewer top-level items is the rule, with the rest moved into grouped dropdowns or a search field. If you can't get below five, the IA is wrong, not the nav.

### The different-color sidebar

A sidebar painted a darker tone or a brand color, sitting visually distinct from the canvas. Fragments the visual space into two products glued together. `craft.md`'s subtle-layering section is explicit: sidebars use the same background as canvas, with a low-opacity border carrying the separation. `anti-slop.md`'s "Layout tells" lists the different-color sidebar as a template signature — the model adds it because every reference image had one, not because the design needed it.

### The hidden hamburger on desktop

Collapsing the entire nav to a hamburger button on desktop, where there's plenty of horizontal space. Trades visibility for minimalism, and visibility wins. The user now has to click to discover what's available — recall, not recognition (`foundations.md` heuristic 6) — and frequent actions become slower because they're hidden behind an extra step (`foundations.md` heuristic 7, Flexibility and Efficiency of Use). Hamburgers belong on mobile, where the constraint is real.

## How to use this category

When reviewing or building a navbar, calibrate against the Do examples first — pick the closest in register (product sidebar versus brand top nav versus command-palette-led) and ask which signature moves transfer. Then sweep the Don't list as a grep pass: count items, check sidebar background against canvas, verify desktop visibility. If any anti-pattern fires, fix it before polish. The nav is the spatial map; if the map is wrong, no amount of typographic care recovers it.
