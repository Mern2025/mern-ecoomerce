const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryImage:{
        type:String,
        required:true
    },
    creatorName:{
        type:mongoose.Schema.ObjectId,
        ref:'auths'
    }
},{timestamps:true})

// pending , approved, reject