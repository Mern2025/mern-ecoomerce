const { generateOTP, otpExpireTime } = require("../helpers/allGenerator")
const { emailRegex, passwordRegex } = require("../helpers/regex")
const sendMail = require("../helpers/sendMail")
const { otpTemplate } = require("../helpers/template")
const bcrypt = require('bcrypt');
const authModel = require("../models/authModel");
// register controller
const register_controller = async(req, res)=>{
    try{
        // getting info from  client 
        const {userName, email, phone, password, address, userRole} = req.body
        // input field validation
     
        if(!userName || !email || !phone || !password || !address) return res.status(400).send('All Field Require')

        if(!emailRegex.test(email))  return res.status(400).send('invalid email')
        if(password.length < 6 || password.length > 15 )  return  res.status(400).send('please choose and password 6 to 15 letters')
        if(!passwordRegex.test(password)) return res.status(400).send('password is weak')   

          // exist user checking
        const existUser = await authModel.findOne({email})

        if(existUser) return res.status(401).send('User Already Exist')




        const otp =  generateOTP()

        sendMail(email , 'otp verification', otpTemplate(userName, otp))

        const hashpass = await bcrypt.hash(password, 10)


        // sav to db
     const DataSave = new  authModel({
        userName,
        email,
        phone,
        password:hashpass,
        address,
        userRole,
        otp,
        expireOtpTime:otpExpireTime(),
      }) 
     console.log(DataSave,"myData")
      await DataSave.save()

       res.status(200).send('register success')     

    }
    catch(err){
      res.status(500).send('internal server error')  
    }
}


module.exports = register_controller 