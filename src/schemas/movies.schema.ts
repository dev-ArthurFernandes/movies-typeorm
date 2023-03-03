import { z } from 'zod';

const createMoviesSchemas = z.object({
    duration: z.number().positive(),
    name: z.string().min(3).max(50),
    price: z.number().int(),
    description: z.string().min(10).nullable().optional()
})

const updateMoviesSchemas = z.object({
    name: z.string().min(3).max(50).optional(),
    description: z.string().min(10).optional(),
    duration: z.number().positive().optional(),
    price: z.number().int().optional()
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