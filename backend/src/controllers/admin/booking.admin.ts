import { Request, Response } from "express";
import db from "../../db"



export const getAllBookingsAdmin = async (req : Request, res : Response) => {

    try {
        

        
        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10


        const bookings = await db.booking.findMany({
            skip : skip * take,
            take,
            orderBy : {
                startTime : "asc"
            },
            include : {
                slot : true,
                doctor : true,
                patient : true
            },
        })


        const totalNoOfBookings = await db.booking.count({
            
        })
        
        res.status(200).json({
            message : "Booking fetched successfully",
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



export const getAllBookingsAdminUpcoming = async (req : Request, res : Response) => {

    try {
        

        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10
        

        const bookings = await db.booking.findMany({
            where : {
                startTime : {
                    gt : new Date()
                },
                status : "CONFIRMED"
            },

            skip : skip * take,
            take,
            include : {
                slot : true,
                doctor : true,
                patient : true
            },
            orderBy : {
                startTime : "asc"
            }
        })

 

        const totalNoOfBookings = await db.booking.count({
            where : {
                
                startTime : {
                    gt : new Date()
                },
                status : "CONFIRMED"
            },
        })

        
        res.status(200).json({
            message : "Booking fetched successfully",
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



export const getAllBookingsAdminCompleted = async (req : Request, res : Response) => {

    try {
        
    
        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10


        const bookings = await db.booking.findMany({
            where : {
                startTime : {
                    lte : new Date()
                },
                status : "CONFIRMED"
            },

            skip : skip * take,
            take,
            include : {
                slot : true,
                doctor : true,
                patient : true
            },
            orderBy : {
                startTime : "asc"
            }
        })

        const totalNoOfBookings = await db.booking.count({
            where : {
                
                startTime : {
                    lte : new Date()
                },
                status : "CONFIRMED"
            },
        })
        
        res.status(200).json({
            message : "Booking fetched successfully",
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



export const getAllBookingsAdminCanceld = async (req : Request, res : Response) => {

    try {
        
    
        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10


        const bookings = await db.booking.findMany({
            where : {
                status : "CANCELLED"
            },

            skip : skip * take,
            take,
            include : {
                slot : true,
                doctor : true,
                patient : true
            },
            orderBy : {
                startTime : "asc"
            }
        })

        const totalNoOfBookings = await db.booking.count({
            where : {
                
                status : "CANCELLED"
            },
        })
        
        res.status(200).json({
            message : "Booking fetched successfully",
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
