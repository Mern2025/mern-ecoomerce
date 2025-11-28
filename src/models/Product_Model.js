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
    type:mongoose.Schema.ObjectId,
    ref:'category'
   },
   description:{
    type:String,
    required:true
   },
   review:[ 
    {
      reviewId:{
        type:mongoose.Schema.ObjectId,
        ref: 'auth'
      },
      review:{
        type:String,
        default:null
      }
    }
   ],
   discountPrice:{
    type:Number,
    default:null
   },
   tags:[
    {
      type:String,
      default:null
    }
   ],
   stock:{
    type:Number,
    required:true
   },
   SKU:{
    type:Number,
    required:true
   },
   adminApproval:{
    type:String,
    default:pending,
    enum:['pending', 'approved', 'cancel']
    },
})
module.exports = mongoose.model('products', ProductSchema)