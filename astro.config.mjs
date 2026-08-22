import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://imano177.github.io';
const base = process.env.BASE_PATH ?? '/paperreader-site';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    format: 'directory',
  },
});
