import * as mongoose from "mongoose";

import { mongooseConnection } from "../helpers/mongo.helper";

/*
const url : string = process.env.MONGO_CONNECTION_STRING || ""; 
mongoose.connect(url) 
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
*/

export interface tutorialInterface extends mongoose.Document {
  title: String;
  description: String;
  category: String[];
  difficulty : String
}

const tutorialSchema = new mongoose.Schema<tutorialInterface>({
  title: { type: String, required: true },
  description: { type : String, required: true },
  category: { type: [String],required: true },
  difficulty: { type: String,required: true },
},{timestamps : true});

const tutorialModel = mongoose.model<tutorialInterface>("tutorials" , tutorialSchema);

export default tutorialModel;