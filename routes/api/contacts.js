const express = require("express");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");
const {
  contactsSchemaJoi,
  contactsUpdateFavoriteSchema,
} = require("../../schemas/contacts");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getListContacts);

router.get("/:contactId", isValidId, ctrl.getByContactId);

router.post("/", validateBody(contactsSchemaJoi), ctrl.addNewContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchemaJoi),
  ctrl.updateContactData
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
