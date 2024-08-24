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
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                return res.json({ message: "API WORKS!" });
            }
            catch (error) {
                return res.status(500).json({ meesage: `Error: ${error.meesage}` });
            }
        });
    }
    insert(req, res) {
        try {
            return res.json({ message: "INSERT WORKS!" });
        }
        catch (error) {
            return res.status(500).json({ meesage: `Error: ${error.meesage}` });
        }
    }
    update(req, res) {
        try {
            return res.json({ message: "UPDATE WORKS!" });
        }
        catch (error) {
            return res.status(500).json({ meesage: `Error: ${error.meesage}` });
        }
    }
    delete(req, res) {
        try {
            return res.json({ message: "DELETE WORKS!" });
        }
        catch (error) {
            return res.status(500).json({ meesage: `Error: ${error.meesage}` });
        }
    }
}
exports.indexController = new IndexController();
