const express = require('express')
const { addProduct } = require('../../controllers/productController')
const productApi = express.Router()

productApi.post('/add-product', addProduct)


module.exports = productApi