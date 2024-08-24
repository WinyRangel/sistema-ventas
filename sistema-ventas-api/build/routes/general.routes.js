"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_check_1 = require("../middlewares/validator.check");
const general_controller_1 = __importDefault(require("../controllers/general.controller"));
class GeneralRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    getRoles() {
        this.router.get("/roles", validator_check_1.Validate, general_controller_1.default.obtenerRoles);
    }
    config() {
        this.getRoles;
    }
}
const generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
