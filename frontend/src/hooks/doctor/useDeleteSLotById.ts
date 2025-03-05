import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"
import { deleteSlotById } from "../../apis/doctor/doctorSlotApis"
import toast from "react-hot-toast"




export const useDeleteSlotById = () => {

        const [loading, setLoading] = useState<boolean>(false)
    
        const setSlots = useSetRecoilState(slotsByDoctorAtom)
        
        useEffect(() => {
    
            
    
        }, [])
    
    
        const deleteSlotByIdFn = async ( id : string)  => {
    
            try {
                    setLoading(true)
                    const slot = await deleteSlotById(id)
                    if (slot.success) {
                        setSlots(slot.data.slots)
                        setLoading(false)
                        toast.success(slot.message)
                    } else {
                        setLoading(false)
                    }
                    
            } catch(e) {
                setLoading(false)
                return null
            }
        }
    
       
    
        return {loading, deleteSlotByIdFn}
}