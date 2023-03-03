import { IMoviesRequest, IMoviesResult } from "../../interfaces";
import { AppDataSource } from '../../data-source'
import { Movie } from "../../entities";
import { Repository } from "typeorm";
import { moviesResultSchemas } from "../../schemas";


const createMovieService = async (payload: IMoviesRequest): Promise<IMoviesResult> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = movieRepository.create(payload)

    await movieRepository.save(movie)

    const newMovie = moviesResultSchemas.parse(movie)

    return newMovie
}

export default createMovieService