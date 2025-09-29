// @ts-check
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import compressor from 'astro-compressor';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
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
});