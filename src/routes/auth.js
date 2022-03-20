const express = require("express");
const { signup, signin, requireSignIn } = require("../controllers/auth");
const router = express.Router();

// Routing for Signin/Signup
// Post Request for SignIn/Signup Function

// Import SignIn/Login Controller
router.post("/signin", signin);

// Import SignUp Controller
router.post("/signup", signup);

// Route to check profile and necessary authentication
router.post('/profile', requireSignIn, (req,res)=>{
    res.status(200).json({ user: 'profile' })
})

module.exports = router;
