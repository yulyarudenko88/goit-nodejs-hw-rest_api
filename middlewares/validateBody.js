const { HttpError } = require("../helpers");

const validateBody = (schema) =>
  function validation(req, res, next) {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const missingField = error.details[0].path;
      let errorMessage = "missing fields";

      if (Object.keys(req.body).length === 3)
        errorMessage = `missing required ${missingField[0]} field`;
      else if (
        missingField[0] === "favorite" &&
        Object.keys(req.body).length === 0
      ) {
        errorMessage = `missing field ${missingField[0]}`;
      }

      next(HttpError(400, errorMessage));
    }
    next();
  };

module.exports = validateBody;
