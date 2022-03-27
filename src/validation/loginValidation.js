const Joi = require('joi');

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});
const loginValidation = (dataObj) => loginValidationSchema.validateAsync(dataObj);

module.exports = loginValidation;
