const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  image: String,
  location: String,
  description: String,
  marker:Number,
  lastCreatedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Quest", UserSchema);
