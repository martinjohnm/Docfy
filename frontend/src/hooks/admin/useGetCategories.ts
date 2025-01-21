import { useEffect, useState } from "react"
import { getCategoriesData } from "../../apis/admin/adminCategory"


interface CategoriesTypes {
    name : string,
    id : string
}


export const useGetCategories = () => {

    const [categories, setCategories] = useState<CategoriesTypes[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const getCategories = async ( ) => {
            const categoreisArr = await getCategoriesData()

            if (categoreisArr.success) {
                setCategories(categoreisArr.data.categories)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getCategories()

    }, [])

    return {loading, categories}
}