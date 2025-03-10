import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { breakEndTimeToSlotAtom, breakstartTimeToSlotAtom, createdSlotsAtom, endTimeToSlotAtom, selectedDatesToCreateSlotsAtom, slotDurationAtom, startTimeToSlotAtom } from "../../atoms/doctor/slotsByDoctorAtom";
import { localSlotType } from "../../../types/recoil/doctor/slot.helpers.types";
import { doctorAtom } from "../../atoms/authDoctorState";
import toast from "react-hot-toast";



export const  useCreateSlots = () => {


    const [startTime, _setStartTime] = useRecoilState(startTimeToSlotAtom)
    const [endTime, _setEndTime] = useRecoilState(endTimeToSlotAtom)
    const [breakEndTime, _setBreakendTime] = useRecoilState(breakEndTimeToSlotAtom)
    const [breakStartTime, _setBreakStartTime] = useRecoilState(breakstartTimeToSlotAtom)
    const [duration, _setDuration] = useRecoilState(slotDurationAtom)
    const selectedDatesToCreateSlots = useRecoilValue(selectedDatesToCreateSlotsAtom)
    const doctor = useRecoilValue(doctorAtom)

    const setSlots = useSetRecoilState(createdSlotsAtom)


    useEffect(() => {

        if (doctor.doctor?.id) {
            setSlots(createSlots(doctor.doctor.id))

        } else {
            toast.error("LOgin to continue")
        }

    }, [startTime, endTime, breakEndTime, breakStartTime, duration, selectedDatesToCreateSlots])

    const createSlots = (doctorId : string) => {

            
        
            const slots : localSlotType[] = []
        
            selectedDatesToCreateSlots.forEach(date => {
                const no_of_slots_forenoon = (breakStartTime - startTime)*60/duration
                const no_slots_afternoon = (endTime - breakEndTime)*60/duration
        
                for (let i = 0; i< no_of_slots_forenoon; i++) {
                    
                    
                    const startTimeLoc = new Date(date)
                    startTimeLoc.setHours(startTime)
                    startTimeLoc.setMinutes(duration * i)
        
                    const endTimeLoc = new Date(date)
                    endTimeLoc.setHours(startTime)
                    endTimeLoc.setMinutes(duration * i + duration)
        
                    slots.push({startTime : startTimeLoc.toISOString() , endTime : endTimeLoc.toISOString() , duration,doctorId})
                }
        
                for (let i = 0; i< no_slots_afternoon; i++) {
                    const startTimeloc = new Date(date)
                    startTimeloc.setHours(breakEndTime)
                    startTimeloc.setMinutes(duration * i)
                    
                    const endTimeloc = new Date(date)
                    endTimeloc.setHours(breakEndTime)
                    endTimeloc.setMinutes(duration * i + duration)
                    
                    
                    slots.push({startTime : startTimeloc.toISOString(), endTime : endTimeloc.toISOString(), duration, doctorId})
                }
                
            });
        
        
        
            
        
            // slots.forEach(c => {
            //     console.log(`${c.startTime.getHours()}-${c.startTime.getMinutes()},${c.startTime.getDate()}-${c.startTime.getMonth()}-${c.startTime.getFullYear()}`, " || ", `${c.endTime.getHours()}-${c.endTime.getMinutes()},${c.endTime.getDate()}-${c.endTime.getMonth()}-${c.endTime.getFullYear()}`);
            // })
        
        
            return slots
    }
    
}