import { number, z } from 'zod';

const createMoviesSchemas = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().default(""),
    duration: z.number(),
    price: z.number()
})

const updateMoviesSchemas = z.object({
    name: z.string().min(3).max(50).optional(),
    description: z.string().min(10).optional(),
    duration: z.number().optional(),
    price: z.number().optional()
})

const moviesResultSchemas = createMoviesSchemas.extend({
    id: z.number()
})

const moveisListResult = moviesResultSchemas.array()

export {
    createMoviesSchemas,
    updateMoviesSchemas,
    moviesResultSchemas,
    moveisListResult
}