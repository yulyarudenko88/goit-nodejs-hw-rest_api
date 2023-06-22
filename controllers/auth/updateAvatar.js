const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  console.log(req.file)
//   const { subscription: newSubscription } = req.body;
//   const { _id: id, subscription, email } = req.user;

//   if (newSubscription === subscription)
//     throw HttpError(
//       400,
//       `User ${email} already has ${subscription} subscription`
//     );

//   const result = await User.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });

//   res.status(200).json(result);
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};