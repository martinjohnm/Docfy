import { useEffect, useState } from "react"
import { fetchDoctorData } from "../../apis/doctor/doctorAuthApis"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"



export const useDoctorLogin = () =>{
    
    const [doctor, setDoctor] = useState<any | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const doctorState = useSetRecoilState(doctorAtom)

    useEffect(() => {

        const getDoctor = async ( ) => {

            try {
                    const doctor = await fetchDoctorData()

                    if (doctor.success) {
                        setDoctor(doctor.data.user)
                        doctorState({
                            doctor : doctor.data.user,
                            isAuthenticated : true,
                            token : ""
                        })
                        setLoading(false)
                    } else {
                        setLoading(false)
                    }
            } catch(e) {
                setLoading(true)
            }
        }

        getDoctor()

    }, [])

    return {loading, doctor}
}