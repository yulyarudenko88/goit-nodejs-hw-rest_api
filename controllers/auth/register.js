const { User } = require("../../models");

const { ctrlWrapper, HttpError } = require("../../helpers");

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, "Email in use");
  // console.log(req.body);
  // console.log(User)
  const newUser = await User.create(req.body);
  // console.log(newUser);
  res
    .status(201)
    .json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = {
  register: ctrlWrapper(register),
};
