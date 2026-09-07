# Design-system discovery

How the skill finds the project's existing design system before it builds, reviews, or writes, and how a discovered system changes what counts as a finding.

---

## Why discovery comes before judgment

A design system is a set of decisions already made. Building without reading it produces a second system inside the first: a new radius beside the old one, a hex value beside a token, a card variant that exists once. Reviewing without reading it is worse, because the reviewer then files the system's own rules as defects. In one of this skill's home projects the `CLAUDE.md` mandates a three-pixel left accent on every AI-suggestion card; three other skills on the same machine ban that stroke outright. Both are right about their own context and wrong about each other's, and the only way to know which applies is to read the system first. Code tells you what was built; the system file tells you what was decided. Discovery reads the decisions.

Discovery is bounded. It loads at most fifteen hundred words, reads token and pattern sections rather than whole files, and stops at the first tier that answers the question. A discovery pass that reads the whole repository has replaced the design work with archaeology.

---

## The probes

Run in order. Stop after the first tier that hits, but collect everything inside that tier.

1. **Memory.** `design_system.pointer` in `.design-expert/project.md` exists on disk → load it, stop.
2. **Briefs.** `**/{,*.}DESIGN.md` at depth three or less, excluding `node_modules` → the YAML token frontmatter and the Do's and Don'ts section; the matching `PRODUCT.md` for `register:` and `layout:`.
3. **System files.** `.interface-design/system.md`, `system.md`, `design-system.md`, and any `CLAUDE.md` section whose heading matches `-i '(token|colou?r|spacing|typograph|pattern|component)'` → those sections only, at most eighty lines each. Any sentence in them containing "always", "all", or "must" that describes a visual pattern is recorded into `mandated_patterns` with its section cite.
4. **Tokens in code.** `tokens.json`, `**/tokens/*.{json,css,ts}`, the theme block of `tailwind.config.*`, `:root {` custom properties (`grep -E '^\s*--[a-z0-9-]+:'`, first sixty), `theme.ts` → names, and values only for color, spacing, and type.
5. **Components.** `components/ui/`, `src/components/`, `ui/`, `.storybook/` → filenames only, at most fifty, so proposals reuse existing primitives instead of inventing them.
6. **Figma.** A link in the request or `figma_file` in memory → `mcp__figma__get_variable_defs` on the linked node and `mcp__figma__get_libraries` on the file; a designer with the Figma MCP and no link → `get_libraries` once, then ask which file. During build, `mcp__figma__search_design_system` per component category, one batched call with the components the brief already needs. Cap one hundred and fifty lines.
7. **Claude Design.** When the `DesignSync` tool exists, `list_projects` → match by project name, or ask which.
8. **Nothing found.** Ask, once, with the orange marker:

> 🟠 **Question**: How is the design system implemented here: tokens in code (which file?), a Figma library (link?), a Claude Design system project, or nothing yet? If nothing, we design from the brief and I propose the first tokens.

Persist the answer verbatim in memory with `source: none` when the answer is "nothing yet".

---

## Using what was found

Cite the system by file and section every time it shapes a decision: "per `system.md` § Depth", "per `CLAUDE.md` § AI Suggestion / Lais Patterns", "per Figma variable `color/accent/600`". A decision that quietly agrees with the system is indistinguishable from a decision that ignored it; the cite is the receipt.

Tokens beat values. When the system names a token, the build uses the token and the review flags the raw value. When the system has no token for something the brief needs, the build proposes a token in the system's naming dialect and records it in the handoff as new.

**The exemption.** A pattern the system mandates is never a finding against the surface. Before filing any item from `anti-slop.md`, check `mandated_patterns`. A match downgrades the finding to a Note that cites the mandate, filed once per project and addressed to the system's owner as a `system-note`, not to the surface's author. The exemption covers the mandated form only: a mandated stroke does not excuse the numbered eyebrow beside it, and the same stroke on a surface outside that system is filed normally.
