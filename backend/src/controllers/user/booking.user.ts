import { Request, Response } from "express";
import db from "../../db"


export const createBooking = async (req : Request, res : Response) => {

    try {

        const slotId = String(req.params.slotId);

  
        const slot = await db.slot.findFirst({
          where : {
            id : slotId
          },
        
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
