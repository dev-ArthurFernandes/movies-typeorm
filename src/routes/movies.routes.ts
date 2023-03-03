import { Router } from "express";
import { 
    createMovieController,
    deleteMovieController,
    listMoviesController,
    updateMovieController
 } from "../controller";
import { ensureEntreisValues, validateMovieId, validateMovieName } from "../middleware";
import { createMoviesSchemas, updateMoviesSchemas } from "../schemas";

const moviesRoutes: Router = Router()

moviesRoutes.post('', ensureEntreisValues(createMoviesSchemas), validateMovieName, createMovieController)
moviesRoutes.get('', listMoviesController)
moviesRoutes.patch('/:id', validateMovieId, validateMovieName, ensureEntreisValues(updateMoviesSchemas), updateMovieController)
moviesRoutes.delete('/:id', validateMovieId, deleteMovieController)

export default moviesRoutes