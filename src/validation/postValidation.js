const joi = require('joi');

const postSchema = joi.object({
  title: joi.string().min(5).max(100).required(),
  description: joi.string().min(5).max(1000).required(),
  image: joi.string(),
});
const postValidation = (dataObj) => postSchema.validateAsync(dataObj, { abortEarly: false });

module.exports = postValidation;
