---
title: Screens
description: A labelled index of the real Android screens used by the public showcase.
---

The landing page uses selected product captures. Each caption names the destination and the state that
is visible in the image. The complete review ledger is kept in `showcase-inventory/` in the repository.

## Selected for the landing page

| Screen | Visible state | Image |
| --- | --- | --- |
| Library | Saved papers in dark theme | [Open capture](../../showcase/library-dark.png) |
| Library | Saved papers in light theme | [Open capture](../../showcase/library-light.png) |
| Search | Recent searches in dark theme | [Open capture](../../showcase/search-dark.png) |
| Paper detail | arXiv record for *Attention Is All You Need* | [Open capture](../../showcase/arxiv-detail-dark.png) |
| Mobile reader | The beginning of the cached paper at 0% read | [Open capture](../../showcase/attention-mobile-dark.png) |
| Sources | Unavailable provider states in dark theme | [Open capture](../../showcase/sources-error-dark.png) |

## Additional states

Updates, History, More, Appearance, Backup, Import PDF, Collections, About, and the empty Library
state remain available in the inventory for documentation and troubleshooting decisions. Transient
loading captures stay on hold until their state is useful to a reader.

When adding a screen, check three things before publishing it:

1. The filename identifies the destination and meaningful state.
2. The alt text says what is visible, including theme or error state when it changes the meaning.
3. The caption does not claim a behavior that the image cannot show.
