import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { BookingTypeToFetch } from "../../../types/recoil/user/bookings.state.type"
import { selectedBookingstypeTofetchAdmin, selectedPageNumberAdmin } from "../../../store/atoms/admin/bookingsByAdminAtoms"



export const BookingsFilter = () => {

    const filterFromAtom = useRecoilValue(selectedBookingstypeTofetchAdmin)


    return <div className="bg-white flex justify-start items-center">
            <FilterOption filter="upcoming" selected={true ? filterFromAtom == "upcoming" : false}/>
            <FilterOption filter="completed" selected={true ? filterFromAtom == "completed" : false}/>
            <FilterOption filter="canceled" selected={true ? filterFromAtom == "canceled" : false}/>
            <FilterOption filter="all" selected={true ? filterFromAtom == "all" : false}/>
        
    </div>
}

const FilterOption = ({filter, selected} : {filter : BookingTypeToFetch, selected : boolean}) => {

    const setFilter = useSetRecoilState(selectedBookingstypeTofetchAdmin)
    const [_selectedPageNo, setSelectedPageNo] = useRecoilState(selectedPageNumberAdmin)
    return <button onClick={() => {
        setSelectedPageNo(1)
        setFilter(filter)
    }} className={`px-4 ${selected ? "bg-slate-300" : ""} hover:bg-slate-200 cursor-pointer py-2`}>
        {filter}
    </button>
}

