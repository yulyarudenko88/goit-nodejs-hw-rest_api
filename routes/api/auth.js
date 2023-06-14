const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { userRegister, userLogin } = require("../../schemas/auth");

const ctrl = require("../../controllers/auth");

const router = express.Router();
// console.log(ctrl)
router.post('/register', validateBody(userRegister), ctrl.register)

router.post('/login', validateBody(userLogin), ctrl.login)

router.get('/current', authenticate, ctrl.getCurrentUser)

module.exports = router;