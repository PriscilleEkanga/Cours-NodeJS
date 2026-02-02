import Vehicule from "../models/VehiculeModel.js";
import { vehiculeData } from "../data/vehiculeData.js";



// create
function createVehicule(req, res){
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).send("Body requis");
    }

    const { marque, model, immatriculation, annee, prixLocation } = data;

    if (!marque || !model || !immatriculation || !annee || !prixLocation) {
        return res.status(400).send("Tous les champs sont requis");
    }

    try {
        const vehicule = new Vehicule(data);
        vehicule.save();

        vehiculeData.push(vehicule);

        res.status(201).json({
            message: "Véhicule créé avec succès",
            vehicule
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}


// read all
function readVehicules(req, res){
     try {
        const vehicules = vehiculeData;

        if (!vehicules || vehicules.length === 0) {
            return res.status(404).send("Véhicules non trouvés");
        }

        res.status(200).json(vehicules);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}

// read by id
function readVehculeById(req, res){
    try {
            const { id } = req.params;
            const vehicule = vehiculeData.find(v => v.id === id);
    
            if (!vehicule) {
                return res.status(404).send("Véhicule non trouvé");
            }
    
            res.status(200).json(vehicule);
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur d'application");
        }

}

//read by immatriculation
function readVehiculeByImmatriculation(req, res){
    try {
        const { immatriculation } = req.params;

        const vehicule = vehiculeData.find(
            v => v.immatriculation === immatriculation
        );

        if (!vehicule) {
            return res.status(404).send("Véhicule non trouvé");
        }

        res.status(200).json(vehicule);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}

// read searchVehicule by price
function searchVehiculeByPrice(req, res){
    try {
        const prixMax = Number(req.params.prixMax);

        // Vérification basique
        if (isNaN(prixMax)) {
            return res.status(400).send("Prix invalide");
        }

        const resultats = vehiculeData.filter(
            v => v.prixLocation <= prixMax
        );

        res.status(200).json(resultats);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}


function updateVehicule(req, res){
    const { id } = req.params;

    try {
        const index = vehiculeData.findIndex(v => v.id === id);

        if (index === -1) {
            return res.status(404).send("Véhicule non trouvé");
        }

        vehiculeData[index] = {
            ...vehiculeData[index],
            ...req.body
        };

        res.status(200).json({
            message: "Véhicule mis à jour",
            vehicule: vehiculeData[index]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}

function deleteVehicule(req, res){
    const { id } = req.params;

    try {
        const index = vehiculeData.findIndex(v => v.id === id);

        if (index === -1) {
            return res.status(404).send("Véhicule non trouvé");
        }

        const deletedVehicule = vehiculeData.splice(index, 1);

        res.status(200).json({
            message: "Véhicule supprimé",
            vehicule: deletedVehicule[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur d'application");
    }
}

export default{
    createVehicule,
    readVehicules,
    readVehculeById,
    readVehiculeByImmatriculation,
    searchVehiculeByPrice,
    updateVehicule,
    deleteVehicule,
}