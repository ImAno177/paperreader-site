---
title: Troubleshooting
description: Symptom-first recovery for provider, reader, file, backup, and extension states.
sidebar:
  label: Troubleshooting
  order: 5
---

PaperReader treats failure as product state. Start with what is visible on screen, then choose the
smallest recovery action. Do not delete a saved paper to fix a provider or reader problem unless the
explicit removal action is actually what you intend.

Status: recovery guidance for implemented and conditional host behavior.

## Search shows no results

1. Check whether the query is a title phrase or an exact identifier.
2. Inspect provider cards and the `All sources` / `Has results` filters.
3. Retry only the provider that is loading, rate-limited, invalid, or unavailable.
4. If `Search Google` appears, select an exact arXiv `/abs/`, `/html/`, or `/pdf/` result rather than
   saving a snippet.

If an extension is not installed or enabled, it cannot participate. Similar titles are not a reason to
merge records manually; review the identifiers and manifestations in Paper Detail.

## Google does not load

Google may be unavailable or may present an interactive anti-abuse challenge. PaperReader does not
bypass that challenge, parse result-page HTML, or treat snippets as metadata. Return to normal provider
search or open an exact arXiv URL from another trusted path.

## Read is unavailable

Open Paper Detail and check `Versions & files`:

- If exact-version HTML is missing or unversioned, use the original PDF when available.
- If the source is rate-limited, offline, too large, or invalid, retry when the typed state offers it.
- If the paper was exported but no offline copy was retained, use the external file or request the
  manifestation again; `Read` will not silently use a mutable export.
- If a cache artifact fails integrity validation, the app must fetch or regenerate the exact artifact,
  never a different revision under the same title.

The current mobile path is exact-version arXiv HTML. Production-grade TeX conversion, broad PDF reflow,
OCR, and cross-revision annotation movement are deferred.

## A downloaded PDF will not open

Check the task in `Updates` for queued, running, failed, cancelled, or retryable state. A missing,
forbidden, invalid, or too-large source is rejected rather than stored as a broken local file. When a
valid local PDF exists, the original reader remains the fidelity fallback.

## Local PDF import fails

Repeat `More > Reading & imports > Choose PDF` and confirm the picker still grants access to the file.
Review the file size, detected metadata, and page count before `Import PDF`. An invalid or unavailable
selection should leave the existing Library unchanged; choose a different file rather than deleting
the Library entry.

## Restore skips records

Metadata backup restore is preview-first. Review validation messages and match counts before confirming.
Credentials, caches, original PDFs, extension APKs, and filesystem paths are deliberately excluded, so
they cannot be restored from a metadata backup. Records that cannot be matched safely are skipped and
reported instead of being guessed.

## A source is untrusted or orphaned

Do not install an APK from a copied URL to bypass the state. Refresh the trusted store and inspect the
package name, version, signer, hash, API compatibility, and extension kind. An untrusted signer cannot
activate. An orphan is still installed but absent from a trusted catalog; it is shown for review and is
not silently removed.

## The UI looks empty or offline

Empty, loading, offline, rate-limited, invalid, cancelled, and unavailable states are distinct. Check
the action beside the state before changing data. A successful result from one provider can coexist with
an unavailable state from another, and a saved paper can remain useful even when its provider is offline.

For screen-level evidence, see [Screens](../screens/). For the underlying typed boundaries, see
[Architecture](../architecture/) and the [product specification](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md).
