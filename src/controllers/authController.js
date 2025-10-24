const { generateOTP } = require("../helpers/allGenerator")
const { emailRegex, passwordRegex } = require("../helpers/regex")
const sendMail = require("../helpers/sendMail")
const { otpTemplate } = require("../helpers/template")
// register controller
const register_controller = (req, res)=>{
    try{
        // getting info from  client 
        const {userName, email, phone, password, address} = req.body
        // input field validation

        if(!userName || !email || !phone || !password || !address) return res.status(404).send('All Field Require')

        if(!emailRegex.test(email))  return res.status(401).send('invalid email')
        if(password.length < 6 || password.length > 15 )  return  res.status(401).send('please choose and password 6 to 15 letters')
        if(!passwordRegex.test(password)) return res.status(401).send('password is weak')   

      sendMail(email , 'otp verification', otpTemplate(userName, generateOTP()))


       res.status(200).send('register success')     

    }
    catch(err){
      res.status(500).send('internal server error')  
    }
}


module.exports = register_controller 