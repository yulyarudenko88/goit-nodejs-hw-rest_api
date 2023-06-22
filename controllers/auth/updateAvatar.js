const fs = require('fs').promises
const path = require('path')

const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

// const avatarsDir = path.resolve("public", "movies");

const updateAvatar = async (req, res, next) => {
  console.log(req.file)

  // const { _id: owner } = req.user;
  //   const { path: oldPath, filename } = req.file;
  //   const newPath = path.join(moviesDir, filename);
  //   await fs.rename(oldPath, newPath);
  //   const poster = path.join("movies", filename);
  //   const result = await Movie.create({...req.body, poster, owner});
  //   res.status(201).json(result);


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