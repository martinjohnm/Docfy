import { Request, Response } from "express";
import db from "../../db"


export const slotDoctorWise = async (req : Request, res : Response) => {

    try {

        const doctorId = String(req.params.id);
        const doctor = await db.doctor.findFirst({
          where : {
            id : doctorId
          },
          include : {
            specialization : true,
            hospital : true
          }
        })
        const slots = await db.slot.findMany({
          where : {
            doctorId
          },
          orderBy : {
            startTime : "asc"
          }
        })

        res.status(200).json({
            message : "slots fetched successfully",
            data : {
                slots,
                doctor
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
