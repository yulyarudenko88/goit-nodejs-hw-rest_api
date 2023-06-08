const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { schemaJoi } = require("../../schemas");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getListContacts);

// router.get("/:contactId", ctrl.getByContactId);

// router.post("/", validateBody(schemaJoi), ctrl.addNewContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(schemaJoi), ctrl.updateContactData);

module.exports = router;
