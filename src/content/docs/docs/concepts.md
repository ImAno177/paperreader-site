---
title: Concepts
description: The domain vocabulary that keeps PaperReader honest about identity, versions, and files.
sidebar:
  label: Concepts
  order: 2
---

PaperReader separates an intellectual work from the concrete version or file used to read it. That
separation is the reason the app can preserve provenance instead of silently replacing one paper with a
newer or merely similar record.

Status: implemented domain model for the current host branch.

## The four objects to keep apart

| Term | Meaning | Example |
| --- | --- | --- |
| `PaperWork` | The intellectual work: canonical identifiers, title, authors, abstract, subjects, and publication date | The work identified by an exact DOI or arXiv ID |
| `PaperManifestation` | A provider's concrete representation or revision, including source URL, version, access, license, and acquisition time | arXiv `1706.03762v7` HTML or PDF |
| `LocalArtifact` | An app-private, integrity-checked file created or downloaded for a manifestation | A sanitized HTML cache or original PDF with SHA-256 |
| Provider observation | A timestamped claim from one provider, such as citation count or an alternate title | A Semantic Scholar citation observation |

The Library can present these together, but they remain different records. A new manifestation can be
added without erasing the one a reader already opened.

`LocalArtifact` is the product-level umbrella term. The implementation still distinguishes an original
PDF, a verified readable HTML cache, and a retained-offline copy because they have different validation,
eviction, and reader guarantees. A file being local is not enough to make it the canonical reading
artifact.

## Identity and merging

PaperReader normalizes DOI, modern and legacy arXiv identifiers, PMID, and PMCID. Automatic merging
requires an exact canonical alias. Similar titles, overlapping authors, or a matching abstract are
review signals, not merge proof.

This rule matters when several providers return the same work with different metadata. The app may keep
provider alternatives and timestamped observations while using one exact identity for the saved work.

## Provenance is part of the data

A manifestation carries its provider, upstream version, source URL, content kind, access, license
statement, acquisition time, and original-PDF locator. A local artifact also carries the exact hash,
size, format, generator or sanitizer version, provenance, and creation time.

The reader therefore knows what it is opening. A mutable exported HTML file is not treated as the
offline source of truth; `Read` uses the matching verified app-private artifact instead. If export
succeeds but retention does not, the shareable file remains available and the UI reports that no
app-private offline copy was kept.

## Room, cache, and user files

- **Room** is the local source of truth for papers, manifestations, files, reading state, collections,
  history, annotations, and saved searches.
- **The bounded cache** stores verified reading artifacts and can remove complete artifact groups without
  deleting Library metadata or the user's original PDF.
- **User-selected files** such as an exported HTML copy or metadata backup live outside the ordinary
  cache lifecycle and are never assumed to be safe to render as the app's canonical copy.

Writes are integrity-checked and multi-table identity changes are transactional. Cancellation wins races
with late task completion, so an old network response must not commit over a cancelled operation.

## Source extensions and theme extensions

These two words are intentionally separate:

- A **source extension** searches, looks up identifiers, enriches metadata, or provides a paper
  manifestation.
- A **theme extension** supplies declarative palettes, typography, shape, decoration, and semantic icon
  data. The host owns rendering.

Neither extension is loaded into the host process as arbitrary code. See [Sources and extensions](./sources-and-extensions/)
for the trust and install lifecycle.

## Why the distinction is useful

The non-obvious rule is that the paper a person means, the version a provider serves, and the file a
device keeps are three different questions. Keeping them separate makes the following behavior possible:

1. show a provider failure without deleting a successful record;
2. reopen the exact cached revision rather than silently refetching a different one; and
3. remove a collection or history entry without removing the saved paper.

For the visible consequences, continue to [Features](./features/) and [Reading](./reading/).
