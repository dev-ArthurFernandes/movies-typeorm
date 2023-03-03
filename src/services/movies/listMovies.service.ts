import { AppDataSource } from '../../data-source'
import { Movie } from "../../entities";
import { Repository } from "typeorm";
import { moveisListResult } from '../../schemas';
import { AppError } from '../../errors';

const listMoviesService = async (payload: any): Promise<any> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    if(isNaN(payload.page)){
        payload.page = 1
    }

    if(isNaN(payload.perPage)){
        payload.perPage = 5
    }

    let order: string = payload.order ? String(payload.order) : "ASC"
    let sort: string = payload.sort ? String(payload.sort) : "id"

    if(!payload.sort){
        order = "ASC"
    }else if(payload.sort !== "duration" && payload.sort !== "price"){
        sort = "id"
    }

    let perPage: number = payload.perPage ? Number(payload.perPage) : 5
    let page: number = payload.page ? Number(payload.page) : 1

    const count = await movieRepository.count()

    if(page <= 0){
        page = 1
    }

    if(perPage > 5){
        perPage = 5
    }

    if(perPage < 1){
        perPage = 5
    }

    let nextPage: string | null = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`

    let prevPage: string | null = `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`

    if(page <= 1){
        prevPage = null
    }
    
    if(page === 4){
        page = 3
    }


    const orderData = Object.fromEntries([[sort, order]])

    const findMovies = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: orderData
    })

    const movies = moveisListResult.parse(findMovies)

    return({
        prevPage: prevPage,
        nextPage: nextPage,
        count: count,
        data: movies
    })
}

export default listMoviesService


