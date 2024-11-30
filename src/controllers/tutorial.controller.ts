import {Request , Response} from "express";
import tutorialModel , {tutorialInterface}  from "../models/tutorial.model";

const insertNewTutorial = async (req : Request , res : Response) => {
 
    try {

        const {title , description , category , difficulty } = req.body;

        /*
        if(!title || !difficulty || !description || !category){
            res.status(400).json({
                success : false,
                message : "Fields misssing , check again before inserting"
            });
            return;
        }
        */

        const newTutorial:tutorialInterface = new tutorialModel({
            title,
            description,
            category,
            difficulty
        });

        const savedTutorial = await newTutorial.save();
            
         res.status(201).json({
            success : true,
            message : "Tutorial created successfully",
            data : savedTutorial,
        });

  } catch (error) {
    res.status(500).json({
        success: false,
        message : "Error creatign tutroial", 
    });
    console.log(error);
    throw new Error("Error inserting new Tutorial");
  }
};

export default insertNewTutorial

