const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeSchema = new Schema(
  {
    name: { type: String, required: [true, "name field is required"] },
  },
  { timestamps: true, versionKey: false }
);

const TypeModel = mongoose.model("Type", TypeSchema);

module.exports = TypeModel;
