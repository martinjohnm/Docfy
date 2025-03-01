


import { useRecoilValue } from "recoil"
import { filteredDoctorsAtom } from "../../../store/atoms/user/doctorsState"
import { useNavigate } from "react-router-dom"




export const DoctorsAllComponent = () => {

    const allDoctorsFromStore = useRecoilValue(filteredDoctorsAtom)

    return <div className="w-full">
   
    <div className="max-w-7xl container mx-auto justify-center lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-3 bg-slate-100" >
        {allDoctorsFromStore?.map((doctor) => (<DoctorProfileDiv key={doctor.id} id={doctor.id} location={doctor.hospital?.location.city ?? ""} name={doctor?.name ?? ""} dept={doctor.specialization?.name ?? ""} hospital={doctor.hospital?.name ?? ""}/>))}
    </div>
</div>
}

const DoctorProfileDiv = ({name, dept, hospital, location, id} : {name : string , dept : string, hospital : string, location : string, id : string}) => {

    const navigate = useNavigate()

    return <div className="flex justify-center items-center">
        
        <div className="w-60 h-72 bg-white border-spacing-5 rounded-2xl shadow-xl px-2 mb-3 mt-1 cursor-pointer" onClick={() => {
            navigate(id)
        }}>
         
            <div className="flex w-full py-2">
                <div className="p-2">
                    <p className="text-2xl font-medium">{`Dr. ${name}`}</p>
                    <p className="text-base font-medium">{`Hospital : ${hospital}, ${location}`}</p>
                    <p className="text-base font-medium">{`Spec : ${dept}`}</p>
                    
                </div>
            </div>
        </div>
    </div>
}