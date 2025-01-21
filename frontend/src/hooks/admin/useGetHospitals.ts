import { useEffect, useState } from "react"
import { HospitalAddInput } from "../../types/zod.types"
import { getHospitalsData } from "../../apis/admin/adminHospital"





export const useGetHospitals = () => {

    const [hospitals, sethospitals] = useState<HospitalAddInput[] | null>(null)
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