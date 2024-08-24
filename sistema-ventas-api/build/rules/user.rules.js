"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const express_validator_1 = require("express-validator");
const userRules = () => {
    return [
        (0, express_validator_1.body)("nombre").trim().not().isEmpty().withMessage('Campo requerido').isLength({ min: 3, max: 150 }).withMessage('Rango incorrecto'),
        (0, express_validator_1.body)("apellidos").trim().not().isEmpty().withMessage('Campo requerido').isLength({ min: 3, max: 150 }).withMessage('Rango incorrecto'),
        (0, express_validator_1.body)("email").trim().not().isEmpty().withMessage('Campo requerido').isLength({ min: 3, max: 150 }).withMessage('Rango incorrecto'),
        (0, express_validator_1.body)("username").trim().not().isEmpty().withMessage('Campo requerido').isLength({ min: 3, max: 150 }).withMessage('Rango incorrecto'),
        (0, express_validator_1.body)("password").trim().not().isEmpty().withMessage('Campo requerido').isLength({ min: 3, max: 150 }).withMessage('Rango incorrecto'),
    ];
};
exports.userRules = userRules;
