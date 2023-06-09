const { getListContacts } = require("./getListContacts");
const { getByContactId } = require("./getByContactId");
const { addNewContact } = require("./addNewContact");
const { deleteContact } = require("./deleteContact");
const {
  updateContactData,
  updateStatusContact,
} = require("./updateContactData");

module.exports = {
  getListContacts,
  getByContactId,
  addNewContact,
  deleteContact,
  updateContactData,
  updateStatusContact,
};
