---
title: Start here
description: A short orientation to the PaperReader product and this wiki.
sidebar:
  label: Start here
  order: 1
---

PaperReader is a local-first Android library and reader for scholarly papers. The shortest useful
description is a four-step loop: discover a record, save the exact work, choose a manifestation, and
return to a verified local copy when one is available.

Status: implemented orientation for the current pre-1.0 host branch. This page describes the product
that exists today; it is not an installation promise or a release roadmap.

## A first session

1. Open `Search` and enter a title, phrase, or exact DOI, arXiv ID, PMID, or PMCID.
2. Wait for provider cards to settle. A rate-limited or unavailable provider does not erase successful
   results from another provider.
3. Open a result and check its title, authors, identifiers, abstract, source, and version.
4. Choose `Save` when the record is the one you want. Opening a preview alone does not write to the
   local Library.
5. Open `Library`, select the saved paper, and use Paper Detail to choose a mobile reader, PDF, source
   page, export, collection, or reading-status action.
6. Return to the same paper from Library or History. A verified cached artifact can reopen without a
   network when it is still retained and the exact manifestation is unchanged.

The normal flow is deliberately explicit. A search result is not a paper in the local database, an
HTML export is not automatically the artifact used by `Read`, and a similar title is not proof that two
records are the same work.

## Site controls

The `Theme` control switches the landing page between `Light` and `Dark`. The selected theme is stored
in this browser, so returning to the landing page keeps the same choice. On browsers that support the
View Transition API, the new theme spreads from the control across the page; when
`prefers-reduced-motion: reduce` is active, the theme changes without the reveal animation. The docs
theme selector remains separate and supports light, dark, or automatic documentation chrome.

The landing page also switches the showcase evidence with the theme. The hero image and each selected
screen card use a real Light capture in Light mode and the matching real Dark capture in Dark mode. The
image `src`, accessible description, and visible caption are updated together so the page does not show
a dark screenshot with a Light label, or the reverse.

## Use the wiki by question

| If you are asking... | Read... | You will find... |
| --- | --- | --- |
| What does a term such as manifestation or artifact mean? | [Concepts](./concepts/) | The domain vocabulary and the identity rules behind it |
| How does a search become a saved paper? | [Discovery](./discovery/) | Query routing, provider roles, recent searches, and recovery states |
| Which reader should I use? | [Reading](./reading/) | Verified HTML, original PDF, offline retention, export, and annotations |
| Where did a screen or state come from? | [Screens](./screens/) | The visible UI, normal next actions, and the limits of each capture |
| How do I complete a task? | [Workflows](./workflows/) | Step-by-step guides for the common actions |
| How do I keep the Library organized? | [Organizing data](./organizing/) | Collections, history, updates, imports, and metadata backup |
| Why is a source unavailable or untrusted? | [Sources and extensions](./sources-and-extensions/) | The package, signature, store, and install boundaries |
| What should I do when something fails? | [Troubleshooting](./troubleshooting/) | Symptom-first recovery steps and honest limitations |

## What the screens mean

The five root destinations are `Library`, `Search`, `Updates`, `History`, and `More`. On a phone they
are bottom-navigation items; on wider layouts they become a navigation rail. `More` opens secondary
branches such as Appearance, Collections, Reading & imports, Background updates, Backup, Sources, and
About. A saved paper opens Paper Detail before a reader or file action is chosen.

Use [Screens](./screens/) when you need to identify a capture. Use [Features](./features/) when you need
the complete capability list. Use [Reference](./reference/) when you need the state vocabulary or the
source-of-truth map.

## Status language

- **Implemented** means the current host contract describes the behavior as shipped.
- **Conditional** means the behavior depends on an installed extension, a supported manifestation, a
  file, permission, network, or retained cache artifact.
- **Deferred** means the product contract explicitly keeps it outside the current release scope.
- **Not proved by a capture** means an image shows a visible state but cannot prove an unseen action.

## Reading the source

This wiki translates the Android repository's product contract into user-facing explanations. The
authoritative documents remain the [product specification](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md),
[architecture guide](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md),
[extension SDK guide](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md), and
[testing guide](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md). When this site and
the host disagree, the host contract wins and the site should be corrected.
