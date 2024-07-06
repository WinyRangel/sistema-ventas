import { Request, Response } from "express";
import prisma from "../database/database";
import { utils } from "../utils/utils";

class IndexController{
    public async index (req: Request, res: Response){
        try {
            // !Testing 

            // ? throw new RangeError('Error Inesperado')
            // const user = {
            //     cveUsuario :1,
            //     nombre: 'Joss',
            //     rol:[1,2,3]
            // };
            // const token = utils.generateJWT(user);
            // console.log(token);

            // var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ90.eyJjdmVVc3VhcmlvIjoxLCJub21icmUiOiJKb3NzIiwicm9sIjpbMSwyLDNdLCJpYXQiOjE3MjAyMjgwNzIsImV4cCI6MTcyMDIzMTY3Mn0.JFE1KAQGeGdKYo7n7iEnGCwNVy854grKhNA_eQOMDfA';
            // var data = utils.getPayload(jwt);
            // console.log(data);
             return res.json ({message: "API WORKS!"});
        } catch (error: any) {
            return res.status(500).json({meesage: `Error: ${error.meesage}`})
        }
    }

        
    public insert (req: Request, res: Response){
        try {
            return res.json ({message: "INSERT WORKS!"});
        } catch (error: any) {
            return res.status(500).json({meesage: `Error: ${error.meesage}`})
        }
    }
    
    public update (req: Request, res: Response){
        try {
            return res.json ({message: "UPDATE WORKS!"});
        } catch (error: any) {
            return res.status(500).json({meesage: `Error: ${error.meesage}`})
        }
    }

    public delete  (req: Request, res: Response){
        try {
            return res.json ({message: "DELETE WORKS!"});
        } catch (error: any) {
            return res.status(500).json({meesage: `Error: ${error.meesage}`})
        }
    }
}

export const indexController = new IndexController();