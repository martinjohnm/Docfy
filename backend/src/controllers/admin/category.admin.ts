import { Request, Response } from "express";
import db from "../../db"
import { categoryAddInput } from "../../types/zod.types";



export const createCategoryAdmin = async (req : Request, res : Response) => {

    try {
        
        
        const categoryData = categoryAddInput.safeParse(req.body);
        if (!categoryData.success) {
            res.status(400).json({
                message : "Category already added",
                success : false
            })
            return
        }

        const category = await db.category.findFirst({
            where :{
                name : categoryData.data?.name
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
            data : categoryData.data
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