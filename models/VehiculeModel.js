import mongoose from "mongoose";



/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicule:
 *       type: object
 *       required:
 *         - immatriculation
 *       properties:
 *         immatriculation:
 *           type: string
 *           description: le numéro d'immatriculation du vehicule
 *         marque:
 *           type: string
 *           description: La marque du vehicule
 *         model:
 *           type: string
 *           description: Le modèle du vehicule
 *         annee:
 *           type: integer
 *           description: l'année de fabrication du vehicule
 *         prixLocation:
 *           type: integer
 *           description: le prix de location d'un Vehicule
 */

const VehiculeSchema = new mongoose.Schema({
    immatriculation: {
        type: String,
        required: true,
        unique: true,
    },
    marque: String,
    model: String,
    annee: Number,
    prixLocation: Number,
}, {
    timestamps: true
});

const VehiculeModel = mongoose.model("Vehicules", VehiculeSchema);

export default VehiculeModel;