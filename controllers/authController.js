const userModel = require("../models/user-model");
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');
// /users/register
// register a user
module.exports.registerUser = async (req, res) => {
    try{
     let {fullname, email, password} = req.body;
 
     let user = await userModel.findOne({ email });
        if(user) return res.send("user already exists, please login");
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
                 res.redirect('/');
             }
         });
     });
    }catch(err){
     res.send(err.message);
    }
     
 }

// /users/login
// login a user
module.exports.loginUser = async (req, res) => {
    try{
     let {email, password} = req.body;
     let user = await userModel.findOne({ email });
        if(!user) return res.send("user not found, please register");

        bcrypt.compare(password, user.password, (err, result) => {
            if(err) return res.send(err.message);
            if(result){
                let token = generateToken(user);
                res.cookie('token', token, { httpOnly: true });
                res.redirect('/shop');
            }else{
                res.send("password incorrect");
            }
        }
        );
    }
    catch(err){
     res.send(err.message);
    }
    }

// /users/logout
// logout a user
module.exports.logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.redirect('/'); 
}