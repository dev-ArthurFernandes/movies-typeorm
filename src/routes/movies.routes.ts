import { Router } from "express";
import { createMovieController } from "../controller";
import { ensureEntreisValues } from "../middleware";
import { createMoviesSchemas, updateMoviesSchemas } from "../schemas";

const moviesRoutes: Router = Router()

moviesRoutes.post('', ensureEntreisValues(createMoviesSchemas), createMovieController)

export default moviesRoutes