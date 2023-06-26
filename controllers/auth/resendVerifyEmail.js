require("dotenv").config();

const { BASE_URL } = process.env;

const { User } = require("../../models");

const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Not authorized");

  if (user.verify) throw HttpError(400, "Verification has already been passed");

  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blanc" rel="noreferrer noopener">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = {
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
