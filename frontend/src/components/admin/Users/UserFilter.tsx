






export const UserFilter = () => {
    return <div className="bg-white flex justify-start items-center">
            <FilterOption filter="All Users" selected={true}/>
            <FilterOption filter="Active Users" selected={false}/>
            <FilterOption filter="Blocked Users" selected={false}/>
    </div>
}

const FilterOption = ({filter, selected} : {filter : string, selected : boolean}) => {
    return <div className={`px-4 ${selected ? "bg-slate-300" : ""} hover:bg-slate-200 cursor-pointer py-2`}>
        {filter}
    </div>
}

