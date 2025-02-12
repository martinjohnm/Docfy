import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";
import { createBooking } from "../../controllers/user/booking.user";


const router = Router()


router.get("/get-all",userMiddleWare)
router.post("/create/:slotId", userMiddleWare ,createBooking)

export default router
