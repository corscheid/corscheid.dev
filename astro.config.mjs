// @ts-check
import playformCompress from '@playform/compress';
import { defineConfig } from 'astro/config';

import compressor from 'astro-compressor';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    playformCompress({
      // if you use tailwind or postcss, your CSS is already minified
      CSS: true,
      // astro already minifies html, but not inlined javascript, so this does have an impact of about ~12% for me.
      HTML: true,
      // images imported as assets are already optimized as webp.
      // if you have images in your /public directory, you may want to compress them with this package.
      Image: true,
      // javascript is already minified by vite; enabling this option only reduces file size by < 1%, so skip.
      JavaScript: true,
      // markup in any imported SVGs needs to be minified to remove comments etc.
      // inline SVGs are treated as HTML and minified as such.
      SVG: true,
    }),
    compressor({
      brotli: true,
      gzip: true
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});