const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

router.get('/', (req, res) => {
    res.send('user route');
});
// localhost:300/users/register
router.get('/register',async (req, res) => {
   try{
    let {fullname, email, password} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if(err) return res.send(err.message);
            else {
                const user =  await userModel.create({
                    fullname,
                    email,
                    password: hash
                });
            //    let token = jwt.sign({ email, id:user.id }, 'qaiserEcommerce', { expiresIn: '1h' });
                let token = generateToken(user);
                res.cookie('token', token, { httpOnly: true });
                res.send("user created");
            }
        });
    });
   }catch(err){
    res.send(err.message);
   }
    
});

module.exports = router;