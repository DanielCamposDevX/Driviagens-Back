import { error } from "../errors/errors.js";
import { flightRepositories } from "../repositories/flightsRepository.js";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { flightSchemas } from "../schemas/flightSchema.js";
dayjs.extend(customParseFormat);
import moment from "moment";





async function createFlight(data) {

    if (data.origin === data.destination) { throw error.conflict("origin and destination"); };
    const flightDate = dayjs(data.date, 'DD-MM-YYYY').toDate();
    const today = new Date();
    if (flightDate <= today) {
        throw error.unprocEntity("data deve ser futura");
    }
    const origin = await flightRepositories.cityExists(data.origin);
    if (origin === 0) { throw error.notFound("Origem") };

    const destination = await flightRepositories.cityExists(data.destination);
    if (destination === 0) { throw error.notFound("Destino") };

    const formattedData = { ...data, date: dayjs(data.date, 'DD-MM-YYYY').format('YYYY-MM-DD') }

    flightRepositories.insertFlight(formattedData);
}

async function showFlights(reqQuery) {

    if (reqQuery['smaller-date'] || reqQuery['bigger-date']) {
        const validation = flightSchemas.dateSchema.validate({ 'smaller-date': reqQuery['smaller-date'], 'bigger-date': reqQuery['bigger-date'] }, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw error.unprocEntity(errors);
        }
    }
    if (reqQuery['smaller-date'] > reqQuery['bigger-date']) {
        throw error.BadReq("smaller-date deveria ser menor que bigger-date");
    }
    let origin = '';
    let destination = '';
    if (reqQuery.origin) {
        origin = await flightRepositories.getFlightid(reqQuery.origin);
    }
    if (reqQuery.destination) {
        destination = await flightRepositories.getFlightid(reqQuery.destination);
    }

    const queryParts = [];
    const queryParams = [];

    if (reqQuery.destination) {
        queryParts.push(`destination = $${queryParts.length + 1}`);
        queryParams.push(destination);
    }

    if (reqQuery.origin) {
        queryParts.push(`origin = $${queryParts.length + 1}`);
        queryParams.push(origin);
    }

    if (reqQuery['smaller-date'] && reqQuery['bigger-date']) {
        queryParts.push(`date >=  $${queryParts.length + 1} AND date <=  $${queryParts.length + 2}`);
        const smaller = dayjs(reqQuery['smaller-date'], 'DD-MM-YYYY').format('YYYY-MM-DD');
        const bigger = dayjs(reqQuery['bigger-date'], 'DD-MM-YYYY').format('YYYY-MM-DD');
        queryParams.push(smaller);
        queryParams.push(bigger);
    }

    const query = `
      SELECT *
      FROM flights
      ${queryParts.length > 0 ? 'WHERE ' + queryParts.join(' AND ') : ''}
      ORDER BY date DESC;
    `;

    const flights = await flightRepositories.selectFlights(query, queryParams);
    for (const flight of flights) {
        flight.date = moment(flight.date).utc().format('DD-MM-YYYY');
    }

    return flights;
}




export const flightServices = { createFlight, showFlights };