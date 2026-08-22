# PaperReader Field Notes

Status: implemented Astro showcase with emulator-backed captures and GitHub Pages deployment configuration.

This site presents PaperReader as a local-first Android reading tool. Its visual direction combines tactile neobrutalist surfaces with the evidence rhythm of a live tracker. It does not reproduce either reference site or present invented product screens.

Live site: <https://imano177.github.io/paperreader-site/>

## Visual direction

The layout and visual language take cues from [neobrutalism.dev](https://www.neobrutalism.dev/) and [codex-resets.com](https://codex-resets.com/) as visual references only: hard edges, strong spacing, tactile surfaces, and evidence-led composition. The copy is original to PaperReader and stays grounded in the current product behavior.

## Local development

Use Node.js 22 or newer:

```powershell
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The production build uses `/paperreader-site` locally and derives the GitHub Pages base path from the repository name in CI.

## Verification

The release check is `pnpm build`. The page reserves image dimensions, lazy-loads below-fold captures, keeps native interaction fallbacks, and disables the GSAP enhancement for reduced-motion users.

## GitHub Pages

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static Astro output and publishes it through GitHub Pages. In the website repository, set **Settings → Pages → Source** to **GitHub Actions** before the first deployment.

## Showcase status

Files under [`public/showcase`](public/showcase) are captured from `covaigay_api36` on `emulator-5554` (API 36): Library, Search with recent searches, and the offline PDF reader. Keep their alt text and captions aligned with the actual screen state; do not replace them with mockups.
