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
    },
    adminApproval:{
        type:String,
        enum:['approved', 'pending', 'cancel'],
        default:'pending'
    }
},{timestamps:true})



// pending , approved, reject