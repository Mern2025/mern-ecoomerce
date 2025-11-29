const express = require('express')
const { addProduct } = require('../../controllers/productController')
const productApi = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const uploadMiddleware = upload.fields([{name:'thumbnail', maxCount:1},{name:'subImages', maxCount:8}])
productApi.post('/add-product',uploadMiddleware, addProduct)


module.exports = productApi