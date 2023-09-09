import { error } from "../errors/errors.js";
import { citiesRepositories } from "../repositories/citiesRepository.js"



async function createCity(name){
    const exists = await citiesRepositories.getCity(name);
    if(exists > 0){throw error.conflict("Cidade")};
    await citiesRepositories.insertCity(name);
}






export const citiesServices = { createCity }