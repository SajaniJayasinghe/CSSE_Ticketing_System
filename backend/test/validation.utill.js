const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const BusSchema = Joi.object({
  busNumber: Joi.string().min(3).required().label("busNumber"),
  length: Joi.string().min(1).required().label("length"),
  departure: Joi.string().min(3).required().label("departure"),
  destination: Joi.string().min(3).required().label("destination"),
  route: Joi.string().min(3).required().label("route"),
  seats: Joi.string().min(1).required().label("seats"),
}).unknown(true);

module.exports = {
  BusSchema,
};
