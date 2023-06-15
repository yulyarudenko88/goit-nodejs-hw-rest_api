const Joi = require("joi");

const { emailRegexp, subscriptionList } = require("../../constants/auth");

const schema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

module.exports = schema;
