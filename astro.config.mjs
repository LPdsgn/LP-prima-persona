import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
//import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';

// Dev Toolbar extensions
import metaTags from "astro-meta-tags";
import pageInsight from "astro-page-insight";
import vtbot from "astro-vtbot";
import tailwindConfigViewer from "astro-tailwind-config-viewer";

// https://astro.build/config
export default defineConfig({
  site: 'https://lpdsgn.it',
  trailingSlash: 'ignore',

  vite: {
    plugins: [
      {
        name: 'import.meta.url-transformer',
        transform: (code, id) => {
          if (id.endsWith('.astro'))
            return code.replace(/import.meta.url/g, `"${id}"`);
        },
      },
    ],
    ssr: {
      external: ['svgo'],
    },
  },

  prefetch: {
    defaultStrategy: 'viewport'
  },

  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    metaTags(),
    pageInsight(),
    vtbot(),
    tailwindConfigViewer(),
    astroImageTools,
  ],

  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

});