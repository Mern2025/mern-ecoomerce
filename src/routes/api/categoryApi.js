const express = require('express')
const { add_category } = require('../../controllers/categorys')
const categoryApi = express.Router()

categoryApi.post('/add-category', add_category)

module.exports = categoryApi

