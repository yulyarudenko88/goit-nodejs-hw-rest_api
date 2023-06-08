const { model } = require("mongoose");

const { contactsSchemaMongoose } = require("../schemas");
const { handleMongooseError } = require("../middlewares");

contactsSchemaMongoose.post("save", handleMongooseError);

const Contact = model("contact", contactsSchemaMongoose);

module.exports = Contact;
