import mongoose from "mongoose";
require("dotenv").config()

export const mongooseConnection = async () => {
 try {
    await mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`);
    console.log("connection Successfull");
}catch(error){
    console.log(error);
    console.log("connection unsuccessfull");
 }
}
