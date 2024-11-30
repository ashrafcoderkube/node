const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category id is required"],
    },
    difficulty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
      required: [true, "difficulty is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

const TutorialsModel = mongoose.model("Tutorial", tutorialSchema);
module.exports = TutorialsModel;
