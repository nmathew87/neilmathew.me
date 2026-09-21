import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1).max(180),
    description: z.string().min(1).max(200),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
  }),
});
export const collections = { posts };
