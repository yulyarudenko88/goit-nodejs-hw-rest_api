const express = require("express");

const { validateBody } = require("../../middlewares");
const { usersSchemaJoi } = require("../../schemas/auth");

const ctrl = require("../../controllers/auth");

const router = express.Router();
console.log(ctrl)
router.post('/register', validateBody(usersSchemaJoi), ctrl.register)

module.exports = router;
// usersSchemaMongoose