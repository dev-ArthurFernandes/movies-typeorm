import { createMoviesSchemas, moviesResultSchemas,moveisListResult, updateMoviesSchemas } from '../schemas';
import { z } from 'zod'
import { DeepPartial } from 'typeorm';

type IMovie = z.infer<typeof moviesResultSchemas>
type IMoviesRequest = z.infer<typeof createMoviesSchemas>
type IMoviesUpdateRequest = DeepPartial<IMovie>
type IMoviesResult = z.infer<typeof moviesResultSchemas>
type MoviesArray = z.infer<typeof moveisListResult>

export {
    IMoviesRequest,
    IMoviesResult,
    MoviesArray,
    IMoviesUpdateRequest
}