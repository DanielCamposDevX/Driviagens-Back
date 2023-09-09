import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { travelSchema } from "../schemas/travelsSchema.js";
import { travelControllers } from "../controllers/travelController.js";


const travelsRouter = Router();


travelsRouter.post("/travels",validateSchema(travelSchema),travelControllers.newTravel);




export default travelsRouter;