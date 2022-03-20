const User = require("../models/user");
const jwt = require('jsonwebtoken');

// Signin function Authentication
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    // If user already exists
    if (user)
      return res.status(400).json({
        message: "Email Already Exists",
      });

    // Fetch details from request body and create new user
    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    // Post User data in database
    _user.save((error, data) => {
      // If error occurs
      if (error) {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
      // Save Data
      if (data) {
        return res.status(201).json({
          message: "User Created Successfully....",
        });
      }
    });
  });
};

// Signin function Authentication
exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    // If error
    if (error) return res.status(400).json({ error });

    // If user exists fetch details from database
    if (user) {
      if(user.authenticate(req.body.password)){
        // Fetch Details for particular user Token
        const token = jwt.sign({ _id: user._id},  process.env.JWT_SECRET, { expiresIn: '1h'} );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token, 
          user: {
            _id, firstName, lastName, email, role, fullName
          }
        });
      }
      else{
        return res.status(400).json({
          message: 'Invalid Password'
        })
      }
    } else {
      // Else return error
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
};
