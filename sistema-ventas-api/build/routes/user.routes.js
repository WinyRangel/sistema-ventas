"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validator_check_1 = require("../middlewares/validator.check");
const user_rules_1 = require("../rules/user.rules");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
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
    getUsers() {
        this.router.get("/", validator_check_1.Validate, user_controller_1.default.obtenerUsuarios);
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
    getUserById() {
        this.router.get('/:cveuser', validator_check_1.Validate, user_controller_1.default.obtenerUsuario);
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
    registerUser() {
        this.router.post("/register", (0, user_rules_1.userRules)(), validator_check_1.Validate, user_controller_1.default.registrarusuario);
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
    updateUser() {
        this.router.put("/:cveuser", (0, user_rules_1.userRules)(), validator_check_1.Validate, user_controller_1.default.actualizarusuario);
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
    deleteUser() {
        this.router.delete("/delete/:cveuser", validator_check_1.Validate, user_controller_1.default.eliminarusuario);
    }
    config() {
        this.registerUser();
        this.updateUser();
        this.deleteUser();
        this.getUsers();
        this.getUserById();
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
