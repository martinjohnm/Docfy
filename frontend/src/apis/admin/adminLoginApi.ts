


import { AdminResponseType } from '../../types/response.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const adminLogin = async ( {email, password} : {email : string, password : string} ) => {
    return adminApi< {success : boolean, data : { admin : AdminResponseType, isAdminAuthenticated : boolean, adminToken : string}, message : string} >(`admin/auth/login`, "POST", {email, password})
}


export const adminLogout = async () => {
    return adminApi< {success : boolean, data : { admin : AdminResponseType, isAdminAuthenticated : boolean, adminToken : string}, message : string} >(`admin/auth/logout`, "POST")
}



export const fetchAdmin = async () => {
    return adminApi< {success : boolean, data : { admin : AdminResponseType, isAdminAuthenticated : boolean, adminToken : string}, message : string} >(`admin/auth/get-admin`, "GET")
}


