import { useEffect, useState } from "react"
import { getLocationsData } from "../../apis/admin/adminLocation"
import { LocationAddInput } from "../../types/zod.types"





export const useGetlocations = () => {

    const [locations, setlocations] = useState<LocationAddInput[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {

        const getlocations = async ( ) => {
            const locationsArr = await getLocationsData()

            if (locationsArr.success) {
                setlocations(locationsArr.data.locations)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getlocations()

    }, [])

    return {loading, locations}
}