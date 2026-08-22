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
```

The landing page is readable without JavaScript. GSAP is loaded as an enhancement for reveal and image
motion; the page still shows all text and images when the enhancement is unavailable or reduced motion
is requested.

## Android source

The product source is in the [PaperReader repository](https://github.com/ImAno177/PaperReader). Start
with its [`docs/SPEC.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md),
[`docs/ARCHITECTURE.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md), and
[`docs/TESTING.md`](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md).

## Before publishing a screen

Update the image dimensions, alt text, caption, and `showcase-inventory/README.md` together. Run
`pnpm build` and review the landing page at desktop and phone widths before pushing to `main`.
