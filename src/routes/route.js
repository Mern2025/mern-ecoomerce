const express = require('express')
const authApi = require('./api/authApi')
const route = express.Router()
route.use('/auth', authApi)


module.exports = route