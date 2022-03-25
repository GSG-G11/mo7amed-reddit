const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).required(),
});

const signupValidation = (dataObj) => signupSchema.validateAsync(dataObj);

module.exports = signupValidation;
