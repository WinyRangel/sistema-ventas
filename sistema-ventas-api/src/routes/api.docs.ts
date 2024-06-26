const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0', // Added OpenAPI version
        info: {
            version: "1.0.0",
            title: "Sistema Ventas API",
            description: "Documentación API",
            contact: {
                name: "Winy Daniela",
                url: "https://github.com"
            },
        },
        servers: [{
            url: "http://localhost:3000",
            description: "Developer Server"
        }],
        basePath: "/", // basePath is usually not required in OpenAPI 3.0
    },
    apis: ["./src/routes/*.ts"] // Corrected the path and typo
};

const swaggerDocs = swaggerJsDoc(options);
export default swaggerDocs;
