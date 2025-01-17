


export const DoctorFilter = () => {
    return <div className="bg-white flex justify-start items-center">
            <FilterOption filter="All Doctors" selected={true}/>
            <FilterOption filter="Active Doctors" selected={false}/>
            <FilterOption filter="Blocked Doctors" selected={false}/>
    </div>
}

const FilterOption = ({filter, selected} : {filter : string, selected : boolean}) => {
    return <div className={`px-4 ${selected ? "bg-slate-300" : ""} hover:bg-slate-200 cursor-pointer py-2`}>
        {filter}
    </div>
}

