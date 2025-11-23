const express = require('express')
const authApi = require('./api/authApi')
const categoryApi = require('./api/categoryApi')
const route = express.Router()

route.use('/auth', authApi)
route.use('/category', categoryApi)


module.exports = route