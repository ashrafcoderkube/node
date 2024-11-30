const mongoose = require('mongoose');

const codeLibrarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  keywords: {
    type: [String], 
    required: true,
  },
  codeSnippet: {
    type: String, 
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('CodeLibrary', codeLibrarySchema);
