import { adminApi } from '../../utils/apiClient/adminApiClient';



export const createCategoryAdmin = async (data : { name : string} ) => {
    return adminApi< {success : boolean, data : { category : any }, message : string} >("admin/category/create", "POST", data)
}

export const getCategoriesData = async () => {
  return adminApi<{ success : boolean,  data : {categories : any} , message : string}>("admin/category/get-all", "GET")
};
