import {NextFunction, Request, Response} from 'express'
import {validationResult} from 'express-validator'

export const Validate = (req: Request, res: Response, next: NextFunction) => {
    console.log('Init Middleware::: validator.check')

    //Se obitiene los errores a partir del request original de la 
    const errors = validationResult(req);

    //Si no existen errores la petición continua
    if (errors.isEmpty()) return next();
    //Se devuelven los errores con un estado de peticion 400
    return res.status(400).json(errors.array());

}