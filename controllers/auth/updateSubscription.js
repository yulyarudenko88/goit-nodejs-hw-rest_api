const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { contactId } = req.params;
  const result = await User.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
