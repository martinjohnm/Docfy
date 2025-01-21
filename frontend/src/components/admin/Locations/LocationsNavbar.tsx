import { CiSearch } from "react-icons/ci"




export const LocationsNavbar = ({setToggleFn} : {setToggleFn : any} ) => {
    return <div className="grid grid-cols-4 bg-white shadow-md justify-center items-center">
        <div className="col-span-1 p-4">
            <div className="text-2xl font-semibold">
                Locations
            </div>
            
        </div>
        <div className="col-span-2 justify-center items-center">
          
            <div className="">
                <div className="p-4 flex justify-center items-center gap-1 max-w-3xl">
                    <input className="rounded-lg bg-slate-100 border w-full outline-none p-2" type="text" placeholder="Search For Locations" />
                    <div className="rounded-lg bg-slate-100 border outline-none p-3 cursor-pointer hover:bg-slate-200">
                        <CiSearch className="text-black"/>
                    </div>
                   
                </div>
                
            </div>
        </div>
        <div className="col-span-1 justify-center items-center flex">
            <button onClick={setToggleFn} className="p-2 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-900">Add new</button>
        </div>


        
    </div>
}

