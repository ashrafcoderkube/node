const mongoose = require('mongoose');

const codeLibrarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "description field is required"],
    trim: true,
  },
  keywords: {
    type: [mongoose.Schema.Types.ObjectId],
    ref : "Keywords",
    required: [true, "keywords id is required"],
  },
  codeSnippet: {
    type: String, 
    required: [true, "codeSnippet field is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category id is required"],
    
  },
  tutorial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutorial",
    required: [true, "Tutorial id is required"],
    
  }
}  , {timestamps : true , versionKey : false});

module.exports = mongoose.model('CodeLibrary', codeLibrarySchema);
