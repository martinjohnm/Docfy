


import { useEffect, useState } from "react"
import { HospitalResponseType } from "../../../types/response.types"
import { getHospitals } from "../../../apis/user/hospitalApi"
import { useSetRecoilState } from "recoil"
import { doctorAllHospitalsForReactselect } from "../../../store/atoms/user/hospitalsUser"



export const useGetHospitals = () => {

    const [hospitals, sethospitals] = useState< HospitalResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const setHospitalsforFIlter = useSetRecoilState(doctorAllHospitalsForReactselect)

    useEffect(() => {

        const gethospital = async ( ) => {
            const hospitalsArr = await getHospitals()

            if (hospitalsArr.success) {
                sethospitals(hospitalsArr.data.hospitals)
                setHospitalsforFIlter(hospitalsArr.data.hospitals)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        gethospital()

    }, [])

    return {loading, hospitals}
}