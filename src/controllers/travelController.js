import httpStatus from "http-status";
import { travelServices } from "../services/travelServices.js"


async function newTravel(req,res){
    await travelServices.createTravel(req.body);
    return res.status(httpStatus.CREATED).send("RESERVADO");
}













export const travelControllers = { newTravel }