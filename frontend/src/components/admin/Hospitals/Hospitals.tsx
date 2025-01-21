import { useState } from "react"
import { HospitalsFilter } from "./HospitalsFilter"
import { HospitalsNavbar } from "./HospitalsNavbar"
import { createCategoryAdmin } from "../../../apis/admin/adminCategory"



export const Hospitals = () => {

    const [isToggle, setIsToggle] = useState<Boolean>(true)

    const setToggle = () => {
        setIsToggle(c => !c)
    }



    return <div className="w-full h-full overflow-auto bg-slate-300">
                    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <HospitalsNavbar setToggleFn={setToggle}/>
                        <HospitalsFilter/>
                    </div>
             
                    <div className=""></div>
                    <div>
                        <AddNewHospitalToggleWindow closeWindow={setToggle} hidden={isToggle}/>
                    </div>
                </div>
    }

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>


    const AddNewHospitalToggleWindow = ({hidden, closeWindow} : {hidden : Boolean, closeWindow : any} ) => {


        const createCat = async () => {

            const createdCat = await createCategoryAdmin({
                name : "Cardeology"
            })

            console.log(createdCat.message);
            
        }   
        return <div className={`absolute top-0 bg-opacity-20 left-0 z-50 w-screen h-screen bg-slate-300 ${hidden ? "hidden" : ""} flex items-center justify-center`}>
            <div className="bg-opacity-65 rounded-2xl w-[70%] h-[90%] bg-black">
                <div className="w-full justify-end items-end flex p-2">
                    <div className="text-white justify-end">
                        <button onClick={closeWindow} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl">Close</button>
                    </div>
                </div>
                
            </div>
            <button onClick={createCat} className="bg-green-500 p-2">create admin</button>
        </div>
    }