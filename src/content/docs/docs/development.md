---
title: Development
description: How to edit, verify, and publish the Astro landing page and Starlight wiki.
---

The site is a static Astro 7 project with Starlight for documentation. GitHub Pages publishes the
output under the repository base path.

Status: implemented website workflow. Android product behavior remains owned by the PaperReader
repository, not by this site.

## Local website

Use Node.js 22 or newer and pnpm:

```powershell
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Use `pnpm dev` while editing. `pnpm build` validates the content collection, renders all Starlight
routes, and writes the deployable output to `dist/`. `BASE_PATH` is set by the GitHub Pages workflow so
links and public assets work under `/paperreader-site/`.

## Project map

```text
src/pages/index.astro       Landing page
src/content/docs/docs/      Starlight pages
src/layouts/                Landing document shell
src/styles/                 Landing and docs styles
src/scripts/                Optional GSAP enhancement
public/showcase/            Selected Android captures
```

The landing page remains readable without JavaScript. GSAP adds reveal and image motion after the core
content loads. Reduced-motion settings skip that enhancement.

## Edit a wiki page

1. Find the nearest existing page in `src/content/docs/docs/` and extend it before adding another route.
2. Keep the frontmatter title and description specific. Starlight renders the title as the page H1.
3. Verify each product claim against the Android specification, architecture, extension, or testing
   guide.
4. Use numbered steps for procedures, tables for compact mappings, and paragraphs for reasoning.
5. Label conditional and deferred behavior where a reader could mistake it for a shipped feature.
6. Add a route to `astro.config.mjs` only when a new page needs an intentional sidebar position.

Do not copy the same contract into several pages. Keep one detailed explanation and link to it from the
other guides.

## Android source

The product source is in the [PaperReader repository](https://github.com/ImAno177/PaperReader). Check
the [product specification](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md) for behavior,
the [architecture guide](https://github.com/ImAno177/PaperReader/blob/main/docs/ARCHITECTURE.md) for
ownership, the [extension SDK](https://github.com/ImAno177/PaperReader/blob/main/docs/EXTENSIONS.md) for
the wire and trust contract, and the
[testing guide](https://github.com/ImAno177/PaperReader/blob/main/docs/TESTING.md) for evidence.

When this site and the Android contract disagree, correct the site. Do not use a screenshot to override
an implementation or test boundary.

## Publish screen evidence

Update both theme captures, image dimensions, alt text, and the landing-page theme mapping together.
Keep `src/pages/index.astro` and `src/scripts/theme-switcher.js` synchronized.

An image supports only its visible state. Network success, offline retention, file integrity, and a
completed installer session also need implementation or test evidence.

## Publishing check

1. Run `pnpm build`.
2. Start `pnpm preview` and inspect the documentation home, one workflow, Screens, and Architecture.
3. Test Light and Dark mode at desktop width and at a narrow iPhone-class width.
4. Follow every changed relative link and confirm that each image resolves under the repository base.
5. Check mobile table scrolling, heading wrapping, keyboard focus, and 44 CSS pixel website targets.
6. Push the branch, wait for the Pages workflow, then verify the public URL.
