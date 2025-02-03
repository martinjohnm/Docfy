

import db from "../db"

type CreateSlot = {
    dates : string[], 
    duration : number, 
    startTime : number, 
    endTime : number, 
    breakStartTime : number, 
    breakEndTime : number,
    doctorId : string
}

export type SLotArrType = {
    startTime : Date,
    endTime : Date,
    duration : number,
    doctorId : string
}


export function CreateSlots({dates, duration, startTime, endTime, breakEndTime, breakStartTime, doctorId} : CreateSlot) : SLotArrType[] {



    const slots : SLotArrType[] = []

    dates.forEach(date => {
        const no_of_slots_forenoon = (breakStartTime - startTime)*60/duration
        const no_slots_afternoon = (endTime - breakEndTime)*60/duration

        for (let i = 0; i< no_of_slots_forenoon; i++) {
            
            
            const startTimeLoc = new Date(date)
            startTimeLoc.setHours(startTime)
            startTimeLoc.setMinutes(duration * i)

            const endTimeLoc = new Date(date)
            endTimeLoc.setHours(startTime)
            endTimeLoc.setMinutes(duration * i + duration)

            slots.push({startTime : startTimeLoc , endTime : endTimeLoc , duration, doctorId})
        }

        for (let i = 0; i< no_slots_afternoon; i++) {
            const startTimeloc = new Date(date)
            startTimeloc.setHours(breakEndTime)
            startTimeloc.setMinutes(duration * i)
            
            const endTimeloc = new Date(date)
            endTimeloc.setHours(breakEndTime)
            endTimeloc.setMinutes(duration * i + duration)
            
            
            slots.push({startTime : startTimeloc, endTime : endTimeloc, duration, doctorId})
        }
        
    });



    

    // slots.forEach(c => {
    //     console.log(`${c.startTime.getHours()}-${c.startTime.getMinutes()},${c.startTime.getDate()}-${c.startTime.getMonth()}-${c.startTime.getFullYear()}`, " || ", `${c.endTime.getHours()}-${c.endTime.getMinutes()},${c.endTime.getDate()}-${c.endTime.getMonth()}-${c.endTime.getFullYear()}`);
    // })


    return slots
}
