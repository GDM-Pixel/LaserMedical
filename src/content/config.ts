//@ts-ignore
import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
   schema: z.object({
    author: z.string(),
    category: z.string(), 
    date: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string()
   })
});

const tarifsCollection = defineCollection({
   schema: z.object({
    name: z.string(),
    category: z.string(),
    genre: z.string(),
    image: z.string()
   })
});

export const collections = {
    'articles': articlesCollection,
    'tarifs': tarifsCollection,
};