import { Request, Response } from "express";
import db from "../../db"
import { BookingStatus } from "../../types/types";
import { Booking, Slot } from "@prisma/client";


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

   
        await db.$transaction(async (tx) => {

            // lock the slot row(prevent concurrent updates)
            const slotToUpdate  = await tx.$queryRaw<Slot[]>`SELECT * FROM "Slot" WHERE id=${slotId} FOR UPDATE`;
            if (slotToUpdate[0].status == "BOOKED" || !slotToUpdate) {
                throw new Error("Slot is already booked!");
            }

           
            // create the booking 
            await tx.booking.create({
                data : {
                    patientId : req.user.id,
                    slotId,
                    startTime : slotToUpdate[0].startTime,
                    endTime : slotToUpdate[0].endTime,
                    duration : slotToUpdate[0].duration,
                    doctorId : slotToUpdate[0].doctorId,
                    status : "CONFIRMED"
                }
            })

            // update the slot status to booked
            await tx.slot.update({
                where : {
                    id : slotToUpdate[0].id
                },
                data : {
                    status : "BOOKED"
                }
            })
         
        })

        const newBooking = await db.booking.findFirst({
            where : {
                slotId : slotId
            }
        })
        

        res.status(200).json({
            message : "slot booked successfully",
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

        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10

 
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


        const totalNoOfBookings = await db.booking.count({
            where : {
                patientId : userId,
                
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

        const id = String(req.query.id);

  
        const slot = await db.booking.findFirst({
          where : {
            id : id
          },
          include : {
            slot : true
          }
        
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
                booking : slot
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

        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10



        const now = new Date();

        const bookings = await db.booking.findMany({
            where : {
                patientId : userId,
                startTime : {
                    gt:now
                },
                status : "CONFIRMED"
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
                },
                status : "CONFIRMED"
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

        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10



       
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


export const getCancelledBooking = async (req : Request, res : Response) => {

    try {

        const userId = String(req.user.id);

        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10


        const bookings = await db.booking.findMany({
            where : {
                patientId : userId,
                status : "CANCELLED"
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
                status : "CANCELLED"
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



export const cancelBookingByBookingId = async (req : Request, res : Response) => {

    try {

        const id = String(req.params.id);

        const bookingToCancel = await db.booking.findUnique({
            where : {
                id
            },
            include : {
                slot : true,
                doctor : true
            }
        })

        if (!bookingToCancel) {
            res.status(204).json({
                message : "No such Booking ",
                data : {
                    booking : bookingToCancel
                },
                success : false
            })
            return
        }

        if (bookingToCancel.status == "CANCELLED") {
            res.status(204).json({
                message : "Booking Already cancelled",
                data : {
                    booking : bookingToCancel
                },
                success : false
            })
            return
        }

        if (bookingToCancel.startTime < new Date()) {
            res.status(410).json({
                message : "Booking is in the past",
                data : {
                    booking : bookingToCancel
                },
                success : false
            })
            return
        }


        if (!bookingToCancel.slot || !bookingToCancel.slotId) {
            res.status(204).json({
                message : "No such slot ",
            
                success : false
            })
            return
        }

        
        const booking = await db.$transaction([
            db.booking.update({
                where : {
                    id
                },
                data : {
                    
                    status : "CANCELLED",
                    slotId : null
                },
                
                
            }),
            db.slot.update({
                where : {
                    id : bookingToCancel.slotId
                }, 
                data : {
                    status : "AVAILABLE",
                    booking : undefined
                    
                    
                }
            })
        ])
        


  
        res.status(200).json({
            message : "Booking canceled successfully",
            data : {
                booking
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



