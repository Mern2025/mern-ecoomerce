var jwt = require('jsonwebtoken');
const jwtverification = (req, res, next)=>{
    try{
        const token = req.headers.authorization
        const isverify =  jwt.verify(token, process.env.jwt_secret)
        if(!isverify) return res.status(404).json({message:'invalid token'})
            req.user = isverify
        next()
    }
    catch(err){
       res.status(307).redirect('http://localhost:7000/auth/login').send('token expire')
    }
}

module.exports = jwtverification