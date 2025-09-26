// @ts-check
import vercel from '@astrojs/vercel';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import compressor from 'astro-compressor';
import { defineConfig } from 'astro/config';
import devtoolTwBreaks from "./devtool-tw-breaks/integration";

// https://astro.build/config
export default defineConfig({
  integrations: [
    devtoolTwBreaks,
    playformCompress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    compressor({
      brotli: true,
      gzip: true
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
});