import { Request, Response } from "express";
import db from "../../db"
import { number } from "zod";



export const getAllCategories = async (req : Request, res : Response) => {

    try {
        

        const categories = await db.category.findMany()
        res.status(200).json({
            message : "categories fetched successfully",
            data : {
                categories
            },
            success : true
        })
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}

export const getAllCategoriesByHospital = async (req : Request, res : Response) => {

    try {
        
        const id = String(req.params.id);



        const hospital = await db.hospital.findFirst({
            where : {
                id 
            },
            include : {
                categories : true
            }
        })


        res.status(200).json({
            message : "categories fetched successfully",
            data : {
                categories : hospital?.categories ?? []
            },
            success : true
        })
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}

