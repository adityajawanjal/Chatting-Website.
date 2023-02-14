const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    iss: String,
    nbf: Number,
    aud: String,
    sub: Number,
    email: String,
    email_verified: Boolean,
    azp: String,
    name: String,
    picture: String,
    given_name: String,
    family_name: String,
    iat: Number,
    exp: Number,
    jti:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
