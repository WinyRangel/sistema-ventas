import jwt  from 'jsonwebtoken';
import keys from '../config/keys';
import bcrypt from 'bcryptjs'
/*****************************
 * 
 * @name Utils
 * @author Daniela Manzano
 * @Creation 27/06/2024
 ****************************/
class Utils{
    //genera token
    /*********************************
     *@name generateJWT@description Método para generar un tone OAUTH
     *@param payload
     *@returns string
     *********************************/
    public generateJWT(payload: any): string {
        var token = jwt.sign(payload, keys.secret.jwt, { expiresIn: '1h' });
        //Si todo sale bien entonces devuelve una cadena o el token
        return token;
    }
    /*********************************
     *@name getPayload
     *@description Obtener la información de  jwt
     *@param token
     *@returns string
     *********************************/
    //Tomar el token del usuario, informacion que quiero encriptar
    public getPayload(token: string): any {
        var payload = <any> jwt.verify(token, keys.secret.jwt);
        //segmentacion de objetos
        const {iat, exp, ...data } = payload;

        return data;

     }
    /*********************************
     *@name hashPassword
     *@description Encriptar contraseña
     *@param password
     *@returns string
     *********************************/
    //Encriptar constraseña
    public async hashPassword(password : string): Promise<String> { //una promesa hace que si o si aunque falle tiene que devolver una cadena
        //generar saltos en contrasena para generar encriptacion
        const salt = await bcrypt.genSaltSync(10); //Genera numeros aleatorios para encriptar la contraseña
        return await bcrypt.hashSync(password, salt);
    }
    /*********************************
     *@name checkPassword
     *@description verificar la información de  jwt
     *@param password
     *@param encryptedPassword
     *@returns Promise<any>
     *********************************/
    //Verifica que la contraseña sea correcta
    public async checkPassword(password : string, encryptedPassword: string): Promise<boolean> { 
        return await bcrypt.compareSync(password, encryptedPassword);
    }
    
}

export const utils = new Utils();