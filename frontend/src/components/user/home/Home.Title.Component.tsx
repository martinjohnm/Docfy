


export const HomeTitleComponent = () => {
    return <div className="bg-[#061e34] rounded-md w-full">
            <div className="md:grid md:grid-cols-2 max-w-6xl container mx-auto min-h-96 p-4">
                <div className="flex items-center justify-center w-full">
                    <div className="justify-center items-center flex-col">
                        <p className="text-yellow-400 text-xl py-4 font-semibold">Medicross Health Care Center</p>
                        <p className="md:text-6xl text-3xl text-white font-bold">Your Journey to Exclusive Wellness Begins Here.</p>
                    </div>
                    
                </div>
                <div className="items-center justify-center w-full flex">
                    <div className="justify-center items-center">
                        <div className="py-4">
                            <p className="text-yellow-400 text-base md:text-lg">The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes, 
                                consequently develop an institution supported with necessary. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           
                        </div>
                        <div>
                            <button className="bg-yellow-500 p-4 rounded-lg">View all services</button>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div className="relative bg-red-300 border border-gray-400">
                <img 
                    src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/10/h3-2.webp" 
                    alt="Floating Image" 
                    className=" top-0 left-0 w-screen max-h-96 object-cover transform rounded-md"
                />
            </div>
           
            
    </div>
}