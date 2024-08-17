import { Router } from "express";
import UserController from "../controllers/user.controller";
import { authRules } from "../rules/auth.rules";
import { Validate } from "../middlewares/validator.check";

class UserRoutes {
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
     *          nombre:
     *              type: string
     *          apellidos:
     *              type: string
     *          username:
     *              type: string
     *          email:
     *              type: string
     *          password:
     *              type: string
     *          rol:
     *              type: string
     */
    /**
     * @swagger
     * /api/users:
     *  get:
     *      tags:
     *        - Usuarios
     *      summary: Get all users
     *      description: Lista de Usuarios registrados
     *      produces:
     *        - application/json
     *      responses:
     *        200:
     *          description: Lista de Usuarios
     *          schema:
     *            type: array
     *            items:
     *              $ref: '#/definitions/User'
     */
        private getUsers(): void {
            this.router.get("/", Validate, UserController.obtenerUsuarios);
        }
/**
     * @swagger
     * /api/users/{cveuser}:
     *  get:
     *      tags:
     *        - Usuarios
     *      summary: Get a user by ID
     *      description: Obtener User por ID
     *      produces:
     *        - application/json
     *      parameters:
     *        - in: path
     *          name: cveuser
     *          description: User ID
     *          required: true
     *          type: integer
     *      responses:
     *        200:
     *          description: Usuario
     *          schema:
     *            $ref: '#/definitions/User'
     *        404:
     *          description: User not found
     */
    private getUserById(): void {
    this.router.get('/:cveuser', Validate, UserController.obtenerUsuario);
    }


    /**
     * @swagger
     * /api/users/register:
     *  post:
     *      tags:
     *        - Usuarios
     *      summary: Register User
     *      description: Registrar nuevo usuario
     *      produces:
     *        - application/json
     *      parameters:
     *        - in: body
     *          name: Usuario
     *          description: Usuario detalles
     *          schema:
     *            $ref: '#/definitions/User'
     *          required: true
     *      responses:
     *        201:
     *          description: User created successfully
     */
    private registerUser(): void {
        this.router.post("/register", authRules(), Validate, UserController.registrarusuario);
    }

    /**
     * @swagger
     * /api/users/{cveuser}:
     *  put:
     *      tags:
     *        - Usuarios
     *      summary: Update Usuario
     *      description: Actulizar usuario
     *      produces:
     *        - application/json
     *      parameters:
     *        - in: path
     *          name: cveuser
     *          description: User ID
     *          required: true
     *          type: integer
     *        - in: body
     *          name: Usuario
     *          description: Usuario details
     *          schema:
     *            $ref: '#/definitions/User'
     *          required: true
     *      responses:
     *        200:
     *          description: Usuario updated successfully
     */
    private updateUser(): void {
        this.router.put("/:cveuser", authRules(), Validate, UserController.actualizarusuario);
    }

    /**
     * @swagger
     * /api/users/delete/{cveuser}:
     *  delete:
     *      tags:
     *        - Usuarios
     *      summary: Delete User
     *      description: Delete User by ID
     *      produces:
     *        - application/json
     *      parameters:
     *        - in: path
     *          name: cveuser
     *          description: User ID
     *          required: true
     *          type: integer
     *      responses:
     *        200:
     *          description: User deleted successfully
     */
    private deleteUser(): void {
        this.router.delete("/delete/:cveuser", Validate, UserController.eliminarusuario);
    }

    private config(): void {
        this.registerUser();
        this.updateUser();
        this.deleteUser();
        this.getUsers();
        this.getUserById();
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;
