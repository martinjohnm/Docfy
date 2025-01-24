import { DoctorResponseType } from "../../response.types"




export interface doctorAuthType {
    isAuthenticated : boolean
    doctor : DoctorResponseType | null,
    token : string | null
}