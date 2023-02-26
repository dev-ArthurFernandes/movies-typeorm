import { Request, Response  } from "express";
import { IMoviesRequest, IMoviesResult } from "../interfaces";
import { createMovieService, listMoviesService } from "../services";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movieData: IMoviesRequest = req.body

    const newMovie: IMoviesResult = await createMovieService(movieData)

    return res.status(201).json(newMovie)
}

const listMoviesController =async (req:Request, res: Response): Promise<Response> => {
    
    const movies = await listMoviesService()

    return res.status(200).json(movies)
}

export {
    createMovieController,
    listMoviesController
}