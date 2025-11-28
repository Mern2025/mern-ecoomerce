const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   title:{
     type:String,
     required:true
   },
   thumbnail:{
    type:String,
    required:true
   },
   subImage:[{type:String, default:null}],
   price:{
    type:Number,
    required:true
   },
   variant:[
    {
        variantName:{
            type:String,
            default:null
        },
        extraPrice:{
           type:Number,
           default:null 
        }
    }
   ],
   categoryId:{
    type:mongoose.Schema.ObjectId
   }
})

module.exports = mongoose.model('products', ProductSchema)