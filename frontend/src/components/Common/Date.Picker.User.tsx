import { addMonths, eachDayOfInterval, endOfMonth, format, isSameDay, startOfMonth, subMonths } from "date-fns"
import { useState } from "react"
import { weekdays, weekMap } from "../../utils/dateTimeHelpers"






export const DatePickerUser = ({onSelectedDateChANGE} : {onSelectedDateChANGE : any}) => {

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date>(new Date)


    // Generate dates for current Month 
    const daysInMonth = eachDayOfInterval({
        start : startOfMonth(currentMonth),
        end : endOfMonth(currentMonth)
    })

    // Create some Blank divs for filling the start of the month in UI
    const divs: JSX.Element[] = [];
    for (let i = 0; i < Number(weekMap.get(format(startOfMonth(currentMonth), "EE"))); i++) {
        divs.push(<div key={i}></div>);
    }

    // Change month
    const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    // Select day Function

    const selectDay = ({date} : {date : Date}) => {
        setSelectedDate(date)
        onSelectedDateChANGE(date)
    }



    return (
        <div className="max-w-lg">
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
            
            <div className="grid grid-cols-7 gap-2">
                 {/* Blank divs */}
                {divs.map((div) => (
                    div
                ))}
                
                {daysInMonth.map((date) => (
                    <button className={`py-2 rounded-lg text-center hover:bg-blue-500 cursor-pointer ${isSameDay(date, selectedDate) ? "bg-blue-500" : "bg-gray-300"}`}
                    onClick={() => {
                        selectDay({date})
                        }}>
                        <div key={date.toISOString()}>
                            {format(date, "d")}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}