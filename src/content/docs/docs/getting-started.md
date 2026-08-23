---
title: Start here
description: Run a first search, save one paper, and choose the right reader.
sidebar:
  label: Start here
  order: 1
---

The shortest useful PaperReader session has four parts: discover a record, inspect its identity, save
it, then choose a readable manifestation or the original PDF.

Status: implemented orientation for the current pre-1.0 host. Provider results and readable files are
conditional on installed sources, the network, and the selected paper.

## Before you begin

PaperReader supports Android 9 or newer. Search requires at least one compatible source extension. A
paper needs a supported exact-version representation or a local PDF before `Read` can open a document.

No account is required. Library records, reading state, collections, history, and annotations stay on
the device by default.

## Find one paper

1. Open `Search` from the root navigation.
2. Enter a title, phrase, DOI, arXiv ID, PMID, or PMCID.
3. Submit the query and let the provider cards finish independently.
4. If one provider fails, keep the successful results and retry only the failed provider when a retry
   action appears.
5. Open a result and check its title, authors, identifiers, provider, version, abstract, and access
   information.
6. Choose `Save`. Opening a preview alone does not add a record to Library.

Expected result: the paper appears in `Library` with the exact identifiers and provider provenance
shown in the preview.

If no installed provider finds the paper, PaperReader can offer a constrained Google-to-arXiv handoff.
Select an arXiv `/abs/`, `/html/`, or `/pdf/` result. The app then asks the installed arXiv source for
the exact metadata; it never saves a Google snippet as the paper record.

## Choose how to read

1. Open the saved paper from `Library`.
2. In Paper Detail, inspect `Versions & files`.
3. Choose the mobile reader when verified HTML exists for the exact manifestation and revision.
4. Choose the original PDF when visual fidelity matters or mobile HTML is unavailable.
5. Return from Library or History. A verified retained artifact can reopen without a network.

The exported HTML file and the app's verified reading artifact are different files. Export can succeed
even when the bounded offline pool cannot retain the app-private copy. In that case the external file
remains available, but `Read` does not silently trust it.

## Know what changed

| Action | Changes local data? | What remains separate |
| --- | --- | --- |
| Open a search result preview | No | The result is not yet a Library record |
| Save a paper | Yes | Provider versions and files keep their own provenance |
| Add or remove a collection | Yes | The saved paper is not deleted |
| Remove a History entry | Yes | The saved paper remains in Library |
| Export readable HTML | Writes a user-selected file | The verified app-private artifact keeps its own hash and retention state |
| Change Light or Dark mode | Changes appearance only | The selected visual theme and paper data are unchanged |

## Continue by goal

- [Workflows](./workflows/) gives the full steps for search, offline reading, PDF import, saved searches,
  backup, and sources.
- [Screens](./screens/) identifies the controls and visible states in the current app captures.
- [Concepts](./concepts/) explains why works, manifestations, artifacts, and provider observations are
  stored separately.
- [Troubleshooting](./troubleshooting/) starts from no results, unavailable readers, invalid files,
  restore skips, and extension trust states.

## Documentation theme

The docs theme selector supports Light, Dark, and the browser preference. The landing page has its own
Light/Dark control and swaps every selected app capture to the matching theme. Reduced-motion settings
disable the circular theme reveal without hiding content.
