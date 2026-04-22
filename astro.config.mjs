import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://seo-affiliate-site.vercel.app',
  integrations: [
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
