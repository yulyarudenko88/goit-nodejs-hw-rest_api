require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const msg = { ...data, from: "denirudenko89@gmail.com" };

  await sgMail.send(msg);

  return true;
};

module.exports = sendEmail;
