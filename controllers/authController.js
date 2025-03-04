const userModel = require("../models/user-model");
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = (req, res) => {
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
     
 }