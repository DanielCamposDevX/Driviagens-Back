import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { passengerSchema } from "../schemas/passengerSchema.js";
import { passengerControllers } from "../controllers/passengerController.js";

const passengerRouter = Router();

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerControllers.postPassenger);
passengerRouter.get("/passengers/travels",passengerControllers.getPassengerTravels);



export default passengerRouter