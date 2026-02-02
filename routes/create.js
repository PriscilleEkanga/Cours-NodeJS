import express from 'express';
import vehiculeControllers from '../controllers/vehiculeControllers.js';


const router = express.Router();



/**
 * @swagger
 * /vehicule:
 *   post:
 *     summary: Creation d'un vehicule
 *     tags:
 *       - Vehicules
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               immatriculation:
 *                 type: string
 *               model:
 *                 type: string
 *               marque:
 *                 type: string
 *               annee:
 *                 type: integer
 *               prixLocation:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Vehicule cree
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Erreur d'application
 */


// POST créer un véhicule
router.post('/vehicules', vehiculeControllers.createVehicule);

const createVehicule = router;
export default createVehicule;