# PaperReader site

PaperReader makes long scholarly papers easier to find, keep, and read on Android. This repository
contains the short product landing page, the public documentation, and the screen evidence used by
that page.

Live site: <https://imano177.github.io/paperreader-site/>

## Start here

```powershell
pnpm install
pnpm dev
```

Open the local URL printed by Astro. The site uses Node.js 22 or newer and pnpm.

The build is static:

```powershell
pnpm build
pnpm preview
```

`pnpm build` writes the deployable site to `dist/`. It is the same command used by the GitHub Pages
workflow.

## Site map

- `/` is the product landing page and screen showcase.
- `/docs/` is a wiki-style guide with a product orientation, concepts, discovery, reading, organization,
  troubleshooting, screen evidence, step-by-step workflows, architecture, motion, and local development.
- [`public/showcase`](public/showcase) holds the real Android screen captures used by the landing page.
- [`showcase-inventory`](showcase-inventory) records every reviewed capture and whether it belongs on
  the landing page, in the docs, or on hold.

## Content rules

Use a real product screen for every showcase image. Keep the alt text and caption specific to the
visible state: theme, destination, paper, and error or loading state when relevant. Do not turn a
placeholder into a product claim.

The landing page keeps a Light and Dark capture for every selected screen. When the site theme changes,
the corresponding image source, alt text, and caption state must change together.

Keep public copy focused on PaperReader. Internal capture paths, device identifiers, and review notes
belong in the inventory or commit history, not in the landing page.

## GitHub Pages

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static Astro
output and publishes it through GitHub Pages. Set the repository's Pages source to **GitHub Actions**
when enabling the workflow for a new repository.

## Repository layout

```text
src/pages/                 Landing page route
src/content/docs/          Starlight documentation
src/layouts/               Shared landing-page document shell
src/styles/                Landing and docs styling
public/showcase/           Selected product captures
showcase-inventory/        Reviewed capture inventory
```

The product source lives in the [PaperReader repository](https://github.com/ImAno177/PaperReader).
