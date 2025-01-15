

export const HomeAppointmentScheduleCard = () => {
    return <div className="w-full lg:grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 bg-[#061e34] min-h-96 rounded-lg text-white">
            hai
        </div>
        <div className="lg:col-span-2 bg-[#d7eaf3] rounded-lg md:grid md:grid-cols-3 mt-4 lg:mt-0">
            <div className="md:col-span-1 rounded-lg justify-center items-center flex">
                 <div className="justify-center items-center p-4">
                    <div>
                        <p className="text-black text-4xl">Your Path to Better
                        Health Begins Here!</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-md">
                            Appreciate and check your health more often, let us help you do that! Our medical groups provide the high-quality care you would expect.
                        </p>
                    </div>
                 </div>
            </div>
            <div className="md:col-span-2 rounded-lg justify-center items-center flex">
                <div className="justify-center items-center grid grid-cols-2 gap-4">
                    <div>
                        <button className="bg-[#e7f2f7] p-2 min-w-48 rounded-md shadow-md">Find a Doctor</button>
                        
                    </div>
                    <div>
                        <button className="bg-[#e7f2f7] p-2 min-w-48 rounded-md shadow-md">Find a Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}