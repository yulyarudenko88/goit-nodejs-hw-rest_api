const { User } = require("../../models");

const {
  ctrlWrapper,
  HttpError,
  createVerificationEmail,
  sendEmail,
} = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Not authorized");

  if (user.verify) throw HttpError(400, "Verification has already been passed");

  const verifyEmail = createVerificationEmail(email, user.verificationToken);
  await sendEmail(verifyEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = {
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
