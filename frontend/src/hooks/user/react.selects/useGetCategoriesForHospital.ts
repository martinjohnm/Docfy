


import { useEffect, useState } from "react"
import { CategoryResponseType } from "../../../types/response.types"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { categoriesByHospitalIdAtom } from "../../../store/atoms/user/categories.state"
import { getAllCategoriesByHospitalId } from "../../../apis/user/categoryApi"
import { doctorHospitalFilterAtom } from "../../../store/atoms/user/hospitalsUser"





export const useGetCategoriesForHospital = () => {

    const [categories, setcategories] = useState< CategoryResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const hospitalId = useRecoilValue(doctorHospitalFilterAtom)

    const setCategoriesForHospital = useSetRecoilState(categoriesByHospitalIdAtom)


    useEffect(() => {

        const gethospitals = async ( ) => {
            const categoriesArr = await getAllCategoriesByHospitalId(hospitalId ?? "d")

            if (categoriesArr.success) {
                setcategories(categoriesArr.data.categories)
                setCategoriesForHospital(categoriesArr.data.categories)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        gethospitals()

    }, [hospitalId])

    return {loading, categories}
}