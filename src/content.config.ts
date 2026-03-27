import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    featuredLabel: z.string().optional(),
    order: z.number().optional(),
    summary: z.string(),
    subtitle: z.string().optional(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    github: z.string().optional(),
    youtube: z.string().optional(),
  }),
});

export const collections = { projects };
