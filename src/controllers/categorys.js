const cloudinary = require ('cloudinary').v2
const fs = require('fs')
// cloudinary Configuration
cloudinary.config({ 
    cloud_name: 'do1licw5o', 
    api_key: '877945822912852', 
    api_secret: 'YS8j76Ci-Lg8VHjd-L-_NFQVrTE'
});
// ---------------add category---------------------

const add_category = (req, res)=>{
   try{
        const {categoryName, creatorName} = req.body

        if(!categoryName || !creatorName) return res.status(404).send('All fields required') 
        
        res.send(req.file)
   }
   catch(err){
        res.status(500).send('internal server error')
   }
}

// ---------------update category----------------


// ---------------------get category------------------


// ------------------delete category-------------------


module.exports = {add_category}