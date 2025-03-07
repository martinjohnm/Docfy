import { useEffect, useState } from "react"
import { getCategoriesData } from "../../../apis/admin/adminCategory"
import { useSetRecoilState } from "recoil"
import { categoriesAtom } from "../../../store/atoms/user/categories.state"


interface CategoriesTypes {
    name : string,
    id : string
}


export const useGetCategories = () => {

    const [categories, setCategories] = useState<CategoriesTypes[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const setcategoriesAll = useSetRecoilState(categoriesAtom)
    
    useEffect(() => {

        const getCategories = async ( ) => {
            const categoreisArr = await getCategoriesData()

            if (categoreisArr.success) {
                setCategories(categoreisArr.data.categories)
                setcategoriesAll(categoreisArr.data.categories)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getCategories()

    }, [])

    return {loading, categories}
}