const fs = require("fs").promises;
const path = require("path");

const { User } = require("../../models");

const { HttpError, ctrlWrapper, resizeAvatar } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id: id } = req.user;

  if (!req.file) throw HttpError(401, "Not authorized");
  const { path: oldPath, filename } = req.file;
  
  await resizeAvatar(oldPath)

  const newPath = path.join(avatarsDir, filename);
  await fs.rename(oldPath, newPath);

  const avatar = path.join("avatars", filename);

  const { avatarURL } = await User.findByIdAndUpdate(
    id,
    { avatarURL: avatar },
    {
      new: true,
    }
  );

  res.status(200).json({ avatarURL });
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
