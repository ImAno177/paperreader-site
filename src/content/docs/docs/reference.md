---
title: Reference
description: Quick-reference maps for navigation, states, source-of-truth documents, and deferred scope.
sidebar:
  label: Reference
  order: 6
---

Use this page as a compact index after reading a longer guide. It records the vocabulary and boundaries
that are easy to lose when moving between screens.

Status: reference map for the current pre-1.0 host contract.

## Root navigation map

| Root | Owns | Common branches or next actions |
| --- | --- | --- |
| `Library` | Saved works, filters, collections, local search, quick read | Paper Detail, collection/status filters |
| `Search` | Discovery, recent queries, provider states | Preview, Save, `Search Google` recovery |
| `Updates` | Saved-search refreshes and persisted tasks | Refresh, retry, cancel, remove |
| `History` | Reading sessions and return points | Reopen or remove a history entry |
| `More` | Secondary settings and data workflows | Appearance, Collections, imports, Background updates, Backup, Sources, About |

On narrow screens these are bottom-navigation items. On wider layouts they become a navigation rail.
Detail and More branches keep a back action.

## State vocabulary

| State | Meaning | Usual next action |
| --- | --- | --- |
| Loading | A bounded operation has started but has not completed | Wait or leave it cancellable |
| Empty | The operation succeeded with no items | Use the offered discovery or filter action |
| Offline/unavailable | A network, extension, or source prerequisite is not usable | Retry later or use a fallback |
| Rate-limited | A provider asked the app to respect a delay | Wait for the retry policy; do not storm the provider |
| Invalid | A response or file failed validation | Inspect the error and choose another source/file |
| Cancelled | The user or lifecycle stopped the operation | Restart explicitly if still needed |
| Untrusted | An extension failed signed identity or contract checks | Refresh trusted metadata; do not activate it |
| Orphaned | An installed extension is missing from trusted catalogs | Review the package; it is not silently deleted |

## Source-of-truth map

| Question | Authoritative document |
| --- | --- |
| Product behavior, identity, providers, reader, persistence | [docs/SPEC.md](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md) |
| Module boundaries and reader/extension seams | [docs/ARCHITECTURE.md](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md) |
| Extension wire contract, signed stores, and install trust | [docs/EXTENSIONS.md](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md) |
| Test commands, coverage, connected evidence, and release gates | [docs/TESTING.md](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md) |
| Website structure and publishing checks | [Website development](./development/) |

Metadata restore can also produce a valid but dormant record when the device does not currently have the
provider or exact file needed by a saved reading state. The restore preview reports missing providers,
skipped records, and dormant exact-document anchors; it preserves the hash rather than guessing a new
document.

## Deferred scope

The current host contract does not ship silent or privileged extension installation, arbitrary code
loading, unsanitized remote HTML, cloud-only parsing, fuzzy automatic merges, collaboration, hosted sync,
OCR, annotation export, cross-revision annotation re-anchoring, production-grade TeX conversion, broad
PDF reflow, resumable downloads, automatic backup, or user-selected storage roots.

When a screen shows a fallback or unavailable state, read it as a boundary of the current contract rather
than a promise that the deferred feature exists behind a hidden switch.
