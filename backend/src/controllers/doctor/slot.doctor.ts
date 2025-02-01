
import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";
import { slotsCreateInput } from "../../types/zod.types";
import { CreateSlots } from "../../utils/slotUtil";



export const createSlot = async (req : Request, res : Response) => {
    try {
        
        const parsedSlotInput = slotsCreateInput.safeParse(req.body);
        
        
        if (!parsedSlotInput.success) {
            res.status(400).json({
                message : "Input error",
                success : false
            })
            return
        }


        const slots = CreateSlots(
            {
                dates : parsedSlotInput.data.selectedDates, 
                startTime : parsedSlotInput.data.startTime, 
                endTime : parsedSlotInput.data.endTime, 
                breakEndTime : parsedSlotInput.data.breakEndTime, 
                breakStartTime : parsedSlotInput.data.breakStartTime, 
                duration : parsedSlotInput.data.duration
            }
        )

   

        slots.forEach(slot => {
            //console.log(slot.startTime.getHours(), slot.endTime.getMinutes());
            
        })

        

        res.status(200).json({
            message : "Slot created successfully",
            data : "",
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

