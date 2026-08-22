---
title: Architecture
description: The host, logic, and extension boundaries behind PaperReader.
---

PaperReader keeps presentation, domain behavior, persistence, and extension IPC in separate modules.
The boundary is deliberately narrow so a provider can fail or update without owning the host app.

```text
:app  --->  :logic  --->  :extension-api  <---  source and theme APKs
```

## Host app

`:app` owns Compose screens, navigation, view-model state, accessibility semantics, resources, themes,
icons, and extension-install UI. Screens consume one application-scoped logic facade.

## Logic module

`:logic` owns immutable models, repository ports, Room persistence, provider policy, reader artifacts,
task state, backup, and signed-store verification. It does not import Compose or Android presentation
classes.

## Extension contract

`:extension-api` is the versioned AIDL/data contract used by the host and separately built extension
packages. Source and theme packages run under separate package identities and cross the contract through
bounded IPC.

## Trust boundary

The host verifies a signed registry and the APK metadata before it opens a PackageInstaller session.
The user confirms installation. Package broadcasts trigger a fresh scan and reconciliation; a broadcast
alone never substitutes for signature or hash verification.

The full module contract is maintained in the [PaperReader architecture guide](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md).
