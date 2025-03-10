import { useEffect, useState } from "react"
import { loginDoctor } from "../../apis/doctor/doctorAuthApis"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"
import { DoctorLoginInput } from "../../types/zod.types"
import { setDoctorToken } from "../../utils/tokenUtils"



export const useDoctorLogin = () =>{
    
    const [loggedIndoctor, setLoggedInDoctor] = useState<any | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const doctorState = useSetRecoilState(doctorAtom)

    useEffect(() => {

    }, [loggedIndoctor])

    const loginDoctorr = async (postInputs : DoctorLoginInput ) => {

        try {
                setLoading(true)
                const doctor = await loginDoctor(postInputs)
            
                if (doctor.success) {
                    setLoggedInDoctor(doctor.data.doctor)
                    doctorState({
                        doctor : doctor.data.doctor,
                        isAuthenticated : true,
                        token : ""
                    })
                    setDoctorToken(doctor.token)
                    setLoading(false)
                    return doctor
                } else {
                    setLoading(false)
                    return null
                }
                
        } catch(e) {
            setLoading(false)
            return null
        }
    }




    return {loading, loggedIndoctor, loginDoctorr}
}