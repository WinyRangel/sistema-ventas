import { Request, Response} from 'express';
import prisma from '../database/database';
import { utils } from '../utils/utils';

class GeneralController {
    public async obtenerRoles(req: Request, res: Response): Promise<Response> {
        try {
            const token = <string> req.headers['auth'];
            const currentUser = utils.getPayload(token);
            // Consultar todos los usuarios
            const rol = await prisma.rol.findMany();
            return res.status(200).json(rol);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

}

export default new GeneralController();
