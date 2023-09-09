import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { CitieSchema } from "../schemas/citiesSchema.js";
import { citiesControllers } from "../controllers/citieController.js";

const citiesRouter = Router();


citiesRouter.post("/cities", validateSchema(CitieSchema),citiesControllers.newCitie)



export default citiesRouter;