const express = require('express')
const { add_category } = require('../../controllers/categorys')
const categoryApi = express.Router()
const upload = multer({dest: 'upload'})

categoryApi.post('/add-category', upload.single('categoryImage'), add_category)

module.exports = categoryApi

