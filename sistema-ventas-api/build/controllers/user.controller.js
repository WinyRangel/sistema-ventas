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
class usuariosController {
    // Obtener un solo usuario por su ID
    obtenerUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cveuser } = req.params;
                // Consultar el usuario por su ID
                const usuario = yield database_1.default.usuarios.findUnique({
                    where: { cveuser: Number(cveuser) }
                });
                if (!usuario) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
                return res.status(200).json(usuario);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    obtenerUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Consultar todos los usuarios
                const usuarios = yield database_1.default.usuarios.findMany();
                return res.status(200).json(usuarios);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    registrarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, apellidos, username, email, password, rol } = req.body;
                // Verificar si el usuarios ya existe
                const usuariosExistente = yield database_1.default.usuarios.findFirst({
                    where: {
                        OR: [
                            { username }
                        ]
                    }
                });
                if (usuariosExistente) {
                    return res.status(400).json({ message: 'El usuarios ya están en uso.' });
                }
                // Crear el usuarios
                const nuevousuario = yield database_1.default.usuarios.create({
                    data: {
                        nombre,
                        apellidos,
                        username,
                        email,
                        password,
                        rol
                    }
                });
                return res.status(201).json({ message: 'usuario registrado con éxito', usuarios: nuevousuario });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    // Actualizar un usuarioss existente
    actualizarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cveuser } = req.params;
                const { nombre, apellidos, username, email, password, rol } = req.body;
                // Actualizar el usuarioss
                const usuarioActualizado = yield database_1.default.usuarios.update({
                    where: { cveuser: Number(cveuser) },
                    data: {
                        nombre,
                        apellidos,
                        username,
                        email,
                        password,
                        rol
                    }
                });
                return res.status(200).json({ message: 'usuarioss actualizado con éxito', usuarioss: usuarioActualizado });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    // Eliminar un usuarioss
    eliminarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cveuser } = req.params;
                // Eliminar el usuarioss
                yield database_1.default.usuarios.delete({
                    where: { cveuser: Number(cveuser) }
                });
                return res.status(200).json({ message: 'usuarioss eliminado con éxito' });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
}
exports.default = new usuariosController();
