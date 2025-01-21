import { ChangeEvent, useState } from "react"
import { createCategoryAdmin } from "../../../apis/admin/adminCategory"
import { DepartmentsFilter } from "./DepartmentsFilter"
import { DepartmentsNavbar } from "./DepartmentsNavbar"
import { useGetCategories } from "../../../hooks/admin/useGetCategories"

interface AdminCreateType {
    name : string
}


export const Departments = () => {

    const [isToggle, setIsToggle] = useState<Boolean>(true)

    const categories = useGetCategories()


    const setToggle = () => {
        setIsToggle(c => !c)
    }
    
    
    return <div className="w-full h-full overflow-auto bg-slate-300">
                <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                    <DepartmentsNavbar setToggleFn={setToggle}/>
                    <DepartmentsFilter/>
                </div>
                <div className="lg:max-w-[50%] mx-auto container p-4">
                    <div className="bg-blue-300 text-lg font-semibold">
                        {categories.categories?.map((cat) => (
                            <div key={cat.id} className="p-4 border border-t">{cat.name}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <AddNewDepartmentToggleWindow closeWindow={setToggle} hidden={isToggle}/>
                </div>  
            </div>
}



const AddNewDepartmentToggleWindow = ({hidden, closeWindow} : {hidden : Boolean, closeWindow : any} ) => {

    const [postInputs, setpostInputs] =  useState<AdminCreateType>({
        name : ""
    })


    
    const createCat = async (e: any) => {
        
        e.preventDefault()
        const createdCat = await createCategoryAdmin(postInputs)
        
        alert(createdCat.message)
        
     
    }   
    return <div className={`absolute top-0 bg-opacity-20 left-0 z-50 w-screen h-screen bg-slate-300 ${hidden ? "hidden" : ""} flex items-center justify-center`}>
        <div className="bg-opacity-65 rounded-2xl w-[20%] h-[40%] bg-black">
            <div className="w-full justify-end items-end flex p-2">
                <div className="text-white justify-end">
                    <button onClick={closeWindow} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                </div>
            </div>
                    
            <form className="p-4">
               
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-white px-2.5">Category Name</label>
                    <input onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setpostInputs(c => ({
                            ...c,
                            name : e.target.value
                        }))
                    }} type="text" className="border outline-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="Cardelogy" required />
                </div> 
                
                <button onClick={createCat} type="submit" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
            </form>

          
        </div>
        
    </div>
}