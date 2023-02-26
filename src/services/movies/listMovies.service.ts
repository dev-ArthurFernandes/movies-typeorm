import { AppDataSource } from '../../data-source'
import { Movies } from "../../entities";
import { Repository } from "typeorm";
import { MoviesArray } from '../../interfaces';
import { moveisListResult } from '../../schemas';

const listMoviesService = async (): Promise<MoviesArray> => {

    const movieRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const findMovies = await movieRepository.find()

    const movies = moveisListResult.parse(findMovies)

    return movies
} 

export default listMoviesService