[![Deploy to GitHub Pages](https://github.com/ImAno177/paperreader-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/ImAno177/paperreader-site/actions/workflows/deploy.yml)

# PaperReader site

The public landing page and task-oriented documentation for PaperReader.

Status: static Astro site. The Android repository remains the source of truth for product behavior.

Live site: [imano177.github.io/paperreader-site](https://imano177.github.io/paperreader-site/)

## Table of contents

- [About the project](#about-the-project)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Site map](#site-map)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Publishing](#publishing)
- [Repository layout](#repository-layout)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About the project

This repository is the public-facing companion to the [PaperReader Android app](https://github.com/ImAno177/PaperReader).
It brings the product landing page, user task guides, contributor references, and reviewed Android
screen captures into one static site.

The documentation explains how the current app behaves. It does not replace the Android product
specification, architecture guide, extension contract, or testing guide.

## Built with

| Area | Technology |
| --- | --- |
| Site | Astro 7 and Starlight |
| Motion | GSAP, with reduced-motion handling |
| Runtime | Node.js 22 or newer |
| Package manager | pnpm 10 with a frozen lockfile in CI |
| Deployment | Static output on GitHub Pages |

## Getting started

### Prerequisites

- Node.js 22 or newer
- pnpm 10 or a compatible pnpm release

### Install and run locally

From the repository root:

```powershell
pnpm install
pnpm dev
```

Astro prints the local URL. Use it to review the landing page and the `/docs/` routes.

### Build the static site

```powershell
pnpm build
pnpm preview
```

`pnpm build` validates the content collection, renders the landing page and documentation, and writes
the deployable site to `dist/`. The GitHub Pages workflow runs the same build with the repository base
path `/paperreader-site`.

## Usage

Use the local site to review copy, links, screenshots, responsive layouts, theme switching, and
documentation changes before publishing. For product changes, verify every claim against the
[PaperReader product specification](https://github.com/ImAno177/PaperReader/blob/main/docs/SPEC.md).

The capture inventory in [`showcase-inventory/`](showcase-inventory/) records which reviewed images are
used on the landing page, used in documentation, or held back. A screenshot proves only the visible
state. Network success, offline retention, file integrity, and completed installation flows need
implementation or test evidence in the Android repository.

## Site map

- `/` contains the product landing page and selected screen showcase.
- `/docs/` contains getting started, concepts, discovery, reading, organizing, troubleshooting,
  screen notes, workflows, architecture, motion, and local-development guides. The screen guide also
  records the latest local emulator audit.
- [`public/showcase/`](public/showcase/) contains the selected Android screen captures.
- [`showcase-inventory/`](showcase-inventory/) contains the review ledger for those captures.

## Roadmap

- Keep landing-page copy aligned with the shipped Android app.
- Update task guides when a product flow or trust boundary changes.
- Recapture paired Light and Dark screens when the visible UI changes.
- Keep the site usable at narrow widths, with keyboard focus and reduced-motion support.

## Contributing

Use a real product capture for every showcase image. Keep alt text and captions specific to the
visible destination, theme, paper, and loading or error state when relevant. The
`emulator-*.png` set is from the API 36 `emulator-5554` smoke run on 2026-09-07; it is intentionally
documented as runtime evidence rather than a theme-paired landing capture. Do not turn a placeholder
or a mock into a product claim.

Keep Light and Dark capture pairs synchronized with the theme mapping in
`src/pages/index.astro` and the switcher in `src/scripts/theme-switcher.js`. Keep internal capture
paths, device identifiers, and review notes out of public copy.

For a documentation edit, extend the nearest existing page before adding a route. Keep the Android
repository's canonical contract in the linked source documents and run the local publishing checks
before opening a pull request.

## Publishing

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds static output and
publishes it through GitHub Pages after a push to `main` or a manual dispatch. A new Pages setup must
use **GitHub Actions** as its Pages source.

Before publishing, run `pnpm build`, inspect the landing page and representative documentation routes
with `pnpm preview`, check Light and Dark mode at desktop and narrow widths, and follow every changed
relative link and image path under `/paperreader-site/`.

## Repository layout

```text
src/pages/index.astro       Landing page
src/content/docs/docs/      Starlight documentation
src/layouts/                Landing-page document shell
src/styles/                 Landing and documentation styles
src/scripts/                Theme and motion helpers
public/showcase/            Selected Android captures
public/showcase/emulator-*.png  Latest local emulator audit captures
showcase-inventory/         Reviewed capture inventory
```

## License

This repository currently has no standalone `LICENSE` file. Review the [main project's Apache License
2.0](https://github.com/ImAno177/PaperReader/blob/main/LICENSE) and the repository's content
attributions before reusing code, documentation, or screen captures.

## Contact

Use the [paperreader-site issue tracker](https://github.com/ImAno177/paperreader-site/issues) for site
bugs, documentation corrections, and capture-review questions.

## Acknowledgments

- The site uses [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).
- The README structure follows the [Best-README-Template](https://github.com/othneildrew/Best-README-Template).
