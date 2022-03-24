// Validators for authentication, both signin and signup

const { check, validationResult } = require("express-validator");

exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("firstName is empty"),
  check("lastName").notEmpty().withMessage("lastName is empty"),
  check("email").notEmpty().withMessage("Please add valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password is too short, must be 6 characters long"),
];

exports.validateSignInRequest = [
  check("email").notEmpty().withMessage("Please add valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password is too short, must be 6 characters long"),
];

// Check if the request is being validated or not and print the errors
exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if(errors.array().length > 0){
    return res.status(400).json({ errors: errors.array()[0].msg })
  }
  next();
};
