const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");

router.get('/', (req, res) => {
    res.send('user route');
});
// localhost:300/users/register
router.get('/register',async (req, res) => {
   try{
    let {fullname, email, password} = req.body;

   const user =  await userModel.create({
        fullname,
        email,
        password
    });
    res.send(user);
   }catch(err){
    res.send(err.message);
   }
    
});

module.exports = router;