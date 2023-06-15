const Joi = require("joi");

const { subscriptionList } = require("../../constants/auth");

const schema = Joi.object({
  subscription: Joi.string().valid(...subscriptionList).required(),
});

module.exports = schema;