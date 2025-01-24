import { UserResponseType } from "../../response.types"




export interface userAuthType {
    isAuthenticated : boolean
    user : UserResponseType | null,
    token : string | null
}