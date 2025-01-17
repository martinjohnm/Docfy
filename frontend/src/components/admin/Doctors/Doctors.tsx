



export const Doctors = () => {
    return <div className="w-full h-full overflow-auto bg-slate-300">
        <div className="p-2">
            <DoctorsNavbar/>
        </div>
    </div>
}


const DoctorsNavbar = () => {
    return <div className="grid grid-cols-3 bg-white shadow-md">
        <div className="col-span-2">
            Doctors
        </div>
    </div>
}