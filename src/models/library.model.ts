import * as mongoose from "mongoose";

import { mongooseConnection } from "../helpers/mongo.helper";
mongooseConnection();

export interface libraryInterface extends mongoose.Document {
    title: String;
    description: String;
    keywords: String[];
    codeSnippet: String;
    category: String;
}

const librarySchema = new mongoose.Schema<libraryInterface>({
    title : {type: String , required:true},
    description: {type : String , required: true},
    keywords: {type : [String] , required: true},
    codeSnippet: {type : String , required: true},
    category: {type : String , required: true},
})

const libraryModel = mongoose.model<libraryInterface>("codelibrary" , librarySchema);

export default libraryModel;

