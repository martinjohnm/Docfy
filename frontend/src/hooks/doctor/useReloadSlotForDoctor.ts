import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { getSlotsForDoctor } from "../../apis/doctor/doctorSlotApis"
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"
import toast from "react-hot-toast"




export const useReloadSlotForDoctor = () => {

    const [slotsLoading, setLoading] = useState<boolean>(true)

    const setSlotsByDoctor = useSetRecoilState(slotsByDoctorAtom)

    const reloadSlotsForDoctor = async () => {

        setLoading(true)
        const slots = await getSlotsForDoctor()

        if (slots) {
            setSlotsByDoctor(slots.data.slots)
            setLoading(false)
            toast.success("slots reloaded")
        } else {
            setLoading(false)
        }
    }


    useEffect(() => {

        

    }, [slotsLoading])

    return {slotsLoading, reloadSlotsForDoctor}
}