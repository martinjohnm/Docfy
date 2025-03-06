
import { Request, Response } from "express";
import db from "../../db"



export const getAllPatients = async (req : Request, res : Response) => {
    try {
        
        const doctorId = String(req.doctor.id);
        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10
 

        const bookings = await db.booking.findMany({
            where : {
                doctorId
            },
            include : {
                slot : true,
                doctor : true,
                patient : true
            },
            skip : skip *10 ,
            take ,

            orderBy : {
                startTime : "asc"
            },
        })

        
        const totalNoOfBookings = await db.booking.count({
            where : {
                doctorId,
            
            },
        })
 
        res.status(200).json({
            message : "bookings fetched successfully",
            data : {
                bookings,
                totalNoOfBookings
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

export const getUpcomingPatients = async (req : Request, res : Response) => {
    try {
        const doctorId = String(req.doctor.id);
        const skip = Number(req.query.skip) ?? 0
        const take = Number(req.query.take) ?? 10
        const now = new Date();

        const bookings = await db.booking.findMany({
            where : {
                doctorId,
                startTime : {
                    gt:now
                }
            },
            include : {
                slot  :true,
                patient  :true,
                doctor : true
            },
            skip : skip *10 ,
            take ,

            orderBy : {
                startTime : "asc"
            },
        })

        if (!bookings) {
            res.status(400).json({
                message : "No such hospital",
                success : false
            })
            return
        }

        const totalNoOfBookings = await db.booking.count({
            where : {
                doctorId,
                startTime : {
                    gt:now
                }
            },
        })
 

        res.status(200).json({
            message : "Hospital fetched successfully",
            data : {
                bookings,
                totalNoOfBookings
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


export const getPatientsCompleted = async (req : Request, res : Response) => {

    try {

        const doctorId = String(req.doctor.id);
        const skip = Number(req.query.skip) ?? 0
        const take = Number(req.query.take) ?? 10
        const now = new Date();

        const bookings = await db.booking.findMany({
            where : {
                doctorId,
                startTime : {
                    lt:now
                }
            },
            include : {
                slot  :true,
                patient  :true,
                doctor : true
            },
           
            skip : skip *10 ,
            take ,

            orderBy : {
                startTime : "asc"
            },
        })

        const totalNoOfBookings = await db.booking.count({
            where : {
                doctorId,
                startTime : {
                    lt:now
                }
            },
        })
        


  
        res.status(200).json({
            message : "slot booked fetched successfully",
            data : {
                bookings,
                totalNoOfBookings
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during create Booking",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}

