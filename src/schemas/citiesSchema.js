import Joi from "joi"

export const CitieSchema = Joi.object({
    name: Joi.string().min(2).max(50).required()
})

