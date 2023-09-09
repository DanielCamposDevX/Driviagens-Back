import { db } from "../database/database.connection.js"





async function getPassenger(id){
    const passenger = await db.query('SELECT * FROM passengers WHERE id = $1',[id]);
    return passenger.rows;

}

async function getFlight(id){
    const flight = await db.query('SELECT * FROM passengers WHERE id = $1',[id]);
    return flight.rows;
}


async function postTravel(data){
    await db.query('INSERT INTO travels ("passengerId","flightId") VALUES($1,$2)',[data.passengerId,data.flightId]);
}







export const travelRepositories = { getPassenger, getFlight,postTravel };