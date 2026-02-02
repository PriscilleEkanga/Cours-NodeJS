import express from "express";
import bodyParser from "body-parser";
// import seedData from './data/seedData.js';
import pino from "pino";
import { pinoHttp } from "pino-http";
import VehiculeAPIRoutes from "./routes/index.js";
// import { vehiculeData } from './data/vehiculeData.js';
import "dotenv/config";
import swaggerSetup from "./swagger.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

// // Seed des données
// function seed() {
//     vehiculeData.push(...seedData);
// }
// seed();

// ================= MIDDLEWARES =================
app.use(bodyParser.json());

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: { colorize: true },
  },
});

app.use(pinoHttp({ logger }));

// Swagger Ui
swaggerSetup(app);

// initizlisation des routes
VehiculeAPIRoutes(app);
/**
 * @swagger
 * /:
 *   get:
 *     summary: Point d'entrée
 *     description: Vérification de l'état de l'API
 *     responses:
 *       200:
 *         description: Le serveur de l'API fonctionne bien
 */


// Accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API de gestion de véhicules");
});

export default app;
