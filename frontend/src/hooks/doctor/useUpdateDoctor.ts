

import { useEffect, useState } from "react"
import { updateDoctorData } from "../../apis/doctor/doctorAuthApis"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"
import { DoctorUpdateInput } from "../../types/zod.types"
import { DoctorResponseType } from "../../types/response.types"



export const useUpdateDoctor = () =>{
    
    const [updatedDoctor, setUpdatedDoctor] = useState<DoctorResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const doctorState = useSetRecoilState(doctorAtom)

    useEffect(() => {


    }, [updatedDoctor])


    const updateDoctor = async ( postInputs : DoctorUpdateInput)  => {

        try {
                setLoading(true)
                const doctor = await updateDoctorData(postInputs)
                if (doctor.success) {
                    setUpdatedDoctor(doctor.data.doctor)
                    doctorState({
                        doctor : doctor.data.doctor,
                        isAuthenticated : true,
                        token : ""
                    })
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

   

    return {loading, updatedDoctor, updateDoctor}
}