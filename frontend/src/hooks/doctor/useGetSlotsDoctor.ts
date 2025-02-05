


import { useEffect, useState } from "react"
import { getSlotsForDoctor } from "../../apis/doctor/doctorSlotApis"
import { SlotResponseType } from "../../types/response.types"
import { useSetRecoilState } from "recoil"
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"





export const useGetSlotsDoctor = () => {

    const [slots, setSlots] = useState< SlotResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const setSlotsForDoctr = useSetRecoilState(slotsByDoctorAtom)
    console.log("hai from useGetslots doctor");
    

    useEffect(() => {

        const getslots = async ( ) => {
            const slotsArr = await getSlotsForDoctor()

            if (slotsArr.success) {

                
                setSlots(slotsArr.data.slots)
                setSlotsForDoctr(slotsArr.data.slots)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getslots()

    }, [])

    return {loading, slots}
}