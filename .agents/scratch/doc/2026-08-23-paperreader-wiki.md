# Documentation Report: PaperReader wiki surface

**Date:** 2026-08-23
**Project Type:** CODING + INFORMATIONAL

## Coverage

The target is a public product wiki backed by an Android source repository, so API doc coverage is not
the useful metric for this change. The knowledge-surface ledger below accounts for all 10 planned chunks:
9 were read directly and 1 was skimmed because the authoritative contract already covered its claims.
Provider implementations and live network behavior are outside the host repository and remain disclosed
gaps.

| Chunk | Status | Evidence read |
| --- | --- | --- |
| Site routes, sidebar, and build | Read | `astro.config.mjs`, `src/content.config.ts`, `package.json`, `README.md` |
| Existing landing and docs | Read | `src/pages/index.astro`, `src/content/docs/docs/*.md`, `src/styles/*.css` |
| Product behavior and identity | Read | `paperreader/docs/SPEC.md` |
| Host boundaries and reader trust | Read | `paperreader/docs/ARCHITECTURE.md` |
| Extension contract and signed stores | Read | `paperreader/docs/EXTENSIONS.md` |
| Verification and release gates | Read | `paperreader/docs/TESTING.md` |
| Visible UI vocabulary | Read | `paperreader/app/src/main/res/values/strings.xml` |
| Discovery and reader implementation seams | Skimmed | Relevant `logic` and `app` screen/controller files; claims remain tied to the source-of-truth docs |
| Screenshot evidence and decision ledger | Read | `showcase-inventory/README.md`, selected files under `public/showcase/` |
| Starlight authoring and sidebar model | Read | Official Starlight project-structure, sidebar, and frontmatter guidance |

## Generated

- Added wiki entry points: `getting-started.md`, `concepts.md`, `discovery.md`, `reading.md`,
  `organizing.md`, `sources-and-extensions.md`, `troubleshooting.md`, and `reference.md`.
- Reworked `index.md` into a question-led wiki index with grouped links.
- Reorganized the Starlight sidebar into Start here, User guide, Reference, and Contributors.
- Added a consistent wiki-card index and constrained long prose to a readable measure.
- Updated `development.md` and the site README with the new content map.
- Removed the misleading secondary hero phone and aligned hero/caption geometry.

## Conceptual surprise preserved

The documentation makes explicit that a work, a manifestation, and a local artifact are different
objects. It also explains that an exported readable HTML file can exist without being the verified
app-private artifact used by `Read`, and that a backup restore can preserve dormant exact-document
anchors when the matching provider or file is absent.

## Validation

- `bash /mnt/c/Users/ImBot177/.agents/skills/doc/scripts/validate.sh`: 14 passed, 0 failed.
- `pnpm build`: 17 static pages built successfully.
- Chrome DevTools MCP review: no horizontal overflow or console errors at 375, 390, 768, 1024, and
  1440px on the landing page; docs homepage checked at 390 and 1440px.
- The desktop hidden Starlight right-sidebar diagnostic remains off-canvas by design, but the measured
  document `scrollWidth` equals the viewport width.

## Remaining gaps

- Live provider results, provider APK releases, and release-device behavior must stay conditional because
  their implementations and network state live outside this site repository.
- The docs should be refreshed when visible Android labels or the host source-of-truth contract changes.
