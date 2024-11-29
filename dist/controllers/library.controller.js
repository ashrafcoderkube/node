"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const library_model_1 = __importDefault(require("../models/library.model"));
const insertCodeLibrary = async (req, res) => {
    try {
        const { title, description, keywords, codeSnippet, category } = req.body;
        if (!title || !description || !keywords || !codeSnippet || !category) {
            res.status(400).json({
                success: false,
                message: "Fields missing"
            });
            return;
        }
        const newCodeLibrary = new library_model_1.default({
            title,
            description,
            keywords,
            codeSnippet,
            category
        });
        const savedCodeLibrary = await newCodeLibrary.save();
        res.status(200).json({
            success: true,
            message: "New Code library inserted",
            data: savedCodeLibrary
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: error
        });
    }
};
exports.default = insertCodeLibrary;
