const { model } = require("mongoose");

const { contactsSchemaMongoose } = require("../schemas/contacts");
const { handleMongooseError } = require("../helpers");

contactsSchemaMongoose.post("save", handleMongooseError);

const Contact = model("contact", contactsSchemaMongoose);

module.exports = Contact;
