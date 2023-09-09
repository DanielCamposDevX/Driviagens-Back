import { error } from "../errors/errors.js";
import { travelRepositories } from "../repositories/travelRepository.js"

async function createTravel(data){
    const flight = await travelRepositories.getFlight(data.flightId);
    if(flight.length === 0){throw error.notFound("Voo")}
    const passenger = await travelRepositories.getPassenger(data.passengerId);
    if(passenger.length === 0){throw error.notFound("Passageiro")}
    await travelRepositories.postTravel(data);
}










export const travelServices = { createTravel }