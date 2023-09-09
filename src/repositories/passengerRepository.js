import { db } from "../database/database.connection.js";

async function newPassenger(f, l) {
   const created = await db.query(`INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)`,[f, l]);
}








export const PassengerRep = { newPassenger }