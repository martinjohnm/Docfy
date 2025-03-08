import { useEffect, useState } from "react"
import { getDashBoardNumbersAdmin } from "../../../apis/admin/adminDashboardApi"
import { useSetRecoilState } from "recoil"
import { dashboardNoofBookings, dashboardNoofDepartments, dashboardNoofDoctors, dashboardNoofHospitals, dashboardNoofUsers } from "../../../store/atoms/admin/dashboardAdminState"





export const useGetDashBoardData = () => {


     const [loading, setLoading] = useState<boolean>(true)
    
        const setNoofDoctors = useSetRecoilState(dashboardNoofDoctors)
        const setNoofUsers = useSetRecoilState(dashboardNoofUsers)
        const setNoofBookings = useSetRecoilState(dashboardNoofBookings)
        const setNoofHospitals = useSetRecoilState(dashboardNoofHospitals)
        const setNoofDepartments = useSetRecoilState(dashboardNoofDepartments)

    
        useEffect(() => {
    
            const getData = async ( ) => {
    
    
                const datas = await getDashBoardNumbersAdmin()
    
                if (datas.success) {
                    console.log(datas.data);
                    
                    setNoofDepartments(datas.data.departmentsCount)
                    setNoofBookings(datas.data.bookingsCount)
                    setNoofDoctors(datas.data.doctorCount)
                    setNoofUsers(datas.data.userCount)
                    setNoofHospitals(datas.data.hospitalCount)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }
    
            getData()
    
        }, [])
    
        return {loading}
}