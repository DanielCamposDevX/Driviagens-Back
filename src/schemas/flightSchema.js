import Joi from "joi";
import JoiDate from '@joi/date';

const extendedJoi = Joi.extend(JoiDate);

const flightSchema = extendedJoi.object({
    origin: extendedJoi.number().positive().required(),
    destination: extendedJoi.number().positive().required(),
    date: extendedJoi.date().format('DD-MM-YYYY').utc().required()
});

const dateSchema = extendedJoi.object({
    'smaller-date': extendedJoi.date().format('DD-MM-YYYY').utc().required(),
    'bigger-date': extendedJoi.date().format('DD-MM-YYYY').utc().required()
});



export const flightSchemas = { flightSchema, dateSchema };