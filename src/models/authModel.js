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
        default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
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
    address:{
        type:String,
        required:true
    },
    isVerified:{
        type: Boolean,     
        default: false     
    }
},{timestamps:true})


module.exports = mongoose.model('auth', authSchema)