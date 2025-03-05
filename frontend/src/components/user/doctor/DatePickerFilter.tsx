




import { addMonths, eachDayOfInterval, endOfMonth, format, isBefore, isSameDay, startOfDay, startOfMonth, subDays, subMonths } from "date-fns"
import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { weekdays, weekMap } from "../../../utils/dateTimeHelpers"
import { filteredDoctorStartOfPage, isDoctorDateToggleOpen, selectedDateForFilter } from "../../../store/atoms/user/doctorsState"






export const DatePickerFIlter = () => {

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useRecoilState<Date | null>(selectedDateForFilter)
    const [_dateFilterToggle, setDateFilterToggle] = useRecoilState(isDoctorDateToggleOpen)
    const setPageStart = useSetRecoilState(filteredDoctorStartOfPage)
    

    const handleToggle = () => {
        setDateFilterToggle(c => !c)
    }

    // Generate dates for current Month 
    const daysInMonth = eachDayOfInterval({
        start : startOfMonth(currentMonth),
        end : endOfMonth(currentMonth)
    })

    // Create some Blank divs for filling the start of the month in UI
    const divs: {id : number}[] = [];
    for (let i = 0; i < Number(weekMap.get(format(startOfMonth(currentMonth), "EE"))); i++) {
        divs.push({id : i});
    }

    // Change month
    const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));


    return (
        <div className="bg-slate-100 rounded-md p-4 w-96">
            
            <div className="w-full flex py-2">
                <div className="justify-center flex w-full">
                    <button onClick={handleToggle} className="text-sm bg-red-500 hover:bg-red-600 p-1 rounded-md">close</button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <button
                    className={`p-2 bg-blue-400 rounded hover:bg-blue-500 ${currentMonth <= new Date() ? "pointer-events-none cursor-not-allowed bg-gray-400" : ""}`}
                    onClick={goToPreviousMonth}
                    >
                    Previous
                </button>
                    <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
                <button
                    className={`p-2 bg-blue-400 rounded hover:bg-blue-500`}
                    onClick={goToNextMonth}
                >
                    Next
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
            {weekdays.map((weekday) => (
                <div key={weekday} className="py-2 rounded-lg text-center">
                {weekday}
                </div>
            ))}
            </div>
            
                <div className="grid grid-cols-7 gap-2" >
                
                {/* Blank divs */}
                {Array.from({ length: divs.length }).map((_, index) => (
          
                    <button key={index} className="bg-red-300"> 
                        hai
                    </button>
                ))}
                
                {daysInMonth.map((date) => (
                    isBefore(startOfDay(date), startOfDay(new Date())) ? (
                        <div className={`py-2 rounded-lg text-center relative bg-gray-300`}>
                          <div
                            key={date.toISOString()}
                            className="relative"
                          >
                            <div
                              className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-black rotate-12 -translate-x-1/2 -translate-y-1/2"
                            >
                            </div>
                            {format(date, "d")}
                          </div>
                        </div>
                    ) 
                      : (  !isSameDay(selectedDate ?? subDays(new Date(), 7), date) ? (
                            <button key={date.toISOString()} className={`py-2 w-full h-full rounded-lg text-center border border-black hover:bg-blue-300 cursor-pointer`}
                            onClick={() => {
                                setSelectedDate(date)
                                }}>
                                <div key={date.toISOString()}>
                                    {format(date, "d")}
                                </div>
                            </button>
                            ) : (
                                <div>
                                    <button key={date.toISOString()} className={`py-2 w-full h-full rounded-lg text-center border border-black hover:bg-blue-300 cursor-pointer bg-blue-500`}
                                        onClick={() => {
                                            setSelectedDate(date)
                                            setPageStart(0)
                                            }}>
                                            <div key={date.toISOString()}>
                                                {format(date, "d")}
                                            </div>
                                    </button>
                                </div>
                            )
                    )
                    
                ))}
            </div>
        </div>
    )
}