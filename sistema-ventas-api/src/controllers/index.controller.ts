import { Request, Response } from "express";
import prisma from "../database/database";

class IndexController{
    public async index (req: Request, res: Response){
        try {
            // !Testing 
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