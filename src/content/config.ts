import { defineCollection, z } from 'astro:content'
export const collections = {
  jobs: defineCollection({
    schema: z.object({
      title: z.string(),
      location: z.string(),
    }),
  }),
}
