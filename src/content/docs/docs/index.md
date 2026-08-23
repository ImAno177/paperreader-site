---
title: PaperReader documentation
description: Task guides, screen notes, and contributor references for PaperReader.
---

PaperReader is a local-first Android app for finding, saving, and reading scholarly papers. These
pages document the current pre-1.0 host. A provider-dependent action can remain unavailable until its
signed source extension is installed and usable.

## Choose where to start

<div class="wiki-grid">
  <a class="wiki-card" href="./getting-started/">
    <strong>Use PaperReader for the first time</strong>
    <span>Run one search, inspect a record, save it, and choose a reader.</span>
  </a>
  <a class="wiki-card" href="./workflows/">
    <strong>Complete a task</strong>
    <span>Follow exact steps for search, offline reading, PDF import, backup, and sources.</span>
  </a>
  <a class="wiki-card" href="./screens/">
    <strong>Understand a screen</strong>
    <span>See the current Light and Dark captures, visible controls, and normal next actions.</span>
  </a>
  <a class="wiki-card" href="./troubleshooting/">
    <strong>Recover from a problem</strong>
    <span>Start from the message on screen and choose an action that keeps local data intact.</span>
  </a>
  <a class="wiki-card" href="./concepts/">
    <strong>Understand the data model</strong>
    <span>Keep a work, a provider version, and a local file separate.</span>
  </a>
  <a class="wiki-card" href="./architecture/">
    <strong>Contribute to the project</strong>
    <span>Review module ownership, extension isolation, verification, and the website workflow.</span>
  </a>
</div>

## Common tasks

| Goal | Guide | Result |
| --- | --- | --- |
| Find and save a paper | [Discovery and search](./discovery/) | An exact record is added to the local Library only after `Save` |
| Read without a network | [Reading and local files](./reading/) | A verified app-private artifact reopens when the exact version is retained |
| Import an existing PDF | [Import a local PDF](./workflows/#import-a-local-pdf) | A validated private copy and Library record are created |
| Organize a reading queue | [Organizing data](./organizing/) | Collections and reading status change without rewriting paper identity |
| Install or inspect a provider | [Sources and extensions](./sources-and-extensions/) | The host verifies the store, APK, signer, service, and API contract |
| Check shipped versus deferred behavior | [Features](./features/) | Current capabilities and pre-1.0 boundaries are listed together |

## One rule to learn early

A paper, the version supplied by a provider, and the file stored on the device are separate records.
PaperReader merges automatically only when canonical identifiers match exactly. It also keeps an
annotation on the exact document hash where it was created. See [Concepts](./concepts/) before working
on identity, versions, caching, or annotations.

## Product map

The five root destinations are `Library`, `Search`, `Updates`, `History`, and `More`. Phones use bottom
navigation; wider layouts use a navigation rail. `More` contains Appearance, Collections, Reading &
imports, Background updates, Backup, Sources, and About.

The [screen guide](./screens/) explains each destination. The [reference page](./reference/) provides
the compact state and source-of-truth maps.

## Source of truth

The Android repository owns the product contract. Start with the
[product specification](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md), then use the
[architecture](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md),
[extension](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md), and
[testing](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md) guides for their respective
boundaries. This wiki explains those contracts through tasks and screens; it does not replace them.
