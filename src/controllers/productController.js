const { generateSKU, generateSlug } = require("../helpers/allGenerator")
const Product_Model = require("../models/Product_Model")

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
        // const thumbnail = await cloudinary.uploader.upload(thumbNailImagePath)

        SubImagePath.map((item)=>{
            console.log(item)
        })
  
        res.send('okk')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}