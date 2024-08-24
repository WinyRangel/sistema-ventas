import { Router } from "express";
import { usuarioController } from "../controllers/usuario.controller";
import { authRules } from "../rules/auth.rules";
import { Validate } from "../middlewares/validator.check";
import { insertRules, updateRules } from "../rules/user.rules";
import { jwtCheck } from "../middlewares/jwt.check";

class UsuarioRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config() {
        // listado
        this.router.get('/', [jwtCheck], usuarioController.listar);
        // insercion
        this.router.post('/', insertRules(), [Validate], usuarioController.insertar);
        // actualizar
        this.router.put('/', updateRules(), [Validate], usuarioController.actualizar);
        //eliminar
        this.router.delete('/:cveUsuario', usuarioController.eliminar);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;