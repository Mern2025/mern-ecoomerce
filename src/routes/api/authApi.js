const express = require('express')
const register_controller = require('../../controllers/authController')
const authApi = express.Router()

authApi.post('/register', register_controller)


module.exports = authApi