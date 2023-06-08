const express = require("express");

const router = express.Router();

const { validateBody,isValidId } = require("../../middlewares");
const { contactsSchemaJoi } = require("../../schemas");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getListContacts);

router.get("/:contactId", isValidId, ctrl.getByContactId);

router.post("/", validateBody(contactsSchemaJoi), ctrl.addNewContact);

// router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", isValidId, validateBody(contactsSchemaJoi), ctrl.updateContactData);

router.puch("/:contactId/favorite", isValidId, validateBody(contactsSchemaJoi), ctrl.updateContactData);

module.exports = router;
