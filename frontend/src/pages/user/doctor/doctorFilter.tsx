import { DoctorsDateSelector } from "../../../components/user/doctor/Doctors.date.selector"
import { SearchDoctorComponent } from "../../../components/user/doctor/Search.doctor.component"
import { ReactSelectCategorysUser } from "../../../components/user/doctor/selects/React.select.category.user"
import { ReactSelectHostpitalsUser } from "../../../components/user/doctor/selects/React.select.hostpitals.user"




export const DoctorFilter = () => {


    return <div className="w-full">
      <div className="max-w-7xl container mx-auto bg-blue-100 sticky rounded-lg">
        <div className="md:grid-cols-3 grid">
          <ReactSelectCategorysUser/>
          <ReactSelectHostpitalsUser/>
          <DoctorsDateSelector/>
        </div>
        <div>
          <SearchDoctorComponent/>
        </div>
    </div> 
  
    </div>
}