import { Request, Response } from "express";
import db from "../../db"



export const createCategoryAdmin = async (req : Request, res : Response) => {

    try {
        

        const { name } = req.body;

        const category = await db.category.findFirst({
            where :{
                name
            }
        })

        if (category) {
            res.status(409).json({
                message : "Category already added",
                success : false
            })
            return
        }

        const newCategory = await db.category.create({
            data : {
                name
            }
        })

        res.status(200).json({
            message : "Category created successfully",
            data : {
                category : newCategory
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Logout",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}



export const getCategoriesAdmin = async (req : Request, res : Response) => {

    try {
        

        const categories = await db.category.findMany()

        res.status(200).json({
            message : "Category created successfully",
            data : {
                categories
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Logout",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}