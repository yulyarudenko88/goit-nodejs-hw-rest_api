const express = require("express");

const router = express.Router();

const ctrl = require('../../controllers/contacts')

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getByContactId);

router.post("/", ctrl.addNewContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.updateContactData);

module.exports = router;