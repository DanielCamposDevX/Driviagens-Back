import httpStatus from "http-status";
import { flightServices } from "../services/flightServices.js";


async function newFlight(req,res){
    await flightServices.createFlight(req.body);
    return res.status(httpStatus.CREATED).send("Voo criado!");
}








export const flightControllers = { newFlight };