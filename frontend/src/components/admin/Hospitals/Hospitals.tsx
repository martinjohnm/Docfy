import { ChangeEvent, useEffect, useState } from "react"
import { HospitalsFilter } from "./HospitalsFilter"
import { HospitalsNavbar } from "./HospitalsNavbar"
import { createHospitalAdmin } from "../../../apis/admin/adminHospital"
import { HospitalAddInput } from "../../../types/zod.types"
import { TextInput } from "../../Common/TextInput"
import { useGetHospitals } from "../../../hooks/admin/useGetHospitals"
import { ReactSelectHospitals } from "../../Common/React.Select.Hospitals"



export const Hospitals = () => {

    const [isToggle, setIsToggle] = useState<Boolean>(true)
    const hospitals = useGetHospitals()

    const setToggle = () => {
        setIsToggle(c => !c)
    }



    return <div className="w-full h-full overflow-auto bg-slate-300">
                    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <HospitalsNavbar setToggleFn={setToggle}/>
                        <HospitalsFilter/>
                    </div>
             
                    <div className="lg:max-w-[50%] mx-auto container p-4">
                        <div className="bg-blue-300 text-lg font-semibold">
                            {hospitals.hospitals?.map((hospital) => (
                                <div key={hospital.name} className="p-4 border border-t">{hospital.name}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <AddNewDepartmentToggleWindow closeWindow={setToggle} hidden={isToggle}/>
                    </div>
                </div>
    }

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>


const AddNewDepartmentToggleWindow = ({hidden, closeWindow} : {hidden : Boolean, closeWindow : any} ) => {

    const [postInputs, setpostInputs] =  useState<HospitalAddInput>({
        name : "",
        locationId : ""
    })

    useEffect(() => {
        console.log(postInputs);
        
    }, [postInputs])


    
    const createHospital = async (e: any) => {
        
        e.preventDefault()
        const createdloc = await createHospitalAdmin(postInputs)
        
        alert(createdloc.message)
        
        
     
    }   

    const handleInputChange = (field: string, value: any) => {
        setpostInputs((prev) => ({ ...prev, [field]: value.value }));
      };
    return <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${hidden ? "hidden" : ""} flex items-center justify-center`}>
        <div className="bg-opacity-65 rounded-2xl bg-black">
            <div className="w-full justify-between items-end flex p-2">
                <div className="text-white font-bold text-lg">
                    <p>Create Hospital</p>
                </div>
                <div className="text-white justify-between">
                    <button onClick={closeWindow} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                </div>
            </div>
            <div className="w-full mx-auto container">

            <form className="p-2">

                <TextInput label="Name" placeholder="ABC" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setpostInputs(c => ({
                            ...c,
                            name : e.target.value
                        }))
                    }} type="text"/>
                
                <ReactSelectHospitals selectedCategory={postInputs.locationId} onCategoryChange={(value ) => handleInputChange("locationId", value)}/>
                
                <div className="mt-2">
                    <button onClick={createHospital} type="submit" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
                </div>
            </form>
            </div>
          
        </div>
        
    </div>
}