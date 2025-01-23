import { useEffect, useState } from "react"
import { getHospitalsData } from "../../apis/admin/adminHospital"
import { HospitalResponseType } from "../../types/response.types"





export const useGetHospitals = () => {

    const [hospitals, sethospitals] = useState< HospitalResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const gethospital = async ( ) => {
            const hospitalsArr = await getHospitalsData()

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