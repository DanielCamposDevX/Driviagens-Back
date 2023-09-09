import httpStatus from "http-status";
import { PassengerServices } from "../services/passengerServices.js";



export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;
    await PassengerServices.createPassenger(firstName, lastName);
    return res.status(httpStatus.CREATED).send(`Passageiro Criado!`);
}