const { generateSKU, generateSlug } = require("../helpers/allGenerator")
const Product_Model = require("../models/Product_Model")

const addProduct = async(req, res)=>{
    try {
        const {title, price, variant, categoryId, description, review, discountPrice, tags,stock} = req.body
        //    data generator
        const slug =  generateSlug(title)
        const sku = generateSKU(title)   
        
        // ----getting image
        
        res.status(200).send(req.files)
        // res.status(200).json(req.file)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}