import { useRecoilValue, useSetRecoilState } from "recoil"
import { categoryIdUserSelected } from "../../../store/atoms/user/categories.state"
import { hospitalIdUserSelected, hospitalsForCategoryIdUserSelected } from "../../../store/atoms/user/hospitalsUser"
import { useEffect, useState } from "react"
import { getHospitalsByCategoryId } from "../../../apis/user/hospitalApi"




export const useGetHospitalsForCategoryIdSelected = () => {
    
    const [loading, setLoading] = useState<boolean>(true)

    const setHospitalsForCategoryId = useSetRecoilState(hospitalsForCategoryIdUserSelected)
    const hospitalId = useRecoilValue(hospitalIdUserSelected)
    const categoryId = useRecoilValue(categoryIdUserSelected)
    

    useEffect(() => {
    
            const getHospitals = async () => {
                
                const hostpitals = await getHospitalsByCategoryId(categoryId)            
    
                if (hostpitals.success) {
                 
                    setHospitalsForCategoryId(hostpitals.data.hospitals)
                } else {
                    setLoading(false)
                }
            }
    
            getHospitals()
    
    }, [categoryId, hospitalId])
    
    return {loading}
    
}