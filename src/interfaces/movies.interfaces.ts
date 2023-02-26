import { createMoviesSchemas, moviesResultSchemas,moveisListResult, updateMoviesSchemas } from '../schemas';
import { z } from 'zod'

type IMoviesRequest = z.infer<typeof createMoviesSchemas>
type IMoviesUpdateRequest = z.infer<typeof updateMoviesSchemas>
type IMoviesResult = z.infer<typeof moviesResultSchemas>
type MoviesArray = z.infer<typeof moveisListResult>

export {
    IMoviesRequest,
    IMoviesResult,
    MoviesArray,
    IMoviesUpdateRequest
}