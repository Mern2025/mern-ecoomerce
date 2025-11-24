const express = require('express')
const { add_category, update_category } = require('../../controllers/categorys')
const multer = require('multer')
const categoryApi = express.Router()
const upload = multer({dest: 'upload'})

categoryApi.post('/add-category', upload.single('categoryImage'), add_category)
categoryApi.patch('/update-category-status', update_category)

module.exports = categoryApi

