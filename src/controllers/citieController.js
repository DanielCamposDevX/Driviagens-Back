import httpStatus from "http-status";
import { citiesServices } from "../services/citiesServices.js";


async function newCitie(req,res){
    const { name } = req.body;
    await citiesServices.createCity(name);
    return res.status(httpStatus.CREATED).send("Cidade Cadastrada");
}








export const citiesControllers = { newCitie };