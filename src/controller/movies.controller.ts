import { Request, Response  } from "express";
import { IMoviesRequest, IMoviesResult } from "../interfaces";
import { createMovieService } from "../services";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movieData: IMoviesRequest = req.body

    const newMovie: IMoviesResult = await createMovieService(movieData)

    return res.status(201).json(newMovie)
}

export default createMovieController