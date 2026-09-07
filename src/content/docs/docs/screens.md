---
title: Screens
description: Current Android screens, visible controls, states, and normal next actions.
---

This guide pairs current Android captures with the behavior documented by the host contract. Each
image shows one visible state. The text explains what the screen owns and what the user can do next.
The local emulator audit below is marked explicitly so runtime evidence is not confused with a
concept render.

Status: implemented screen guide for the current Android host. An image cannot prove an unseen network
request, saved file, or completed background task.

## Screen gallery

### Library

<div class="docs-screen-pair">
  <img src="../../showcase/library-light.png" width="1080" height="2400" loading="lazy" alt="PaperReader Library in Light mode with saved papers, filters, and Read actions">
  <img src="../../showcase/library-dark.png" width="1080" height="2400" loading="lazy" alt="PaperReader Library in Dark mode with the same saved papers, filters, and Read actions">
</div>

### Search

<div class="docs-screen-pair">
  <img src="../../showcase/search-light.png" width="1080" height="2400" loading="lazy" alt="PaperReader Search in Light mode showing the query field and recent searches">
  <img src="../../showcase/search-dark.png" width="1080" height="2400" loading="lazy" alt="PaperReader Search in Dark mode showing the query field and recent searches">
</div>

### Paper Detail

<div class="docs-screen-pair">
  <img src="../../showcase/arxiv-detail-light.png" width="1080" height="2400" loading="lazy" alt="PaperReader Paper Detail in Light mode for Attention Is All You Need">
  <img src="../../showcase/arxiv-detail-dark.png" width="1080" height="2400" loading="lazy" alt="PaperReader Paper Detail in Dark mode for Attention Is All You Need">
</div>

### Mobile reader

<div class="docs-screen-pair">
  <img src="../../showcase/attention-mobile-light.png" width="1080" height="2400" loading="lazy" alt="PaperReader mobile reader in Light mode at the beginning of Attention Is All You Need">
  <img src="../../showcase/attention-mobile-dark.png" width="1080" height="2400" loading="lazy" alt="PaperReader mobile reader in Dark mode at the beginning of Attention Is All You Need">
</div>

### Source failures

<div class="docs-screen-pair">
  <img src="../../showcase/sources-error-light.png" width="1080" height="2400" loading="lazy" alt="PaperReader Sources in Light mode showing unavailable provider states">
  <img src="../../showcase/sources-error-dark.png" width="1080" height="2400" loading="lazy" alt="PaperReader Sources in Dark mode showing unavailable provider states">
</div>

### Local emulator audit

These captures were taken from the local API 36 emulator (`emulator-5554`) on 2026-09-07 after the
readable-document and Download queue smoke run. The run exercised real search, PDF download state,
provider-backed HTML, and app-private asset caching. The final capture uses the unchanged
Neobrutalism preset and shows the five additional PaperReader color choices in Appearance.

<div class="docs-screen-pair">
  <img src="../../showcase/release-2026-09-07-library.png" width="1080" height="2400" loading="lazy" alt="Local emulator Library with two saved papers and reading-status counts">
  <img src="../../showcase/release-2026-09-07-search-attention.png" width="1080" height="2400" loading="lazy" alt="Local emulator Search results for Attention">
  <img src="../../showcase/release-2026-09-07-more.png" width="1080" height="2400" loading="lazy" alt="Local emulator More hub with the compact PaperReader workspace layout">
  <img src="../../showcase/release-2026-09-07-stats.png" width="1080" height="2400" loading="lazy" alt="Local emulator Stats with reading time and grouped metrics">
  <img src="../../showcase/release-2026-09-07-appearance.png" width="1080" height="2400" loading="lazy" alt="Local emulator Appearance with Neobrutalism and five built-in color themes">
  <img src="../../showcase/release-2026-09-07-queue.png" width="1080" height="2400" loading="lazy" alt="Local emulator Download queue showing completed PDF tasks">
  <img src="../../showcase/release-2026-09-07-detail-attention.png" width="1080" height="2400" loading="lazy" alt="Local emulator Attention Paper Detail with download and read actions">
  <img src="../../showcase/release-2026-09-07-reader-attention.png" width="1080" height="2400" loading="lazy" alt="Local emulator readable Attention paper with a visible figure and caption">
  <img src="../../showcase/release-2026-09-07-reader-cgp.png" width="1080" height="2400" loading="lazy" alt="Local emulator readable CGP-Tuning paper with a visible figure and caption">
</div>

The local app connected run executed 85 app cases: all functional assertions passed, while one
`ActivityScenarioRule` teardown reported that the activity did not reach `DESTROYED` after share
redelivery. This harness-only result is recorded in the [testing guide](/paperreader-site/docs/testing/)
and was not hidden by adding a GitHub-only test.

## Root navigation

| Root destination | Purpose | Typical next step |
| --- | --- | --- |
| Library | Open saved papers, filter, sort, organize, or start reading | Open a paper, use quick `Read`, or go to Search |
| Search | Discover records across installed providers | Enter a query, inspect provider status, then open or save a result |
| Updates | Review saved-search results, downloads, and pending work | Refresh, retry, cancel, remove, or open a completed result |
| History | Return to recently opened papers | Reopen a paper or remove its History entry |
| More | Enter settings and secondary workflows | Choose Appearance, Collections, imports, backup, Sources, or About |

Phones show the five roots in bottom navigation. Wider layouts use a navigation rail. Detail and More
branch screens retain a back action instead of adding another root destination.

## Library screen

Library owns the local collection. Its controls cover layout, sorting, filters, collection selection,
and local search. A saved card can show the title, authors, provider/version context, reading status,
annotation count, local-copy state, and a quick `Read` action.

Normal flow:

1. Choose list or grid layout.
2. Search locally, sort, or apply a collection and reading-status filter.
3. Open a card for Paper Detail, or use `Read` when a supported mobile version or local PDF exists.
4. Manage versions, downloads, collections, status, or removal from Paper Detail.

Library can show loading, data failure, an empty collection with `Find paper`, and a filter with no
matches. These states do not mean the same thing and should keep separate recovery actions.

## Search screen

Search starts with an input and recent queries. After submission it can show provider progress,
results, no-result recovery, and per-provider failures. `All sources` and `Has results` isolate the
provider that produced a record.

Normal flow:

1. Enter a title, phrase, or exact identifier.
2. Submit and let providers settle independently.
3. Retry only a failed provider when other results already exist.
4. Open a result and inspect the metadata preview.
5. Choose `Save` to add the exact record to Library.

The paired captures show recent searches before a new query is submitted. They do not prove that a
provider returned data at that moment.

## Paper Detail screen

Paper Detail is the decision point between a saved record and a file. It groups title, authors,
abstract, identifiers, provider observations, manifestations, source and license details, reading
status, local files, and actions.

Normal flow:

1. Open a record from Library, Search, Updates, or History.
2. Check identity, source, version, access, and license information.
3. Choose a manifestation, then read, download, export, or open its source page.
4. Use More actions to copy an identifier, manage collections, or remove the saved paper.

The paired captures show *Attention Is All You Need*. A visible `Read` action does not by itself prove
that the exact artifact has already been retained offline.

## Mobile reader screen

The mobile reader opens verified, sanitized content for an exact supported manifestation. Search,
contents, layout controls, annotations, source details, and the original PDF remain reachable during
reading.

Normal flow:

1. Open a supported version from Paper Detail.
2. Read, search the paper, or jump through `Paper contents`.
3. Select supported text and save a highlight with an optional note.
4. Follow a citation, then use `Back to reading` to restore the earlier position.
5. Adjust text size, line spacing, or side margins.
6. Open the original PDF when exact visual fidelity matters.

The paired captures show the beginning of *Attention Is All You Need* at 0% read. No toolbar menu is
open in either frame.

## Original PDF reader

The PDF reader is the fidelity fallback for a downloaded or imported file. It supports search, zoom,
page navigation, exact-file progress, reading sessions, and page bookmarks. PDF text highlights remain
disabled until the renderer has a stable selection and source-map contract.

## Updates and History

Updates groups saved-search checks and persisted download work. The dedicated Download queue branch
groups active, attention, and completed tasks, keeps a visible back action, and shows aggregate and
per-task progress. A task can be queued, running, cancelled, failed, completed, retried, or removed.
History shows last-read time and reading duration.
Removing a History entry does not remove the saved paper.

## More branches

| Screen | What it controls | Important behavior |
| --- | --- | --- |
| Appearance | Visual theme and System/Light/Dark mode | The controls are independent and persist separately |
| Collections | Create, rename, delete, and inspect collections | Deleting a collection leaves its papers in Library |
| Reading & imports | Import a local PDF into private storage | The file is selected, reviewed, validated, copied, then added |
| Background updates | Opt-in saved-search refresh and notifications | Checks are network-constrained and can be disabled without deleting searches |
| Backup | Export or restore metadata | Restore previews counts and excludes PDFs, caches, credentials, and extension APKs |
| Sources | Install, update, enable, disable, or inspect extensions | Signed metadata and PackageInstaller confirmation are required |
| Download queue | Inspect active, failed, and completed file work | Aggregate progress and per-task actions stay available from a dedicated branch |
| About | Product and license information | This screen does not change Library data |

## States outside the gallery

This guide also covers Updates, History, More, Appearance, Backup, Import PDF, Collections, About,
the empty Library, and transient task states. They are not shown above because the paired captures
focus on the core find, save, inspect, read, and source-recovery loop.
