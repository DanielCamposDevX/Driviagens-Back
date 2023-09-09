import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { passengerSchema } from "../schemas/passengerSchema.js";
import { postPassenger } from "../controllers/passengerController.js";

const passengerRouter = Router();

passengerRouter.post("/passengers",validateSchema(passengerSchema),postPassenger)



export default passengerRouter