const { generateSKU, generateSlug } = require("../helpers/allGenerator")
const Product_Model = require("../models/Product_Model")
const cloudinary = require('cloudinary').v2
const fs = require('fs')

// cloudinary Configuration
cloudinary.config({ 
    cloud_name: 'do1licw5o', 
    api_key: '877945822912852', 
    api_secret: 'YS8j76Ci-Lg8VHjd-L-_NFQVrTE'
});


const addProduct = async(req, res)=>{
    try {
        const {title, price, variant, categoryId, description, review, discountPrice, tags,stock} = req.body
        //    data generator
        const slug =  generateSlug(title)
        const sku = generateSKU(title)   
        
        // ----getting image
        const thumbNailImagePath = req.files.thumbnail[0].path
        const SubImagePath = req.files.subImages?.map((item)=>{
            return item.path
        })

        // upload image
        // const thumbnail = await cloudinary.uploader.upload(thumbNailImagePath,{public_id:new Date.now()})

     const subImages = await Promise.all(SubImagePath.map(async(item)=>{
         const subImagesLink =  await cloudinary.uploader.upload(item,{public_id:Date.now()})
         return subImagesLink
        })) 

        console.log(subImages)

        res.status(200).send('okk')
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}