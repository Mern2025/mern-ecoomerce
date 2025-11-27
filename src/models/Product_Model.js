const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    tags:[
        {
            tagType:{
                type:String,
                required: true
            },
            tagValue:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('products', ProductSchema)