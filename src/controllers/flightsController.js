import httpStatus from "http-status";
import { flightServices } from "../services/flightServices.js";


async function newFlight(req,res){
    await flightServices.createFlight(req.body);
    return res.status(httpStatus.CREATED).send("Voo criado!");
}



async function getFlights(req, res) {
    const reqQuery = req.query;
    const flights = await flightServices.showFlights(reqQuery);
    return res.status(httpStatus.OK).send(flights)
}







export const flightControllers = { newFlight,getFlights };