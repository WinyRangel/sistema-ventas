import { Request, Response} from 'express';
import prisma from '../database/database';

class usuariosController {
        // Obtener un solo usuario por su ID
        public async obtenerUsuario(req: Request, res: Response): Promise<Response> {
            try {
                const { cveuser } = req.params;
    
                // Consultar el usuario por su ID
                const usuario = await prisma.usuarios.findUnique({
                    where: { cveuser: Number(cveuser) }
                });
    
                if (!usuario) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
    
                return res.status(200).json(usuario);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }
        }
    

    public async obtenerUsuarios(req: Request, res: Response): Promise<Response> {
        try {
            // Consultar todos los usuarios
            const usuarios = await prisma.usuarios.findMany();

            return res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    public async registrarusuario(req: Request, res: Response): Promise<Response> {
        try {
            const { nombre, apellidos, username, email, password, rol } = req.body;
            // Verificar si el usuarios ya existe
            const usuariosExistente = await prisma.usuarios.findFirst({
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
            const nuevousuario = await prisma.usuarios.create({
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
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    // Actualizar un usuarioss existente
    public async actualizarusuario(req: Request, res: Response): Promise<Response> {
        try {
            const { cveuser } = req.params;
            const { nombre, apellidos, username, email, password, rol } = req.body;

            // Actualizar el usuarioss
            const usuarioActualizado = await prisma.usuarios.update({
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
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    // Eliminar un usuarioss
    public async eliminarusuario(req: Request, res: Response): Promise<Response> {
        try {
            const { cveuser } = req.params;

            // Eliminar el usuarioss
            await prisma.usuarios.delete({
                where: { cveuser: Number(cveuser) }
            });

            return res.status(200).json({ message: 'usuarioss eliminado con éxito' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

}

export default new usuariosController();
