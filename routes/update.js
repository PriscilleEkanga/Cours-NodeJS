import express from 'express';
import vehiculeControllers from '../controllers/vehiculeControllers.js';

const router = express.Router();


/**
 * @swagger
 * /vehicules/{id}:
 *   put:
 *     summary: Mettre à jour un véhicule
 *     description: Met à jour les informations d'un véhicule existant par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID unique du véhicule à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicule'
 *     responses:
 *       200:
 *         description: Véhicule mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Véhicule mis à jour"
 *                 vehicule:
 *                   $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Véhicule non trouvé"
 *       500:
 *         description: Erreur d'application
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Erreur d'application"
 */
router.put('/vehicules/:id', (req, res) => vehiculeControllers.updateVehicule);

const updateVehicule = router;

export default updateVehicule;
