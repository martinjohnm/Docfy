import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";
import { cancelBookingByBookingId, createBooking, getAllBookingsForUser, getBookingById, getBookingsCompleted, getBookingsUpcoming, getCancelledBooking } from "../../controllers/user/booking.user";


const router = Router()


router.get("/get-all",userMiddleWare, getAllBookingsForUser)
router.get("/get-all-upcoming",userMiddleWare, getBookingsUpcoming)
router.get("/get-all-completed",userMiddleWare, getBookingsCompleted)
router.get("/get-all-cancelled",userMiddleWare, getCancelledBooking)
router.get("/get-by-id", getBookingById)

router.post("/create/:slotId", userMiddleWare ,createBooking)
router.put("/cancel-booking/:id", cancelBookingByBookingId)

export default router
