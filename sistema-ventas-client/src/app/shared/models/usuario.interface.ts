import { Rol } from './rol.interface'

export interface Usuario {
    cveuser?: number;
    nombre: String;
    apellidos: String;
    username: String;
    email: String;
    password?: String;
    fechaRegistro?: Date;
    cveRol?: Number;
    rol?: Rol;
}