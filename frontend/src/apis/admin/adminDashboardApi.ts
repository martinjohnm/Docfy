


import { adminApi } from '../../utils/apiClient/adminApiClient';



export const getDashBoardNumbersAdmin = async (  ) => {
    return adminApi< {success : boolean, data : { 
        doctorCount : number,
        hospitalCount : number,
        departmentsCount : number,
        userCount : number,
        bookingsCount : number }, message : string} >(`admin/dash/get-all`, "GET")
}


