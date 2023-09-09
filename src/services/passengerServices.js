import { error } from "../errors/errors.js";
import { PassengerRep } from "../repositories/passengerRepository.js"


async function createPassenger(firstName,lastName){
    await PassengerRep.newPassenger(firstName,lastName);
}












export const PassengerServices = {createPassenger}