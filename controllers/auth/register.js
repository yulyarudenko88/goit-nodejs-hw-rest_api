require("dotenv").config();
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const { BASE_URL } = process.env;

const { User } = require("../../models");

const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) throw HttpError(409, "Email in use");

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = await gravatar.url(email, { protocol: "http", s: "250" }); 
  const verificationToken = nanoid();
 
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blanc" rel="noreferrer noopener">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: { email: newUser.email, subscription: newUser.subscription },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
