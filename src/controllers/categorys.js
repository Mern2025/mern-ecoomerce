// ---------------add category---------------------

const add_category = (req, res)=>{
   try{
        const {categoryName, categoryImage, creatorName, adminApproval} = req.body
   }
   catch(err){
        res.status(500).send('internal server error')
   }
}

// ---------------update category----------------


// ---------------------get category------------------


// ------------------delete category-------------------