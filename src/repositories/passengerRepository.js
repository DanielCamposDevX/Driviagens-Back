import { db } from "../database/database.connection.js";

async function newPassenger(f, l) {
      await db.query(`INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)`, [f, l]);
}

async function selectPassengerTravels(name) {
      const query = `
      SELECT passengers.*, COUNT(travels.id) AS travels
      FROM passengers
      LEFT JOIN travels ON passengers.id = travels."passengerId"
      WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1
      GROUP BY passengers.id, passengers."firstName", passengers."lastName"
      ORDER BY COUNT(travels.id) DESC;
      `
      const travels = await db.query(query, [name]);
      console.log(travels);
      return { list: travels.rows, total: travels.rowCount };
}





export const PassengerRep = { newPassenger, selectPassengerTravels }