


export const HomeMeetDoctors = () => {
    return <div className="bg-white border rounded-md w-full mt-10">
        <div className="lg:grid lg:grid-cols-12 p-4 min-h-96 gap-4">
            <div className="col-span-6 lg:mt-0 mt-6">
                <img className="rounded-lg" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/h1-10.webp" alt="" />
            </div>
            <div className="col-span-6 lg:py-4 px-2 flex-col items-center mt-4 lg:mt-0">
                <div className="flex gap-2 items-center h-[40%]">
                        <img className="w-4 h-4" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
                        <p className="text-black text-xl">Meet Our Doctors Docdy</p>
                </div>
                <div className="flex items-center justify-center h-[60%]">
                    <div className="">
                        <p className="text-slate-700 text-lg font-medium mt-4">“ I remind my fellows that <span className="underline italic">what we do is a privilege.</span> People let us into the most intimate aspects of their lives, and they look to us to help guide them through very complex and delicate situations ”
                        </p>
                        <div className="">
                            <hr className="h-px my-4 bg-white border-0"/>
                        </div>

                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="grid grid-cols-8 items-center justify-center">
                                <div className="col-span-2">
                                    <img src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ab23.png" alt="" />
                                </div>
                                <div className="col-span-6">
                                    <p>John Doe - Quote
                                    </p>
                                    <p>CEO Docdy Health Care Center</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center py-3 bg-blue-800 hover:bg-blue-950 cursor-pointer text-white max-w-72 rounded-xl">
                                <button>View All the Doctors</button>
                            </div>
                        </div>

                    </div>
                </div>
          
            </div>
            
       
            
        </div> 


   

           
    </div>
}
