import { SelectedAdminSidebarType, SideBar } from "../SideBar"


export const ContetsAll = ({sideType}: {sideType : SelectedAdminSidebarType}) => {
    return <div className="grid grid-cols-7 border">
        <div className="col-span-1">
            <SideBar name={sideType}/>
        </div>
        <div className="col-span-6">
            
        </div>
    </div>
}