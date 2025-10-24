// all require
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000


// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())




// port listener
app.listen(PORT, (err)=>{
    if(err) return console.log(err)
        console.log(`this project running on this server ${PORT}`)
})


