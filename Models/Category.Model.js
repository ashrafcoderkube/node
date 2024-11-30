
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name : {
        type : String,
        required : [true, "name field is required"],
    }
} , {timestamps : true , versionKey : false})
  
const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel; 