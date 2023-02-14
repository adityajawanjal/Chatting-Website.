const User = require("../models/user-model");

exports.addUser = async (req, res) => {
  try {
    let userExists = await User.findOne({ sub: req.body.sub });
    if (!userExists) {
      const user = new User(req.body);
      const data = await user.save();
      res.send(data);
    } else {
      res.send("User already exists !");
    }
  } catch (err) {
    console.log(`The error is :- ${err}`);
  }
};

exports.getAllusers = async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
