
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




export const deleteSlotById = async (req : Request, res : Response) => {
    try {
        
        const id = String(req.params.id )       
        
        console.log(id);
        
        const slotTodelete = await db.slot.findUnique({
            where : {
                id
            }
        })
        
        if (!slotTodelete) {
  
            res.status(204).json({
                message : "Slot already deleted",
                success : false
            })
            return 
        }

        if (slotTodelete.status == "BOOKED") {
            console.log("slot booked");

            res.status(204).json({
                message : "Cannot delete a slot already booked",
                success : false
            })
            return 
        }

        
        await db.slot.delete({
            where : {
                id 
            }
        })



        const slotstoreturn = await db.slot.findMany({
            where : {
                doctorId : req.doctor.id
            }
        })



        res.status(200).json({
            message : "Slot deleted",
            data : {
                slots : slotstoreturn
            },
            success : true
        })
        
        return 
        
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
            },
            orderBy : {
                startTime : "asc"
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



export const getSlotsByDoctorFoaDay = async (req : Request, res : Response) => {
    try {
        
        const date = String(req.params.date);


        const startOfDay = new Date(`${date}`)
        const endOfDay = new Date(`${date}`)

        startOfDay.setHours(0,0,0,0);
        endOfDay.setHours(23, 59, 59, 999);

        
        const slotstoreturn = await db.slot.findMany({
            where : {
                doctorId : req.doctor.id,
                startTime : {
                    gte : startOfDay, 
                    lte : endOfDay
                },
                endTime : {
                    gte : startOfDay, 
                    lte : endOfDay
                }
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





