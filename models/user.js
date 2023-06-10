const { model } = require("mongoose");

const { usersSchemaMongoose } = require("../schemas/users");
const { handleMongooseError } = require("../middlewares");

usersSchemaMongoose.post("save", handleMongooseError);

const User = model("user", usersSchemaMongoose);

module.exports = User;