# Showcase inventory

This folder is a review ledger for the Android screen captures collected for the website. The labels
describe the visible state, not a concept render.

## Decision key

- **Landing**: selected for the short public showcase.
- **Docs**: useful evidence for product or troubleshooting documentation.
- **Hold**: a transient loading or incomplete state; keep it available for later review.

## Reviewed captures

| File | Visible state | Decision |
| --- | --- | --- |
| `01-library-dark.png` | Library with saved papers, dark theme | Landing |
| `02-search-dark.png` | Search with recent searches, dark theme | Landing |
| `03-updates-dark.png` | Empty Updates destination, dark theme | Docs |
| `04-history-dark.png` | History destination, dark theme | Docs |
| `05-more-dark.png` | More destination, dark theme | Docs |
| `06-appearance-dark.png` | Appearance settings, dark theme | Docs |
| `07-sources-dark.png` | Sources with unavailable provider states | Landing |
| `08-backup-dark.png` | Backup destination, dark theme | Docs |
| `09-import-pdf-dark.png` | Import PDF destination, dark theme | Docs |
| `10-collections-dark.png` | Collections destination, dark theme | Docs |
| `11-about-dark.png` | About destination, dark theme | Docs |
| `12-detail-arxiv-attention-dark.png` | arXiv detail for *Attention Is All You Need* | Landing |
| `13-reader-attention-mobile-dark.png` | Reader while the mobile paper is loading | Hold |
| `14-reader-attention-html-mobile-dark-top.png` | Mobile reader at the start of the cached paper | Landing |
| `15-library-light.png` | Library with saved papers, light theme | Landing |
| `16-library-empty-dark-error-state.png` | Empty Library with recovery action, dark theme | Docs |
| `17-library-dark-restored.png` | Library after returning to the seeded state, dark theme | Hold |
| `17-library-light.png` | Library loading state, light theme | Hold |

The landing page uses only the selected files copied into `public/showcase/`. The original inventory
files stay here so a later review can compare decisions without replacing a capture with a mockup.
