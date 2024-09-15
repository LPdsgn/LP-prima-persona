import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
//import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';
// import partytown from "@astrojs/partytown";

// Dev Toolbar extensions
import metaTags from "astro-meta-tags";
import pageInsight from "astro-page-insight";
import vtbot from "astro-vtbot";
import tailwindConfigViewer from "astro-tailwind-config-viewer";

// https://astro.build/config
export default defineConfig({
  site: 'https://lpdsgn.it',
  trailingSlash: 'ignore',

  prefetch: {
    defaultStrategy: 'viewport'
  },

  integrations: [tailwind({
    applyBaseStyles: false,
  }), alpinejs(), react(), metaTags(), pageInsight(), vtbot(), tailwindConfigViewer(), partytown()],

  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

});