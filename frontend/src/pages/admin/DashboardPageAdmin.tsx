import { Dashboard } from "../../components/admin/Dashboard/Dashboard"
import { SideBar } from "../../components/admin/SideBar"



export const DashboardPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                            <div className="col-span-1">
                                <SideBar name="Dashboard"/>
                            </div>
                            <div className="col-span-6 h-screen">
                                <Dashboard/>
                            </div>
                    </div>
        </div>
}