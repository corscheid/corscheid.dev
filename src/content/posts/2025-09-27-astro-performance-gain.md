---
title: "Switching to Astro for a Solid Performance Gain"
slug: "astro"
date: "2025-09-27T18:57:15.914Z"
description: "My experience and findings upon a scratch rewrite of this previously Next.js website in Astro"
tags: ["astro"]
image:
  src: "/images/astro.svg"
  alt: "Astro"
published: false
---

## Next.js

[Next.js](https://nextjs.org) is a React metaframework for building full stack web apps. It has been a framework I have enjoyed using for writing quick sites with React components for a while. When I first started using it, the Pages router with getStaticProps and getServerSideProps functions was the typical setup. Then came React Server Components, which changed the game. If your whole site is React components, Next.js makes a lot of sesnse.

### Output

Next/React output

- 1x HTML page (28.97kB, 7.83kB transferred)
- 3x CSS files (13.6kB, 6.88kB transferred)
- 9x JavaScript files (356.58kB, 126.37kB transferred)
  - includes `react` and `react-dom`
- 2x images (17.18kB, 16.98kB transferred)

Total: 416.33kB, 158.06 transferred

### Performance

Next/React performance

## Astro.js

[Astro](https://astro.build) is a static site generation framework with superpowers and integrations. The idea is to generate a site using TypeScript JSX in server side templates. Zero JavaScript is sent to the client by default. Less JavaScript means less work for the browser and a faster site.

### Output

Astro output

- 1x HTML page (64.88kB, 20.39kB transferred)
- 1x Tailwind CSS file (11.78kB, 3.72kB transferred)
- 0 JavaScript (!)
- 2x images (5.15kB, 5.56kB transferred)

Total: 81.81kB, 26.67kB transferred

Note: This is approximately an 80% reduction in total content shipped! 100% Reduction in JavaScript!

### Performance

Astro performance
