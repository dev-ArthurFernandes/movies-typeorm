import { Request, Response, NextFunction } from 'express';
import { ZodTypeAny } from 'zod';


const ensureEntreisValues = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): Response | void => {
    
    const validation = schema.parse(req.body)

    req.body = validation
    
    console.log(req.body)

    return next()
}

export default ensureEntreisValues
