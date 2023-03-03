import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { IMoviesResult, IMoviesUpdateRequest } from "../../interfaces";
import { moviesResultSchemas } from "../../schemas";


const updateMovieService = async (payload: IMoviesUpdateRequest, id: number): Promise<IMoviesResult> => {

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movideData = await moviesRepository.findOneBy({
        id: id
    })

    console.log(movideData)
    console.log(payload)

    const updateMovie = moviesRepository.create({
        ...movideData,
        ...payload
    })

    await moviesRepository.save(updateMovie)

    const movies = moviesResultSchemas.parse(updateMovie)

    return movies
}

export default updateMovieService