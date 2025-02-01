
type CreateSlot = {
    dates : string[], 
    duration : number, 
    startTime : number, 
    endTime : number, 
    breakStartTime : number, 
    breakEndTime : number
}

type SLotArrType = {
    startTime : Date,
    endTime : Date
}


export function CreateSlots({dates, duration, startTime, endTime, breakEndTime, breakStartTime} : CreateSlot) : SLotArrType[] {


    const slots : SLotArrType[] = []

    dates.forEach(element => {
        const no_of_slots_forenoon = (breakStartTime - startTime)*60/duration
        const no_slots_afternoon = (endTime - breakEndTime)*60/duration

        for (let i = 0; i< no_of_slots_forenoon; i++) {
            
            // always get the startDate time from startTimeFornoon and multiply with the duraion to iteration
            // console.log(`${startTimeloc.getHours()}-${startTimeloc.getMinutes()}  to ${endTimeloc.getHours()}-${endTimeloc.getMinutes()}`);
            const startTimeLoc = new Date(element)
            startTimeLoc.setHours(startTime)
            startTimeLoc.setMinutes(duration * i)

            const endTimeLoc = new Date(element)
            endTimeLoc.setHours(startTime)
            endTimeLoc.setMinutes(duration * i + duration)

            slots.push({startTime : startTimeLoc , endTime : endTimeLoc })
        }

        for (let i = 0; i< no_slots_afternoon; i++) {
            const startTimeloc = new Date(element)
            startTimeloc.setHours(breakEndTime)
            startTimeloc.setMinutes(duration * i)
            
            const endTimeloc = new Date(element)
            endTimeloc.setHours(breakEndTime)
            endTimeloc.setMinutes(duration * i + duration)
            
            
            slots.push({startTime : startTimeloc, endTime : endTimeloc})
        }
        
    });

    // slots.forEach(c => {
    //     console.log(`${c.startTime.getHours()}-${c.startTime.getMinutes()},${c.startTime.getDate()}-${c.startTime.getMonth()}-${c.startTime.getFullYear()}`, " || ", `${c.endTime.getHours()}-${c.endTime.getMinutes()},${c.endTime.getDate()}-${c.endTime.getMonth()}-${c.endTime.getFullYear()}`);
    // })



    return slots
}
