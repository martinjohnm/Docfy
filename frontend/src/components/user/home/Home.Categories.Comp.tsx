


export const HomeCategoriesComp = () => {
    return <div className="bg-[#061e34] rounded-md w-full p-4">
        <div className="grid grid-cols-12 py-10">
            <div className="col-span-6">
                <div className="px-20 flex gap-2 items-center">
                    <img className="w-4 h-4" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic1.png" alt="" />
                    <p className="text-yellow-500 text-lg">We Provide the Best Service for your Health </p>
                </div>
                <div className="px-20 mx-5">
                    <p className="text-white text-4xl font-semibold">Our Practice Areas and Expertise</p>
                </div>
            </div>
            <div className="col-span-3">
                <p className="text-slate-400">Health professionals use a wide range of instruments to diagnose 
                    and treat a disease or other condition, to prevent a worsening of symptoms, 
                    to replace a damaged part.</p>
            </div>
            <div className="col-span-3 flex items-center justify-center">
                <button className="bg-slate-500 px-6 py-2 rounded-lg hover:bg-white text-white hover:text-black">View All Services</button>
            </div>
        </div>   

        <div className="grid grid-cols-3 py-10 px-20 min-h-40">
            <div className="bg-sky-800 px-10 py-24 rounded-md items-center justify-center">
                <div>
                    <p className="text-white font-semibold text-3xl">Practice List</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    <Category title="Dental Care"/>
                    
                </div>
            </div>
            <div className="px-10 py-24 bg-white rounded-md">
                <CategoryDiv title="Orthopedics" description="The orthopedics category encompasses the branch of medicine focused on the diagnosis, treatment, prevention, and rehabilitation of disorders, injuries, and conditions affecting the musculoskeletal system."/>
            </div>
            <div className="bg-sky-800 overflow-hidden">
                <img className="rounded-md object-cover" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/sv8.webp" alt="" />
            </div>
        </div>     
    </div>
}


export const Category = ({title} : {title : string}) => {
    return <div className="w-full">
        <p className="text-xl text-white">{title}</p>
    </div>
}

export const CategoryDiv = ({title, description} : {title : string, description : string}) => {
    return <div className="w-full">
        <p className="text-3xl text-black font-semibold">{title}</p>
        <p className="mt-4 text-slate-500">{description}</p>
        <div className="grid grid-cols-2">
            <CategoryDiseases title="Treat dental problems"/>
            <CategoryDiseases title="Treat dental problems"/>
            <CategoryDiseases title="Treat dental problems"/>
            <CategoryDiseases title="Treat dental problems"/>
            <CategoryDiseases title="Treat dental problems"/>
            <CategoryDiseases title="Treat dental problems"/>
            
        </div>
    </div>
}

export const CategoryDiseases = ({title}:{title : string}) => {
    return <div>
        <p>{title}</p>
    </div>
}