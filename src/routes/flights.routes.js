import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { flightSchemas } from "../schemas/flightSchema.js";
import { flightControllers } from "../controllers/flightsController.js";


const flightRouter = Router();

flightRouter.post("/flights",validateSchema(flightSchemas.flightSchema),flightControllers.newFlight);




export default flightRouter;