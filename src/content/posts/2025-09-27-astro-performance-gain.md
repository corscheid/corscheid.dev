---
title: "Switching to Astro for a Solid Performance Gain"
slug: "astro-performance-gain"
date: "2025-09-27T18:57:15.914Z"
description: "My experience and findings upon a scratch rewrite of this previously Next.js website in Astro"
tags: ["astro", "next.js"]
image:
  src: "/images/astro.svg"
  alt: "Astro"
published: false
---

## Next.js

[Next.js](https://nextjs.org) is a React metaframework for building full stack web apps. It has been a framework I have enjoyed using for writing quick sites with React components for a while. When I first started using it, the Pages router with getStaticProps and getServerSideProps functions was the typical setup. Then came React Server Components, which changed the game. If your whole site is React components, Next.js makes a lot of sesnse.

### Output

Next.js/React output

- 1x HTML page (28.97kB, 7.83kB transferred)
- 3x CSS files (13.6kB, 6.88kB transferred)
- 9x JavaScript files (356.58kB, 126.37kB transferred)
  - includes `react` and `react-dom`
- 2x images (17.18kB, 16.98kB transferred)

Total: 416.33kB, 158.06 transferred

Looking at the output, even with the App Router and React Server Components (RSCs), there are these huge data blobs in script tags on the page. The reason for this basically is Hydration. There are plenty of resources on the web about Hydration. See the React and Next.js sites for more about this.

### Performance

Next/React performance is quite good. I got solid Lighthouse scores with the Next.js App Router. During the Pages Router and getStaticProps/getServerSideProps era, the first visit of each page took a second and then all subsequent visits were fast. With App Router this was not nearly as noticeable. All in all the site is lightweight and fast.

## Astro.js

[Astro](https://astro.build) is a server-first web framework that ships zero JavaScript by default, operating as a Static Site Generator unless a server adapter is installed for on-demand server-side rendering of pages. The idea is to generate a site using TypeScript and Astro components with JSX-like templates. Less JavaScript means less work for the browser and a *much* faster site. Small scripts can be bundled and shipped if necessary. Not only that, libraries and frameworks like React, Preact, Svelte, Vue, Angular, Solid, etc. are supported.

### Output

Astro output

- 1x HTML page (64.88kB, 20.39kB transferred)
- 1x Tailwind CSS file (11.78kB, 3.72kB transferred)
- 0 JavaScript (!)
- 2x images (5.15kB, 5.56kB transferred)

Total: 81.81kB, 26.67kB transferred

Note: This is approximately an 80% reduction in total content shipped! And 100% Reduction in JavaScript!

### Performance

Astro performance

## Final Thoughts

Both quite fast, but Astro gives less bloat.
