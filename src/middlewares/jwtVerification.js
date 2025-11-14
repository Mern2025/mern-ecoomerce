const jwtverification = (req, res, next)=>{
    try{
        const token = req.headers.authorization
      
        res.send(token)
        
    }
    catch(err){
       res.status(500).send(`Internal Server ${err}`)
    }
}


module.exports = jwtverification