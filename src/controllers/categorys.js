const cloudinary = require ('cloudinary').v2
const fs = require('fs');
const categoryModel = require('../models/categoryModel');
// cloudinary Configuration
cloudinary.config({ 
    cloud_name: 'do1licw5o', 
    api_key: '877945822912852', 
    api_secret: 'YS8j76Ci-Lg8VHjd-L-_NFQVrTE'
});
// ---------------add category---------------------

const add_category = async(req, res)=>{
   try{
        const {categoryName, creatorName} = req.body

        if(!categoryName || !creatorName) return res.status(404).send('All fields required') 

        const categoryImage = await cloudinary.uploader.upload(req.file.path, {public_id:Date.now()})     
        
      await new categoryModel({
        categoryName,
        creatorName,
        categoryImage: categoryImage.url
      }).save()

     fs.unlink(req.file.path, (err) => {
    if (err) {
        console.error('File delete error:', err);
    } else {
        console.log('File deleted successfully');
    }
  })

        res.status(200).send('category created successfully')
   }
   catch(err){
        res.status(500).send('internal server error')
   }
}

// ---------------update category----------------
const update_category = async(req, res)=>{
  try{
      const {categoryId, updateStatus} = req.body

      if(!categoryId) return res.status(404).send('categoryId not required')
      
      if(updateStatus != 'approved' && updateStatus != 'cancel') return res.status(403).send('please select approved or cancel')  

      await categoryModel.findByIdAndUpdate(categoryId, {adminApproval: updateStatus})

      res.status(200).send('update success')
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}




// ---------------------get category------------------
const get_all_category = async(req, res)=>{
  try{
     const allCategory = await categoryModel.find()
     res.status(200).send(allCategory)
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}



// ----public---------
const get_active_category = async(req, res)=>{
  try{
      const approvedCategory = await categoryModel.find({adminApproval:'pending'})
      res.status(200).send(approvedCategory)
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}




// ------------------delete category-------------------


module.exports = {add_category, update_category,get_all_category, get_active_category}