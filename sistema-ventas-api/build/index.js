"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const api_docs_1 = __importDefault(require("./routes/api.docs"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const general_routes_1 = __importDefault(require("./routes/general.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
class Server {
    // * contructor
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes(); // Ensure routes are configured
    }
    // * metodo conf
    config() {
        // Configure the port for the server
        this.app.set("port", process.env.PORT || 3000);
        // Show requests in the console
        this.app.use((0, morgan_1.default)('dev'));
        // Use CORS (Cross-Origin)
        this.app.use((0, cors_1.default)());
        // Restriction
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // * configuración de rutas
    routes() {
        this.app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(api_docs_1.default));
        this.app.use('/api', index_routes_1.default);
        this.app.use('/api/auth', auth_routes_1.default);
        this.app.use("/api/usuarios", usuario_routes_1.default);
        this.app.use('/api/roles', general_routes_1.default);
        this.app.use("/api/general", general_routes_1.default);
    }
    // * inicializa servicio
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
