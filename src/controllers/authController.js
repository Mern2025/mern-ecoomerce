const { generateOTP, otpExpireTime } = require("../helpers/allGenerator")
const { emailRegex, passwordRegex } = require("../helpers/regex")
const sendMail = require("../helpers/sendMail")
const { otpTemplate } = require("../helpers/template")
const bcrypt = require('bcrypt');
const authModel = require("../models/authModel");
var jwt = require('jsonwebtoken');

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
      res.status(200).send({message: `register success and otp send to ${email}`, userInfo: email })
    }
    catch(err){
      res.status(500).send('internal server error')  
    }
}

// verify otp controller 
const verify_otp = async(req, res)=>{
 try{
  const {otp} = req.body

 if(!otp) return res.status(404).send('ot is required')

 const exsitOtp = await authModel.findOne({otp}) 

 if(!exsitOtp) return res.status(401).send('otp is not valid')

  const currentTime = new Date(Date.now())

  if(currentTime > exsitOtp.expireOtpTime  ) 
    return  res.status(401).send('otp verify time expire')
     exsitOtp.otp = null
     exsitOtp.expireOtpTime = null
     exsitOtp.isVerified = true
    await exsitOtp.save()
     res.status(200).send('otp verify success')
 }
 catch(err){
     res.status(500).send('internal serve error')
 }
}

// resend otp controller 
const resend_otp = async(req, res)=>{
   try{
      const {email} = req.body
    if(!emailRegex.test(email))  return res.status(400).send('invalid email')
    
    const existuser = await authModel.findOne({email})  

    if(!existuser) return res.status(401).send('please register your info and get your otp')
    
    const otp = generateOTP()  
    const expireTime = otpExpireTime()

    existuser.otp = otp
    existuser.expireOtpTime = expireTime

    existuser.save()

    sendMail(email , 'otp verification', otpTemplate(existuser.userName, otp))
    

   res.status(200).send('otp send to email address')
   }
   catch(err){
     res.status(500).send('internal server err')
   }
} 

// login controller
const loginController = async(req, res)=>{
   try{
      const {email, password} = req.body
      // user ------ validation-----------------------

      if(!emailRegex.test(email))  return res.status(401).send('invalid email')
      if(!passwordRegex.test(password))  return  res.status(401).send('password is not valid')

      const existuser = await authModel.findOne({email})



      if(!existuser) return res.status(404).send('this email has no account registered')

        const match = await bcrypt.compare(password, existuser.password);  

        if(match == false) return res.status(401).send('wrong password')
        
        if(!existuser.isVerified)  return res.status(401).send('email is not verified')

          // generate jwt toke
         const token = jwt.sign({
              email: existuser.email,
              role : existuser.userRole
             }, 
             process.env.jwt_secret, 
             { expiresIn: '1h'});

            const userInfo = {
              userName: existuser.userName,
              email:existuser.email,
              phone:existuser.phone,
              avatar: existuser.avatar,
              address:existuser.address
            } 


      res.status(200).send({userInfo:userInfo, accessToken:token})
   }
   catch(err){
      res.status(500).send('internal server error')
   }
}


// update profile controller
const updateProfile = (req,res)=>{
  try{
    const {userName, email, password, address, avatar, phone} = req.body
    
    const updateInfo = {}

    if(userName) updateInfo.userName = userName


    res.send(updateInfo)
  }
  catch(err){
    res.status(500).send(`Internal Server Error ${err}`)
  }
}


module.exports = {register_controller , verify_otp, resend_otp , resend_otp, loginController, updateProfile}