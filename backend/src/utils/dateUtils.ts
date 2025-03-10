

import db from "../db"
import { SLotArrType } from "./slotUtil";


export interface CurrentSlotType {
    doctorId: string;
    id: string;
    startTime: Date;
    endTime: Date;
    duration: number;
}

export async function getSLotsByDOctorIdandDatesArr( { dates, doctorId } : {dates : string[], doctorId : string}) : Promise<CurrentSlotType[]> {
    
    const dateRanges = dates.map((date) => {
        const startDate = new Date(date)
        const endDate = new Date(date)

         // start of the day midnight(UTC)
        endDate.setHours(23) // end of the day (END of UTC day)
        endDate.setMinutes(59)
        return {gte : startDate, lte : endDate}
    })

    // dateRanges.forEach(ele => {
    //     console.log(`${ele.gte.getDate()}-${ele.gte.getHours()}:${ele.gte.getMinutes()} to ${ele.lte.getDate()}-${ele.lte.getHours()}:${ele.lte.getMinutes()}`);
    // }) 
    

    const entries = await db.slot.findMany({
        where : {
            doctorId,
            OR : dateRanges.map((range) => ({
                startTime : range
            }))
        }
    })


    return entries
    
}


export function filteredCurrentAndNewSlotToCreateArr({newSlots, currentSlots} : {newSlots : SLotArrType[], currentSlots : CurrentSlotType[]}) : SLotArrType[] {



    const nonConflictingSlotsToCreate = newSlots.filter(newSlot => {
        return !currentSlots.some(existingSlot => {
                return (
                    new Date(newSlot.startTime) < existingSlot.endTime && new Date(newSlot.endTime) > existingSlot.startTime
                )
            }
        )
    })


    
    return nonConflictingSlotsToCreate as SLotArrType[]
} 