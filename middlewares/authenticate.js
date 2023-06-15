const jwt = require("jsonwebtoken");

const { User } = require("../models");

const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  // console.log(authorization);
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") next(HttpError(401, "Not authorized"));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    // console.log(id);
    const user = await User.findById(id);
    // console.log(user);
    if (!user || !user.token) next(HttpError(401, "Not authorized"));

    req.user = user;
  } catch {
    next(HttpError(401, "Not authorized"));
  }

  next();
};

module.exports = authenticate;
