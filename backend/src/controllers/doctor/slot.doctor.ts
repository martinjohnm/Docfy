
import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";
import { slotsCreateInput } from "../../types/zod.types";
import { CreateSlots } from "../../utils/slotUtil";
import { filteredCurrentAndNewSlotToCreateArr, getSLotsByDOctorIdandDatesArr } from "../../utils/dateUtils";



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


        const slotsToCreate = CreateSlots(
            {
                dates : parsedSlotInput.data.selectedDates, 
                startTime : parsedSlotInput.data.startTime, 
                endTime : parsedSlotInput.data.endTime, 
                breakEndTime : parsedSlotInput.data.breakEndTime, 
                breakStartTime : parsedSlotInput.data.breakStartTime, 
                duration : parsedSlotInput.data.duration,
                doctorId : req.doctor.id
            }
        )


        // get slots already created for the doctorId and the given dates
        const currentSlotsForTheGivenDateArr = await getSLotsByDOctorIdandDatesArr({dates : parsedSlotInput.data.selectedDates, doctorId : req.doctor.id})
   
        
        // check if the currentSlotsForTheGivenDateArr already created is conflicts with the slotsToCreate and return a filtererd array
        const nonConflictingSlotsToCreate = filteredCurrentAndNewSlotToCreateArr({newSlots : slotsToCreate, currentSlots : currentSlotsForTheGivenDateArr})


        // nonConflictingSlotsToCreate.forEach(ele => {
        //     console.log(` ${ele.startTime.getDate()} ${ele.startTime.getHours()}:${ele.startTime.getMinutes()} to ${ele.endTime.getHours()}:${ele.endTime.getMinutes()}`)
        // })
        
        await db.slot.createMany({
            data : nonConflictingSlotsToCreate,
            skipDuplicates : true
        })

        
        const slotstoreturn = await db.slot.findMany({
            where : {
                doctorId : req.doctor.id
            }
        })


        

        res.status(200).json({
            message : "Slot created successfully",
            data : {
                slots : slotstoreturn
            },
            success : true
        })
        
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Slot creation",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}


export const getSlotsByDoctor = async (req : Request, res : Response) => {
    try {
        
        
        const slotstoreturn = await db.slot.findMany({
            where : {
                doctorId : req.doctor.id
            }
        })


        res.status(200).json({
            message : "Slot created successfully",
            data : {
                slots : slotstoreturn
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


