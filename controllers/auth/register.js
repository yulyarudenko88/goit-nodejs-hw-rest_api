const bcrypt = require("bcryptjs");
const fs = require("fs").promises;
const path = require("path");

const { User } = require("../../models");

const { ctrlWrapper, HttpError } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");

const register = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const { email, password } = req.body;
  const { path: oldPath, filename } = req.file;

  const newPath = path.join(avatarsDir, filename);
  await fs.rename(oldPath,newPath);

  const user = await User.findOne({ email });
  if (user) throw HttpError(409, "Email in use");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res
    .status(201)
    .json({
      user: { email: newUser.email, subscription: newUser.subscription },
    });
};

module.exports = {
  register: ctrlWrapper(register),
};
