const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  image: Joi.string(),
  password: Joi.string().alphanum().min(8).required(),
});

const signupValidation = (dataObj) => signupSchema.validateAsync(dataObj, { abortEarly: false });

module.exports = signupValidation;
