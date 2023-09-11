import httpStatus from "http-status";
import { PassengerServices } from "../services/passengerServices.js";



async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;
    await PassengerServices.createPassenger(firstName, lastName);
    return res.status(httpStatus.CREATED).send(`Passageiro Criado!`);
}


async function getPassengerTravels(req,res) {
    const { name } = req.query;
    const list = await PassengerServices.passengerTravels(name);
    res.status(httpStatus.OK).send(list);
}






export const passengerControllers = { postPassenger, getPassengerTravels };