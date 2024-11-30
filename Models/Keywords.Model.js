const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeywordsSchema = new Schema({
})

const KeywordsModel = mongoose.model('Keywords', KeywordsSchema);

module.exports = KeywordsModel;