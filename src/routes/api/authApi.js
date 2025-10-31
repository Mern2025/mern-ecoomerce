const express = require('express')
const {register_controller, verify_otp} = require('../../controllers/authController')
const authApi = express.Router()

authApi.post('/register', register_controller)
authApi.post('/verify-otp', verify_otp)

module.exports = authApi