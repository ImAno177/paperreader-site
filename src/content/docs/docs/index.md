---
title: Documentation
description: Product notes and contributor documentation for PaperReader.
---

PaperReader is an open-source Android reader for finding, saving, and reading scholarly papers. This
wiki explains the current pre-1.0 product behavior from three angles: what a person can do, how the
underlying records stay trustworthy, and how the host is built and verified.

Status: implemented product documentation for the current host branch. Provider APKs and their live
network behavior can still be unavailable until the matching signed extension is installed.

## Start with a question

<div class="wiki-grid">
  <a class="wiki-card" href="./getting-started/">
    <strong>Start here</strong>
    <span>Learn the product loop, visible navigation, status language, and the shortest first session.</span>
  </a>
  <a class="wiki-card" href="./concepts/">
    <strong>Concepts</strong>
    <span>Understand works, manifestations, artifacts, exact identity, provenance, and local truth.</span>
  </a>
  <a class="wiki-card" href="./discovery/">
    <strong>Discovery and search</strong>
    <span>See how exact identifiers, phrase search, provider roles, and partial failure fit together.</span>
  </a>
  <a class="wiki-card" href="./reading/">
    <strong>Reading and local files</strong>
    <span>Choose verified HTML or the original PDF and understand what offline really means.</span>
  </a>
  <a class="wiki-card" href="./organizing/">
    <strong>Organizing data</strong>
    <span>Keep Library, collections, history, updates, imports, and metadata backup separate.</span>
  </a>
  <a class="wiki-card" href="./sources-and-extensions/">
    <strong>Sources and extensions</strong>
    <span>Follow the source/theme split, signed stores, trust checks, and install lifecycle.</span>
  </a>
  <a class="wiki-card" href="./troubleshooting/">
    <strong>Troubleshooting</strong>
    <span>Start from the visible symptom and choose a recovery action without losing local data.</span>
  </a>
  <a class="wiki-card" href="./reference/">
    <strong>Reference</strong>
    <span>Keep the navigation map, state vocabulary, source documents, and deferred scope close.</span>
  </a>
</div>

## User guide

- [Features](./features/) is the complete capability overview and boundary list.
- [Screens](./screens/) is the evidence directory for the Android UI and its real captures.
- [Workflows](./workflows/) gives step-by-step actions for discovering, saving, reading, importing,
  organizing, and backing up papers.
- [Discovery and search](./discovery/) explains the search pipeline without requiring implementation
  knowledge.
- [Reading and local files](./reading/) explains the exact-version mobile reader and PDF fallback.
- [Organizing data](./organizing/) explains how local records and tasks remain separate.

## Reference and contributors

- [Sources and extensions](./sources-and-extensions/) explains the package and trust boundary.
- [Troubleshooting](./troubleshooting/) is the symptom-first recovery guide.
- [Reference](./reference/) is the compact vocabulary and source-of-truth map.
- [Architecture](./architecture/) explains the boundary between the host app, logic, and extensions.
- [Development](./development/) covers the website workflow and the related app repository.
- [Motion](./motion/) records the animation system, accessibility guardrails, and performance checks.

## Product map

| If you want to... | Start here | What you will learn |
| --- | --- | --- |
| Find a paper | [Discovery](./discovery/) | Search sources, recent queries, provider status, and exact-identifier recovery |
| Understand a screenshot | [Screens](./screens/) | What the screen shows, what it does, and what the image does not prove |
| Read a paper offline | [Reading](./reading/) | How verified mobile artifacts and the original PDF fallback work |
| Bring in your own PDF | [Workflows](./workflows/#import-a-local-pdf/) | Select, review, validate, and open a local file |
| Understand why a record is separate | [Concepts](./concepts/) | Works, manifestations, artifacts, revisions, and exact merge rules |
| Recover from a failure | [Troubleshooting](./troubleshooting/) | What the visible state means and which action is safe |
| Contribute to the site | [Development](./development/) | Folder map, commands, content rules, and the publishing check |

## Navigation at a glance

The Android host keeps five root destinations visible: `Library`, `Search`, `Updates`, `History`, and
`More`. On a phone they appear in the bottom navigation; on wider layouts they become a navigation rail.
`More` contains `Appearance`, `Collections`, `Reading & imports`, `Background updates`, `Backup`,
`Sources`, and `About`. A saved paper opens a detail screen before a reader or file action is chosen.

## Source of truth

The Android product repository contains the implementation contract in [`docs/SPEC.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md).
This site translates that contract into product-facing explanations and workflows; it does not replace
the product specification or the extension repositories.
