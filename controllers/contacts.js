const Joi = require("joi");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const getListContacts = async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getByContactId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addNewContact = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }
    const result = await addContact(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

const updateContactData = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getListContacts,
  getByContactId,
  addNewContact,
  deleteContact,
  updateContactData,
};
