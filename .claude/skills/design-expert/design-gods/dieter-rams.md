# Dieter Rams

Encoded ten principles that name the difference between functional design and decorative design. Every interface that whispers "less but better" is paraphrasing him. The standard against which restraint is measured.

Tags: `#minimalism` `#principles` `#manifesto` `#materiality`

## Why they matter

Most of what reaches a screen in 2026 is decoration pretending to be design. A glow added because the surface looked empty, a gradient because the brand color "needed energy," a third elevation level introduced to give a card "presence." None of those choices serve a user; all of them survive code review because no one in the room can name what is actually wrong. Rams gave us the vocabulary. Forty years before SaaS dashboards existed, working in a German appliance company on radios and shavers and shelving, he wrote down the test that separates a designed object from an ornamented one. Every interface designer who has ever defended a deletion against a stakeholder who wanted "more polish" is using his sentences, often without knowing it.

The reason his ten principles transfer cleanly to interfaces is that they were never about radios in the first place. They are about the relationship between an object and the person using it, and that relationship is the same whether the object is a calculator, a record player, or a settings page. "As little design as possible" is not a stylistic preference — it is a statement that every visual element is a tax on attention, and the tax must be earned. "Unobtrusive" is not modesty — it is the refusal to make the tool announce itself when the user came here to do something else. Read his principles carefully and they read like a usability brief written in a different language. The brief still applies.

The reason to keep him in the room today, specifically, is that generative tooling has made decorative design free. Anyone can produce a lush, gradient-rich, animation-heavy interface in an afternoon — and the result will look like every other interface produced that afternoon. The discipline that survives this collapse is the one Rams named: removal, restraint, and the refusal to introduce an element that does not earn its place. He is the designer you cite when you delete something, and the standard you measure against when you are tempted to add.

## Principles they brought

The Ten Principles are the manifesto, but the way they translate to interface work is specific, and worth naming. The list below paraphrases each — read the originals at Vitsoe — and lands them on the surfaces a designer ships in 2026: dashboards, admin panels, settings pages, brand surfaces. None of them are aesthetic preferences. All of them are testable.

- **Innovative** — Innovation is not novelty for its own sake; it is the shape of the new possibility that current technology now permits. On a screen, this is the difference between a "fresh" hover animation and a genuinely better information architecture. Apply it as a deletion test: is this innovation removing friction, or adding flair?
- **Useful** — Every element must contribute to the user's task. The decorative panel that exists "for breathing room" but communicates nothing fails this test. The status pill that encodes urgency, recency, and ownership in one glanceable atom passes it.
- **Aesthetic** — Beauty matters because the tool will be used every day, and aesthetic objects are kinder to live with than ugly ones. This is not permission for decoration — it is permission for considered finish. The radius on the input, the weight of the label, the temperature of the neutral. Aesthetic earned through restraint, not applied as a layer.
- **Understandable** — The interface explains itself. The button looks like a button, the link looks like a link, the destructive action looks destructive. Match between system and the user's mental model is heuristic 2 in Nielsen's framework — Rams was writing the same rule, fifty years earlier.
- **Unobtrusive** — Tools serve tasks. The interface that announces itself is stealing attention from the work the user came to do. Apply it to focus rings, hover states, modal entrances: subtle-but-noticeable always beats dramatic.
- **Honest** — The product does not promise what it cannot deliver, does not manipulate, does not pretend to capabilities it lacks. In 2026 this principle bans dark patterns directly: confirmshaming, fake urgency timers, pre-checked consent boxes, growth-hack language that disguises a downgrade as a feature.
- **Long-lasting** — The design does not chase trend cycles. Glassmorphism, neumorphism, bento grids, brutalism — all of them have come and gone in the time most products take to ship. A long-lasting interface is one whose decisions still read as deliberate after the trend that inspired them has passed.
- **Thorough down to the last detail** — Empty states, error messages, skeleton loaders, disabled states, focus rings, mid-form validation, the moment between hover and click. The places amateur products forget. Rams' shelving systems were detailed at the level of the bracket; an interface deserves the same care at the level of the toast.
- **Environmentally friendly** — On screen, the analog is performance and accessibility: the design respects the device, the network, the user's attention budget, and the user's cognitive load. Heavy hero videos that block the main thread fail this test. So do interfaces that ignore screen readers.
- **As little design as possible** — The principle. Less but better. Every visual element must justify its presence; the default action is removal. This is the rule that catches the third elevation level, the second accent color, the icon that adds nothing to the label it sits next to. Apply it last, before shipping. It is the same instinct as the four craft tests in `craft.md`.

## Quotes

> Less, but better.
> — Dieter Rams, *Less but Better* (1995)

> Good design is as little design as possible.
> — Dieter Rams, "Ten Principles for Good Design" (Vitsoe)

> Indifference towards people and the reality in which they live is actually the one and only cardinal sin in design.
> — Dieter Rams, *Less but Better*

## Categories of interest

This designer's principles surface in:
- `craft.md` — The "less but better" framing, the four craft tests, and the discipline of removal in the Distillation section are direct paraphrases of Rams' tenth principle.
- `anti-slop.md` — "As little design as possible" is the doctrine behind anti-defaultism; generative tooling produces ornament cheaply, and Rams is the standard for refusing it.
- `foundations.md` — Heuristic 8 (Aesthetic and Minimalist Design) and Heuristic 2 (Match Between System and the Real World) are Nielsen's restatement of Rams' Useful and Understandable principles.
- `output-format.md` — The same restraint that governs interface elements governs review structure; surface only what matters, cite only what supports the call, no decorative bullets.

## Sources

- Vitsoe, "The power of good design — Dieter Rams's ideology, engrained within Vitsoe" — https://www.vitsoe.com/us/about/good-design
- Vitsoe, "Ten principles for good design" — https://www.vitsoe.com/us/about/good-design
- *Rams* (2018), documentary directed by Gary Hustwit — https://www.hustwit.com/rams
- Dieter Rams, *Less but Better / Weniger, aber besser* (Jo Klatt Design+Design Verlag, 1995)
- *Dieter Rams: As Little Design as Possible*, Sophie Lovell (Phaidon, 2011)
