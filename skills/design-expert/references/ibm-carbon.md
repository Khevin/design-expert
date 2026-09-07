# IBM Carbon Design System

Design System (Open Source)

URL: https://carbondesignsystem.com/

## Why this is a quality reference

Carbon is the most thoroughly documented design system in the field. IBM ships it in production across thousands of enterprise products — internal tools, customer dashboards, data-heavy admin surfaces — and they publish nearly all of it openly. The discipline shows in the documentation: every component arrives with anatomy, states, accessibility notes, motion specifications, and a decision tree explaining when to use it instead of an adjacent component. Most design systems document what a thing is. Carbon documents when to reach for it, when not to, and what the tradeoff is against the next-closest pattern. That second layer is what makes it usable as a reference rather than a sample library.

The position worth borrowing is the seriousness about dense data. Carbon was built for the surfaces nobody wants to design — admin tables, configuration forms, log viewers, batch operations. Most design systems collapse on these surfaces because their patterns were optimized for marketing pages and consumer apps. Carbon's table component is the gold standard precisely because IBM had to make a million-row table feel like one tool, not a stack of compromises. When you are designing a product-register surface — dashboard, admin panel, settings page, dense list — Carbon is the baseline to reach for, and the documentation tells you why each pattern exists.

## What to study

Open the data table documentation first — the most thorough table treatment in any public design system. Read it cover to cover: row density, sticky headers, batch actions, inline editing, expansion, sortable columns, the way the component handles tens of thousands of rows. Then the Carbon Charts library for data visualization patterns. Then the form validation guidance — when to validate inline, when to validate on submit, how to write error messages that name the cause and the next action. Then the notification taxonomy — when a toast vs an inline message vs a modal vs a status banner. Each component page is a small essay on a decision tree.

## What NOT to copy blindly

Carbon's color palette is IBM. The blues, the corporate grays, the specific accent yellows — they are calibrated for IBM's brand register and for the enterprise context Carbon ships into. Lifting them into a non-IBM product makes the product feel like an IBM product, and the user can feel it. Carbon's voice is also enterprise-serious; it is wrong for consumer, lifestyle, and warm-register surfaces. A meditation app built on Carbon's grayscale would feel like a hospital intake form. Take the patterns and the documentation discipline; bring your own color, type, and warmth.

## Where this reference informs design-expert

Carbon is the cell-level reference for `components.md` — the atomic component patterns there inherit Carbon's table, form, and notification anatomies. It is also the structural reference for `output-format.md`: the discipline of documenting decisions with anatomy, states, and decision trees is the model the review template aspires to. Carbon's validation patterns inform `interaction.md`'s forms and feedback sections, and its accessibility notes feed back into the Universal Design 4 sub-principles surfaced in `foundations.md`.

## Sources

- Carbon Design System — https://carbondesignsystem.com/
- Carbon data visualization — https://carbondesignsystem.com/data-visualization/getting-started/
- Carbon GitHub — https://github.com/carbon-design-system
- Carbon component library — https://carbondesignsystem.com/components/overview/
- Carbon patterns — https://carbondesignsystem.com/patterns/overview/
