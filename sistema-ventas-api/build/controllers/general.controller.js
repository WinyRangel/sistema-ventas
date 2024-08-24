"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
const utils_1 = require("../utils/utils");
class GeneralController {
    obtenerRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers['auth'];
                const currentUser = utils_1.utils.getPayload(token);
                // Consultar todos los usuarios
                const rol = yield database_1.default.rol.findMany();
                return res.status(200).json(rol);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
}
exports.default = new GeneralController();
