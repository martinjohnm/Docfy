import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { doctorAtom } from "../../store/atoms/authDoctorState"
import { removeDoctorToken } from "../../utils/tokenUtils"







export const useDoctorLogout = () => {
        const [loading, setLoading] = useState<boolean>(false)
        const doctorState = useSetRecoilState(doctorAtom)

        const logoutDoctor = async ( ) => {
            setLoading(true)
            try {
                   removeDoctorToken()
                   doctorState({
                    isAuthenticated : false,
                    doctor : null,
                    token : null
                   })
                   setLoading(false)
            } catch(e) {
                setLoading(false)
            }
        }
    
    
        return {loading, logoutDoctor}
}