import {body} from 'express-validator'

export const userRules = ()=>{
    return [
        body("nombre").trim().not().isEmpty().withMessage('Campo requerido').isLength({min: 3, max:150}).withMessage('Rango incorrecto'),
        body("apellidos").trim().not().isEmpty().withMessage('Campo requerido').isLength({min: 3, max:150}).withMessage('Rango incorrecto'),
        body("email").trim().not().isEmpty().withMessage('Campo requerido').isLength({min: 3, max:150}).withMessage('Rango incorrecto'),
        body("username").trim().not().isEmpty().withMessage('Campo requerido').isLength({min: 3, max:150}).withMessage('Rango incorrecto'),
        body("password").trim().not().isEmpty().withMessage('Campo requerido').isLength({min: 3, max:150}).withMessage('Rango incorrecto'),
    ]
};