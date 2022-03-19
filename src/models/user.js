const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    index: true,
    lowercase: true,
    unique: true,
    min: 3
  },
  email:{
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
  },
  hash_password: {
      type: String,
      required: true
  },
  role:{
      type: String,
      enum: ['user','admin'],
      default: 'user'
  },
  phoneNumber:{
      type: String
  },
  profilePicture:{
      type: String
  }
},{timestamps:true});

module.exports = mongoose.model("User");
