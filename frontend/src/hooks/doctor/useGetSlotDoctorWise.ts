import { useEffect, useState } from "react"
import { DoctorResponseType, SlotResponseType } from "../../types/response.types"
import { getSlotsDoctorWise } from "../../apis/user/slotApi"
import { useSetRecoilState } from "recoil"
import { slotsByDoctorForUserAtom } from "../../store/atoms/user/slotsByDoctorForUserAtom"




export const useGetSlotDoctorWise = (id : string) => {

    const [slots, setslots] = useState< SlotResponseType[] | null>(null)
    const [doctor, setDoctor] = useState<DoctorResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const setSlotsByDoctor = useSetRecoilState(slotsByDoctorForUserAtom)

    const getslots = async ( id : string) => {
        const slots = await getSlotsDoctorWise({id})

        if (slots) {
            setslots(slots.data.slots)
            setDoctor(slots.data.doctor)
            setSlotsByDoctor(slots.data.slots)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }


    useEffect(() => {

        getslots(id)

    }, [])

    return {loading, slots, doctor, getslots}
}