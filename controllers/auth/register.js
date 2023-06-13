const {User} = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const register = async (req, res) => {
  console.log(req.body);
  console.log(User)
  const newUser = await User.create(req.body);
  console.log(newUser);
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

module.exports = {
  register: ctrlWrapper(register),
};