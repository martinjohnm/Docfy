import { Request, Response } from "express";
import db from "../../db"
import { number, tuple } from "zod";
import { queryHospitalsBycategoryIdSchema } from "../../types/zod.types";
import { Prisma } from "@prisma/client";



export const getAllHospitalsUser = async (req : Request, res : Response) => {

    try {
        

        const hospitals = await db.hospital.findMany({
     
            include : {
                categories : true
            }
        })
        res.status(200).json({
            message : "Hospitals fetched successfully",
            data : {
                hospitals
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


export const getAllHospitalsByCategoryId = async (req : Request, res : Response) => {

    try {
        

        const validatedQuery = queryHospitalsBycategoryIdSchema.parse(req.query);
        const {categoryId} = validatedQuery
   
        if (categoryId) {
            const category = await db.category.findFirst({
                where : {
                    id : categoryId
                },
                include : {
                    hospitals : true
                }
            })
   
            res.status(200).json({
                message : "Hospitals fetched successfully",
                data : {
                    hospitals : category?.hospitals
                },
                success : true
            })
            return
        } else {
            const hospitals = await db.hospital.findMany({
               
            })

     
            res.status(200).json({
                message : "Hospitals fetched successfully",
                data : {
                    hospitals
                },
                success : true
            })

            return
        }
        
    
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

