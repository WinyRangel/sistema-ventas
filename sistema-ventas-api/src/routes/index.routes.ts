import { Router } from "express";
import { indexController } from "../controllers/index.controller";
import { Validate } from "../middlewares/validator.check";
import { authRules } from "../rules/auth.rules";
import { jwtCheck } from "../middlewares/jwt.check";

class IndexRoutes{

    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }
    /**
     * 
     */


    config(): void {
        /**
         * @swagger
         * /api:
         *  get:
         *      tags: ["Index"]
         *      summary: Default Index
         *      description: Ruta por defecto de la API
         *      produces:
         *          - application/json
         *      responses:
         *          200:
         *              description:
         */
        this.router.get('/', indexController.index);
        /**
         * @swagger
         * /api:
         *  post:
         *      tags: ["Index"]
         *      summary: Default Index (Insert)
         *      description: Ruta por defecto de la API (Insert)
         *      produces:
         *          - application/json
         *      responses:
         *          200:
         *              description:
         */
        this.router.post('/', indexController.insert);
        /**
         * @swagger
         * /api:
         *  put:
         *      tags: ["Index"]
         *      summary: Default Index (Put)
         *      description: Ruta por defecto de la API (Put)
         *      produces:
         *          - application/json
         *      responses:
         *          200:
         *              description:
         */
        this.router.put('/', indexController.update);
        /**
         * @swagger
         * /api:
         *  delete:
         *      tags: ["Index"]
         *      summary: Default Index (Delete)
         *      description: Ruta por defecto de la API (Delete)
         *      produces:
         *          - application/json
         *      responses:
         *          200:
         *              description:
         */
        this.router.delete('/', indexController.delete);
     }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;