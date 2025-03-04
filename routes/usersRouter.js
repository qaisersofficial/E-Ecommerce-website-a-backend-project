const express = require('express');
const router = express.Router();
const { registerUser } = require("../controllers/authController")

router.get('/', (req, res) => {
    res.send('user route');
});
// localhost:300/users/register
router.get('/register', registerUser);

module.exports = router;