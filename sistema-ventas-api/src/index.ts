import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJsDocs from "./routes/api.docs";
import indexRoutes from "./routes/index.routes";

class Server {
    // Create the global instance of our app.
    public app: Application;

    // * Generate the constructor
    constructor() {
        this.app = express();
        this.config();
        this.routes(); // Ensure routes are configured
    }

    // * Generate a method for the configuration
    private config(): void {
        // Configure the port for the server
        this.app.set("port", process.env.PORT || 3000);
        // Show requests in the console
        this.app.use(morgan('dev'));
        // Use CORS (Cross-Origin)
        this.app.use(cors());
        // Restriction
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    // * Generate a method for the configuration of routes
    private routes(): void {
        this.app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
        this.app.use('/api', indexRoutes);
        this.app.use('/api/auth', indexRoutes);
    }

    // * Generate a method to initialize the service
    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start();
