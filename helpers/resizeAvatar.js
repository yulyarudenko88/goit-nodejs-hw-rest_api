const jimp = require('jimp');

const resizeAvatar = async filePath => {
  const avatar = await jimp.read(filePath);
  avatar.resize(250, 250);
  await avatar.writeAsync(filePath);
};

module.exports = resizeAvatar;