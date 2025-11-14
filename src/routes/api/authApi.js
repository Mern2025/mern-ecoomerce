const express = require('express')
const {register_controller, verify_otp, resend_otp, loginController, updateProfile} = require('../../controllers/authController')
const authApi = express.Router()
const upload = multer({ dest: 'uploads/' })
authApi.post('/register', register_controller)
authApi.post('/verify-otp', verify_otp)
authApi.get('/resend-otp', resend_otp)
authApi.post('/login', loginController)
authApi.post('/updateProfile',upload.single('avatar'), updateProfile)

module.exports = authApi