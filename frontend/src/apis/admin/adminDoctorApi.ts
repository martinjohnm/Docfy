import { DoctorResponseType } from '../../types/response.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const getDoctorsAdmin = async ( {skip, take} : {skip : number, take : number} ) => {

    return adminApi< {success : boolean, data : { doctors : DoctorResponseType[], totalNoOfDoctors : number }, message : string} >(`admin/doctor/get-all/?skip=${skip}&take=${take}`, "GET")
}
