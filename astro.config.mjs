// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// Sin esto, las URLs del sitemap y los <link rel="canonical"> salen mal (relativas o vacías).
const SITE_URL = "https://edenva.mx";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es", en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
