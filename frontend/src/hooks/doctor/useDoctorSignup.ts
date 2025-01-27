

import { useEffect, useState } from "react"
import { signUpDoctor } from "../../apis/doctor/doctorAuthApis"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"
import { DoctorSignUpInput } from "../../types/zod.types"
import { DoctorResponseType } from "../../types/response.types"
import { setDoctorToken } from "../../utils/tokenUtils"



export const useSignUpDoctor = () =>{
    
    const [updatedDoctor, setUpdatedDoctor] = useState<DoctorResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const doctorState = useSetRecoilState(doctorAtom)

    useEffect(() => {


    }, [updatedDoctor])


    const signupDoctor = async ( postInputs : DoctorSignUpInput)  => {

        try {
                setLoading(true)
                const doctor = await signUpDoctor(postInputs)
           
                if (doctor.success) {
                    setUpdatedDoctor(doctor.data.doctor)
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

   

    return {loading, updatedDoctor, signupDoctor}
}