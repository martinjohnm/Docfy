import { useEffect, useState } from "react"
import { fetchDoctorData } from "../../apis/doctor/doctorAuthApis"
import { DoctorResponseType } from "../../types/response.types"



export const useGetDoctor = () => {

    const [doctor, setDoctor] = useState<DoctorResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const getdoctor = async ( ) => {
            const doctor = await fetchDoctorData()

            if (doctor.success) {
                setDoctor(doctor.data.user)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getdoctor()

    }, [])

    return {loading, doctor}
}