import { db } from "../database/database.connection.js";


async function cityExists(id){
    const city = await db.query("SELECT * FROM cities WHERE id = $1",[id]);
    return city.rowCount;
}


async function insertFlight(data){
    await db.query("INSERT INTO flights (origin,destination,date) VALUES($1,$2,$3)",[data.origin,data.destination,data.date])
}















export const flightRepositories = { cityExists , insertFlight }