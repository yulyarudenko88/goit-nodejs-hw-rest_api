const { Schema } = require("mongoose");

const { emailRegexp, subscriptionList } = require("../../constants/auth");
const schema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = schema;
