import { useEffect, useState } from "react"
import { fetchSingleHospitalsDoctor } from "../../apis/doctor/doctorHospital"
import { CategoryResponseType } from "../../types/response.types"



export const useGetHospitalCategories = (id : string ) => {

    const [categories, setCategories] = useState<CategoryResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    
    
    useEffect(() => {

        setLoading(true)
        const getCategories = async ( ) => {
            const hospital = await fetchSingleHospitalsDoctor(id)
            
        
            if (hospital.success) {
                
                setCategories(hospital.data.hospital.categories ?? null)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getCategories()

    }, [id])

    return {loading, categories}
}