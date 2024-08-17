import { Router } from "express";
import UserController from "../controllers/user.controller";
import { Validate } from "../middlewares/validator.check";

class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }
    /**
     * @swagger
     * /api/rol/cveRol:
     *  get:
     *      tags:
     *        - Rol
     *      summary: Get a Rol by ID
     *      description: Retrieve a specific rol by their ID
     *      produces:
     *        - application/json
     *      parameters:
     *        - in: path
     *          name: cveRol
     *          description: User ID
     *          required: true
     *          type: integer
     *      responses:
     *        200:
     *          description: A single user
     *          schema:
     *            $ref: '#/definitions/rol'
     *        404:
     *          description: Rol not found
     */
    private getRol(): void {
        this.router.get('/:cveRol', Validate, UserController.obtenerRol);
    }
    private config(): void {
        this.getRol();
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;