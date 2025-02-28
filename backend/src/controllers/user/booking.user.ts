import { Request, Response } from "express";
import db from "../../db"
import { number } from "zod";


export const createBooking = async (req : Request, res : Response) => {

    try {

        const slotId = String(req.params.slotId);

  
        const slot = await db.slot.findFirst({
          where : {
            id : slotId
          },
          include : {
            doctor : {
                include : {
                    hospital : true,
                    specialization : true
                }
            }
          }
        
        })

        if (!slot) {
            res.status(404).json({
                message : "slot not found",
                
                success : false
            })
            return
        }

  
      
        if (slot.status == "BOOKED") {
            res.status(403).json({
                message : "slot already booked",
                success : false
            })
            return
        }

        const existingBooking = await db.booking.findUnique({
            where : {
                slotId
            }
        })

        if (existingBooking) {
            res.status(403).json({
                message : "slot already booked",
                success : false
            })
            return
        } 

   
        await db.$transaction([
            db.booking.create({
                data : {
                    patientId : req.user.id,
                    slotId,
                    startTime : slot.startTime,
                    endTime : slot.endTime,
                    duration : slot.duration,
                    doctorId : slot.doctorId,
                    status : "CONFIRMED"
                }
            }),
            db.slot.update({
                where : {
                    id : slotId
                }, 
                data : {
                    status : "BOOKED"
                }
            })
        ])

        const newBooking = await db.booking.findFirst({
            where : {
                slotId : slotId
            }
        })
        

        res.status(200).json({
            message : "slot booked fetched successfully",
            data : {
                booking : newBooking
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


export const getAllBookingsForUser = async (req : Request, res : Response) => {

    try {

        const userId = String(req.user.id);

        const skip = Number(req.query.skip) ?? 0
        const take = Number(req.query.take) ?? 10

 
        const totalNoOfBookings = await db.booking.count()
        
        const bookings = await db.booking.findMany({
            where : {
                patientId : userId
            },
            include : {
                slot : true,
                doctor : true
            },
           
            skip : skip *10 ,
            take ,

            orderBy : {
                startTime : "asc"
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


export const getBookingById = async (req : Request, res : Response) => {

    try {

        const bookingId = String(req.params.bookingId);

  
        const slot = await db.slot.findFirst({
          where : {
            id : bookingId
          },
        
        })

        if (!slot) {
            res.status(404).json({
                message : "slot not found",
                
                success : false
            })
            return
        }

  
        res.status(200).json({
            message : "slot booked fetched successfully",
            data : {
                booking : "newBooking"
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


export const getBookingsUpcoming = async (req : Request, res : Response) => {

    try {

        const userId = String(req.user.id);

        const skip = Number(req.query.skip) ?? 0
        const take = Number(req.query.take) ?? 10



        const now = new Date();

        const bookings = await db.booking.findMany({
            where : {
                patientId : userId,
                startTime : {
                    gt:now
                }
            },
            include : {
                slot : true,
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
                patientId : userId,
                startTime : {
                    gt:now
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



export const getBookingsCompleted = async (req : Request, res : Response) => {

    try {

        const userId = String(req.user.id);

        const skip = Number(req.query.skip) ?? 0
        const take = Number(req.query.take) ?? 10



       
        const now = new Date();

        const bookings = await db.booking.findMany({
            where : {
                patientId : userId,
                startTime : {
                    lt:now
                }
            },
            include : {
                slot : true,
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
                patientId : userId,
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



