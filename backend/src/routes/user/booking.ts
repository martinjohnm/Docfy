import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";
import { createBooking, getAllBookingsForUser, getBookingsCompleted, getBookingsUpcoming } from "../../controllers/user/booking.user";


const router = Router()


router.get("/get-all",userMiddleWare, getAllBookingsForUser)
router.get("/get-all-upcoming",userMiddleWare, getBookingsUpcoming)
router.get("/get-all-completed",userMiddleWare, getBookingsCompleted)
router.post("/create/:slotId", userMiddleWare ,createBooking)

export default router
