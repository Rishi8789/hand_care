const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
    userId:{type:String,required:true},
    category:{type:String,required:true,enum:['HandSanitizer,HandWash']},
    brand:{type:String,required:true,enum:['HAAN']}
    
})
const CartProductsSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:String},
    image:{type:String},
    userId:{type:String},
    category:{type:String,enum:['HandSanitizer,HandWash']},
    brand:{type:String,enum:['HAAN']},
    
})

const ProductsModel = mongoose.model("product",productsSchema);
const CartProductsModel = mongoose.model("cart",CartProductsSchema);

module.exports = {ProductsModel,CartProductsModel}