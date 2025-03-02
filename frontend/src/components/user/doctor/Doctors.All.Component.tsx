


import { useRecoilState, useRecoilValue } from "recoil"
import { filteredDoctorsAtom, filteredDoctorStartOfPage, filteredDoctorsTotalPages, filteredDoctorTotalRecords } from "../../../store/atoms/user/doctorsState"
import { useNavigate } from "react-router-dom"




export const DoctorsAllComponent = () => {

    const allDoctorsFromStore = useRecoilValue(filteredDoctorsAtom)
    const totalNoOfBooking = useRecoilValue(filteredDoctorTotalRecords)
    const [totalNoOfPages, setTotalNoOfPages] = useRecoilState(filteredDoctorsTotalPages)
    const [selectedPageNo, setSelectedPageNo] = useRecoilState(filteredDoctorStartOfPage)

    console.log(totalNoOfPages, selectedPageNo);
    
    
    setTotalNoOfPages(Math.floor(totalNoOfBooking/10) + 1)

     
    const prevPage = () => {
        if (selectedPageNo > 0) {
            setSelectedPageNo(selectedPageNo-1)
        }
    }


    const nextPage = () => {
        if (selectedPageNo < totalNoOfPages-1) {
            setSelectedPageNo(selectedPageNo+1)
            
        }
    }


    return <div className="w-full">
   
    <div className="max-w-7xl container mx-auto justify-center lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-3 bg-slate-100" >
        {allDoctorsFromStore?.map((doctor) => (<DoctorProfileDiv key={doctor.id} id={doctor.id} location={doctor.hospital?.location.city ?? ""} name={doctor?.name ?? ""} dept={doctor.specialization?.name ?? ""} hospital={doctor.hospital?.name ?? ""}/>))}
        
    </div>
    <div className="max-w-7xl w-full container mx-auto justify-center items-center">
        <div className="flex justify-center items-center">
        <button onClick={prevPage} className={`px-2 text-sm items-center justify-center flex bg-blue-100 hover:bg-blue-300 rounded-md
                    ${selectedPageNo == 0 ? "cursor-not-allowed" : ""}`}>
                    <p>{"<<prev"}</p>
                </button>
                {Array.from({ length: totalNoOfPages }).map((_, index) => (
                    <button onClick={() => {setSelectedPageNo(index)}}  key={index} className={`border rounded  w-8 h-8 justify-center hover:bg-blue-400 items-center flex ${selectedPageNo == (index ) ? "bg-blue-300" : "bg-gray-200"} 
                    `}>
                    {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} className={`px-2 text-sm items-center justify-center flex bg-blue-100 hover:bg-blue-300 rounded-md
                    ${selectedPageNo == totalNoOfPages-1 ? "cursor-not-allowed" : ""}`}>
                    <p>{"next>>"}</p>
                </button>
        </div>
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