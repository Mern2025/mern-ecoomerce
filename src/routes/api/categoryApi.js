const express = require('express')
const { add_category, update_category, get_all_category, get_active_category, delete_category } = require('../../controllers/categorys')
const multer = require('multer')
const categoryApi = express.Router()
const upload = multer({dest: 'upload'})

categoryApi.post('/add-category', upload.single('categoryImage'), add_category)
categoryApi.patch('/update-category-status', update_category)
categoryApi.get('/getAll_category', get_all_category)
categoryApi.get('/get_active_category', get_active_category)
categoryApi.delete('/deleteCategory', delete_category)

module.exports = categoryApi

