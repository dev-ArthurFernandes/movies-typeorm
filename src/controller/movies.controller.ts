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

    const perPage: number = req.query.perPage ? Number(req.query.perPage) : 5
    const page: number = req.query.page ? Number(req.query.page) : 1

    const sort: string = req.query.sort ? String(req.query.sort) : "id"
    const order: string = req.query.order ? String(req.query.order) : "ASC"


    return res.status(200).json({
        prevPage: `localhost:3000/movies?page=${page - 1}&perPage=${perPage}&sort=${sort}&order=${order}`,
        nextPage: `localhost:3000/movies?page=${page + 1}&perPage=${perPage}&sort=${sort}&order=${order}`,
        count: perPage,
        data: movies
    })
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