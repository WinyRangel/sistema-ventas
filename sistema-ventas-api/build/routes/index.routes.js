"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    /**
     *
     */
    config() {
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
        this.router.get('/', index_controller_1.indexController.index);
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
        this.router.post('/', index_controller_1.indexController.insert);
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
        this.router.put('/', index_controller_1.indexController.update);
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
        this.router.delete('/', index_controller_1.indexController.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
