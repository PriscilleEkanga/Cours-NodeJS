import app from './app.js';
import connectDB from './config/db.js';

const PORT = 3000;

// Connexion à la base de données une seule fois proprement
connectDB(); 

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur : http://localhost:${PORT}`);
    console.log(`Documentation disponible sur : http://localhost:${PORT}/api-docs`);
});