import { Request, Response } from "express";
import db from "../../db"
import { locaitonAddInput } from "../../types/zod.types";



export const createLocationAdmin = async (req : Request, res : Response) => {

    try {
        

        const locationData = locaitonAddInput.safeParse(req.body);
        if (!locationData.success) {
            res.status(400).json({
                message : "location already added",
                success : false
            })
            return
        }

        const location = await db.location.findFirst({
            where :{
                city : locationData.data.city
            }
        })

        if (location) {
            res.status(409).json({
                message : "location already added",
                success : false
            })
            return
        }

        const newlocation = await db.location.create({
            data : locationData.data
        })

        res.status(200).json({
            message : "location created successfully",
            data : {
                location : newlocation
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Location adding",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}



export const getLocationsAdmin = async (req : Request, res : Response) => {

    try {
        

        const locations = await db.location.findMany()

        res.status(200).json({
            message : "location created successfully",
            data : {
                locations
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Getting locations",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}