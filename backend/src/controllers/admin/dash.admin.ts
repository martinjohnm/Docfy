import { Request, Response } from "express";
import db from "../../db"
import { bookingAddInput, categoryAddInput } from "../../types/zod.types";




export const getDashDatas = async (req : Request, res : Response) => {

    try {
         

        const doctorCount = await db.doctor.count({
            
        })


        const userCount = await db.user.count({
            
        })


        const hospitalCount = await db.hospital.count({
            
        })


        const departmentsCount = await db.category.count({
            
        })


        const bookingsCount = await db.booking.count({
            
        })

        res.status(200).json({
            message : "Doctors fetched successfully",
            data : {
                doctorCount,
                hospitalCount,
                departmentsCount,
                userCount,
                bookingsCount
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