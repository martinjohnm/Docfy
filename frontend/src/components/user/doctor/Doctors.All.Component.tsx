


import { useRecoilValue } from "recoil"
import { allDoctorsAtom } from "../../../store/atoms/user/doctorsState"
import { useGetDoctors } from "../../../hooks/user/useGetDoctors"
import { useNavigate } from "react-router-dom"




export const DoctorsAllComponent = () => {

    useGetDoctors()
    const allDoctorsFromStore = useRecoilValue(allDoctorsAtom)

    return <div className="w-full">
    <div className="max-w-4xl container mx-auto">
        <div className="flex items-center justify-center">
            <img src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-base text-slate-400">People who are Always Dedicated to your Health</p>
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-2xl md:text-4xl font-medium text-black">Meet Our Doctors Medicross</p>
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-base text-slate-500 text-center">From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times.
            </p>
        </div>
    </div>
    <div className="max-w-7xl container mx-auto justify-center lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 gap-6" >
        {allDoctorsFromStore?.map((doctor) => (<DoctorProfileDiv key={doctor.id} id={doctor.id} location={doctor.hospital?.location.city ?? ""} name={doctor?.name ?? ""} dept={doctor.specialization?.name ?? ""} hospital={doctor.hospital?.name ?? ""}/>))}
    </div>
</div>
}

const DoctorProfileDiv = ({name, dept, hospital, location, id} : {name : string , dept : string, hospital : string, location : string, id : string}) => {

    const navigate = useNavigate()

    return <div className="flex justify-center items-center">
        
        <div className="w-80 h-96 bg-slate-200 border-spacing-5 rounded-2xl shadow-xl px-2 mt-6 cursor-pointer" onClick={() => {
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