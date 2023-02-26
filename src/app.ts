import express, {Application, json} from 'express';
import { handleError } from './errors';
import { moviesRoutes } from './routes';


const app: Application = express()

app.use(json())
app.use('/movies', moviesRoutes)

app.use(handleError)

export default app