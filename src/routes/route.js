const express = require('express')
const authApi = require('./api/authApi')
const categoryApi = require('./api/categoryApi')
const productApi = require('./api/productApi')
const route = express.Router()

route.use('/auth', authApi)
route.use('/category', categoryApi)
route.use('/product', productApi)


module.exports = route