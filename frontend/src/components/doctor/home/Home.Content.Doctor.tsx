import { useRecoilValue } from "recoil"
import { doctorAtom } from "../../../store/atoms/authDoctorState"





export const HomeContentDoctor = () =>  {

    const doctor = useRecoilValue(doctorAtom)


    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-10">
            <div className="lg:grid lg:grid-cols-12 max-w-7xl container mx-auto min-h-96">
                <div className="col-span-6 lg:py-10 px-2 flex items-center justify-center">
                    <div className="">
                  
                        <div className="">
                            <p className="text-black lg:text-5xl md:text-3xl text-2xl mt-4">Welcome Back Dr. {doctor?.name}</p>
                            <p className="text-slate-500 text-base mt-4">Health professionals use a wide range of instruments to diagnose and treat a disease or other condition, to prevent a worsening of symptoms, to replace a damaged part.</p>
                        </div>
                        <hr className="h-px my-4 bg-white border-0"/>
                    </div>
              
                </div>
                <div className="col-span-6 lg:mt-0 mt-6 px-2 lg:absolute lg:-top-10 lg:left-1/2">
                    <img className="rounded-lg" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/10/h3-5.webp" alt="" />
                </div>
                
            </div> 
    
    
       
    

               
        </div>
}