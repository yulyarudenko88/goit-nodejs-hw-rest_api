const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const { ErrorHandler, writeContacts } = require("../helpers");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  return ErrorHandler(async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  });
}

async function getContactById(contactId) {
  return ErrorHandler(async () => {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);

    return contact || null;
  });
}

async function removeContact(contactId) {
  return ErrorHandler(async () => {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
      return null;
    }
    const [deletedContact] = contacts.splice(index, 1);

    await writeContacts(contactsPath, contacts);
    return deletedContact;
  });
}

async function addContact({ name, email, phone }) {
  return ErrorHandler(async () => {
    const contacts = await listContacts();

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);

    await writeContacts(contactsPath, contacts);
    return newContact;
  });
}

const updateContact = async (contactId, { name, email, phone }) => {
  return ErrorHandler(async () => {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
      return null;
    }
    contacts[index] = { ...contacts[index], name, email, phone };

    await writeContacts(contactsPath, contacts);
    return contacts[index];
  });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
