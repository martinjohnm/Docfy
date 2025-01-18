import { Reports } from "../../components/admin/Reports/Reports"
import { SideBar } from "../../components/admin/SideBar"


export const ReportsPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                            <SideBar name="Reports"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Reports/>
                        </div>
                    </div>
        </div>
}