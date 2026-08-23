---
title: Motion
description: The implemented animation system and its accessibility and performance rules.
---

Motion is used to establish hierarchy and acknowledge scrolling. It does not hide product copy or
delay access to a screen.

## Implemented motion

| Surface | Behavior | Guardrail |
| --- | --- | --- |
| Page entry | Small `opacity` and `translateY` rise for the nav and hero copy | CSS fallback; 420ms maximum |
| Section reveal | Batched GSAP ScrollTrigger reveal for cards | 12px travel, short stagger, one pass |
| Screen images | Scroll-linked scale from `0.96` to `1` with `ease: none` | `transform` and `opacity` only |
| Card hover | A small upward translation and image scale | No layout change; touch remains usable |
| Palette change | New palette reveals from the color-control origin and expands across the viewport | Native View Transition API; 820ms circular `clip-path` reveal |

The implementation is in [`src/scripts/field-notes-motion.js`](https://github.com/ImAno177/paperreader-site/blob/main/src/scripts/field-notes-motion.js).
GSAP is imported only after the page loads its module script, so the core landing content does not
depend on the animation bundle.

## Reduced motion

The script exits when `prefers-reduced-motion: reduce` is active. The stylesheet also removes smooth
scrolling and transitions in that mode. Because the page has no CSS-hidden content, text and images stay
available when JavaScript is disabled.

## Responsive behavior

The animation enhancement does not pin sections or move body copy. This keeps scroll behavior predictable
on touch devices, including narrow phone widths. Images reserve their aspect ratio before loading, and
the mobile grid reduces to one column on very narrow screens.

## Why this setup

GSAP's [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) recommends
registering the plugin before use and using linear easing for scrubbed motion. The site's scroll work
follows those rules and batches similar reveals. The performance target is compositor-friendly
`transform` and `opacity`, following the [web.dev animation guidance](https://web.dev/articles/animations-guide).

The palette control uses the browser's [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using)
for a same-document state change. Its new root snapshot is revealed with an origin-based circle using
the [CSS `clip-path` property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-path),
so the new color spreads from the control like a slow pool of ink. Browsers without the API still apply
the palette immediately. The control also checks [`prefers-reduced-motion`](https://web.dev/articles/prefers-reduced-motion)
and skips the reveal when motion reduction is requested.
