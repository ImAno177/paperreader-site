---
title: Workflows
description: Step-by-step guides for the main PaperReader tasks.
---

PaperReader is designed around explicit local actions. This page describes the normal path through the
current host UI and calls out the places where a provider, file, or network can make a step unavailable.

Status: implemented workflow guide for the current pre-1.0 host branch.

Each guide states the prerequisite before the numbered actions. The final paragraph defines the result
and the safe fallback when the normal path cannot finish.

## Find and save a paper

Before you start: install and enable at least one source that supports the query. Free-text discovery
and exact DOI, arXiv, PMID, or PMCID lookup can route to different providers.

1. Open `Search` from the root navigation.
2. Enter a title, phrase, DOI, arXiv identifier, PMID, or PMCID.
3. Submit the query. Provider cards can finish independently, so one unavailable source does not hide
   results from another source.
4. Use `All sources` or `Has results` to narrow the visible provider state when needed.
5. Open a result card and check the title, authors, identifiers, abstract, and provider labels.
6. Choose `Save`. Opening the preview alone does not write the paper to Library.
7. Choose `Open` when offered, or return to `Library` and open the new card.

For a query with no provider result, use `Search Google` only when the recovery action is shown.
Select an arXiv result that points to an `/abs/`, `/html/`, or `/pdf/` page. PaperReader extracts the
exact identifier and version, then asks the installed arXiv source for authoritative metadata. Google
may be unable to load or may require an interactive anti-abuse challenge. A Google snippet is never
saved as paper metadata.

Result: `Save` creates or updates the exact local work and preserves each provider record as provenance.
If every provider fails, leave the query in recent searches and retry the typed failure instead of
creating a paper from incomplete text.

## Organize a saved paper

Before you start: the paper must already be in Library. Collections and reading status organize a
saved record; they do not establish its identity.

1. Open `Library` and select the paper.
2. In Paper Detail, open `More actions`.
3. Choose `Manage collections` and select existing collections, or create one from `More > Collections`.
4. Change `Reading status` to unread, reading, or finished as the paper moves through your workflow.
5. Use the local Library search, collection filter, status filter, or sort control to find it again.

Deleting a collection does not delete its papers. Removing a paper is a separate explicit action in Paper
Detail.

Result: the Library filters and Paper Detail reflect the new collection or status while the paper's
identifiers, provider versions, and local files remain unchanged.

## Read a paper offline

Before you start: save the paper and open a manifestation with verified readable HTML. A successful
export alone does not guarantee that an app-private offline artifact was retained.

1. Open a saved paper in Paper Detail.
2. Check `Versions & files` for a supported mobile version or a local PDF.
3. Choose the mobile read action when a verified HTML manifestation is available. PaperReader resolves
   the exact version, sanitizes it, stores its hash and provenance, and opens a network-blocked reader.
4. Use `Paper contents`, `Search this paper`, Reading layout, or citation links while reading.
5. To annotate, select text inside one paragraph, heading, list item, caption, or table cell, then choose
   `Highlight selection`. Add an optional note and save it.
6. Reopen the same saved paper from Library. A retained verified artifact can open without a network.

If mobile HTML is missing, unversioned, rate-limited, too large, invalid, or not cached, the reader
explains the reason and keeps `Open original PDF` available when a PDF exists. The app does not silently
pretend that an unsupported conversion is complete.

Result: reopening the same paper uses the verified artifact only when its manifestation, revision,
sanitizer version, source URL, and hash still match. Otherwise the reader reports the missing or invalid
state and offers an available recovery action.

## Use the original PDF

Before you start: Paper Detail must expose a safe PDF source, or the paper must have an imported local
PDF.

1. From Paper Detail, request `Download PDF` for a manifestation with a safe PDF source.
2. Watch the task in `Updates`. A download can be queued, running, complete, failed, cancelled, or
   retried.
3. When the local copy is ready, choose the PDF read action.
4. Search the PDF, jump to a validated page, zoom, and use page bookmarks.
5. Use `Open in another app` only when an installed external PDF handler is available.

PDF downloads are bounded and validated. A missing, forbidden, invalid, too-large, or unavailable source
gets a specific failure message rather than a broken local file.

Result: the exact downloaded file opens in the PDF reader with page progress and bookmarks. PDF text
highlights remain unavailable because the current renderer has no stable selection source map.

## Import a local PDF

Before you start: keep the source file accessible to Android's document picker through the end of the
review and copy steps.

1. Open `More > Reading & imports`.
2. Choose `Choose PDF` and select a local document through the Android picker.
3. Review the file name, size, detected title, and page count.
4. Enter or correct the paper title if required.
5. Choose `Import PDF` and wait for the validated copy to finish.
6. Choose `Open imported paper`, or find it in Library later.

The selected file is copied into app-private staging before the library entry is committed. Invalid,
unreadable, too-large, or no-longer-available files leave the existing Library unchanged.

Result: a validated copy is stored in app-private space and the imported paper appears in Library. The
import creates an original-document path; it does not claim that mobile reflow HTML exists.

## Save and refresh a search

Before you start: submit a search and let its provider states settle. Background checks also require an
enabled network and optional Android notification permission for alerts.

1. Run a Search query and choose `Save search` after the provider results are visible.
2. Open `Updates` to find the saved-search entry.
3. Choose `Refresh` for a manual check. Existing results remain when the new check fails.
4. Open a new hit, save it to Library, or mark a hit read.
5. To automate checks, open `More > Background updates` and enable saved-search refresh. Grant Android
   notification access if you want notifications.

Automatic refresh is opt-in, checks daily when online, runs sequentially across saved searches, and
notifies only for newly unread results.

Result: a successful refresh updates the saved provider snapshot and marks only new unread hits for
attention. A failed refresh keeps the last useful snapshot.

## Back up and restore metadata

Before you start: choose a user-controlled location for the backup file. Keep PDFs and other original
documents separately because the metadata archive does not contain their bytes.

1. Open `More > Backup`.
2. Choose `Create metadata backup` and save the exported file to a user-selected location.
3. Remember that the backup contains metadata, saved searches, and related local records, not PDFs,
   downloads, caches, extension APKs, credentials, or filesystem paths.
4. To restore, choose `Restore from backup` and select a backup file.
5. Review the validation and counts in the preview dialog.
6. Confirm only after checking the merge summary.

Restore is preview-first and validated. Papers that cannot be safely matched are skipped and reported;
the operation does not overwrite the original PDF or cache pool.

Result: confirmed records merge into the local database, while unsafe matches are skipped and reported.
The preview is the decision point; cancelling it leaves the current Library unchanged.

## Install or manage a source

Before you start: use the pinned official store or a user store whose public-key fingerprint you have
verified through an independent channel.

1. Open `More > Sources`.
2. Refresh or preview a signed store when a store is available.
3. Inspect the package, version, roles, release information, and signer fingerprint.
4. Confirm the store action, then confirm the Android PackageInstaller prompt.
5. Return to Sources and inspect the installed, updated, disabled, orphaned, or untrusted state.
6. Disable a provider when it should not participate in discovery. Existing provenance remains visible.

The host verifies package identity, version, size, hash, signer, exported service, and contract before
binding. A package broadcast or a store listing does not bypass verification. User stores also require
their signed store identity and public-key trust to be checked before a release is considered.

Result: a verified package becomes available through the bounded extension contract after Android user
confirmation. `Untrusted`, `orphaned`, failed, and cancelled states remain visible for review and are not
silently activated or removed.
