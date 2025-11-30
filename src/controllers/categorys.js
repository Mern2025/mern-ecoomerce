const cloudinary = require ('cloudinary').v2
const fs = require('fs');
const categoryModel = require('../models/categoryModel');
const { error } = require('console');
// cloudinary Configuration
cloudinary.config({ 
    cloud_name: 'do1licw5o', 
    api_key: '877945822912852', 
    api_secret: 'YS8j76Ci-Lg8VHjd-L-_NFQVrTE'
});
// ---------------add category---------------------

const add_category = async(req, res)=>{
  try {
    const {categoryName,creatorName} = req.body
    if(!categoryName && !creatorName)return res.status(404).json({message:'All fields are required!'})
      let exists_category = await categoryModel.findOne({categoryName})
    
    if(exists_category) return res.status(404).json({message:'This product already exist'})
      const upload_result = await cloudinary.uploader.upload(req.file.path, {public_id: Date.now()})

   await new categoryModel({categoryName,creatorName,categoryImage:upload_result.secure_url}).save()
   fs.unlinkSync(req.file.path)

    return res.status(201).json({message:'category created successfully'})

  } catch (error) {
    console.log(error)
    return res.status(500).json({message:'Intenal server error'})
  }
  //  try{
  //       const {categoryName, creatorName} = req.body
  //       if(!categoryName || !creatorName) return res.status(404).send('All fields required') 
  //       const categoryImage = await cloudinary.uploader.upload(req.file.path, {public_id:Date.now()})     
  //     await new categoryModel({
  //       categoryName,
  //       creatorName,
  //       categoryImage: categoryImage.url
  //     }).save()
  //    fs.unlink(req.file.path, (err) => {
  //   if (err) {
  //       console.error('File delete error:', err);
  //   } else {
  //       console.log('File deleted successfully');
  //   }
  // })

  //       res.status(200).send('category created successfully')
  //  }
  //  catch(err){
  //       res.status(500).send('internal server error')
  //  }
}

// ---------------update category----------------
const update_category = async(req, res)=>{
  try{
      const {categoryId, updateStatus} = req.body
     
      if(!categoryId) return res.status(404).send('categoryId not required')
      
      if(updateStatus != 'approved' && updateStatus != 'cancel') return res.status(403).send('please select approved or cancel')  

      await categoryModel.findByIdAndUpdate(categoryId, {adminApproval: updateStatus})

      return res.status(200).json({message:'update success'})
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}

// ---------------------get category------------------
const get_all_category = async(req, res)=>{
  // return console.log(req.body) 
  try{
     const allCategory = await categoryModel.find()
     
    return res.status(200).json({allCategory})
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}

// ----public---------
const get_active_category = async(req, res)=>{
  try{
      const approvedCategory = await categoryModel.find({adminApproval:'approved'})
      res.status(200).send(approvedCategory)
  }
  catch(err){
    console.log(err)
    res.status(500).send('internal server error')
  }
}


// ------------------delete category-------------------
// public
const delete_category = async(req, res)=>{
try{
   const {categoryId} = req.body
    // return console.log(categoryId)
    let existImg = await categoryModel.findOne({_id:categoryId})
    let imgId = existImg.categoryImage.split('/')[7].split('.')[0]
    await cloudinary.uploader.destroy(imgId)
    await categoryModel.findByIdAndDelete(existImg)
    //1764270086589

  //  let delete_image = await categoryModel.findByIdAndDelete({_id:categoryId})
   return res.status(200).json('delete success')
}catch(err){
  console.log(err)
  res.status(500).json('internal server error')
}
}

module.exports = {add_category, update_category,get_all_category, get_active_category, delete_category}