import { ChangeEvent, useEffect, useState } from "react"
import { HospitalsFilter } from "./HospitalsFilter"
import { HospitalsNavbar } from "./HospitalsNavbar"
import { createHospitalAdmin } from "../../../apis/admin/adminHospital"
import { HospitalAddInput } from "../../../types/zod.types"
import { TextInput } from "../../Common/TextInput"
import { useGetHospitals } from "../../../hooks/admin/useGetHospitals"
import { Link } from "react-router-dom"
import { ReactSelectLocations } from "../../Common/ReactSelectLocations"



export const Hospitals = () => {

    const [isToggleAdd, setIsToggleAdd] = useState<Boolean>(true)
    
    const hospitals = useGetHospitals()

    const setToggleAdd = () => {
        setIsToggleAdd(c => !c)
    }



    return <div className="w-full h-full overflow-auto bg-slate-300">
                    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <HospitalsNavbar setToggleFn={setToggleAdd}/>
                        <HospitalsFilter/>
                    </div>
             
                    <div className="lg:max-w-[50%] mx-auto container p-4">
                        <div className="bg-blue-300 text-lg font-semibold">
                            {hospitals.hospitals?.map((hospital) => (
                                <div key={hospital.name}  className="p-4 border border-t justify-between flex">
                                    <p>{hospital.name}</p>
                                    <Link to={`${hospital.id}`} className="bg-green-600 hover:bg-green-700 rounded-lg px-2">edit</Link>
                                </div>
                               
                            ))}
                        </div>
                    </div>
                    <div>
                        <AddNewHospitalToggleWindow closeWindow={setToggleAdd} hidden={isToggleAdd}/>
                    </div>
                   
                </div>
    }

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>




const AddNewHospitalToggleWindow = ({hidden, closeWindow} : {hidden : Boolean, closeWindow : any} ) => {

    const [postInputs, setpostInputs] =  useState<HospitalAddInput>({
        name : "",
        locationId : "",

    })

    useEffect(() => {
        
    }, [postInputs])


    
    const createHospital = async (e: any) => {
        
        e.preventDefault()
        const createdloc = await createHospitalAdmin(postInputs)
        
        alert(createdloc.message)
        
        
     
    }   


    return <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${hidden ? "hidden" : ""} flex items-center justify-center p-4`}>
        <div className="bg-opacity-85 rounded-2xl bg-white">
            <div className="w-full justify-between items-end flex p-2 text-black">
                <div className="font-bold text-lg">
                    <p>Create Hospital</p>
                </div>
                <div className="justify-between">
                    <button onClick={closeWindow} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                </div>
            </div>
            <div className="w-full mx-auto container">

            <form className="p-2">

                <div className="grid grid-cols-2 gap-2 justify-center items-center min-h-28">

                    <TextInput label="Name" placeholder="ABC" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setpostInputs(c => ({
                                ...c,
                                name : e.target.value
                            }))
                        }} type="text"/>
                    
                    <ReactSelectLocations onLocationChange={(locationId  : string) => {
                        setpostInputs(c => ({
                            ...c,
                            locationId
                        }))
                    }}/>

               
                    
                </div>

                
                <div className="mt-2">
                    <button onClick={createHospital} type="submit" className="text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
                </div>
            </form>
            </div>
          
        </div>
        
    </div>
}