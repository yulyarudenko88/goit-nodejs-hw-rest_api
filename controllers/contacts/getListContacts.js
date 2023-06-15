const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // console.log(req.query);
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  
  res.json(result);
};

module.exports = { getListContacts: ctrlWrapper(getListContacts) };
