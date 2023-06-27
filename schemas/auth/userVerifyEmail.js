const Joi = require("joi");

const { emailRegexp } = require("../../constants/auth");

const schema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = schema;
