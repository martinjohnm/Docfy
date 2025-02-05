import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";
import { slotDoctorWise } from "../../controllers/user/slot.user";


const router = Router()

router.get("/get-by-doctor/:id", slotDoctorWise)

export default router
