



export const weekdays : string[] = []
weekdays.push("Mon")
weekdays.push("Tue")
weekdays.push("Wed")
weekdays.push("Thu")
weekdays.push("Fri")
weekdays.push("Sat")
weekdays.push("Sun")

export const weekMap  = new Map<string, number>()
weekMap.set("Sun", 6),
weekMap.set("Mon", 0),
weekMap.set("Tue", 1)
weekMap.set("Wed", 2)
weekMap.set("Thu", 3)
weekMap.set("Fri", 4)
weekMap.set("Sat", 5)


export const timeSelector = new Map<string, number>()
timeSelector.set("0:00 AM", 0)
timeSelector.set("1:00 AM", 1)
timeSelector.set("2:00 AM", 2)
timeSelector.set("3:00 AM", 3)
timeSelector.set("4:00 AM", 4)
timeSelector.set("5:00 AM", 5)
timeSelector.set("6:00 AM", 6)
timeSelector.set("7:00 AM", 7)
timeSelector.set("8:00 AM", 8)
timeSelector.set("9:00 AM", 9)
timeSelector.set("10:00 AM", 10)
timeSelector.set("11:00 AM", 11)
timeSelector.set("12:00 PM", 12)
timeSelector.set("1:00 PM", 13)
timeSelector.set("2:00 PM", 14)
timeSelector.set("3:00 PM", 15)
timeSelector.set("4:00 PM", 16)
timeSelector.set("5:00 PM", 17)
timeSelector.set("6:00 PM", 18)
timeSelector.set("7:00 PM", 19)
timeSelector.set("8:00 PM", 20)
timeSelector.set("9:00 PM", 21)
timeSelector.set("10:00 PM", 22)
timeSelector.set("11:00 PM", 23)

export const timeOptions = [
    {label : "0:00 AM", value : 0},
    {label : "1:00 AM", value : 1},
    {label : "2:00 AM", value : 2},
    {label : "3:00 AM", value : 3},
    {label : "4:00 AM", value : 4},
    {label : "5:00 AM", value : 5},
    {label : "6:00 AM", value : 6},
    {label : "7:00 AM", value : 7},
    {label : "8:00 AM", value : 8},
    {label : "9:00 AM", value : 9},
    {label : "10:00 AM", value : 10},
    {label : "11:00 AM", value : 11},
    {label : "12:00 PM", value : 12},
    {label : "1:00 PM", value : 13},
    {label : "2:00 PM", value : 14},
    {label : "3:00 PM", value : 15},
    {label : "4:00 PM", value : 16},
    {label : "5:00 PM", value : 17},
    {label : "6:00 PM", value : 18},
    {label : "7:00 PM", value : 19},
    {label : "8:00 PM", value : 20},
    {label : "9:00 PM", value : 21},
    {label : "10:00 PM", value : 22},
    {label : "11:00 PM", value : 23}
]