---
title: Sources and extensions
description: The source/theme split, signed stores, trust states, and installation boundary.
sidebar:
  label: Sources and extensions
  order: 4
---

Provider implementations do not live inside the host app. PaperReader discovers separate source and
theme APKs through a signed store contract, validates them, and keeps them outside the host process.

Status: implemented host trust and extension contract. Official source APK releases are maintained in a
separate repository.

## Two extension kinds

| Kind | Supplies | Host boundary |
| --- | --- | --- |
| Source | Search, exact lookup, metadata, and paper manifestations | Separate package and UID over versioned bounded AIDL |
| Theme | Declarative palettes, typography, shapes, decorations, and semantic icons | Host-owned rendering of validated data |

Source and theme extensions are not interchangeable. Disabling a source controls discovery participation;
it does not delete saved records or their provenance. Changing a visual theme does not change provider
identity or paper content.

## What a source declares

A source descriptor identifies its stable provider ID, display name, API version, minimum request
interval, capabilities, roles, accepted exact identifier types, and supported sorts. Requests are
asynchronous, bounded, and cancellable. Responses carry neutral records and provider provenance rather
than host database objects.

Official source roles currently cover Semantic Scholar, Crossref, arXiv, and Europe PMC. The provider
model and routing policy are described in [Discovery and search](./discovery/).

## What a theme declares

A theme supplies complete light and dark semantic palettes, title/body/label font families, corner,
border, shadow, and decoration tokens, plus every required semantic icon. Icon paths use a bounded
viewport and size limit. Missing, oversized, or malformed icons reject the theme as a whole.

Themes cannot inject Compose code, layouts, JavaScript, arbitrary resources, or host file paths.

## Store and APK trust

Official and user stores are Ed25519-signed strict JSON indexes. The host pins the official store URL,
store ID, and public key. User stores require explicit public-key fingerprint confirmation.

Before an APK can bind or install, the host checks the signed package name, version code, API range,
extension kind, SHA-256, byte size, signer certificate, exported service, and contract metadata. A
catalog entry is not permission to install, and a package broadcast is not a substitute for trust
reconciliation.

## Install and update lifecycle

1. Refresh a trusted store on cold start, manual refresh, or constrained periodic work.
2. Compare installed packages with the verified catalog.
3. Show an available or update state without installing automatically.
4. After the user chooses `Install` or `Update`, download into bounded app-private staging.
5. Verify the artifact and open Android `PackageInstaller`.
6. Let Android present the final user-confirmation surface.
7. Reconcile the exact PackageInstaller session and package broadcasts.

The UI can surface available, installed, update available, pending, downloading, awaiting confirmation,
installing, cancelled, failed, untrusted, and orphaned states. An orphan is an installed package no
longer present in any trusted store; it is shown for review, not silently removed.

## Build against the extension API

Until the SDK is published to Maven, extension authors use a composite build and point the external
source/theme repository at the local `:extension-api` project. The contract currently requires Android 9
or newer and JVM target 17. The [extension SDK guide](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md)
owns the wire schema, signing fixture, and local Gradle properties.

## What never crosses the boundary

The host never gives an extension its Room database, private-storage root, arbitrary host path, global
credential, or unrestricted intent. Third-party DEX/JAR/JavaScript is not loaded into the host process.
This is why a provider can fail independently without being allowed to corrupt the Library.
