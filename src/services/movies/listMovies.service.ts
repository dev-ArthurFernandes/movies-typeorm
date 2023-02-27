import { AppDataSource } from '../../data-source'
import { Movies } from "../../entities";
import { Repository } from "typeorm";
import { MoviesArray } from '../../interfaces';
import { moveisListResult } from '../../schemas';

const listMoviesService = async (payload: any): Promise<MoviesArray> => {

    const movieRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const order: string = payload.order ? String(payload.order) : "ASC"
    const sort: string = payload.sort ? String(payload.sort) : "id"

    const perPage: number = payload.perPage ? Number(payload.perPage) : 5
    const page: number = payload.page ? Number(payload.page) : 1

    const orderData = Object.fromEntries([[sort, order]])

    const findMovies = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: orderData
    })

    const movies = moveisListResult.parse(findMovies)

    return movies
}

export default listMoviesService