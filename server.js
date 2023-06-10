const mongoose = require("mongoose");
const app = require("./app");

const {DB_HOST} = process.env;
// console.log(process.env)

// const DB_HOST =
//   "mongodb+srv://Yuliia:UtX1RVWqtg7bcpqy@cluster0.jxkuzgg.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });