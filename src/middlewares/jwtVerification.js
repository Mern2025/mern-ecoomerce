var jwt = require('jsonwebtoken');
const jwtverification = (req, res, next)=>{
    try{
        const token = req.headers.authorization
        
        var decoded = jwt.verify(token, process.env.jwt_secret)
        
        
        next()

        res.send('success update')
    }
    catch(err){
       
       res.status(307).redirect('http://localhost:7000/auth/login').send('token expire')
    }
}


module.exports = jwtverification