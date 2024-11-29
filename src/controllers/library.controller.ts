import { Request , Response} from "express";
import libraryModel from "../models/library.model";

const insertCodeLibrary = async (req: Request , res: Response) => {

    try {

        const {title , description , keywords , codeSnippet , category} = req.body;

        if(!title || !description || !keywords || !codeSnippet || !category){
            res.status(400).json({
                success: false,
                message: "Fields missing"
            });
            return;
        }

        const newCodeLibrary = new libraryModel({
            title,
            description,
            keywords,
            codeSnippet,
            category
        })

        const savedCodeLibrary = await newCodeLibrary.save();

        res.status(200).json({
            success : true,
            message : "New Code library inserted",
            data : savedCodeLibrary
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            success : false,
            message : "Internal server error",
            data : error
        })
    }
}

export default insertCodeLibrary;