const Joi = require("joi");

const schema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = schema;
