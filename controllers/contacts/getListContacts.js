const Contact = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }).populate(
    "owner",
    "email subscription"
  );
  res.json(result);
};

module.exports = { getListContacts: ctrlWrapper(getListContacts) };
