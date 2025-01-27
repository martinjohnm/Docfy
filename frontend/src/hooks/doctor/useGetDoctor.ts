import { useEffect, useState } from "react"
import { fetchDoctorData } from "../../apis/doctor/doctorAuthApis"
import { DoctorResponseType } from "../../types/response.types"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"



export const useGetDoctor = () => {

    const setRecoilDoctor = useSetRecoilState(doctorAtom)
    
    const [doctor, setDoctor] = useState<DoctorResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const getdoctor = async ( ) => {
            
            const doctor = await fetchDoctorData()

            if (doctor.success) {
                setDoctor(doctor.data.doctor)
                setRecoilDoctor({
                    isAuthenticated : true,
                    doctor : doctor.data.doctor,
                    token : ""
                  })
            } else {
                setLoading(false)
            }
        }

        getdoctor()

    }, [])

    return {loading, doctor}
}