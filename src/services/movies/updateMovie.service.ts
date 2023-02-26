import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities";
import { IMoviesRequest, IMoviesResult, IMoviesUpdateRequest } from "../../interfaces";


const updateMovieService = async (payload: any): Promise<IMoviesResult> => {

    const moviesRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    await moviesRepository.save(payload)

}