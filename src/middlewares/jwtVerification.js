var jwt = require('jsonwebtoken');
const jwtverification = (req, res, next)=>{
    try{
        const token = req.headers.authorization

        var decoded = jwt.verify(token, process.env.jwt_secret)
      
        console.log(decoded)

        res.send(token)
        
    }
    catch(err){
       res.status(500).send(`Internal Server ${err}`)
    }
}


module.exports = jwtverification