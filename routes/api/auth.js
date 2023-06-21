const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  userRegister,
  userLogin,
  userUpdateSubscription,
} = require("../../schemas/auth");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", upload.single('avatarURL'), validateBody(userRegister), ctrl.register);

router.post("/login", validateBody(userLogin), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(userUpdateSubscription),
  ctrl.updateSubscription
);

module.exports = router;
