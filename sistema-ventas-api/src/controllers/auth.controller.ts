import { Request, Response} from 'express';
import prisma from '../database/database';
import { utils } from '../utils/utils';

class AuthController {
    public async iniciarSesion(req: Request, response: Response){
        try{
            var temp = await utils.hashPassword("admin");
            console.log(temp);

            // Obtener los datos del body
            const { username, password } = req.body;

            // Verificar si el usuario existe
            const usuario = await prisma.usuario.findFirst({
                where: {
                    username
                }
            });

            if(!usuario) {
                return response.status(404).json(
                    {message: "El usuario y/o contraseña es incorrecto"}
                );
            }

            // Verificar la contraseña del ususario
            if (await utils.checkPassword(password, usuario.password)){
                // Si la contraseña es correcta, generar el payload con la información
                const { password, fechaRegistro, ...newUser } = usuario;

                // Generar el JWT
                var token = utils.generateJWT(newUser)

                // Enviar el JWT
                response.json({message: "Autentificación correcta", token})

            } else {
                return response.status(404).json(
                    {message: "El usuario y/o contraseña es incorrecto"}
                );
            }

        } catch (error: any) {
            console.log(error);
            return response.status(500).json({message: "Error interno"});
        }
    }
}

export const authController = new AuthController();