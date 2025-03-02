import { useRecoilState } from "recoil"
import { isDoctorDateToggleOpen, selectedDateForFilter } from "../../../store/atoms/user/doctorsState"
import { DatePickerFIlter } from "./DatePickerFilter"
import { format } from "date-fns"




export const DoctorsDateSelector = () => {

    const [dateFilterToggle, setDateFilterToggle] = useRecoilState(isDoctorDateToggleOpen)
    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateForFilter)
    
    const value = selectedDate ? format(selectedDate, "dd MMMM yyyy") : ""

    const toggleDateSelector = () => {
        setDateFilterToggle(c => !c)
    }

    return (    
    <div className='justify-center items-center p-2'> 

        <div className="flex">
            <input value={value} onClick={toggleDateSelector} placeholder="Select date" className="border border-gray-300 bg-white text-black outline-none text-sm rounded-lg w-96 p-2">

            </input>

            {value && (
                <button
                onClick={() => {
                    setSelectedDate(null)
                }}
                className=" text-gray-500 hover:text-black"
                >
                ✖
                </button>
            )}
        </div>
        
        <div className={`${dateFilterToggle ? "visible" : "hidden"} absolute`}>
            <DatePickerFIlter/>
        </div>
            
    </div>)
}