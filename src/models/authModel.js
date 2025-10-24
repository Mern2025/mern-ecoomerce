const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        default:null
    },
    expireOtpTime:{
        type:Date,
        default:null
    },
    userRole:{
        type:String,
        enum:['admin', 'staff', 'user'],
        default: 'user'
    },
    address:
        {
            city:{
                type:String,
                required:true
            },
            road:{
                type:String,
                required:true
            },
            country:{
                type:String,
                required:true
            }
        }
},{timestamps:true})


module.exports = mongoose.model('auth', authSchema)