import { error } from "../errors/errors.js";
import { flightRepositories } from "../repositories/flightsRepository.js";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);




async function createFlight(data) {

    if (data.origin === data.destination) { throw error.conflict("origin and destination"); };
    const flightDate = dayjs(data.date, 'DD-MM-YYYY').toDate();
    const today = new Date();
    if(flightDate <= today){
        throw error.unprocEntity("data deve ser futura");
    }
    const origin = await flightRepositories.cityExists(data.origin);
    if (origin === 0) { throw error.notFound("Origem") };

    const destination = await flightRepositories.cityExists(data.destination);
    if (destination === 0) { throw error.notFound("Destino") };

    const formattedData = { ...data, date: dayjs(data.date, 'DD-MM-YYYY').format('YYYY-MM-DD') }
    console.log('test')
    flightRepositories.insertFlight(formattedData);
}





export const flightServices = { createFlight };