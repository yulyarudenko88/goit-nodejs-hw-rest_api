const Joi = require("joi");

const { emailRegexp } = require("../../constants/auth");

const schema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = schema;
