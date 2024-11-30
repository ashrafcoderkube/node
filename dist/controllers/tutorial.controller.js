"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_model_1 = __importDefault(require("../models/tutorial.model"));
const insertNewTutorial = async (req, res) => {
    try {
        const { title, description, category, difficulty } = req.body;
        /*
        if(!title || !difficulty || !description || !category){
            res.status(400).json({
                success : false,
                message : "Fields misssing , check again before inserting"
            });
            return;
        }
        */
        const newTutorial = new tutorial_model_1.default({
            title,
            description,
            category,
            difficulty
        });
        const savedTutorial = await newTutorial.save();
        res.status(201).json({
            success: true,
            message: "Tutorial created successfully",
            data: savedTutorial,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creatign tutroial",
        });
        console.log(error);
        throw new Error("Error inserting new Tutorial");
    }
};
exports.default = insertNewTutorial;
