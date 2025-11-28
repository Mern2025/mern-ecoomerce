const Product_Model = require("../models/Product_Model")
const addProduct = async(req, res)=>{
    try {
        const {title, price, variant, categoryId, description, review, discountPrice, tags,stock} = req.body
       
        res.send('product added')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}