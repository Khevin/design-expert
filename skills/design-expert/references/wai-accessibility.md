# W3C WAI: WCAG and ARIA Authoring Practices

## When to use

Use for accessibility reviews and for components whose semantics, focus behavior, or keyboard interaction are uncertain. WCAG defines criteria; the ARIA Authoring Practices Guide explains patterns and examples. Do not present an APG example as a normative WCAG requirement.

## What to extract

Identify the applicable criterion or widget pattern, then translate it into an observable check for this component. Inspect names, roles, states, focus order, and keyboard operation. Prefer native semantics where they meet the behavior; adding ARIA is not itself an improvement.

## What not to copy

Do not copy a custom widget when a native control suffices, or claim conformance from a screenshot, automated scan, or borrowed example alone. Check the current guidance and test the implementation with relevant input methods and assistive technology.

## Sources

- [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

Apply alongside [foundations](../foundations.md), [components](../components.md), and [interaction](../interaction.md).
