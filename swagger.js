import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Vehicule API Propelize",
            version: "1.0.0",
            description: "Api express pour la location des vehicules",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Serveur local"
            }
        ],
        components: {
            schemas: {
                Vehicule: {
                    type: "object",
                    required: ["immatriculation"],
                    properties: {
                        immatriculation: { 
                            type: "string", 
                            description: "Le numéro d'immatriculation" 
                        },
                        marque: { type: "string" },
                        model: { type: "string" },
                        annee: { type: "integer" },
                        prixLocation: { type: "integer" }
                    }
                }
            }
        }
    },
    // Vérifie bien que tes fichiers sont dans ces dossiers
    apis: ["./models/*.js", "./routes/*.js", "./index.js", "./app.js"]
};

const specs = swaggerJSDoc(options);

export default (app) => {
    // On expose la doc sur /api-docs
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};