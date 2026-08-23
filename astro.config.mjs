import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL ?? 'https://imano177.github.io';
const base = process.env.BASE_PATH ?? '/paperreader-site';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [
    starlight({
      title: 'PaperReader docs',
      description: 'Product and contributor documentation for PaperReader.',
      components: { ThemeSelect: './src/components/DocsThemeSelect.astro' },
      head: [
        {
          tag: 'script',
          content:
            "(()=>{const label=()=>{document.querySelectorAll('site-search input[type=text]').forEach((input)=>{input.id='docs-search';input.name='q';input.setAttribute('aria-label','Search docs');});document.querySelectorAll('site-search button[data-open-modal]').forEach((button)=>{button.setAttribute('aria-label','Search');button.querySelectorAll('kbd').forEach((key)=>key.remove());});};new MutationObserver(label).observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('DOMContentLoaded',label);})();",
        },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: ['docs', 'docs/getting-started', 'docs/concepts'],
        },
        {
          label: 'User guide',
          items: [
            'docs/discovery',
            'docs/features',
            'docs/reading',
            'docs/organizing',
            'docs/screens',
            'docs/workflows',
          ],
        },
        {
          label: 'Reference',
          items: [
            'docs/sources-and-extensions',
            'docs/troubleshooting',
            'docs/reference',
          ],
        },
        {
          label: 'Contributors',
          items: ['docs/architecture', 'docs/development', 'docs/motion'],
        },
        {
          label: 'Project',
          items: [
            { label: 'Landing page', link: '/' },
            { label: 'PaperReader on GitHub', link: 'https://github.com/ImAno177/PaperReader' },
          ],
        },
      ],
      customCss: ['./src/styles/docs.css'],
    }),
  ],
  build: {
    format: 'directory',
  },
});
