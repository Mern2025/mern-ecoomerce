const { emailRegex, passwordRegex } = require("../helpers/regex")

// register controller
const register_controller = (re, res)=>{
    try{
        const {userName, email, phone, password, address} = req.body

        if(!userName || !email || !phone || !password || !address) return res.status(404).send('All Field Require')

        if(!emailRegex.test(email))  return res.status(401).send('invalid email')
        if(!passwordRegex.test(password)) return res.status(401).send('password invalid')   

    }
    catch(err){
      res.status(500).send('internal server error')
    }
}


module.exports = register_controller