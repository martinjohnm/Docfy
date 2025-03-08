import { useRecoilValue } from "recoil"
import { useGetDashBoardData } from "../../../hooks/admin/dashboard/useGetDashBoardData"
import { NumbersCardDash } from "./Numbers.Card.Dash"
import { dashboardNoofBookings, dashboardNoofDepartments, dashboardNoofDoctors, dashboardNoofHospitals, dashboardNoofUsers } from "../../../store/atoms/admin/dashboardAdminState"




export const Dashboard = () => {

    useGetDashBoardData()

    const noOfUsers = useRecoilValue(dashboardNoofUsers)
    const noOfDoctors = useRecoilValue(dashboardNoofDoctors)
    const noOfbookings = useRecoilValue(dashboardNoofBookings)
    const noOfHospitals = useRecoilValue(dashboardNoofHospitals)
    const noOfDepartments = useRecoilValue(dashboardNoofDepartments)
    
    return <div className="w-full h-full overflow-auto bg-[#1D4A63]">
        
        
        <div className="md:grid md:grid-cols-3 p-4 gap-3 min-h-60">
            <NumbersCardDash title="Users" data={noOfUsers}/>
            <NumbersCardDash title="Doctors" data={noOfDoctors}/>
            <NumbersCardDash title="Bookings" data={noOfbookings}/>
            <NumbersCardDash title="Hospitals" data={noOfHospitals}/>
            <NumbersCardDash title="Departments" data={noOfDepartments}/>
        </div>


 
        <div className=""></div>
    </div>
}



