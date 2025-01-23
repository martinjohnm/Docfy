import { useNavigate } from "react-router-dom";




export const SingleHospitalNavbar = () => {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1)
    }


    return <div>
        <div className="grid grid-cols-4 bg-white shadow-md justify-center items-center">
            <div className="col-span-1 p-4">
                <div className="text-2xl font-semibold">
                    Hospital
                </div>
                
            </div>
            <div className="col-span-2 justify-center items-center">
            
            
            </div>
            <div className="col-span-1 justify-center items-center flex">
            </div>

            <div className="px-4">
                <button onClick={handleGoBack} className="bg-slate-400 p-2">Go Back</button>
            </div>
            
        </div>
       
    </div>
}

