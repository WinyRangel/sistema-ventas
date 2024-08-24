"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const auth_rules_1 = require("../rules/auth.rules");
const validator_check_1 = require("../middlewares/validator.check");
const jwt_check_1 = require("../middlewares/jwt.check");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // listado
        this.router.get('/', [jwt_check_1.jwtCheck], usuario_controller_1.usuarioController.listar);
        // insercion
        this.router.post('/', (0, auth_rules_1.authRules)(), [validator_check_1.Validate], usuario_controller_1.usuarioController.insertar);
        // actualizar
        this.router.put('/', (0, auth_rules_1.authRules)(), [validator_check_1.Validate], usuario_controller_1.usuarioController.actualizar);
        //eliminar
        this.router.delete('/:cveUsuario', usuario_controller_1.usuarioController.eliminar);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
