
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  
})
const TypeModel = mongoose.model('Type', TypeSchema);

module.exports = TypeModel;