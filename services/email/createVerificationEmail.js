require("dotenv").config();

const { BASE_URL } = process.env;

const createVerificationEmail = (email, params) =>  ({
    to: email,
    subject: "Verify your email",
    html: `<a href="${BASE_URL}/api/users/verify/${params}" target="_blanc" rel="noreferrer noopener">Click to verify email</a>`,
  });

module.exports = createVerificationEmail;
