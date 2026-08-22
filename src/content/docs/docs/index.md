---
title: Documentation
description: Product notes and contributor documentation for PaperReader.
---

PaperReader is an open-source Android reader for finding, saving, and reading scholarly papers. The
site documents the current pre-1.0 product behavior, the screens shown on the landing page, and the
steps behind the main research workflows.

Status: implemented product documentation for the current host branch. Provider APKs and their live
network behavior can still be unavailable until the matching signed extension is installed.

## Choose a path

- [Features](./features/) explains each user-facing capability and its limits.
- [Screens](./screens/) is a screen-by-screen directory of the Android UI and the real captures used by
  this site.
- [Workflows](./workflows/) gives step-by-step instructions for discovering, saving, reading, importing,
  organizing, and backing up papers.
- [Architecture](./architecture/) explains the boundary between the host app, logic, and extensions.
- [Development](./development/) covers the website workflow and the related app repository.
- [Motion](./motion/) records the animation system, accessibility guardrails, and performance checks.

## Product map

| If you want to... | Start here | What you will learn |
| --- | --- | --- |
| Find a paper | [Features](./features/#discovery-and-search/) | Search sources, recent queries, provider status, and the exact save flow |
| Understand a screenshot | [Screens](./screens/) | What the screen shows, what it does, and what the image does not prove |
| Read a paper offline | [Workflows](./workflows/#read-a-paper-offline/) | How the verified mobile reader and original PDF fallback work |
| Bring in your own PDF | [Workflows](./workflows/#import-a-local-pdf/) | Select, review, validate, and open a local file |
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
