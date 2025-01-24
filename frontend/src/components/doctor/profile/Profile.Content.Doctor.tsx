
import { useEffect } from "react"
import { useGetDoctor } from "../../../hooks/doctor/useGetDoctor"





export const ProfileContentDoctor = () => {

    const doctor = useGetDoctor()

    useEffect(() => {
        if (doctor){
        }
    }, [doctor])    

    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-10 min-h-svh">
        <div className="lg:grid lg:grid-cols-3  max-w-9xl container mx-auto min-h-96 gap-2">
                
                <div className="bg-red-400 col-span-1 p-2 shadow-2xl rounded-xl">
                    <div className="min-h-96 bg-violet-50">
                            <div className="w-full h-full flex items-center justify-center bg-violet-800">
                                <div className="h-28 w-28 mt-2 rounded-full flex items-center justify-center">
                                    <img className="h-28 w-28 rounded-full" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=826" alt="" />
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-center bg-blue-200">
                                <p className="font-semibold text-xl">{doctor.doctor?.name}</p>
                            </div>
                    </div>
                    <div className="bg-blue-200 mt-2 min-h-60">

                    </div>
                </div>

                <div className="col-span-2 bg-green-300 shadow-2xl rounded-xl min-h-96">

                </div>
                
            </div> 
</div>
}