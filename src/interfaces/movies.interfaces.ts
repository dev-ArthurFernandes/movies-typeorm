import { createMoviesSchemas, moviesResultSchemas } from '../schemas';
import { z } from 'zod'

type IMoviesRequest = z.infer<typeof createMoviesSchemas>
type IMoviesResult = z.infer<typeof moviesResultSchemas>


export {
    IMoviesRequest,
    IMoviesResult
}