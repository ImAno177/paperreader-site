---
title: Development
description: How to work on the Astro site and find the Android source.
---

## Website

Use Node.js 22 or newer and pnpm:

```powershell
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The site builds as static output. `BASE_PATH` is set by the GitHub Pages workflow so links and public
assets work under the repository subpath.

## Project map

```text
src/pages/index.astro       Landing page
src/content/docs/docs/      Starlight pages
src/layouts/                Landing document shell
src/styles/                 Landing and docs styles
src/scripts/                Optional GSAP enhancement
public/showcase/            Selected Android captures
showcase-inventory/         Reviewed capture ledger
```

The public docs use a wiki-like split rather than one catch-all page:

- `getting-started.md`, `concepts.md`, and `reference.md` orient readers and define vocabulary.
- `discovery.md`, `reading.md`, and `organizing.md` explain the user-facing product surfaces.
- `screens.md`, `workflows.md`, and `troubleshooting.md` provide evidence, procedures, and recovery.
- `sources-and-extensions.md`, `architecture.md`, `development.md`, and `motion.md` cover the
  contributor and trust boundaries.

The groups are declared in `astro.config.mjs` so the sidebar order remains intentional as articles are
added. Every new article should state its status, link to the source-of-truth contract, and distinguish
implemented behavior from conditional or deferred behavior.

The landing page is readable without JavaScript. GSAP is loaded as an enhancement for reveal and image
motion; the page still shows all text and images when the enhancement is unavailable or reduced motion
is requested.

## Android source

The product source is in the [PaperReader repository](https://github.com/ImAno177/PaperReader). Start
with its [`docs/SPEC.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md),
[`docs/ARCHITECTURE.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md), and
[`docs/TESTING.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md).

## Before publishing a screen

Update both theme captures, image dimensions, alt text, caption, and `showcase-inventory/README.md`
together. Keep the Light/Dark mapping in `src/pages/index.astro` and
`src/scripts/theme-switcher.js` synchronized. Run `pnpm build`, review the landing page and docs at
desktop and phone widths, and check internal links before pushing to `main`.
