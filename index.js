// all require
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const  route  = require('./src/routes/route')
const PORT = process.env.PORT || 7000
require('dotenv').config()


// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(route)


// db connection
mongoose.connect(process.env.MERN_DB_LINK)
.then(()=>{console.log('db is connect')})
.catch((err)=>{console.log(err)})



// port listener
app.listen(PORT, (err)=>{
    if(err) return console.log(err)
        console.log(`this project running on this server ${PORT}`)
})


