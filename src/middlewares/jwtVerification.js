var jwt = require('jsonwebtoken');
const jwtverification = (req, res, next)=>{
    try{
        const token = req.headers.authorization
        
        var decoded = jwt.verify(token, process.env.jwt_secret)
         
        next()

        res.send(decoded)
    }
    catch(err){
        console.log('this is from catch')
       res.status(500).send(`Internal Server ${err}`)
    }
}


module.exports = jwtverification