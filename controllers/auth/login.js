const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const { ctrlWrapper, HttpError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email or password is wrong");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, "Email or password is wrong");

  const token = "";

  res
    .status(201)
    .json({
      token,
      user: { email: user.email, subscription: user.subscription },
    });
};

module.exports = {
  register: ctrlWrapper(login),
};
