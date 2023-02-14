const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const url = "mongodb://localhost:27017/Chat-web-new-app";
const connectDB = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected...");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
