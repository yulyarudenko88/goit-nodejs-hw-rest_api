const { User } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const logout = async (req, res) => {
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });

  res.status(204).json({ message: "No Content" });
};

module.exports = {
  logout: ctrlWrapper(logout),
};
