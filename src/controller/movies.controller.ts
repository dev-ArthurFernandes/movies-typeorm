import { Request, Response  } from "express";
import { IMoviesRequest, IMoviesResult, IMoviesUpdateRequest } from "../interfaces";
import { createMovieService, deleteMovieService, listMoviesService, updateMovieService } from "../services";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movieData: IMoviesRequest = req.body

    const newMovie: IMoviesResult = await createMovieService(movieData)

    return res.status(201).json(newMovie)
}

const listMoviesController =async (req: Request, res: Response): Promise<Response> => {

    const movies = await listMoviesService(req.query)

    return res.status(200).json(movies)
}

const updateMovieController =async (req: Request, res: Response): Promise<Response> => {
    
    const movieData: IMoviesUpdateRequest = req.body

    const id: number = parseInt(req.params.id)

    const updatedMovie: IMoviesResult = await updateMovieService(movieData, id)

    return res.status(200).json(updatedMovie)
}

const deleteMovieController =async (req: Request, res: Response): Promise<Response> => {
    
    const id: number = parseInt(req.params.id)

    await deleteMovieService(id)

    return res.status(204).send()
}

export {
    createMovieController,
    listMoviesController,
    updateMovieController,
    deleteMovieController
}