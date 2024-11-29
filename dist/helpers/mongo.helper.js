"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const mongooseConnection = async () => {
    try {
        await mongoose_1.default.connect(`${process.env.MONGO_CONNECTION_STRING}`);
        console.log("connection Successfull");
    }
    catch (error) {
        console.log(error);
        console.log("connection unsuccessfull");
    }
};
exports.mongooseConnection = mongooseConnection;
