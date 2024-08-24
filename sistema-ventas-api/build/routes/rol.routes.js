"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_check_1 = require("../middlewares/validator.check");
const roles_controller_1 = __importDefault(require("../controllers/roles.controller"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    getRol() {
        this.router.get('/:cveRol', validator_check_1.Validate, roles_controller_1.default.obtenerRoles);
    }
    config() {
        this.getRol();
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
