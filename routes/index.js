const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedin');
const productModel = require('../models/poduct-model');

router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index', { error}); // Ensure error is always passed
});

router.get('/shop', isLoggedin, async (req, res) => {
    let products = await productModel.find();
    res.render('shop', { products });
}); 

router.get('/logout', isLoggedin, (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
}); 
module.exports = router;