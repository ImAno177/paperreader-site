---
title: Reading and local files
description: How PaperReader chooses a reader, verifies artifacts, and keeps offline behavior honest.
sidebar:
  label: Reading and local files
  order: 2
---

PaperReader has two reader paths: a readable mobile document for supported exact manifestations and the
original PDF for fidelity. The app does not pretend that a lossy conversion is identical to the source.

Status: the verified arXiv HTML path and original PDF reader are implemented; TeX conversion, broad PDF
reflow, OCR, and cross-revision annotation movement remain deferred.

## Choose a representation

PaperReader resolves readable content in this order:

1. trusted provider full text;
2. official arXiv HTML for the exact manifestation and revision;
3. a future isolated TeX conversion service (**Deferred**);
4. a future versioned PDF extraction path (**Deferred beyond the current verified path**);
5. the original PDF when the file exists.

The current mobile path is the exact-version arXiv HTML manifestation. Other papers can be PDF-only or
unavailable. Paper Detail names the available version, source, access, and license before the user
chooses an action.

## The mobile reader

The verified reader provides:

- selectable text and a find bar with previous and next matches;
- `Paper contents` navigation without losing the reading position;
- citation links with a visible `Back to reading` action;
- adjustable text size from 85% to 200%, line spacing, and side margins;
- responsive figures, MathML, and horizontally scrollable wide tables;
- exact-document highlights with optional notes when the selection is supported;
- a reachable original-PDF action when a source file exists.

The WebView is non-exported, network-blocked, and fed sanitized content with a deny-by-default policy.
Executable markup and unsafe URLs are removed before storage. The renderer validates the app-private
artifact instead of trusting a user-editable export.

## Offline has a precise meaning

The app labels an artifact as cached or saved offline only when it has the exact manifestation/version,
source URL, sanitizer or generator version, and content hash needed to reopen it.

Readable HTML export has two outcomes:

- the shareable document is written and the matching app-private artifact is retained; or
- the shareable document is written but the app-private copy cannot be retained because the bounded
  pool or storage is unavailable.

In the second case, the exported file remains useful to the user, but `Read` does not silently switch to
that mutable copy. The retained pool is capped at 120 MiB and rejects a new retention request rather
than evicting an explicitly retained paper.

## Original PDF fallback

The original PDF reader supports search, zoom, page navigation, exact-file progress, reading sessions,
and page bookmarks. Text highlights remain disabled until the PDF renderer exposes a stable source-map
contract. This is a fidelity boundary, not a missing label in the HTML reader.

## Annotation identity

Readable HTML annotations attach to an exact document hash and stable source/text anchor. A highlight
may be reopened for its optional note or deletion, but it is not silently moved to a different revision,
sanitizer, parser, or renderer output.

See [Read a paper offline](./workflows/#read-a-paper-offline/) for the user sequence and [Concepts](./concepts/)
for the distinction between a manifestation and a local artifact.
