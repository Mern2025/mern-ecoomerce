// ---------------add category---------------------

const add_category = (req, res)=>{
   try{
        const {categoryName, creatorName} = req.body

        if(!categoryName || !creatorName) return res.status(404).send('All fields required') 
   }
   catch(err){
        res.status(500).send('internal server error')
   }
}

// ---------------update category----------------


// ---------------------get category------------------


// ------------------delete category-------------------


module.exports = {add_category}