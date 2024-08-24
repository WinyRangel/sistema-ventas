import { Router } from "express";
import { Validate } from "../middlewares/validator.check";
import rolesController from "../controllers/general.controller";

class GeneralRoutes{
    public router: Router;
    constructor() {
        this.router = Router();
        this.config();
    }
    private getRoles(): void {
        this.router.get("/roles", Validate, rolesController.obtenerRoles);
    }
    private config(): void{
        this.getRoles
    }
}
const generalRoutes = new GeneralRoutes();

export default generalRoutes.router;