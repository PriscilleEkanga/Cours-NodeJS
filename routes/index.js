import createVehiculeRoute from './create.js';
import readVehiculeRoute from './read.js';
import updateVehiculeRoute from './update.js';
import deleteVehiculeRoute from './delete.js';
import app from '../app.js';


const VehiculeAPIRoutes = (app) => {
    app.use(createVehiculeRoute);
    app.use(readVehiculeRoute);
    app.use(updateVehiculeRoute);
    app.use(deleteVehiculeRoute);
}


export default VehiculeAPIRoutes;