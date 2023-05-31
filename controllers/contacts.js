const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
const { ctrlWrapper } = require("../helpers");
const { HttpError } = require("../helpers");

const getListContacts = async (_, res) => {
  const result = await listContacts();
  res.json(result);
};

const getByContactId = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addNewContact = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing required name field");
  }
  const result = await addContact(req.body);

  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

const updateContactData = async (req, res) => { 
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }

    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
};

module.exports = {
  getListContacts: ctrlWrapper(getListContacts),
  getByContactId: ctrlWrapper(getByContactId),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContactData: ctrlWrapper(updateContactData),
};