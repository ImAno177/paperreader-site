---
title: Screens
description: A labelled index of the real Android screens used by the public showcase.
---

The landing page uses selected product captures. Each caption names the destination and the state that
is visible in the image. The complete review ledger is kept in `showcase-inventory/` in the repository.

Status: implemented screen directory for the current Android host. A capture documents the visible
state at one moment; it does not claim that every action is visible in that frame.

## How to read this directory

Use the root destination to locate a screen, then use the action list to understand the normal next
step. States such as loading, offline, unavailable, empty, and error are part of the product contract,
not cosmetic variants. The selected captures are real app output and their captions describe only what
the image visibly supports.

## Root navigation

| Root destination | Purpose | Typical next step |
| --- | --- | --- |
| Library | Open saved papers, filter, sort, organize, or start reading | Open a paper, use quick `Read`, or go to Search |
| Search | Discover records across installed providers | Enter a query, inspect provider status, then open or save a result |
| Updates | Review saved-search results, downloads, and pending work | Refresh a saved search, open a new hit, retry, cancel, or remove a task |
| History | Return to recently opened papers | Open a history item or remove its history entry |
| More | Enter settings and secondary workflows | Choose Appearance, Collections, imports, backup, Sources, or About |

On narrow screens the five roots are bottom navigation items. On wider screens they become a navigation
rail. Detail and More branch screens retain a back action instead of competing with the five roots.

## Library screen

The Library opens first and owns the local collection. Its controls cover layout, sorting, filters,
collection selection, and library search. A saved card can show its title, authors, provider/version
context, reading status, annotation count, local-copy state, and a quick `Read` action.

Normal flow:

1. Open Library and choose list or grid if the default layout is not suitable.
2. Search locally or select a collection/status filter.
3. Open a card for full metadata, or tap `Read` when the card has a supported mobile version or local
   PDF.
4. Use Paper Detail for version, download, collection, status, or removal actions.

Visible states include loading, data failure, an empty library with a `Find paper` action, and a filter
with no matching papers. The dark Library capture on the landing page shows saved papers, reading labels,
and local card actions, not a mockup of the library behavior.

## Search screen

Search begins with an input and recent queries. After submission it can show provider progress cards,
results, no-result recovery, and per-provider failures. The `All sources` and `Has results` filters
help isolate the source that produced a record.

Normal flow:

1. Open Search and enter a title, phrase, or exact identifier.
2. Submit and wait for provider cards to settle independently.
3. Retry only the failed provider when successful results are already visible.
4. Open a result to inspect the metadata preview.
5. Choose Save to add the exact record to Library, or open it again later from recent searches.

The selected Search capture shows recent searches in dark theme. It is evidence of the recent-query
surface, not evidence that a provider returned results at that moment.

## Paper Detail screen

Paper Detail is the full record view. It groups metadata, abstract, identifiers, manifestations, source
and license information, reading status, local files, and actions. It is where the user chooses between
a verified mobile version, an original PDF, a source page, or an export.

Normal flow:

1. Open a saved paper from Library, Search, Updates, or History.
2. Read the title, authors, abstract, identifiers, and version/source labels.
3. Select a manifestation and choose Read, download, export, or source actions.
4. Use More actions to copy an identifier, manage collections, or remove the paper.
5. Return to Library without changing the record unless an explicit save/status/file action was chosen.

The arXiv capture selected for the landing page shows the record for *Attention Is All You Need*. Its
caption is deliberately limited to the paper detail state visible in the image.

## Mobile reader screen

The mobile reader opens a verified, sanitized paper representation when the exact manifestation supports
it. The toolbar keeps search, contents, layout controls, annotations, source details, and the original
PDF action reachable while reading.

Normal flow:

1. Open a readable manifestation from Library or Paper Detail.
2. Read or use `Paper contents` to jump to a section.
3. Use Search this paper for a phrase; move through matches and close the find bar when finished.
4. Select a passage, choose Highlight, and optionally add a research note.
5. Follow a citation, then choose `Back to reading` to restore the earlier position.
6. Adjust text size, line spacing, or side margins from Reading layout.
7. Open the original PDF when the exact visual source matters more than reflow.

The selected mobile capture shows the beginning of *Attention Is All You Need* at 0% read. It proves the
visible reader layout and status only; it does not imply that a particular toolbar menu is open.

## Original PDF reader

The PDF reader is the fidelity fallback for a downloaded or imported local PDF. It supports PDF search,
zoom, page navigation, progress, and page bookmarks. Text highlights are not claimed for the PDF reader
until a stable selection/source map exists.

## Updates and History

Updates groups background saved-search checks and persisted download work. A task can be queued, running,
cancelled, failed, completed, retried, or removed according to its operation. History shows the last-read
time and reading duration, and removing a history entry does not remove the saved paper.

## More branches

| Screen | What it controls | Important behavior |
| --- | --- | --- |
| Appearance | Theme preset and System/Light/Dark mode | The two controls are independent and persist separately |
| Collections | Create, rename, delete, and inspect collections | Deleting a collection leaves its papers in Library |
| Reading & imports | Import a local PDF into app-private storage | The file is selected, reviewed, validated, copied, and then added |
| Background updates | Opt-in saved-search refresh and notification access | Checks are network-constrained and can be disabled without deleting saved searches |
| Backup | Export or restore metadata | Restore previews counts and requires confirmation; PDFs, caches, credentials, and extension APKs stay on-device |
| Sources | Install, update, or inspect source/theme extensions; enable or disable source providers | Signed metadata and PackageInstaller confirmation are required |
| About | Product and license information | This screen is informational and does not change library data |

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
