






import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bookingsByAdminAtom, selectedBookingstypeTofetchAdmin, selectedPageNumberAdmin, totalNoOfBookingsAdmin } from "../../../store/atoms/admin/bookingsByAdminAtoms"
import { getAdminBookingsAll, getAdminBookingsCanceled, getAdminBookingsCompleted, getAdminBookingsUpcoming } from "../../../apis/admin/adminBookingsApi"



export const useGetBookingAdminPerPage = () => {

    const [allBookingsLoading, setLoading] = useState<boolean>(true)

    const setBookings = useSetRecoilState(bookingsByAdminAtom)
    const setBookingsCount = useSetRecoilState(totalNoOfBookingsAdmin)
    const selectedPageNo = useRecoilValue(selectedPageNumberAdmin)

    const filter = useRecoilValue(selectedBookingstypeTofetchAdmin)

    useEffect(() => {

        const getCategories = async ( ) => {

            const skip = selectedPageNo-1
            const take = 10
  
            if (filter == "all"){


                const bookings = await getAdminBookingsAll({skip, take})
                if (bookings.success) {
                    setBookings(bookings.data.bookings)
                    setBookingsCount(bookings.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    setLoading(false)
                }


            } else if (filter == "upcoming") {
                const bookings = await getAdminBookingsUpcoming({skip, take})
                if (bookings.success) {
                    setBookings(bookings.data.bookings)
                    setBookingsCount(bookings.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }

            else if (filter == "completed") {
                const bookings = await getAdminBookingsCompleted({skip, take})
                if (bookings.success) {
                    setBookings(bookings.data.bookings)
                    setBookingsCount(bookings.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }

            else if (filter == "canceled") {
                const bookings = await getAdminBookingsCanceled({skip, take})
                if (bookings.success) {
                    setBookings(bookings.data.bookings)
                    setBookingsCount(bookings.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }

            
        }

        getCategories()

    }, [selectedPageNo])

    return {allBookingsLoading}
}