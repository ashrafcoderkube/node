const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeywordsSchema = new Schema({
  name: { type: String, required: [true, "name field is required"] },
});

const KeywordsModel = mongoose.model("Keywords", KeywordsSchema);

module.exports = KeywordsModel;
