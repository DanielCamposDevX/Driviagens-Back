import { db } from "../database/database.connection.js";

async function cityExists(id) {
    const city = await db.query("SELECT * FROM cities WHERE id = $1", [id]);
    return city.rowCount;
}


async function insertFlight(data) {
    await db.query("INSERT INTO flights (origin,destination,date) VALUES($1,$2,$3)", [data.origin, data.destination, data.date])
}

async function selectFlights(query, queryParams) {
    const flights = await db.query(query, queryParams);
    return flights.rows;
}


async function getFlightid(name) {
    const query =
        `
    SELECT * FROM cities
    WHERE name = $1
      `

    const cities = await db.query(query, [name]);
    return cities.rows[0].id;
}














export const flightRepositories = { cityExists, insertFlight, selectFlights, getFlightid }