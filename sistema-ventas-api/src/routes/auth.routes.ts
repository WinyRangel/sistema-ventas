import { Router, Request, Response } from "express";
import { authController } from "../controllers/auth.controller";
import { authRules } from "../rules/auth.rules";
import validator from "validator";
import { Validate } from "../middlewares/validator.check";

class AuthRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.config();
    }

    /**
     * @swagger
     * definitions:
     *  User:
     *      type: object
     *      properties:
     *          username:
     *              type: string
     *          password:
     *              type: string
     */
    private config(): void {
        /**
         * @swagger
         * /api/auth:
         *  post:
         *      tags:
         *        - Credenciales
         *      summary: Log In
         *      description: Inicio de sesión de usuario
         *      produces:
         *        - application/json
         *      parameters:
         *        - in: body
         *          name: Credentials
         *          description: Usuario y contraseña del usuario
         *          schema:
         *            $ref: '#/definitions/User'
         *          required: true
         *      responses:
         *        200:
         *          description: Éxito
         */
        this.router.post("/", authRules(), [Validate], authController.iniciarSesion);
    }
}

const authRoutes = new AuthRoutes();

export default authRoutes.router;
