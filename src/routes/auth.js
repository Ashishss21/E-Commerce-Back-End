const express = require("express");
const { signup, signin } = require("../controllers/auth");
const router = express.Router();

// Routing for Signin/Signup
// Post Request for SignIn/Signup Function

// Import SignIn/Login Controller
router.post("/signin", signin);

// Import SignUp Controller
router.post("/signup", signup);

module.exports = router;
