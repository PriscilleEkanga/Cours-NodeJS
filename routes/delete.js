import express from 'express';
import vehiculeControllers from '../controllers/vehiculeControllers.js';

const router = express.Router();



/**
 * @swagger
 * /vehicules/{id}:
 *   delete:
 *     summary: Supprimer un véhicule
 *     description: Supprime un véhicule existant par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID unique du véhicule à supprimer
 *     responses:
 *       200:
 *         description: Véhicule supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Véhicule supprimé"
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
router.delete('/vehicules/:id', (req, res) => vehiculeControllers.deleteVehicule);


const deleteVehicule = router;

export default deleteVehicule;