


import { useEffect, useState } from "react"
import { HospitalResponseType } from "../../types/response.types"
import { fetchAllHospitalsDoctor } from "../../apis/doctor/doctorHospital"





export const useGetHospitalsDoctor = () => {

    const [hospitals, sethospitals] = useState< HospitalResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const gethospital = async ( ) => {
            const hospitalsArr = await fetchAllHospitalsDoctor()

            if (hospitalsArr.success) {
                sethospitals(hospitalsArr.data.hospitals)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        gethospital()

    }, [])

    return {loading, hospitals}
}