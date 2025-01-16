
import { useRecoilValue } from "recoil"
import { HomeAppointmentScheduleCard } from "../../components/user/home/Home.Appointment.schedule.Card"
import { HomeCategoriesComp } from "../../components/user/home/Home.Categories.Comp"
import { HomeStepsComponent } from "../../components/user/home/Home.Steps.Component"
import { HomeTitleComponent } from "../../components/user/home/Home.Title.Component"
import { useUserLogout } from "../../hooks/user/useUserLogout"
import { useNavigate } from "react-router-dom"
import { userAtom } from "../../store/atoms/authState"



export const Home = () => {
 
    const logoutfn = useUserLogout()
    const user  = useRecoilValue(userAtom)
    const navi = useNavigate()
    
    const logout = () => {
        logoutfn()
        navi("/login")
    }
  
    return <div className="p-4">
        <div >
            <button className="bg-gray-300 p-4 rounded-md border" onClick={logout}>{user?.email}</button>
        </div>
        <div className="py-4">
            <HomeTitleComponent/>
        </div>
        <div className="py-4">
            <HomeAppointmentScheduleCard/>
        </div>
        <div className="py-4">
            <HomeStepsComponent/>
        </div>
        <div className="py-4">
            <HomeCategoriesComp/>
        </div>
    </div>
}