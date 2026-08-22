---
title: Features
description: The PaperReader product loop and its visible boundaries.
---

PaperReader keeps the research loop close to the device: discover a paper, save the exact record, open
the version you meant to read, and return to it later.

## Discovery

The host can combine results from installed scholarly providers, preserve provider identity, and keep
search history available for another pass. A provider failure remains attached to that provider instead
of erasing successful results from the other sources.

## Library and organization

Saved papers live in a local library. Collections, history, bookmarks, saved searches, updates, and
metadata backups are local features. Opening a result does not save it by accident; saving is an
explicit action.

## Reading

Supported papers can open as a selectable, searchable mobile document with a table of contents,
figures, tables, MathML, adjustable text size, reading progress, and exact-document annotations. The
original PDF remains available when fidelity matters more than reflow.

## Extensions

Provider and theme extensions are separate packages. The host checks the signed store record, package
identity, version, size, hash, signer, and service contract before installation. Extension code does
not load into the host process.

## Product boundaries

The app has no default account, analytics, advertising SDK, cloud parser, or paper-upload flow. Remote
content is bounded and sanitized before it becomes a local reading artifact.
