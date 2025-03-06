const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedin');
const productModel = require('../models/poduct-model');
const userModel = require('../models/user-model');

router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index', { error, loggedin: false }); // Ensure error is always passed
});

router.get('/shop', isLoggedin, async (req, res) => {
    let products = await productModel.find();
    let success = req.flash('success');
    res.render('shop', { products, success });
}); 

router.get('/addtocart/:productid', isLoggedin, async (req, res) => {
    let user = await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash('success', 'Product added to cart');
    res.redirect('/shop');
}); 

router.get('/logout', isLoggedin, (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
}); 
module.exports = router;