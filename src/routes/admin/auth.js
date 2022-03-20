const express = require("express");
const { signup, signin, requireSignIn } = require("../../controllers/admin/auth");
const router = express.Router();

// Routing for Signin/Signup
// Post Request for SignIn/Signup Function

// Import Admin SignIn/Login Controller
router.post("/admin/signin", signin);

// Import SignUp Controller
router.post("/admin/signup", signup);

module.exports = router;
