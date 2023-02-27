import {Request, Response, NextFunction} from 'express';
import { ZodError } from 'zod';

class AppError extends Error {
    statusCode: number
    message: string
    constructor(message: string, statusCode: number = 400){
        super()
        this.message = message
        this.statusCode = statusCode
    }   
}

const handleError = (err: Error, req: Request, res: Response, next: NextFunction): Response => {

    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    if(err instanceof ZodError){
        return res.status(400).json(err.flatten().fieldErrors)
    }

    console.error(err)

    return res.status(500).json({
        message: "internal error server!"
    })
}

export { AppError, handleError}