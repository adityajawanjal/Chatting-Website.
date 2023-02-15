const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    members: Array,
    message:String,
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
