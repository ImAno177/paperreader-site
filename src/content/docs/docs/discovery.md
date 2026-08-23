---
title: Discovery and search
description: How PaperReader routes queries, combines providers, and recovers from partial failure.
sidebar:
  label: Discovery and search
  order: 1
---

Search is a federated surface with independent provider states. PaperReader can show useful results
even when one source is unavailable, rate-limited, or invalid.

Status: implemented on the current host branch, subject to installed extensions and live provider
availability.

## Choose the query shape

| Input | Routing intent |
| --- | --- |
| Title or natural-language phrase | Ask enabled discovery-capable providers for ranked results |
| DOI | Route exact normalized DOI enrichment to a metadata-capable provider such as Crossref |
| arXiv ID | Resolve the exact work and version through an arXiv-capable source |
| PMID or PMCID | Route the exact identifier to a matching biomedical source |

Exact identifiers are not sent through fuzzy title ranking. This protects a user who already knows the
record they want from an unrelated similarly named result.

## Provider roles

| Role | Responsibility | Current official example |
| --- | --- | --- |
| Search engine | Unstructured discovery and ranked result pages | Semantic Scholar |
| Content source | Search or lookup plus readable/downloadable manifestations | arXiv, Europe PMC |
| Metadata engine | Identifier-bound enrichment, not fuzzy discovery | Crossref |

Provider implementations are separate APKs. The host communicates through a bounded versioned contract;
it does not embed provider HTTP clients or parsers.

## What happens after submit

1. PaperReader classifies the input as a phrase or exact identifier.
2. It calls enabled providers that advertise the matching capability and role.
3. Requests are cancellable, rate-limited, bounded, and independently reported.
4. Results cluster only on exact canonical aliases and preserve provider alternatives.
5. A deterministic ranking prefers exact identifiers, exact titles or title segments, anchored phrases,
   broader text matches, citation observations, publication date, and then a stable provider key.
6. The Search screen keeps the eight most recent submitted queries locally and shows up to five matching
   recent-query rows.

The result preview is the same metadata preview used before saving from Library. Opening it does not
write Room. `Save` is the explicit boundary that creates or updates the local record.

## Partial failure is a first-class state

Every provider can report loading, success, rate-limited, invalid, offline, or unavailable. A failed
provider keeps its own recovery action and does not hide successful results from another provider. This
is why a screenshot showing one unavailable source does not prove that all discovery is unavailable.

## Google-to-arXiv recovery

When installed providers return no match, Search may expose `Search Google`. The isolated surface is
restricted to allowlisted HTTPS Google navigation and does not parse result-page HTML or treat snippets
as metadata.

Selecting an arXiv `/abs/`, `/html/`, or `/pdf/` link returns the exact identifier and version to the
installed arXiv source. Google can be unavailable or can request an interactive anti-abuse challenge;
PaperReader does not bypass that challenge and does not use a snippet as a saved paper.

## What discovery does not promise

- A provider must be installed and enabled before it can contribute results.
- A title match alone does not prove identity.
- A successful preview does not save the paper.
- A Google result does not become authoritative until an exact arXiv link is handed back to the arXiv
  source.
- Live API behavior is not deterministic test evidence; fixtures and local servers are used for tests.

For the visible UI sequence, see [Search screen](./screens/#search-screen). For the complete task, see
[Find and save a paper](./workflows/#find-and-save-a-paper).
