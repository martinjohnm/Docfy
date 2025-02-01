




import { Router } from "express";
import { createSlot } from "../../controllers/doctor/slot.doctor";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";


const router = Router()


router.post("/create",doctorMiddleWare,createSlot)

export default router