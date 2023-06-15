const { model } = require("mongoose");

const { usersSchemaMongoose } = require("../schemas/auth");
const { handleMongooseError } = require("../helpers");

usersSchemaMongoose.post("save", handleMongooseError);

const User = model("user", usersSchemaMongoose);

module.exports = User;