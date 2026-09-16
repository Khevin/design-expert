# Adobe Spectrum

## When to use

Use for design-system work where shared decisions must survive multiple components, states, and themes. Its token guidance distinguishes raw values from usage roles; its motion guidance treats animation as intentional feedback.

## What to extract

Trace an interface decision from semantic role to token to rendered state. Test whether a token name communicates purpose, whether related components reuse that role, and whether a state remains understandable across themes. Use motion to explain change rather than decorate waiting.

## What not to copy

Adobe's colors and component styling are not neutral defaults. Borrow the role structure and documentation method, not the brand. Check the current implementation's token names before recommending code; reference guidance is not an instruction to migrate libraries.

## Sources

- [Design tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Motion](https://spectrum.adobe.com/page/motion/)
- [Using color](https://spectrum.adobe.com/page/using-color/)

Apply alongside [components](../components.md), [craft](../craft.md), and [interaction](../interaction.md).
