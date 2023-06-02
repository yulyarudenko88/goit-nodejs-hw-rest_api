const { HttpError } = require("../helpers");

const validateBody = (schema) =>
  function validation(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      const missingField = error.details[0].path;
      const errorMessage =
        Object.keys(req.body).length === 2
          ? `missing required ${missingField[0]} field`
          : "missing fields";

      next(HttpError(400, errorMessage));
    }
    next();
  };

module.exports = validateBody;
