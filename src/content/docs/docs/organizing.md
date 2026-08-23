---
title: Organizing data
description: How Library, collections, history, updates, imports, and backup fit together.
sidebar:
  label: Organizing data
  order: 3
---

PaperReader keeps organization local and explicit. Library records, collections, history, annotations,
saving, and background tasks have separate responsibilities so one cleanup action does not unexpectedly
remove something else.

Status: implemented local organization surfaces for the current host branch.

## Library is the local collection

Library supports list and grid layouts, local search, sorting, collection filters, reading-status
filters, and a quick `Read` action when a supported reader or local file is available. Reading status is
independent of provider identity and can be changed without replacing the source record.

The normal organization path is:

1. open a card from `Library`;
2. use Paper Detail for collections, status, files, version, or removal;
3. return to Library and use the local filters to find the paper again.

## Collections are labels, not ownership

Collections are many-to-many. A paper can appear in several collections, and deleting a collection does
not delete its papers. Removing a paper is a separate explicit Paper Detail action.

This distinction is useful for workflows such as `reading next`, `methods`, or a course list: changing
the list does not rewrite the paper's provenance or local file.

## History is not Library

History records opened papers, last-read time, and reading duration. Removing a history entry removes the
entry, not the saved paper. Use Library when you want to manage the paper itself.

## Updates and saved searches

Updates groups saved-search refreshes, downloads, extraction work, and other persisted tasks. A task can
be queued, running, completed, failed, cancelled, retried, or removed.

Saved searches keep their provider snapshot. Background refresh is opt-in, sequential across searches,
network-constrained, and reports only newly unread results. A failed refresh preserves the last useful
snapshot rather than replacing it with an empty result.

## Local PDF import

`More > Reading & imports` uses the Android document picker. The file is reviewed, validated, copied to
app-private staging, and committed only after the import succeeds. An invalid, too-large, unreadable, or
no-longer-available file leaves the existing Library unchanged.

The import does not claim that a PDF has selectable reflow HTML. It creates an original-document path;
the [PDF reader](./reading/) remains the fidelity surface.

## Metadata backup

`More > Backup` exports versioned, bounded metadata. It includes records such as papers, saved searches,
and related local state, but excludes credentials, extension APKs, filesystem paths, caches, and the
original PDF bytes.

Restore is preview-first and requires confirmation. Validation and match counts appear before the write;
records that cannot be safely matched are skipped and reported. It is not automatic cloud sync, and the
current scope does not include automatic backup or a user-selectable storage root.

For exact actions, see [Organize a saved paper](./workflows/#organize-a-saved-paper), [Import a local PDF](./workflows/#import-a-local-pdf),
and [Back up and restore metadata](./workflows/#back-up-and-restore-metadata).
