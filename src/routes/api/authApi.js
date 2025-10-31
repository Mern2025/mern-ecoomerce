const express = require('express')
const {register_controller, verify_otp, resend_otp, loginController} = require('../../controllers/authController')
const authApi = express.Router()

authApi.post('/register', register_controller)
authApi.post('/verify-otp', verify_otp)
authApi.get('/resend-otp', resend_otp)
authApi.post('/login', loginController)

module.exports = authApi