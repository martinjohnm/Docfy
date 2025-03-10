

import { useEffect, useState } from "react"
import { SlotResponseType } from "../../types/response.types"
import { createSlots } from "../../apis/doctor/doctorSlotApis"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { createdSlotsAtom, selectedDatesToCreateSlotsAtom, slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"
import toast from "react-hot-toast"



export const useSlotUpdate = () =>{
    
    const [updatedSlots, setUpdatedSlots] = useState<SlotResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const setSlots = useSetRecoilState(slotsByDoctorAtom)
    const slotsToCreate = useRecoilValue(createdSlotsAtom)
    const datesFromAtom = useRecoilValue(selectedDatesToCreateSlotsAtom)

    const dates : string[] = datesFromAtom.map((date) => (date.toISOString()))
    
    useEffect(() => {


    }, [updatedSlots])


    const updatedSlot = async ()  => {

        try {
                setLoading(true)
                const slot = await createSlots({slotsToCreate, dates})
                if (slot.success) {
                    setUpdatedSlots(slot.data.slots)
                    setSlots(slot.data.slots)
                    setLoading(false)
                    toast.success(slot.message)
                    return slot
                } else {
                    setLoading(false)
                    return null
                }
                
        } catch(e) {
            setLoading(false)
            return null
        }
    }

   

    return {loading, updatedSlots, updatedSlot}
}