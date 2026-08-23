---
title: Architecture
description: Module ownership, extension isolation, reader safety, and verification boundaries.
---

PaperReader separates the Android UI, product logic, persistence, and extension IPC. The dependency
direction is enforced by Gradle and `LogicBoundaryTest`.

Status: implemented architecture for the current host. Production TeX conversion, broad PDF reflow,
OCR, and hosted sync remain deferred.

```text
PaperReader host repository                 External extension packages

:app  --->  :logic  --->  :extension-api  <---  source APKs
                    ^                    <---  theme APKs
                    |
               bounded AIDL IPC
```

## Module ownership

| Module | Owns | Must not own |
| --- | --- | --- |
| `:app` | Compose screens, adaptive navigation, lifecycle, accessibility, themes, icons, installer UI, and WorkManager entry points | Room DAOs, provider HTTP clients, parsers, identity merging, or extraction internals |
| `:logic` | Domain models, exact identity, Room, repositories, provider routing, reader artifacts, tasks, backup, and signed-store verification | Compose, Activities, navigation, or visual resources |
| `:extension-api` | Versioned AIDL, descriptors, requests, neutral records, bounded results, and error codes | Host storage, UI, trust policy, networking, or provider implementations |
| Source APK | One upstream API, parser, rate policy, fixtures, and provider tests | Host database, host files, host UI, or another provider |
| Theme APK | Declarative palettes, typography, shapes, decorations, and complete semantic icons | Executable UI code or access to host data |

Dependency direction never reverses. The app talks to one application-scoped `PaperReaderLogic`
facade. Logic does not know which Compose screen requested an operation, and extensions never receive
the host database or private-storage root.

## Request path

A normal search crosses the boundary in this order:

1. `:app` converts user input into a command and renders immutable presentation state.
2. `:logic` classifies the query, selects enabled providers, applies rate and cancellation policy, and
   keeps each provider outcome separate.
3. `:extension-api` carries bounded requests to separately installed source packages.
4. Each source calls its own upstream API and returns neutral records with provenance.
5. `:logic` clusters only exact canonical aliases, ranks deterministically, and commits only explicit
   save actions to Room.
6. `:app` displays successful results beside any typed provider failure.

This ordering is why one provider can fail without erasing another provider's results. It also keeps a
preview read-only until the user chooses `Save`.

## Data and persistence boundary

`PaperWork`, `PaperManifestation`, provider observations, and local artifacts remain separate. An
automatic merge requires an exact canonical DOI, arXiv ID, PMID, or PMCID alias. A similar title is a
review candidate, not identity proof.

Room is the local source of truth. Multi-table writes and identity merges are transactional.
WorkManager executes persisted tasks; it is not a second queue database. Cancellation wins a race with
late completion, so an old provider or download result cannot commit after the operation has been
cancelled.

An annotation belongs to one exact sanitized document hash and stable source/text anchor. The host does
not silently move it across revisions, sanitizer versions, renderers, or files.

## Reader boundary

Readable content follows an explicit order:

1. verified provider full text, including exact-version arXiv HTML;
2. future isolated TeX conversion;
3. future versioned PDF extraction;
4. the immutable original PDF fallback.

Remote HTML is bounded by host, byte, time, and redirect rules before logic sanitizes it. The stored
artifact includes the manifestation, version, source URL, sanitizer version, and SHA-256. A non-exported,
network-blocked WebView renders that verified private artifact under a deny-by-default content policy.

Export writes a separate file through Android's document picker. `Read` never trusts that mutable copy.
After export, logic can retain only the matching verified artifact already in cache. It does not refetch
a source that may now point to another revision.

## Extension trust boundary

The host pins the official store identity and Ed25519 public key. User stores require explicit public-key
fingerprint confirmation. Before installation or binding, PaperReader checks the signed package name,
version, API compatibility, extension kind, byte size, SHA-256, signer certificate, exported service,
and descriptor.

```text
refresh verified store
  -> compare installed package and release
  -> user chooses Install or Update
  -> download into bounded private staging
  -> verify APK and service contract
  -> open Android PackageInstaller
  -> reconcile the exact session and package broadcasts
```

Android owns the final consent screen. A catalog entry or package broadcast does not bypass signature,
hash, or contract verification. Missing catalog entries become `orphaned`; signer or identity failures
become `untrusted`. Neither state is silently removed or activated.

## Verification

Run the local host gate from the PaperReader Android repository with JDK 21 and Android SDK 36/36.1:

```powershell
.\gradlew.bat hostUnitTest hostLint :app:assembleDebug
```

Android-runtime, Room, Binder, reader, and Compose changes also require the connected suites on the
declared emulator. Provider parser and signed-release checks run in the separate source repository.

The authoritative ownership and verification contracts remain in the
[Android architecture guide](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md),
[extension SDK](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md), and
[testing guide](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md).
