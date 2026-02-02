


import express from 'express';
import vehiculeControllers from '../controllers/vehiculeControllers.js';

const router = express.Router();


/**
 * @swagger
 * /vehicules:
 *   get:
 *     summary: Récupérer tous les véhicules
 *     description: Retourne la liste de tous les véhicules disponibles.
 *     responses:
 *       200:
 *         description: Liste des véhicules récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Aucun véhicule trouvé
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Véhicules non trouvés"
 *       500:
 *         description: Erreur d'application
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Erreur d'application"
 */
router.get('/vehicules', vehiculeControllers.readVehicules);

/**
 * @swagger
 * /vehicules/{id}:
 *   get:
 *     summary: Récupérer un véhicule par ID
 *     description: Retourne les détails d'un véhicule spécifique par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID unique du véhicule
 *     responses:
 *       200:
 *         description: Véhicule trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
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
router.get('/vehicules/:id', vehiculeControllers.readVehculeById);

/**
 * @swagger
 * /vehicules/search/{immatriculation}:
 *   get:
 *     summary: Rechercher un véhicule par immatriculation
 *     description: Retourne les détails d'un véhicule basé sur son numéro d'immatriculation.
 *     parameters:
 *       - in: path
 *         name: immatriculation
 *         required: true
 *         schema:
 *           type: string
 *         description: Le numéro d'immatriculation du véhicule
 *     responses:
 *       200:
 *         description: Véhicule trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
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
router.get('/vehicules/search/:immatriculation', vehiculeControllers.readVehiculeByImmatriculation);

/**
 * @swagger
 * /vehicules/price/{prixMax}:
 *   get:
 *     summary: Filtrer les véhicules par prix maximum
 *     description: Retourne la liste des véhicules dont le prix de location est inférieur ou égal au prix maximum spécifié.
 *     parameters:
 *       - in: path
 *         name: prixMax
 *         required: true
 *         schema:
 *           type: number
 *         description: Le prix maximum de location
 *     responses:
 *       200:
 *         description: Liste des véhicules filtrés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       400:
 *         description: Prix invalide
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Prix invalide"
 *       500:
 *         description: Erreur d'application
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Erreur d'application"
 */
router.get('/vehicules/price/:prixMax', vehiculeControllers.searchVehiculeByPrice);


const readVehicule = router;

export default readVehicule;
