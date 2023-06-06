const fs = require("fs").promises;

const writeContacts = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeContacts;