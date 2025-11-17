const authModel = require("../models/authModel")

const CheckRole = async(req, res, next)=>{
  const {email} = req.email
  const existUser = await authModel.findOne({email})

  res.send(existUser)
}


module.exports = CheckRole