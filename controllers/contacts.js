const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getListContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getByContactId = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addNewContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(200).json({ message: "contact deleted" });
// };

// const updateContactData = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json(result);
// };

module.exports = {
  getListContacts: ctrlWrapper(getListContacts),
  getByContactId: ctrlWrapper(getByContactId),
  addNewContact: ctrlWrapper(addNewContact),
  // deleteContact: ctrlWrapper(deleteContact),
  // updateContactData: ctrlWrapper(updateContactData),
};
