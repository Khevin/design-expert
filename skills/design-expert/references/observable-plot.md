# Observable Plot

## When to use

Use when choosing or reviewing chart encodings. Plot exposes marks, scales, transforms, and facets explicitly, making it useful for explaining why a visualization supports a particular comparison.

## What to extract

Start with the reader's question. Choose marks and scales that express the relevant relationship, disclose transformations such as binning or aggregation, and consider facets when repeated comparisons help. Treat the example as a method to inspect, not a finished answer to a different dataset.

## What not to copy

Do not select a chart because its demo is attractive. Check labels, domains, missing values, uncertainty, and an accessible alternative for the actual data. Borrow the method even when implementation uses another library; a design recommendation does not authorize installing a new dependency.

## Source

- [Observable Plot documentation](https://observablehq.github.io/plot/)

Apply alongside [components](../components.md), [Tufte](../design-gods/edward-tufte.md), and [Corum](../design-gods/jonathan-corum.md).
