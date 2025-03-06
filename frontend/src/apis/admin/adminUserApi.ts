import { UserResponseType } from '../../types/response.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const getUsersAdmin = async ( {skip, take} : {skip : number, take : number} ) => {

    return adminApi< {success : boolean, data : { users : UserResponseType[], totalNoOfUsers : number }, message : string} >(`admin/user/get-all/?skip=${skip}&take=${take}`, "GET")
}
