import { Request, Response } from "express";
import db from "../../db"
import { number } from "zod";



export const getAllHospitalsUser = async (req : Request, res : Response) => {

    try {
        

        const hospitals = await db.hospital.findMany()
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

