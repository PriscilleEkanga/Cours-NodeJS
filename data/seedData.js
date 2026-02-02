import mongoose from "mongoose";
import Vehicule from "../models/Vehicule.js";
import "dotenv/config";

const marques = ["Toyota", "Mercedes", "Audi", "Ford", "Nissan"];
const modeles = ["Camry", "ML", "E-tron", "F-150", "Altima"];
const annees = [2022, 2023, 2024, 2025];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    for (let i = 0; i < 5; i++) {
      const vehicule = new Vehicule({
        marque: marques[Math.floor(Math.random() * marques.length)],
        modele: modeles[Math.floor(Math.random() * modeles.length)],
        annee: annees[Math.floor(Math.random() * annees.length)],
        prixLocation: Math.floor(Math.random() * 351) + 5000,
        immatriculation: `ABC-${i}-${Date.now()}`
      });

      await vehicule.save();
    }

    console.log("✅ Seed terminé avec succès");
    process.exit();
  } catch (error) {
    console.error(" Erreur seed :", error);
    process.exit(1);
  }
}

seed();
