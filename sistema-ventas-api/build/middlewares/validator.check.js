"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const express_validator_1 = require("express-validator");
const Validate = (req, res, next) => {
    console.log('Init Middleware::: validator.check');
    //Se obitiene los errores a partir del request original de la 
    const errors = (0, express_validator_1.validationResult)(req);
    //Si no existen errores la petición continua
    if (errors.isEmpty())
        return next();
    //Se devuelven los errores con un estado de peticion 400
    return res.status(400).json(errors.array());
};
exports.Validate = Validate;
