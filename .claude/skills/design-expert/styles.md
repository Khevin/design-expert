# Styles

A curated set of intent-style files describing the disciplines that govern surfaces with different goals — long-form editorial work, dashboards, brand-marketing pages, developer tools. Each style is the canonical source for the rules that apply *only when that style is the active register*. Read this index for the structure; tap into a style file when a current decision is in that style's territory.

---

## Why a styles taxonomy

The design-expert skill already separates work into three intent registers — brand, product, and editorial — but the rules that apply *because the register is editorial* (rail-and-body grid, three type roles, hairlines and bars, monochrome chrome) had been folded into the foundational files (`craft.md`, `grids.md`, `typography.md`) where they were invisible to a model that hadn't already detected the register. The styles folder fixes that. When the register is editorial, `styles/editorial.md` is loaded and becomes authoritative for grid, type, density, and chrome — overriding any conflicting product-default in `components.md` or `interaction.md`. When the register is product, `styles/editorial.md` is not loaded, and the product defaults stand. The discipline is mechanical: register decision precedes style file load, style file overrides foundationals where the two conflict, foundationals govern where the style file is silent.

A style file is not a template. It is not a copy-paste source. It is a discipline named so that the rules that *only apply here* can be cited, audited, and applied consistently. The same way `library/<category>/README.md` answers "what good and bad versions of *this surface* look like," a style file answers "what discipline applies *because the register is this*." Surface and style cover different territory. A dashboard surface (library/dashboards) ships in product register *and* could ship in an editorial register if it were the subject of a case study; the surface library is about what a dashboard looks like, the style file is about what register it lives in.

The styles index pairs with `references.md`, `library.md`, and `design-gods.md`. References tell you whose practice to study at the system level. Library tells you what good and bad versions of a specific surface look like. Pantheon tells you whose voice to keep in the room. Styles tell you which discipline governs *because of the register* — what to refuse and what to embrace once the register is decided.

---

## How to use a style file

Loaded in the order: register decision → style file → foundationals. The register is decided by the project brief or by the register gate in `/design-expert:plan`, `/design-expert:build`, and `/design-expert:review`. If confidence on the register is below 80%, the sub-skill asks the user explicitly. Once the register is decided and recorded in `PRODUCT.md`, the relevant style file is loaded *before* `craft.md`, `grids.md`, `typography.md`, and the rest of the foundationals — so that any conflict between the style and the foundational defaults to the style's verdict.

The style file is not exhaustive. It captures the moves that distinguish this register from the others — the moves that, if a designer ignored them, would produce a surface that looked like the wrong register. A style file does not re-derive the principles in `foundations.md`; it does not re-list the heuristics in `output-format.md`; it does not duplicate the slop tells in `anti-slop.md`. It cites and supplements. The result is that loading a style file adds, on the order of, 100–200 lines of register-specific discipline on top of the foundational stack — manageable in working memory, decisive in effect.

---

## The styles

The list is small on purpose. Each style is a register's discipline, and the registers are themselves few — fewer registers than there are surfaces, fewer surfaces than there are screens. The first style is `editorial.md`, because the editorial register was the most under-served by the prior structure and because case studies, long-form essays, magazine-style pages, and museum-quality web work are the surfaces where the slop tells of "marketing-page cargo cult" do the most damage. Future styles will follow when each register has earned its own canonical file — when the rules that apply *because of the register* are dense enough to deserve a file rather than a cross-link.

| Style | What it covers | Path |
|---|---|---|
| Editorial | Long-form work — case studies, blog posts, landing pages with editorial intent, magazines, ebooks, infographs, museum sites, design agency pages | `styles/editorial.md` |
| Expressive | Avant-garde / motion-led / brand-as-product — agency homepages, manifesto pages, product launches, awards-target work, design-portfolio hero pages | `styles/expressive.md` |

Reserved for future styles when each earns its file: `dashboard.md` (product-register dense data tools), `devtools.md` (terminal-aesthetic developer-facing surfaces).

Read the style file that matches the current register. Do not read all styles in advance — the styles folder is a lookup, not a reading list.

---

## Closing

Style files are how the design-expert skill encodes the rule that *the same heuristic, the same default, the same component, applies differently across registers*. A purple gradient is acceptable on brand, disqualifying on product, misguided on editorial. Carbon-density rows are required on product, oppressive on editorial. A centered hero is acceptable on brand, broken on editorial. Without a style file the model has to re-derive these conditional verdicts each time, and the failure mode is silent: the model picks one default and applies it everywhere. With the style file loaded, the conditional becomes explicit and auditable. The style is the discipline; the file is the contract.
