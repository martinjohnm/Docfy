import { SearchDoctorComponent } from "../../../components/user/doctor/Search.doctor.component"
import { ReactSelectCategorysUser } from "../../../components/user/doctor/selects/React.select.category.user"
import { ReactSelectHostpitalsUser } from "../../../components/user/doctor/selects/React.select.hostpitals.user"




export const DoctorFilter = () => {


    return <div className="w-full">
      <div className="max-w-7xl container flex mx-auto h-16 bg-blue-100 sticky grid-cols-3">
     
        <ReactSelectHostpitalsUser/>
        <ReactSelectCategorysUser/>
        <SearchDoctorComponent/>
    </div> 
    </div>
}