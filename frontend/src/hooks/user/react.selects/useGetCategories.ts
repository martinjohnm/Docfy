


import { useEffect, useState } from "react"
import { CategoryResponseType } from "../../../types/response.types"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { categoriesAtom } from "../../../store/atoms/user/categories.state"
import { getAllCategories } from "../../../apis/user/categoryApi"
import { doctorHospitalFilterAtom } from "../../../store/atoms/user/hospitalsUser"





export const useGetCategories = () => {

    const [categories, setcategories] = useState< CategoryResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const hospitalId = useRecoilValue(doctorHospitalFilterAtom)
    const setCategory = useSetRecoilState(categoriesAtom)

    useEffect(() => {

        const gethospital = async ( ) => {
            const categoriesArr = await getAllCategories()

            if (categoriesArr.success) {
                setcategories(categoriesArr.data.categories)
                setCategory(categoriesArr.data.categories)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        gethospital()

    }, [hospitalId])

    return {loading, categories}
}