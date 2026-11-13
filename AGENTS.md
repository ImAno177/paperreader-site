# PaperReader site agent instructions

Shared PaperReader rules are in the host [AGENTS.md](https://github.com/ImAno177/PaperReader/blob/main/AGENTS.md).
This file lists only rules specific to this Astro site.

## Build and dependencies

- Use pnpm 10 and Node.js 22 or newer, as CI does.
- Install with `pnpm install --frozen-lockfile`. Keep `pnpm-lock.yaml` in sync with `package.json`.
- Dependency overrides live in `pnpm-workspace.yaml`, not in `package.json`.
- Before opening a pull request, `BASE_PATH=/paperreader-site pnpm build` must pass. In PowerShell,
  set `$env:BASE_PATH = '/paperreader-site'` first.

## Screenshots

- Every showcase image must be a real capture from the Android app. Do not use mockups or placeholders.
- Keep Light and Dark captures in pairs for landing-page destinations. Keep them synchronized with
  `src/pages/index.astro` and `src/scripts/theme-switcher.js`. The `emulator-*.png` runtime audit set
  is exempt and is documented as single-state evidence.
- Record capture decisions in `showcase-inventory/README.md`. Keep capture paths, device identifiers,
  and review notes out of public copy.

## Content

- Verify product claims against the PaperReader product specification. The Android repository is the
  source of truth.
- Extend the nearest existing docs page before adding a route.
- Links and image paths must work under `/paperreader-site/`. Check changed links with `pnpm preview`.
- Never commit `.agents/scratch/`. It is gitignored.
