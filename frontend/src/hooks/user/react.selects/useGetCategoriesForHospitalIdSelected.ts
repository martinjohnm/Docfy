import { useRecoilValue, useSetRecoilState } from "recoil"
import { hospitalIdUserSelected } from "../../../store/atoms/user/hospitalsUser"
import { useEffect, useState } from "react"
import { categoriesForHospitalIdUserSelected, categoryIdUserSelected } from "../../../store/atoms/user/categories.state"
import { getAllCategoriesByHospitalId } from "../../../apis/user/categoryApi"




export const useGetCategoriesForHospitalIdSelected = () => {
    
    
    const [loading, setLoading] = useState<boolean>(true)
    
    const setCategoriesForHospitalId = useSetRecoilState(categoriesForHospitalIdUserSelected)
    const hospitalId = useRecoilValue(hospitalIdUserSelected)
    const categoryId = useRecoilValue(categoryIdUserSelected)
    
        useEffect(() => {
        
                const getCategories = async () => {
                    
                    
                    const categories = await getAllCategoriesByHospitalId(hospitalId)            
        
                    if (categories.success) {
                        setCategoriesForHospitalId(categories.data.categories)
                    } else {
                        setLoading(false)
                    }
                }
        
                getCategories()
        
        }, [hospitalId, categoryId])
        
        return {loading}
    
}