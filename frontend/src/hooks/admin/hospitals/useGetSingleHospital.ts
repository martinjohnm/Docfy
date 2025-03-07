import { useEffect, useState } from "react"
import { HospitalResponseType } from "../../../types/response.types"
import { getSingleHospitalData } from "../../../apis/admin/adminHospital"


export const useGetSingleHospital = (id : string) => {

    const [hospital, sethospital] = useState< HospitalResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {

        const gethospital = async ( id : string) => {
            const hospital = await getSingleHospitalData(id)

            if (hospital.success) {
                sethospital(hospital.data.hospital)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        gethospital(id)

    }, [])

    return {loading, hospital}
}