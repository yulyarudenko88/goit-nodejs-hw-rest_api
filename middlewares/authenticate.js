const jwt = require("jsonwebtoken");

const { User } = require("../models");

const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log(authorization);
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") next(HttpError(401, "Not authorized"));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findBuId(id);
    if (!user) next(HttpError(401, "Not authorized"));
  } catch {
    next(HttpError(401, "Not authorized"));
  }

  next();
};

module.exports = authenticate;
