---
title: Features
description: The PaperReader product loop and its visible boundaries.
---

PaperReader keeps the research loop close to the device: discover a paper, save the exact record, open
the version you meant to read, and return to it later.

Status: implemented on the current pre-1.0 host branch. A feature can still show an unavailable state
when its provider, file, permission, or network prerequisite is missing.

## Discovery and search

Search accepts a natural-language query or an exact DOI, arXiv ID, PMID, or PMCID. Installed providers
can contribute Semantic Scholar, arXiv, and Europe PMC discovery results; Crossref is used for exact DOI
enrichment rather than fuzzy discovery. Results are clustered only when canonical identifiers match, so
similar titles are not silently merged.

The Search screen keeps the eight most recent submitted queries locally and shows up to five matching
recent-query rows. `All sources` and `Has results` filters make it possible to inspect a provider-specific
view. Each provider reports its own loading, success, rate-limited, invalid, or unavailable state. A
failed provider can be retried without discarding successful results from another provider.

When a result card is opened, PaperReader shows the same metadata preview used before saving a paper in
the Library. Opening a preview does not save it. Saving is an explicit action, and a saved result can
then be opened in Paper Detail.

If installed sources return no result, Search can offer an isolated Google-to-arXiv handoff. Selecting a
real arXiv `/abs/`, `/html/`, or `/pdf/` link returns an exact identifier and version to the installed
arXiv source. Google may be unavailable or may require an interactive anti-abuse challenge. Search
snippets are never treated as paper metadata.

## Library and organization

Saved papers live in a Room-backed local Library. The screen supports list and grid layouts, a local
search field, collection filters, sorting, reading-status filters, and a quick `Read` action when a
readable or local file is available. A paper can be marked as unread, reading, or finished without
changing its source record.

The library can be organized without a cloud account:

- Collections are many-to-many. Removing a collection never removes its papers.
- History records opened papers and can remove an entry without deleting the saved paper.
- Bookmarks and annotations stay attached to the exact local document or PDF page they describe.
- Saved searches keep a provider snapshot and can be refreshed from Updates.
- Downloads and extraction tasks appear in the Updates queue with progress, retry, cancel, or remove
  actions.
- Metadata backup and local PDF import live under More and keep their review steps explicit.

## Paper Detail and versions

Paper Detail is the decision point between a record and a file. It shows the title, authors, abstract,
identifiers, provider observations, manifestations, version, source, access, license, and reading
status that are available for the saved paper.

From a manifestation card, the user can choose a mobile reader when a verified HTML version exists,
download a PDF, open a source or landing page, export readable HTML, manage collections, change reading
status, copy an identifier, or remove the saved paper. Each version and local artifact remains separate,
so an updated manifestation does not silently replace the exact version already read.

## Reading and local files

Supported arXiv papers can open as a selectable, searchable mobile document with a table of contents,
figures, tables, MathML, adjustable text size, reading progress, and exact-document annotations. The
current mobile path is the verified exact-version arXiv HTML manifestation. Other manifestations can be
unavailable or PDF-only. The reader labels whether the document is cached or saved offline.

The mobile reader provides:

- Find text with previous and next match controls.
- Open `Paper contents` and jump to a section without losing the reading position.
- Return from a citation with `Back to reading`.
- Adjust text size from 85% to 200%, line spacing, and side margins.
- Select one passage and save a highlight with an optional research note. The anchor is tied to the
  exact document hash and is not moved to another revision.
- Open the original PDF when the source exists. The original PDF reader provides search, zoom, page
  navigation, progress, and page bookmarks.

Readable HTML is sanitized before it is stored, and the reader WebView is network-blocked. The
original PDF remains the fidelity fallback when the provider has no supported HTML or the network/cache
state prevents a mobile copy from opening. Exporting readable HTML can save a shareable external file
without retaining an app-private offline copy; when that happens, Read continues to use only the exact
verified app artifact and reports the difference.

## Updates, history, and background work

Updates combines saved-search refresh results, download tasks, and paper actions that need attention.
Saved-search refresh is opt-in, sequential, network-constrained, and reports only newly unread results.
History is a separate chronological list of reading sessions, with the last-read time and total reading
duration visible for each entry.

Every long-running operation has an explicit state. Loading, empty, offline, rate-limited, invalid,
cancelled, and unavailable states include a recovery action or explain why no action is possible.

## Sources and extensions

Source and theme extensions are separate Android packages. The host checks the signed store record,
package identity, version, size, SHA-256, signer, exported service, and contract before installation.
Android PackageInstaller still asks the user to confirm. Extension code does not load into the host
process.

Sources exposes installed, available, update, untrusted, and orphaned states. A source can be disabled
without deleting the provider records needed to display saved-paper provenance.

## Appearance, access, and privacy

Appearance has independent controls for the built-in Neobrutalism preset, complete community themes,
and System, Light, or Dark mode. The host uses adaptive navigation and 48 dp semantic touch targets.
The English UI makes error and recovery states explicit, and state is not communicated by color alone.

The default product is local-first. Metadata, reading state, history, collections, annotations, and
backups remain on the device. There is no default account, advertising SDK, analytics pipeline, cloud
parser, or paper-upload flow. Remote content is bounded and sanitized before it becomes a local reading
artifact.

## Product boundaries and non-goals

PaperReader does not silently merge similar papers, render unsanitized remote HTML, compile untrusted
TeX in the host process, or promise that a lossy conversion is exact. Collaboration, hosted sync, OCR,
annotation export, cross-revision annotation movement, production-grade TeX or PDF reflow, resumable
downloads, automatic backup, and user-selected storage remain outside the current 1.0 scope.
