const express = require("express");
const { signup } = require("../controllers/user");
const router = express.Router();

// Routing for Signin/Signup
// Post Request for SignIn/Signup Function

router.post("/signin", (req, res) => {});

router.post("/signup", signup);

module.exports = router;
