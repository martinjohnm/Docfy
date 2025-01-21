import { LocationAddInput } from '../../types/zod.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const createLocationAdmin = async (data : LocationAddInput ) => {
    return adminApi< {success : boolean, data : { location : any }, message : string} >("admin/location/create", "POST", data)
}

export const getLocationsData = async () => {
  return adminApi<{ success : boolean,  data : {locations : any} , message : string}>("admin/location/get-all", "GET")
};
