const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controllers/authController")
router.get('/', (req, res) => {
    res.send('user route');
});
// localhost:300/users/register
router.post('/register', registerUser);

// localhost:300/users/login
router.post('/login', loginUser);

// localhost:300/users/logout
router.get("/logout", logoutUser);

module.exports = router;