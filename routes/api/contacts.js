const express = require("express");

const router = express.Router();

// const { validateBody } = require("../../middlewares");
// const { contactsSchema } = require("../../schemas");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getListContacts);

// router.get("/:contactId", ctrl.getByContactId);

// router.post("/", validateBody(contactsSchema), ctrl.addNewContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(contactsSchema), ctrl.updateContactData);

module.exports = router;
