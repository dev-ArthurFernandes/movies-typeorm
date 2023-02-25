import { IMoviesRequest, IMoviesResult, MoviesArray } from "../../interfaces";
import { AppDataSource } from '../../data-source'
import { Movies } from "../../entities";
import { Repository } from "typeorm";
import { moviesResultSchemas } from "../../schemas";

const listMoviesService = async (payload: IMoviesRequest): Promise<any> => {

    const movieRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const movies = movieRepository.find()

    return movies
} 

export default listMoviesService