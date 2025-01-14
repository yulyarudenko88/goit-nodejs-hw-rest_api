const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  userRegister,
  userLogin,
  userUpdateSubscription,
  userVerifyEmail,
} = require("../../schemas/auth");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(userRegister), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(userVerifyEmail), ctrl.resendVerifyEmail);

router.post("/login", validateBody(userLogin), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(userUpdateSubscription),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
