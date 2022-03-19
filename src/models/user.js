const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// Mongoose Schema for user databse design
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

// Virtual Password/ Encrypted Passowrd genration
userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

// Virtual Key to add firstname and lastname and generate fullname 
userSchema.virtual('fullName')
.get(function(){
  return `${this.firstName} ${this.lastName}`;
});

// User Authentication and Validation function
userSchema.methods = {
    authenticate: function(){
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model("User", userSchema);