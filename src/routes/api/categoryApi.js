const express = require('express')
const { add_category, update_category, get_all_category, get_active_category, delete_category } = require('../../controllers/categorys')
const multer = require('multer')
const jwtverification = require('../../middlewares/jwtVerification')
const checkRoles = require('../../middlewares/CheckRole')


const categoryApi = express.Router()
const upload = multer({dest: 'upload'})

categoryApi.post('/add-category',  upload.single('categoryImage'), add_category)
categoryApi.patch('/update-category-status',jwtverification,checkRoles(['admin']),  update_category)
categoryApi.get('/getAll_category',jwtverification,checkRoles(['admin','staff' ]), get_all_category)
categoryApi.get('/get_active_category',  get_active_category)// public route
categoryApi.delete('/deleteCategory',jwtverification,checkRoles(['admin']),  delete_category)

module.exports = categoryApi


// jwtverification,checkRoles(['admin' , 'staff']),