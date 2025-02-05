

import { useEffect, useState } from "react"
import { SlotsCreateInput } from "../../types/zod.types"
import { SlotResponseType } from "../../types/response.types"
import { createSlots } from "../../apis/doctor/doctorSlotApis"
import { useSetRecoilState } from "recoil"
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"



export const useSlotUpdate = () =>{
    
    const [updatedSlots, setUpdatedSlots] = useState<SlotResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const setSlots = useSetRecoilState(slotsByDoctorAtom)
    
    useEffect(() => {


    }, [updatedSlots])


    const updatedSlot = async ( postInputs : SlotsCreateInput)  => {

        try {
                setLoading(true)
                const slot = await createSlots(postInputs)
                if (slot.success) {
                    setUpdatedSlots(slot.data.slots)
                    setSlots(slot.data.slots)
                    setLoading(false)
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