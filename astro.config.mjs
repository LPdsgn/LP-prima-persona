import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
//import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://lpdsgn.it',
  trailingSlash: 'ignore',
  prefetch: {
    defaultStrategy: 'viewport'
  },
  integrations: [tailwind(), alpinejs(),react()],
  devToolbar: {
    enabled: true
  }
});