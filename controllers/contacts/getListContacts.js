const Contact = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const getListContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

module.exports = { getListContacts: ctrlWrapper(getListContacts) };
