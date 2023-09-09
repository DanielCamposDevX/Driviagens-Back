import Joi from "joi";


export const travelSchema = Joi.object({
    passengerId: Joi.number().required(),
    flightId: Joi.number().required()
})