import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";


const validateMovieId =async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findId = await moviesRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findId){
        throw new AppError("Movie not found", 404)
    }

    return next()
}

export default validateMovieId