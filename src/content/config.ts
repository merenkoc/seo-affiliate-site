import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Editorial Team'),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    affiliate_disclosure: z.boolean().default(true),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      focusKeyword: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog };
