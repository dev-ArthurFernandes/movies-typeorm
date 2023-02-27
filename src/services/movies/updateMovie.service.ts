import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities";
import { IMoviesResult, IMoviesUpdateRequest } from "../../interfaces";
import { moviesResultSchemas } from "../../schemas";


const updateMovieService = async (payload: IMoviesUpdateRequest, id: number): Promise<IMoviesResult> => {

    const moviesRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const movideData = await moviesRepository.findOneBy({
        id: id
    })

    const updateMovie = moviesRepository.create({
        ...movideData,
        ...payload
    })

    await moviesRepository.save(updateMovie)

    const movies = moviesResultSchemas.parse(updateMovie)

    return movies
}

export default updateMovieService