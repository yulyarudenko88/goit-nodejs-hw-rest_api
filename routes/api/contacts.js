const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { contactsSchemaJoi } = require("../../schemas");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getListContacts);

// router.get("/:contactId", ctrl.getByContactId);

// router.post("/", validateBody(contactsSchemaJoi), ctrl.addNewContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(contactsSchemaJoi), ctrl.updateContactData);

module.exports = router;
