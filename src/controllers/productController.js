const Product_Model = require("../models/Product_Model")
const addProduct = async(req, res)=>{
    try {
        const {tags} = req.body
        await new Product_Model({tags}).save()
        res.send('product added')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addProduct}