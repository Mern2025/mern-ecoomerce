const checkRoles =  (roles)=>{
  return(req, res , next)=>{
    console.log(roles)
     if(roles[0] == req.user.role || roles[1]==req.user.role){
      return next()
     }else{
      return res.status(401).json({message:'your are not authorize this feature'})
     }
  }
}

module.exports = checkRoles





// const checkRole= (roles)=>{
//   return (req,res,next)=>{
//     console.log(roles)
//   }
// }
// module.exports=checkRole