import { useEffect, useState } from "react"
import { DoctorResponseType } from "../../types/response.types"
import { getDoctors } from "../../apis/user/doctorApi"
import { useSetRecoilState } from "recoil"
import { allDoctorsAtom } from "../../store/atoms/user/doctorsState"



export const useGetDoctors = () => {

    
    const [doctors, setDoctors] = useState<DoctorResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const setAllDoctors = useSetRecoilState(allDoctorsAtom)

    useEffect(() => {

        const getdoctor = async () => {
            
            const doctor = await getDoctors()
            console.log(doctor);
            

            if (doctor.success) {
                setDoctors(doctor.data?.doctors ?? null)
                setAllDoctors(doctor.data?.doctors)
            } else {
                setLoading(false)
            }
        }

        getdoctor()

    }, [])

    return {loading, doctors}
}