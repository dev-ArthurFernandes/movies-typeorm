import { Router } from "express";
import { 
    createMovieController,
    listMoviesController
 } from "../controller";
import { ensureEntreisValues, validateMovieName } from "../middleware";
import { createMoviesSchemas, updateMoviesSchemas } from "../schemas";

const moviesRoutes: Router = Router()

moviesRoutes.post('', ensureEntreisValues(createMoviesSchemas), validateMovieName, createMovieController)

moviesRoutes.get('', listMoviesController)

export default moviesRoutes