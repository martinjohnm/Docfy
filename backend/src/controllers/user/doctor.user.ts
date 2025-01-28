import { Request, Response } from "express";
import db from "../../db"


export const getDoctors = async (req : Request, res : Response) => {

    try {
        
        const doctors = await db.doctor.findMany({
            include : {
                specialization : true,
                hospital : {
                    include : {
                        location : true
                    }
                },

            }
        })

        res.status(200).json({
            message : "Doctors fetched successfully",
            data : {
                doctors
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


export const getDoctor = async (req : Request, res : Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header
        
        if (!token) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return
        }


        res.status(200).json({
            message : "User fetched successfully",
            data : {
                user : ""
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
