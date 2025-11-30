const express = require('express')
const { addProduct, update_Status } = require('../../controllers/productController')
const productApi = express.Router()
const multer  = require('multer')
const jwtverification = require('../../middlewares/jwtVerification')
const checkRoles = require('../../middlewares/CheckRole')
const upload = multer({ dest: 'uploads/' })

const uploadMiddleware = upload.fields([{name:'thumbnail', maxCount:1},{name:'subImages', maxCount:8}])

productApi.post('/add-product', jwtverification, checkRoles(['staff', 'admin']), uploadMiddleware, addProduct)
productApi.patch('/update-status', update_Status)



module.exports = productApi