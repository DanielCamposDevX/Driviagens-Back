import { db } from "../database/database.connection.js";



async function insertCity(name){
    await db.query(`INSERT INTO cities (name) VALUES($1)`,[name]);
}

async function getCity(name){
    const city = await db.query(`SELECT * FROM cities WHERE name=$1`,[name]);
    return city.rowCount;
}






export const citiesRepositories = { insertCity,getCity }