const router = require("express").Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

// Get All Products
router.get('/products', (req, res) => {
    stripe.products.list({})
    .then(product => {
        res.status(200).json({ product })
    })
    .catch(err => {
        res.status(500).json({ err })
    })
})

// Get Product by product ID
router.get('/product/:id', (req, res) => {
    const id = req.params.id
    stripe.products.retrieve(id)
    .then(product => {
        res.status(200).json({ product })
    })
    .catch(err => {
        res.status(500).json({ err })
    })
})

// Get Product price by ProductId
router.get('/price/:id', (req, res) => {
    const productId = req.params.id;
    stripe.prices.list({
        product: productId
    })
    .then(price => {
        res.status(200).json({ price })
    })
    .catch(err => {
        res.status(500).json({ err })
    })
})

// Get Product & Price by ProductID:
router.get('/pnp/:id', (req, res) => {
    const productId = req.params.id;

    stripe.products.retrieve(productId)
    .then(item => {
        stripe.prices.list({
            product: productId
        })
        .then(price => {
            res.status(200).json({ product: item, price: price })
        })
        .catch(err => {
            res.status(500).json({ err, errorMessage: "An error occured while attempting to fetch data."})
        })
    })    
}) 

module.exports = router;