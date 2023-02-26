import { NextFunction, Response, Request } from "express";
import { DEFAULT_ECDH_CURVE } from "tls";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../errors";


const validateMovieName =async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const moviesRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const findName = await moviesRepository.findOne({
        where: {
            name: req.body?.name
        }
    })

    if(findName){
        throw new AppError("Movie already exists.", 409)
    }

    return next()
}

export default validateMovieName