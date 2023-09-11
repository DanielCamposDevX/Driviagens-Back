import { error } from "../errors/errors.js";
import { PassengerRep } from "../repositories/passengerRepository.js"


async function createPassenger(firstName, lastName) {
    await PassengerRep.newPassenger(firstName, lastName);
}



async function passengerTravels(name) {
    if (!name){
        throw error.notFound("Nome");
    }
    const travels = await PassengerRep.selectPassengerTravels(name);
    if (travels.total > 10) { throw error.InternalServer("Too many results") };
    if (travels.total === 0) { throw error.notFound("nome")};
    return travels.list;
}








export const PassengerServices = { createPassenger, passengerTravels }