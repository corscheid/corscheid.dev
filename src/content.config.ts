import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { getRepositories } from "./lib/github";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    published: z.boolean(),
  }),
});

const projects = defineCollection({
  loader: async () => {
    const repos = await getRepositories();
    return repos.map((repo) => ({
      id: repo.name,
      ...repo,
    }));
  },
  schema: z.object({
    id: z.string(),
    html_url: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.string(),
    image_url: z.string(),
  }),
});

export const collections = { blog, projects };
