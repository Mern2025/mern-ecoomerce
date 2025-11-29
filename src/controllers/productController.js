const { generateSKU, generateSlug } = require("../helpers/allGenerator")
const Product_Model = require("../models/Product_Model")

const addProduct = async(req, res)=>{
    try {
        const {title, price, variant, categoryId, description, review, discountPrice, tags,stock} = req.body
    //    data generator
      const slug =  generateSlug(title)
      const sku = generateSKU(title)   

          console.log(slug, sku)
        res.send('product uploaded')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}